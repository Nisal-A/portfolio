import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

/** Wraps content in a section with a consistent heading and eyebrow label. */
export function Section({
  id,
  eyebrow,
  title,
  children,
  className = '',
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`section ${className}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={headingId} className="section-title">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/** Fades content in when it scrolls into view. Disabled by prefers-reduced-motion in CSS. */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Visibly marks information that still needs to be supplied. */
export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="placeholder">{children}</span>;
}
