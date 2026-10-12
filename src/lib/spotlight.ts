import type { PointerEvent as ReactPointerEvent } from 'react';

/**
 * Moves a soft highlight to the pointer position inside a card.
 * The highlight is drawn in CSS (.spotlight::before) and is hidden for touch and reduced-motion users.
 */
export function handleSpotlight(e: ReactPointerEvent<HTMLElement>) {
  if (e.pointerType !== 'mouse') return;
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
}
