// Personal details, education and social links.
// Anything set to `null` is shown on the site as a clearly marked placeholder.
import type { SocialLink } from '../types';

export const profile = {
  name: 'Nisal Abhishek',
  monogram: 'NA',
  headline: 'Project Manager | Business Analyst | Networking & Communication',
  intro:
    "I'm an Information Systems undergraduate at Sabaragamuwa University of Sri Lanka bridging strategic project execution, process optimization, and computer networking & communication. Adept at translating complex business requirements into actionable development plans, managing cross-functional workflows, and designing robust, interconnected digital solutions.",
  location: 'Polonnaruwa, Sri Lanka',
  tagline: 'Bridging Strategic Project Execution, Business Analysis, Networking & Communication',
  /** Profile photo located in /public */
  photo: '/propic.jpg',
  /** Used for the Contact section and the form. */
  email: 'nisal.abhishek6@gmail.com',
  phone: '+94 70 291 8858',
  /** Set your domain here; also update index.html canonical/OG URLs. */
  siteUrl: 'https://nisal-a.github.io',
};

export const aboutParagraphs: string[] = [
  "I am an Information Systems undergraduate at Sabaragamuwa University of Sri Lanka with a passion for bridging strategic project execution, process optimization, and computer networking & communication. My studies sit at the intersection of technology, data architecture, and interconnected systems.",
  'I specialize in translating complex business requirements into actionable technical deliverables, managing cross-functional workflows, and understanding modern network infrastructure, communication protocols, and client-server architectures.',
  'Beyond software engineering, I bring hands-on entrepreneurial and operational perspective as the Founder & Operator of Nisala Travels, and previously as Senior Receptionist at Agbo Hotel—equipping me with sharp communication, stakeholder management, and customer empathy.',
];

export const education = {
  institution: 'Sabaragamuwa University of Sri Lanka',
  programme: 'BSc. Honours in Information Systems',
  faculty: 'Faculty of Computing',
  enrolmentYear: '2024',
  expectedGraduation: '2028',
  coursework: [
    'Systems Analysis & Design',
    'Software Engineering',
    'Database Management Systems',
    'Business Process Management',
    'Computer Networks & Data Communication',
    'Object-Oriented Analysis & Design',
    'Enterprise Architecture',
  ],
  achievements: [
    'Junior Treasurer, Society of Computer Sciences – SUSL (2026 – Present)',
    'Volunteer, International Conference on Advanced Research in Computing (Nov 2025)',
  ],
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/Nisal-A', kind: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nisal-abhishek', kind: 'linkedin' },
  { label: 'Email', url: 'mailto:nisal.abhishek6@gmail.com', kind: 'email' },
  { label: 'Phone', url: '+94 70 291 8858', kind: 'phone' },
];
