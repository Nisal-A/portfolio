// Skills and topics. These are technologies I have worked with or am learning.
// No proficiency levels are assigned; add a `level` field here later if you want to show one.
import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    items: ['Java', 'C#', 'PHP', 'TypeScript', 'Python', 'JavaScript'],
  },
  {
    title: 'Frameworks & Web Development',
    items: ['Laravel 11', 'React.js', 'Next.js', 'Inertia.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'HTML5 / CSS3'],
  },
  {
    title: 'Database & Data Analysis',
    items: ['MySQL', 'PostgreSQL', 'Supabase', 'SQL', 'Power BI', 'Advanced Excel', 'Database Design (ERDs)'],
  },
  {
    title: 'Networking & Communication',
    items: [
      'Computer Networks',
      'Network Protocols (TCP/IP, UDP, HTTP/S)',
      'Routing & Switching',
      'Network Security & Firewalls',
      'Data Communication',
      'Client-Server Architecture',
    ],
  },
  {
    title: 'Project Management & Business Analysis',
    items: ['Requirements Analysis', 'Business Process Modelling', 'Process Mapping (UML, Visio)', 'Jira', 'Trello', 'Figma'],
  },
  {
    title: 'DevOps, Cloud & Enterprise Systems',
    items: ['Git', 'GitHub', 'AWS (CloudWatch)', 'Enterprise Systems (CMS, RMS, SADAS, Finacle)', 'VS Code'],
  },
];

/** Shown in the hero as small technology labels. */
export const heroTechLabels = ['Laravel 11', 'React', 'TypeScript', 'MySQL', 'Next.js', 'Networking'];

export const learningTopics: string[] = [
  'Advanced Full-Stack Architectures (Laravel 11 & Next.js App Router)',
  'Computer Networking & Network Infrastructure Protocols',
  'Business Process Management (BPM) & Systems Optimization',
  'Data Analytics & Intelligence with Power BI and SQL',
  'Cloud Monitoring & Observability with AWS CloudWatch',
  'Agile Project Management, Cross-Functional Leadership & Sprint Delivery',
];
