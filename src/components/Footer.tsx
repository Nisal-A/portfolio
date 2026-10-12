import { LuGithub, LuLinkedin, LuMail, LuPhone } from 'react-icons/lu';
import { profile, socialLinks } from '../data/profile';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#beyond', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const icons = { github: LuGithub, linkedin: LuLinkedin, email: LuMail, phone: LuPhone } as const;

export function Footer() {
  const year = new Date().getFullYear();
  const verified = socialLinks.filter((l) => l.url);

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="muted small">{profile.tagline}</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer-social" aria-label="Social links">
          {verified.map((l) => {
            const Icon = icons[l.kind];
            const href =
              l.kind === 'phone' && l.url ? `tel:${l.url.replace(/\s+/g, '')}` : l.url ?? '#';
            const isExternal = l.kind !== 'email' && l.kind !== 'phone';

            return (
              <li key={l.label}>
                <a
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={l.label}
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container footer-copy">
        <p className="muted small">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
