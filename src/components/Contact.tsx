import { LuGithub, LuLinkedin, LuMail, LuPhone } from 'react-icons/lu';
import { profile, socialLinks } from '../data/profile';
import type { SocialLink } from '../types';
import { ContactForm } from './ContactForm';
import { Placeholder, Reveal, Section } from './ui';

const icons = { github: LuGithub, linkedin: LuLinkedin, email: LuMail, phone: LuPhone } as const;

function ContactItem({ link }: { link: SocialLink }) {
  const Icon = icons[link.kind];
  const href =
    link.kind === 'email' && link.url === null && profile.email
      ? `mailto:${profile.email}`
      : link.kind === 'phone' && link.url
      ? `tel:${link.url.replace(/\s+/g, '')}`
      : link.url;
  const display = link.kind === 'email' ? profile.email : link.url;

  return (
    <li className="contact-item">
      <span className="card-icon" aria-hidden="true">
        <Icon />
      </span>
      <div>
        <p className="contact-label">{link.label}</p>
        {href && display ? (
          <a
            href={href}
            target={link.kind === 'email' || link.kind === 'phone' ? undefined : '_blank'}
            rel={link.kind === 'email' || link.kind === 'phone' ? undefined : 'noopener noreferrer'}
          >
            {display.replace(/^mailto:/, '').replace(/^https?:\/\/(www\.)?/, '')}
          </a>
        ) : (
          <p className="muted">
            <Placeholder>Add your {link.label.toLowerCase()} here</Placeholder>
          </p>
        )}
      </div>
    </li>
  );
}

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something useful">
      <div className="contact-grid">
        <Reveal>
          <p className="section-lead section-lead-left">
            I'm open to internships, junior roles, freelance work and collaborations. Send a message or connect
            through the links below.
          </p>
          <ul className="contact-list">
            {socialLinks.map((link) => (
              <ContactItem key={link.label} link={link} />
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
