'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { stages } from '@/lib/journeyStages';

export default function AccessibilityJourney() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [dotLeft, setDotLeft] = useState('8px');
  const [lineWidth, setLineWidth] = useState('0%');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    if (mq.matches) {
      setCurrent(stages.length - 1);
      setPlaying(false);
    }
  }, []);

  const updateDotPosition = useCallback((idx: number) => {
    requestAnimationFrame(() => {
      const track = trackRef.current;
      const node = nodeRefs.current[idx];
      if (!track || !node) return;
      const trackRect = track.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      const pct =
        ((nodeRect.left + nodeRect.width / 2) - trackRect.left) / trackRect.width * 100;
      setDotLeft(`${pct}%`);
      setLineWidth(`${pct}%`);
    });
  }, []);

  useEffect(() => {
    updateDotPosition(current);
  }, [current, updateDotPosition]);

  useEffect(() => {
    if (reduced) return;
    if (playing) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % stages.length);
      }, 2600);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, reduced]);

  const jumpTo = (idx: number) => {
    setCurrent(idx);
  };

  const togglePlaying = () => {
    setPlaying((p) => !p);
  };

  return (
    <div className="a11y-journey" aria-label="Accessibility workflow journey for Lotus">
      <p className="journey-label">Accessibility workflow</p>

      <div ref={trackRef} className="journey-track" role="list" aria-label="Journey stages">
        <div
          className="journey-progress-line"
          style={{ width: lineWidth }}
          aria-hidden="true"
        />
        <div
          className="journey-dot"
          style={{ left: dotLeft }}
          aria-hidden="true"
        />

        {stages.map((stage, i) => (
          <button
            key={stage.label}
            ref={(el) => { nodeRefs.current[i] = el; }}
            className={`journey-node${i === current ? ' active' : i < current ? ' passed' : ''}`}
            role="listitem"
            aria-label={`Stage ${i + 1}: ${stage.label}${i === current ? ' (current)' : ''}`}
            onClick={() => jumpTo(i)}
          >
            <div className="journey-node-dot" aria-hidden="true">
              {i === 0 && (
                <svg
                  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0 }}
                  viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="8" height="8"
                >
                  <circle cx="12" cy="4" r="2" />
                  <path d="M19 13v-2h-6l-2-4H9a2 2 0 00-2 2v6h2v5h2v-5h2l2 4h2l-2-4h2v-2h-2z" />
                </svg>
              )}
            </div>
            <span className="journey-node-label">{stage.label}</span>
          </button>
        ))}
      </div>

      <div
        className="journey-tooltip"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="journey-tooltip-title">{stages[current].title}</p>
        <p className="journey-tooltip-desc">{stages[current].desc}</p>
      </div>

      {!reduced && (
        <button
          className="journey-control"
          onClick={togglePlaying}
          aria-label={playing ? 'Pause journey animation' : 'Resume journey animation'}
        >
          {playing ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
              Pause
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Resume
            </>
          )}
        </button>
      )}
    </div>
  );
}
