'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface Trait {
  name: string;
  value: number;
  signal: string;
}

const traits: Trait[] = [
  { name: 'Conscientiousness', value: 92, signal: '20' },
  { name: 'Motivation',        value: 82, signal: '21' },
  { name: 'Patience',          value: 95, signal: '22' },
  { name: 'Cooperativeness',   value: 88, signal: '23' },
  { name: 'Achievement',       value: 78, signal: '24' },
  { name: 'Openness',          value: 70, signal: '25' },
];

export default function TheHuman() {
  const [barsGo, setBarsGo] = useState(false);
  const [reduced, setReduced] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setBarsGo(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const radarData = {
    labels: [
      'Achievement',
      'Motivation',
      'Conscientiousness',
      'Cooperativeness',
      'Patience',
      'Openness',
      'Self-Confidence',
      'Assertiveness',
    ],
    datasets: [
      {
        label: 'Bryan',
        data: [78, 82, 92, 88, 95, 70, 62, 38],
        backgroundColor: 'rgba(201,100,66,0.12)',
        borderColor: '#c96442',
        borderWidth: 2,
        pointBackgroundColor: '#c96442',
        pointBorderColor: '#faf6ef',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'General population',
        data: [60, 60, 60, 60, 60, 60, 60, 60],
        backgroundColor: 'transparent',
        borderColor: '#dedad0',
        borderWidth: 1.5,
        borderDash: [4, 4],
        pointRadius: 0,
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    animation: { duration: reduced ? 0 : 900 },
    plugins: {
      legend: {
        labels: {
          font: { family: 'Inclusive Sans', size: 12 },
          color: '#7c7a72',
          usePointStyle: true,
          padding: 16,
        },
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: { display: false },
        grid: { color: '#dedad0' },
        angleLines: { color: '#dedad0' },
        pointLabels: {
          font: { family: 'Inclusive Sans', size: 11 },
          color: '#3e3c36',
        },
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="section section--alt"
      id="human"
      aria-labelledby="human-heading"
    >
      <p className="eyebrow">The Human</p>
      <h2 className="heading" id="human-heading">More than a set of skills.</h2>

      <div className="human-grid">
        <div className="human-text">
          <p>
            I completed a workplace behavioural assessment during a professional hiring process.
            Instead of hiding the results — I&apos;m sharing them.
            Transparency is an accessibility value too.
          </p>
          <p>
            Highly conscientious. Goal-driven when the target is clear. Patient under pressure.
            Introverted — but building in public anyway. That tension is the work.
          </p>

          <div className="traits" role="list" aria-label="Workplace trait scores">
            {traits.map((t) => (
              <div key={t.name} className="trait" role="listitem" data-signal={t.signal}>
                <p className="trait-name">{t.name}</p>
                <div className="trait-track">
                  <div
                    className={`trait-bar${barsGo ? ' go' : ''}`}
                    style={{ ['--w' as string]: `${t.value}%` }}
                    role="meter"
                    aria-valuenow={t.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${t.name}: ${t.value}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="radar-wrap" data-signal="26">
          <Radar
            data={radarData}
            options={radarOptions}
            role="img"
            aria-label="Radar chart of workplace personality traits compared to general population"
          />
          <p className="radar-note">
            Workplace behavioural profile — professional hiring assessment.
          </p>
        </div>
      </div>
    </section>
  );
}
