'use client';

export default function ContactCTA() {
  return (
    <section
      className="section section--dark"
      id="contact"
      aria-labelledby="cta-heading"
      data-signal="9"
    >
      <div className="cta-wrap">
        <h2 id="cta-heading">
          Ready to make<br />your store accessible?
        </h2>
        <p>CPACC certified. WCAG 2.2 AA. Built for every user from line one.</p>
        <a className="btn btn--light" href="https://www.linkedin.com/in/bryan-temple/" target="_blank" rel="noopener noreferrer">
          Let&apos;s talk
        </a>
      </div>
    </section>
  );
}
