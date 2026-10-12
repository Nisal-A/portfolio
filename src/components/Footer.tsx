import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';
import { profile, socialLinks } from '../data/profile';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const icons = { github: LuGithub, linkedin: LuLinkedin, email: LuMail } as const;

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
            return (
              <li key={l.label}>
                <a href={l.url ?? '#'} target="_blank" rel="noopener noreferrer" aria-label={l.label}>
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
