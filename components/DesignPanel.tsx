'use client';

interface DesignCard {
  thumb: 'sage' | 'dark' | 'brand';
  label: string;
  title: string;
  meta: string;
  signal: string;
}

const cards: DesignCard[] = [
  {
    thumb: 'sage',
    label: 'Lotus Store Components',
    title: 'Lotus — Accessible Shopify UI',
    meta: 'Shopify Liquid · WCAG 2.2 AA',
    signal: '10',
  },
  {
    thumb: 'dark',
    label: 'NestQuest Real Estate',
    title: 'NestQuest — Property Search UI',
    meta: 'Next.js · Tailwind · Accessible',
    signal: '11',
  },
  {
    thumb: 'brand',
    label: 'Equa Theme Preview',
    title: 'Equa — Shopify Theme Design',
    meta: 'Figma · Shopify · WCAG',
    signal: '12',
  },
  {
    thumb: 'sage',
    label: 'Rheumatology Clinic',
    title: 'Healthcare Website — 36 Pages',
    meta: 'WordPress · Elementor · WCAG 2.2',
    signal: '13',
  },
  {
    thumb: 'dark',
    label: 'Bihub Dashboard',
    title: 'Bihub Technology — Dashboard UI',
    meta: 'React · Design System',
    signal: '14',
  },
  {
    thumb: 'brand',
    label: 'Add your design',
    title: 'Your Next Project',
    meta: 'Coming soon',
    signal: '15',
  },
];

export default function DesignPanel() {
  return (
    <section className="section" aria-labelledby="design-heading">
      <p className="eyebrow">Design</p>
      <h2 className="heading" id="design-heading">How I think visually.</h2>

      <div className="design-grid">
        {cards.map((card) => (
          <div key={card.title} className="design-card" data-signal={card.signal}>
            {/*
              SWAP: <Image src="/designs/lotus-shopify.png"
                           alt="Lotus Shopify accessible components"
                           width={640} height={400} />
            */}
            <div className={`design-thumb design-thumb--${card.thumb}`}>
              {card.label}
            </div>
            <div className="design-info">
              <p className="design-title">{card.title}</p>
              <p className="design-meta">{card.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
