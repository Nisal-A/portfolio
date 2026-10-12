import { useEffect, useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import { useActiveSection } from '../hooks/useActiveSection';
import { profile } from '../data/profile';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

// Every observed section, including ones without a nav link, so the highlight clears correctly.
const observedSections = ['home', 'about', 'skills', 'projects', 'education', 'learning', 'beyond', 'contact'];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(observedSections);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="container navbar-inner" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label={`${profile.name} home`}>
          <span className="monogram" aria-hidden="true">
            {profile.monogram}
          </span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <ul id="primary-nav" className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={isActive ? 'is-active' : undefined}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button nav-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
