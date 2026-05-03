'use client';

import { useEffect, useRef } from 'react';
import AccessibilityJourney from './AccessibilityJourney';

interface CaseCard {
  label: string;
  title: string;
  desc: string;
  metric: string;
  signal: string;
}

const regularCases: CaseCard[] = [
  {
    label: 'Next.js · Claude Code · Vercel',
    title: 'NestQuest – AI-Assisted Build',
    desc: 'Live real estate demo built from prompt to deployment in hours. Published on YouTube as a beginner resource.',
    metric: 'Live – bihub-homes.vercel.app',
    signal: '3',
  },
  {
    label: 'Shopify · Accessible Theme',
    title: 'Equa – WCAG-Ready Shopify Theme',
    desc: 'A Shopify theme built accessible from line one. Every component keyboard-operable and WCAG 2.2 AA verified.',
    metric: 'Coming soon – Bihub Technology',
    signal: '4',
  },
];

export default function CaseStudies() {
  const cardsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const cards = cardsRef.current;

    const handleMouseMove = (card: HTMLElement) => (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * 9}deg) rotateX(${-y * 7}deg) translateZ(10px)`;
      card.style.boxShadow = `${-x * 24}px ${y * 24}px 48px rgba(28,26,22,0.14)`;
    };

    const handleMouseLeave = (card: HTMLElement) => () => {
      card.style.transition = 'transform 0.55s ease, box-shadow 0.55s ease';
      card.style.transform = '';
      card.style.boxShadow = '';
      setTimeout(() => { card.style.transition = ''; }, 560);
    };

    const listeners: { card: HTMLElement; mm: (e: MouseEvent) => void; ml: () => void }[] = [];
    cards.forEach((card) => {
      if (!card) return;
      const mm = handleMouseMove(card);
      const ml = handleMouseLeave(card);
      card.addEventListener('mousemove', mm);
      card.addEventListener('mouseleave', ml);
      listeners.push({ card, mm, ml });
    });

    return () => {
      listeners.forEach(({ card, mm, ml }) => {
        card.removeEventListener('mousemove', mm);
        card.removeEventListener('mouseleave', ml);
      });
    };
  }, []);

  return (
    <section
      className="section"
      id="work"
      aria-labelledby="work-heading"
      data-signal="1"
    >
      <p className="eyebrow">Selected Work</p>
      <h2 className="heading" id="work-heading">Results. Not pitch decks.</h2>

      <div className="cases">
        {/* Featured card: Lotus */}
        <article
          className="case case--featured"
          tabIndex={0}
          data-signal="2"
          aria-label="Lotus Inc. case study"
          ref={(el) => { if (el) cardsRef.current[0] = el; }}
        >
          <div>
            <span className="case-label">Shopify · WCAG 2.2 AA · Assistive Tech</span>
            <h3 className="case-title" style={{ marginTop: 14 }}>
              Lotus Inc.<br />Accessibility Engineering
            </h3>
            <p className="case-desc" style={{ marginTop: 10 }}>
              Accessible Shopify components for a TIME Magazine Best Invention company.
              Video gallery, tooltips, hero sections – keyboard and screen reader operable across 30+ locales.
            </p>
            <p className="case-metric">
              100% PDF/UA · 163 tags · 335 alt descriptions · 0 failures
            </p>
          </div>
          <AccessibilityJourney />
        </article>

        {/* Regular cards */}
        {regularCases.map((c, i) => (
          <article
            key={c.title}
            className="case"
            tabIndex={0}
            data-signal={c.signal}
            aria-label={`${c.title} case study`}
            ref={(el) => { if (el) cardsRef.current[i + 1] = el; }}
          >
            <span className="case-label">{c.label}</span>
            <h3 className="case-title">{c.title}</h3>
            <p className="case-desc">{c.desc}</p>
            <p className="case-metric">{c.metric}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
