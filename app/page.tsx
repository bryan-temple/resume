'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Sidebar, { type TabId } from '@/components/Sidebar';
import Marquee from '@/components/Marquee';
import SignalBar from '@/components/SignalBar';
import Hero from '@/components/Hero';
import CaseStudies from '@/components/CaseStudies';
import Writing from '@/components/Writing';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import SkillsSection from '@/components/SkillsSection';
import DesignPanel from '@/components/DesignPanel';
import VideoPanel from '@/components/VideoPanel';
import TheHuman from '@/components/TheHuman';
import ResumePanel from '@/components/ResumePanel';

const navItems: { tab: TabId; label: string; icon: React.ReactNode }[] = [
  {
    tab: 'work',
    label: 'Work',
    icon: (
      <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="3" width="5" height="5" rx="1" />
        <rect x="9" y="3" width="5" height="5" rx="1" />
        <rect x="2" y="10" width="5" height="5" rx="1" />
        <rect x="9" y="10" width="5" height="5" rx="1" />
      </svg>
    ),
  },
  {
    tab: 'design',
    label: 'Design',
    icon: (
      <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="1.5" y="1.5" width="13" height="10" rx="1.5" />
        <path d="M5 14.5h6M8 11.5v3" />
      </svg>
    ),
  },
  {
    tab: 'video',
    label: 'Video',
    icon: (
      <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="1.5" y="3.5" width="9" height="9" rx="1.5" />
        <path d="M10.5 6l4-2v8l-4-2" />
      </svg>
    ),
  },
  {
    tab: 'human',
    label: 'The Human',
    icon: (
      <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="8" cy="5" r="2.5" />
        <path d="M2.5 14c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      </svg>
    ),
  },
  {
    tab: 'resume',
    label: 'Resume / CV',
    icon: (
      <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="1.5" width="10" height="13" rx="1.5" />
        <path d="M5.5 5h5M5.5 8h5M5.5 11h3" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabId>('work');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    setDrawerOpen(false);
    window.scrollTo(0, 0);
  };

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  // Scroll-reveal: re-run whenever the active panel changes
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const panel = document.getElementById(`panel-${activeTab}`);
    if (!panel) return;

    const targets = Array.from(panel.querySelectorAll<HTMLElement>('.section, .signal-bar, .marquee-wrapper'));

    // Reset so switching tabs re-animates the incoming panel
    targets.forEach((el) => {
      el.classList.remove('is-visible');
      el.setAttribute('data-reveal', 'true');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' },
    );

    // Small delay so the panel's display:block has taken effect
    const id = setTimeout(() => targets.forEach((el) => observer.observe(el)), 60);

    return () => {
      clearTimeout(id);
      observer.disconnect();
    };
  }, [activeTab]);

  return (
    <>
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Mobile top bar */}
      <div className="mobile-bar">
        <span className="mobile-bar__name">Bryan Temple</span>
        <button
          className="hamburger"
          aria-label={drawerOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
          onClick={() => setDrawerOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`mobile-drawer${drawerOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <div
          className="mobile-drawer__overlay"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
        <div className="mobile-drawer__panel">
          <div className="sidebar__logo" style={{ marginBottom: 32 }}>
            <div className="sidebar__logo-mark" aria-hidden="true">
              <Image src="/Braye1020.png" alt="" width={38} height={38} style={{ objectFit: 'contain' }} unoptimized />
            </div>
            <div className="sidebar__logo-name">Bryan Temple</div>
            <div className="sidebar__logo-role">Accessibility Specialist</div>
          </div>

          <nav aria-label="Mobile navigation">
            <ul role="list" style={{ listStyle: 'none' }}>
              {navItems.map(({ tab, label, icon }) => (
                <li key={tab} style={{ marginBottom: 2 }}>
                  <button
                    onClick={() => handleTabChange(tab)}
                    className={`sidebar__nav-btn${activeTab === tab ? ' active' : ''}`}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '9px 10px', borderRadius: 8,
                      fontSize: 13, color: activeTab === tab ? 'var(--on-dark)' : 'var(--on-dark-dim)',
                      background: activeTab === tab ? 'rgba(255,255,255,0.07)' : 'transparent',
                      border: 'none', width: '100%', cursor: 'pointer',
                      position: 'relative', minHeight: 44, fontFamily: 'var(--font-body)',
                    }}
                    aria-current={activeTab === tab ? 'page' : undefined}
                  >
                    {activeTab === tab && (
                      <span style={{
                        position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                        width: 3, height: 18, background: 'var(--brand)', borderRadius: '0 2px 2px 0',
                      }} aria-hidden="true" />
                    )}
                    {icon}
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="sidebar__status">
              <span className="status-dot" aria-hidden="true" />
              Available for work
            </div>
            <a className="sidebar__cta" href="https://www.linkedin.com/in/bryanonyenghan" target="_blank" rel="noopener noreferrer">
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>

      <main className="main-wrap" id="main">
        <Marquee />
        <SignalBar />

        {/* Work Panel */}
        <div
          className={`panel${activeTab === 'work' ? ' active' : ''}`}
          id="panel-work"
          role="tabpanel"
          aria-label="Work panel"
        >
          <Hero />
          <CaseStudies />
          <SkillsSection />
          <Writing />
          <ContactCTA />
          <Footer />
        </div>

        {/* Design Panel */}
        <div
          className={`panel${activeTab === 'design' ? ' active' : ''}`}
          id="panel-design"
          role="tabpanel"
          aria-label="Design panel"
        >
          <DesignPanel />
          <Footer />
        </div>

        {/* Video Panel */}
        <div
          className={`panel${activeTab === 'video' ? ' active' : ''}`}
          id="panel-video"
          role="tabpanel"
          aria-label="Video panel"
        >
          <VideoPanel />
          <Footer />
        </div>

        {/* The Human Panel */}
        <div
          className={`panel${activeTab === 'human' ? ' active' : ''}`}
          id="panel-human"
          role="tabpanel"
          aria-label="The Human panel"
        >
          <TheHuman />
          <Footer />
        </div>

        {/* Resume Panel */}
        <div
          className={`panel${activeTab === 'resume' ? ' active' : ''}`}
          id="panel-resume"
          role="tabpanel"
          aria-label="Resume and CV panel"
        >
          <ResumePanel />
          <Footer />
        </div>
      </main>
    </>
  );
}
