'use client';

import Image from 'next/image';

export type TabId = 'work' | 'design' | 'video' | 'human' | 'resume';

interface SidebarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

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
];

const aboutItems: { tab: TabId; label: string; icon: React.ReactNode }[] = [
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

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Site navigation">
      <a className="sidebar__logo" href="/" aria-label="Bryan Temple — Home">
        <div className="sidebar__logo-mark" aria-hidden="true">
          <Image
            src="/Braye1020.png"
            alt=""
            width={38}
            height={38}
            style={{ objectFit: 'contain' }}
            unoptimized
          />
        </div>
        <div className="sidebar__logo-name">Bryan Temple</div>
        <div className="sidebar__logo-role">Accessibility Specialist</div>
      </a>

      <nav className="sidebar__nav" aria-label="Main">
        <p className="sidebar__label">Portfolio</p>
        <ul role="list">
          {navItems.map(({ tab, label, icon }) => (
            <li key={tab}>
              <button
                onClick={() => onTabChange(tab)}
                className={activeTab === tab ? 'active' : ''}
                aria-current={activeTab === tab ? 'page' : undefined}
              >
                {icon}
                {label}
              </button>
            </li>
          ))}
        </ul>

        <p className="sidebar__label" style={{ marginTop: 24 }}>About</p>
        <ul role="list">
          {aboutItems.map(({ tab, label, icon }) => (
            <li key={tab}>
              <button
                onClick={() => onTabChange(tab)}
                className={activeTab === tab ? 'active' : ''}
                aria-current={activeTab === tab ? 'page' : undefined}
              >
                {icon}
                {label}
              </button>
            </li>
          ))}
          <li>
            <a href="#contact">
              <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" />
                <path d="M1.5 5.5l6.5 4 6.5-4" />
              </svg>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="sidebar__bottom">
        <div className="sidebar__status">
          <span className="status-dot" aria-hidden="true" />
          Available for work
        </div>
        <a className="sidebar__cta" href="https://www.linkedin.com/in/bryan-temple/" target="_blank" rel="noopener noreferrer">
          Let&apos;s talk
        </a>
      </div>
    </aside>
  );
}
