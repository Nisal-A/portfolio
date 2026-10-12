// Skills and topics. These are technologies I have worked with or am learning.
// No proficiency levels are assigned; add a `level` field here later if you want to show one.
import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    items: ['PHP', 'Laravel'],
  },
  {
    title: 'Database Management',
    items: ['MySQL', 'SQL', 'Database design', 'Entity Relationship Diagrams (ERDs)'],
  },
  {
    title: 'Development Tools',
    items: ['Git', 'GitHub', 'Visual Studio Code', 'Antigravity IDE', 'Vite', 'npm', 'Composer'],
  },
  {
    title: 'Information Systems',
    items: [
      'Systems analysis and design',
      'Requirements analysis',
      'Software development documentation',
      'Business process modelling',
      'Object-oriented analysis and design',
      'Data Flow Diagrams (DFDs)',
    ],
  },
];

/** Shown in the hero as small technology labels. */
export const heroTechLabels = ['React', 'Laravel', 'PHP', 'MySQL', 'Git'];

export const learningTopics: string[] = [
  'Full-stack application development',
  'Laravel authentication and authorization',
  'Database architecture and optimization',
  'RESTful APIs and application integration',
  'Software architecture and maintainable code',
  'Git workflows and collaborative development',
  'UI/UX design and responsive interfaces',
  'Secure business application development',
];
