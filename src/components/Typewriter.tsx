import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const TYPE_MS = 75;
const DELETE_MS = 38;
const HOLD_MS = 1600;
const PAUSE_MS = 350;

/** Types out each phrase, holds, deletes, then moves to the next. Shows the first phrase in full when reduced motion is on. */
export function Typewriter({ words }: { words: readonly string[] }) {
  const reduced = usePrefersReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const current = words[wordIndex % words.length] ?? '';

  useEffect(() => {
    if (reduced) return;

    // Finished typing: hold, then start deleting.
    if (!deleting && text === current) {
      const hold = window.setTimeout(() => setDeleting(true), HOLD_MS);
      return () => window.clearTimeout(hold);
    }

    // Finished deleting: pause, then move to the next phrase.
    if (deleting && text === '') {
      const pause = window.setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, PAUSE_MS);
      return () => window.clearTimeout(pause);
    }

    const step = window.setTimeout(
      () => setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
      deleting ? DELETE_MS : TYPE_MS,
    );
    return () => window.clearTimeout(step);
  }, [text, deleting, current, reduced, words.length]);

  return <span className="typed-text">{reduced ? (words[0] ?? '') : text}</span>;
}
