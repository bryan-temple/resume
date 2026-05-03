'use client';

interface Post {
  platform: string;
  title: string;
  href: string;
  signal: string;
  ariaLabel: string;
  comingSoon?: boolean;
}

const posts: Post[] = [
  {
    platform: 'Training · Coming Soon',
    title: 'Accessibility Training',
    href: '#',
    signal: '6',
    ariaLabel: 'Accessibility Training — coming soon',
    comingSoon: true,
  },
  {
    platform: 'Business · Medium',
    title: "Why Accessibility Is the Best Business Decision You're Not Making",
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
      <p className="eyebrow">Writing & Training</p>
      <h2 className="heading" id="writing-heading">Ideas worth sharing.</h2>

      <div className="writing-grid">
        {posts.map((post) => (
          <a
            key={post.title}
            className="writing-card"
            href={post.href}
            data-signal={post.signal}
            aria-label={post.ariaLabel}
            style={post.comingSoon ? { cursor: 'default', opacity: 0.85 } : undefined}
          >
            <p className="writing-platform">{post.platform}</p>
            <h3 className="writing-title">{post.title}</h3>
            {post.comingSoon && (
              <span
                style={{
                  display: 'inline-block',
                  marginTop: 'auto',
                  padding: '4px 12px',
                  background: 'var(--sage-light)',
                  color: 'var(--sage)',
                  borderRadius: 100,
                  fontSize: 11,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                }}
              >
                Coming Soon
              </span>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
