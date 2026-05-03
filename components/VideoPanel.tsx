'use client';

interface VideoCard {
  href?: string;
  thumbBg: string;
  playBg: string;
  label: string;
  title: string;
  signal: string;
  isExternal?: boolean;
}

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const cards: VideoCard[] = [
  {
    href: 'https://youtu.be/GHIPfDb-08g',
    thumbBg: 'linear-gradient(135deg,#1c2820 0%,#0e1f1a 100%)',
    playBg: 'rgba(201,100,66,0.9)',
    label: 'YouTube · AI Development',
    title: 'How I Vibe-Coded a Live Website as a Complete Beginner',
    signal: '16',
    isExternal: true,
  },
  {
    thumbBg: 'linear-gradient(135deg,#1c2820 0%,#0e1f1a 100%)',
    playBg: 'rgba(58,122,106,0.8)',
    label: 'Screen Record · Accessibility',
    title: 'Lotus Store — Accessibility Walkthrough',
    signal: '17',
  },
  {
    thumbBg: 'linear-gradient(135deg,#2a1a10 0%,#1a0f08 100%)',
    playBg: 'rgba(201,100,66,0.7)',
    label: 'Screen Record · WCAG Audit',
    title: 'Live WCAG 2.2 Audit — axe DevTools + NVDA',
    signal: '18',
  },
  {
    thumbBg: 'linear-gradient(135deg,#1a1a2e 0%,#0f0f1a 100%)',
    playBg: 'rgba(90,90,180,0.8)',
    label: 'Screen Record · Claude Code',
    title: 'NestQuest — Full Claude Code Build',
    signal: '19',
  },
];

export default function VideoPanel() {
  return (
    <section className="section" aria-labelledby="video-heading">
      <p className="eyebrow">Video</p>
      <h2 className="heading" id="video-heading">Showing the work live.</h2>

      <div className="video-grid">
        {cards.map((card) => {
          const Tag = card.href ? 'a' : 'div';
          const extraProps = card.href
            ? {
                href: card.href,
                target: '_blank',
                rel: 'noopener noreferrer',
                'aria-label': `${card.title} — opens YouTube`,
              }
            : {
                'aria-label': `${card.title} — coming soon`,
              };

          return (
            <Tag
              key={card.title}
              className="video-card"
              data-signal={card.signal}
              {...(extraProps as Record<string, string>)}
            >
              <div className="video-thumb" aria-hidden="true">
                <div className="video-thumb-bg" style={{ background: card.thumbBg }} />
                <div className="video-thumb-grid" />
                <div className="play-btn" style={{ background: card.playBg }}>
                  <PlayIcon />
                </div>
              </div>
              <div className="video-info">
                <p className="video-label">{card.label}</p>
                <p className="video-title">{card.title}</p>
              </div>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
