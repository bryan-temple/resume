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
  { name: 'Patience',          value: 95, signal: '22' },
  { name: 'Cooperativeness',   value: 88, signal: '23' },
  { name: 'Motivation',        value: 82, signal: '21' },
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
    if (mq.matches) {
      setBarsGo(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setBarsGo(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 },
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
    maintainAspectRatio: true,
    animation: { duration: reduced ? 0 : 900 },
    plugins: {
      legend: {
        labels: {
          font: { family: 'Inclusive Sans', size: 12 },
          color: '#3e3c36',
          usePointStyle: true,
          padding: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx: { dataset: { label?: string }; parsed: { r?: number } }) =>
            `${ctx.dataset.label}: ${ctx.parsed.r ?? ''}`,
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
      <h2 className="heading" id="human-heading">The person doing the work.</h2>

      <div className="human-grid">

        {/* Left — text + trait bars */}
        <div className="human-text">
          <p>
            A hiring process asked me to complete a behavioural assessment.
            Most people file it away. I&apos;m putting it on my portfolio — because if
            you&apos;re trusting me to build something that works for everyone, you
            should know who you&apos;re working with.
          </p>
          <p>
            High patience doesn&apos;t come from personality — it comes from doing screen reader
            testing for hours, finding what automated tools never will.
            High conscientiousness means I don&apos;t ship until I&apos;m certain.
            Low assertiveness means I ask more questions than I give opinions.
            That is how accessible products actually get built.
          </p>
          <p>
            Built in Nigeria. Working globally. The gap between a WCAG pass
            and a genuinely usable product is where I live.
          </p>

          <h3 className="human-traits-heading">Workplace behavioural profile</h3>

          <div className="traits" role="list" aria-label="Workplace trait scores from professional hiring assessment">
            {traits.map((t) => (
              <div key={t.name} className="trait" role="listitem" data-signal={t.signal}>
                <div className="trait-header">
                  <p className="trait-name">{t.name}</p>
                  <span className="trait-value" aria-hidden="true">{t.value}</span>
                </div>
                <div className="trait-track">
                  <div
                    className={`trait-bar${barsGo ? ' go' : ''}`}
                    style={{ ['--w' as string]: `${t.value}%` }}
                    role="meter"
                    aria-valuenow={t.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${t.name}: ${t.value} out of 100`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — radar chart */}
        <div className="radar-wrap" data-signal="26">
          <Radar
            data={radarData}
            options={radarOptions}
            role="img"
            aria-label="Radar chart: Bryan scores above the general population in Conscientiousness (92), Patience (95), Cooperativeness (88), and Motivation (82). Below average in Assertiveness (38)."
          />
          {/* Screen-reader-accessible data table */}
          <table className="sr-only">
            <caption>Workplace behavioural trait scores compared to general population</caption>
            <thead>
              <tr><th>Trait</th><th>Bryan</th><th>General population</th></tr>
            </thead>
            <tbody>
              {radarData.labels.map((label, i) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{radarData.datasets[0].data[i]}</td>
                  <td>60</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="radar-note">
            Behavioural assessment from a professional hiring process.
            Compared to the general working population.
          </p>
        </div>

      </div>
    </section>
  );
}
