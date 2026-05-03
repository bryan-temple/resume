'use client';

import { fireSignal } from '@/lib/signal';

export default function SignalBar() {
  return (
    <div className="signal-bar" role="toolbar" aria-label="Accessibility signal controls">
      <span className="signal-bar__label">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="4" r="2" />
          <path d="M19 13v-2h-6l-2-4H9a2 2 0 00-2 2v6h2v5h2v-5h2l2 4h2l-2-4h2v-2h-2z" />
        </svg>
        A11y Signal
      </span>

      <button
        className="signal-btn signal-btn--all"
        onClick={() => fireSignal('broadcast')}
        aria-label="Send accessibility signal to all components simultaneously"
      >
        <span className="signal-dot" aria-hidden="true" />
        Broadcast all
      </button>

      <button
        className="signal-btn signal-btn--seq"
        onClick={() => fireSignal('sequential')}
        aria-label="Send accessibility signal sequentially through each component and back"
      >
        <span className="signal-dot" aria-hidden="true" />
        Travel round-trip
      </button>
    </div>
  );
}
