export interface JourneyStage {
  label: string;
  title: string;
  desc: string;
}

export const stages: JourneyStage[] = [
  {
    label: 'Brief',
    title: 'Accessibility Brief',
    desc: 'Understanding disability contexts, user needs, and WCAG targets before a single line of code.',
  },
  {
    label: 'Audit',
    title: 'Audit & Discovery',
    desc: 'axe DevTools + WAVE + manual keyboard test. Every failure logged with severity and WCAG criterion.',
  },
  {
    label: 'Plan',
    title: 'Remediation Plan',
    desc: 'Failures prioritized by impact. A11y debt mapped against sprint capacity. No guesswork.',
  },
  {
    label: 'Code',
    title: 'Implementation',
    desc: 'Semantic HTML first. ARIA only where native elements fall short. BEM naming throughout.',
  },
  {
    label: 'Test',
    title: 'Assistive Tech Testing',
    desc: 'NVDA + Chrome. VoiceOver + Safari. Keyboard-only walkthrough. Real screen reader output.',
  },
  {
    label: 'Ship',
    title: 'Deploy & Monitor',
    desc: '30+ locales. Zero regressions. Accessibility is a standard maintained, not a one-time fix.',
  },
];
