'use client';

const credentials = [
  'CPACC Certified',
  'WCAG 2.2 AA',
  'Accessible Shopify',
  'TIME Magazine Client',
  'Built in Nigeria',
  'For the World',
];

export default function Marquee() {
  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {/* Primary set */}
        {credentials.map((text, i) => (
          <span key={`a-${i}`} className="marquee-item">
            <span className="marquee-sep" aria-hidden="true" />
            {text}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {credentials.map((text, i) => (
          <span key={`b-${i}`} className="marquee-item" aria-hidden="true">
            <span className="marquee-sep" aria-hidden="true" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
