// Personal details, education and social links.
// Anything set to `null` is shown on the site as a clearly marked placeholder.
import type { SocialLink } from '../types';

export const profile = {
  name: 'Nisal Abhishek',
  monogram: 'NA',
  headline: 'Building Practical Digital Solutions Through Technology.',
  intro:
    "I'm an Information Systems undergraduate at Sabaragamuwa University of Sri Lanka, exploring web development, software engineering, and business technology. I enjoy transforming ideas into practical digital solutions while continuously learning and improving my skills.",
  location: 'Sri Lanka',
  tagline: 'Information Systems undergraduate and aspiring developer.',
  /** Replace with a real photo in /public and set the path; null shows the placeholder. */
  photo: null as string | null,
  /** Used for the Contact section and the form. */
  email: null as string | null,
  /** Set your domain here; also update index.html canonical/OG URLs. */
  siteUrl: 'https://REPLACE-WITH-YOUR-DOMAIN.example',
};

export const aboutParagraphs: string[] = [
  "I'm an Information Systems undergraduate interested in building technology that solves real problems. My studies sit at the intersection of software and business, so I'm exploring both sides: how applications are built, how data is structured, and how organisations run their workflows.",
  'I focus on application development, database design, workflow automation, and business process management. I want to understand how a system should behave for the people who use it, not just how to make it run.',
  'I learn best by building. I like working through hands-on projects, solving practical problems, collaborating with others, and returning to my code to make it cleaner and more maintainable.',
];

export const education = {
  institution: 'Sabaragamuwa University of Sri Lanka',
  programme: 'Information Systems (Undergraduate)',
  /** Placeholders: fill in once confirmed. */
  faculty: null as string | null,
  enrolmentYear: null as string | null,
  expectedGraduation: null as string | null,
  coursework: [] as string[],
  achievements: [] as string[],
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/Nisal-A', kind: 'github' },
  { label: 'LinkedIn', url: null, kind: 'linkedin' },
  { label: 'Email', url: null, kind: 'email' },
];
