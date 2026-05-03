'use client';

const groups = [
  {
    label: 'Accessibility & Design',
    accent: 'var(--brand)',
    skills: [
      { name: 'Accessibility',    years: '3+ yrs' },
      { name: 'Inclusive Design', years: '3+ yrs' },
      { name: 'User Research',    years: '3+ yrs' },
    ],
  },
  {
    label: 'Development',
    accent: 'var(--sage)',
    skills: [
      { name: 'HTML / CSS',      years: '5+ yrs' },
      { name: 'Shopify Liquid',  years: '3+ yrs' },
      { name: 'Next.js',         years: '2+ yrs' },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="section section--alt" aria-labelledby="skills-heading" data-signal="30">
      <p className="eyebrow">Skills</p>
      <h2 className="heading" id="skills-heading">What I bring to the table.</h2>

      <div className="skills-groups" role="list" aria-label="Skill groups">
        {groups.map((group) => (
          <div key={group.label} className="skills-group" role="listitem">
            <p className="skills-group__label" style={{ color: group.accent }}>
              {group.label}
            </p>
            <ul className="skills-group__list" aria-label={group.label}>
              {group.skills.map((skill) => (
                <li key={skill.name} className="skill-row">
                  <span className="skill-row__name">{skill.name}</span>
                  <span className="skill-row__years" aria-label={`${skill.years} experience`}>
                    {skill.years}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a
        href="https://www.upwork.com/freelancers/bryant46?mp_source=share"
        className="skills-upwork"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View full profile on Upwork (opens in new tab)"
      >
        View full profile on Upwork
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
          <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
