'use client';

interface Skill {
  name: string;
  detail: string;
  years: string;
  category: 'core' | 'tech' | 'design';
}

const skills: Skill[] = [
  { name: 'WCAG 2.2 AA',            detail: 'Full compliance auditing',       years: '3+', category: 'core'   },
  { name: 'ARIA',                    detail: 'Semantic landmark authoring',    years: '3+', category: 'core'   },
  { name: 'Screen Reader Testing',   detail: 'NVDA · VoiceOver · JAWS',       years: '2+', category: 'core'   },
  { name: 'PDF/UA',                  detail: 'Document accessibility',        years: '2+', category: 'core'   },
  { name: 'axe DevTools',            detail: 'Automated + manual audits',     years: '2+', category: 'core'   },
  { name: 'HTML / CSS',              detail: 'Semantic, accessible markup',   years: '5+', category: 'tech'   },
  { name: 'Shopify Liquid',          detail: 'Accessible theme dev',          years: '3+', category: 'tech'   },
  { name: 'ReactJS',                 detail: 'Component systems',             years: '4+', category: 'tech'   },
  { name: 'Next.js',                 detail: 'App Router, SSR',               years: '2+', category: 'tech'   },
  { name: 'Inclusive Design',        detail: 'Disability-first methodology',  years: '3+', category: 'design' },
  { name: 'User Research',           detail: 'Usability testing & analysis',  years: '3+', category: 'design' },
  { name: 'Figma',                   detail: 'Design systems & annotation',   years: '3+', category: 'design' },
];

const categoryMeta: Record<Skill['category'], { label: string; color: string }> = {
  core:   { label: 'Accessibility Core', color: 'var(--brand)'  },
  tech:   { label: 'Development',        color: 'var(--sage)'   },
  design: { label: 'Design & Research',  color: 'var(--muted)'  },
};

export default function SkillsSection() {
  return (
    <section className="section section--alt" aria-labelledby="skills-heading" data-signal="30">
      <p className="eyebrow">Skills</p>
      <h2 className="heading" id="skills-heading">What I bring to the table.</h2>

      <div className="skills-grid">
        {skills.map((skill) => {
          const meta = categoryMeta[skill.category];
          return (
            <article key={skill.name} className="skill-card" data-category={skill.category}>
              <span
                className="skill-card__bar"
                style={{ background: meta.color }}
                aria-hidden="true"
              />
              <div className="skill-card__top">
                <p className="skill-card__name">{skill.name}</p>
                <span
                  className="skill-card__years"
                  aria-label={`${skill.years} years experience`}
                  style={{ color: meta.color }}
                >
                  {skill.years} yrs
                </span>
              </div>
              <p className="skill-card__detail">{skill.detail}</p>
            </article>
          );
        })}
      </div>

      <div className="skills-legend" role="list" aria-label="Skill category legend">
        {(Object.entries(categoryMeta) as [Skill['category'], typeof categoryMeta['core']][]).map(
          ([key, { label, color }]) => (
            <span key={key} className="skills-legend__item" role="listitem">
              <span
                className="skills-legend__dot"
                style={{ background: color }}
                aria-hidden="true"
              />
              {label}
            </span>
          )
        )}
      </div>
    </section>
  );
}
