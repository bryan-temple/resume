'use client';

import Image from 'next/image';

const skills = [
  'WCAG 2.2 AA',
  'Shopify Liquid',
  'React / Next.js',
  'ARIA',
  'axe DevTools',
  'NVDA / VoiceOver',
  'PDF/UA',
  'Figma',
  'WordPress',
];

export default function ResumePanel() {
  return (
    <section className="section" aria-labelledby="resume-heading">
      <p className="eyebrow">Resume / CV</p>
      <h2 className="heading" id="resume-heading">The full picture.</h2>

      <div className="resume-wrap">
        {/* Preview */}
        <div className="resume-preview" data-signal="27">
          <div className="resume-header">
            <div className="resume-photo-circle">
              {/* SWAP: <Image src="/bryantemple.png" alt="" aria-hidden="true" ... /> */}
              <Image
                src="/bryantemple.png"
                alt=""
                aria-hidden="true"
                width={56}
                height={56}
                style={{ objectFit: 'cover', borderRadius: '50%' }}
                unoptimized
              />
            </div>
            <div>
              <p className="resume-name">Bryan Temple Onyenghan</p>
              <p className="resume-role">Accessibility Specialist · Frontend Developer · CPACC</p>
            </div>
          </div>

          <div className="resume-body">
            <div className="resume-section">
              <p className="resume-section-title">Experience</p>
              <div className="resume-item">
                <p className="resume-item-title">Accessibility Engineer — Lotus Inc.</p>
                <p className="resume-item-sub">2023–Present · Remote · TIME Magazine Best Invention company</p>
              </div>
              <div className="resume-item">
                <p className="resume-item-title">Frontend Developer — Bihub Technology</p>
                <p className="resume-item-sub">2023–Present · Freelance · Accessibility-first builds</p>
              </div>
            </div>

            <div className="resume-section">
              <p className="resume-section-title">Certifications</p>
              <div className="resume-item">
                <p className="resume-item-title">CPACC — Certified Professional in Accessibility Core Competencies</p>
                <p className="resume-item-sub">IAAP · International Association of Accessibility Professionals</p>
              </div>
            </div>

            <div className="resume-section">
              <p className="resume-section-title">Core Skills</p>
              <div className="resume-skills">
                {skills.map((s) => (
                  <span key={s} className="resume-skill">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="resume-actions">
          <h3>Download the full CV</h3>
          <p>
            The full resume includes case study metrics, certifications, and a complete
            project history. Available as a PDF — ready to send.
          </p>
          <a
            className="btn btn--download"
            href="/Bryan_Onyenghan_PM-Resume.docx"
            download
            aria-label="Download Bryan Temple CV"
          >
            <svg
              width="16" height="16" viewBox="0 0 16 16"
              fill="none" stroke="currentColor" strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M8 2v8M5 7l3 3 3-3" />
              <rect x="2" y="11" width="12" height="3" rx="1" />
            </svg>
            Download CV
          </a>
          <a
            className="btn btn--ghost"
            href="https://www.linkedin.com/in/bryanonyenghan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Bryan Temple on LinkedIn"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
