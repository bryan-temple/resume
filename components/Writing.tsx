'use client';

interface Post {
  platform: string;
  title: string;
  href: string;
  signal: string;
  ariaLabel: string;
}

const posts: Post[] = [
  {
    platform: 'Accessibility · Medium',
    title: 'The Lotus Accessibility Playbook — What We Built and Why',
    href: '#',
    signal: '6',
    ariaLabel: 'Read: The Lotus Accessibility Playbook',
  },
  {
    platform: 'Business · Medium',
    title: 'Why Accessibility Is the Best Business Decision You’re Not Making',
    href: '#',
    signal: '7',
    ariaLabel: 'Read: Why Accessibility Is Good Business',
  },
  {
    platform: 'AI Dev · Medium',
    title: 'How I Built a Live Site in Hours Using Claude Code',
    href: '#',
    signal: '8',
    ariaLabel: 'Read: AI-Assisted Development',
  },
];

export default function Writing() {
  return (
    <section
      className="section section--alt"
      id="writing"
      aria-labelledby="writing-heading"
      data-signal="5"
    >
      <p className="eyebrow">Writing</p>
      <h2 className="heading" id="writing-heading">Ideas worth sharing.</h2>

      <div className="writing-grid">
        {posts.map((post) => (
          <a
            key={post.title}
            className="writing-card"
            href={post.href}
            data-signal={post.signal}
            aria-label={post.ariaLabel}
          >
            <p className="writing-platform">{post.platform}</p>
            <h3 className="writing-title">{post.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
