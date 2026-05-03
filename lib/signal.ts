'use client';

let signalRunning = false;

function pulse(el: Element, delay = 0): Promise<void> {
  return new Promise((res) => {
    setTimeout(() => {
      el.classList.add('signal-active');
      setTimeout(() => {
        el.classList.remove('signal-active');
        res();
      }, 600);
    }, delay);
  });
}

export async function fireSignal(mode: 'broadcast' | 'sequential'): Promise<void> {
  if (signalRunning) return;
  signalRunning = true;

  const allSignals = [...document.querySelectorAll('[data-signal]')];
  allSignals.sort((a, b) => Number(a.getAttribute('data-signal')) - Number(b.getAttribute('data-signal')));

  if (mode === 'broadcast') {
    allSignals.forEach((el) => pulse(el, 0));
    await new Promise((r) => setTimeout(r, 800));
  } else {
    const step = 180;
    for (let i = 0; i < allSignals.length; i++) {
      pulse(allSignals[i]);
      await new Promise((r) => setTimeout(r, step));
    }
    await new Promise((r) => setTimeout(r, 300));
    for (let i = allSignals.length - 2; i >= 0; i--) {
      pulse(allSignals[i]);
      await new Promise((r) => setTimeout(r, step));
    }
    await new Promise((r) => setTimeout(r, 700));
  }

  signalRunning = false;
}
