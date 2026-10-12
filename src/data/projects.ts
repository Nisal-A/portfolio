// Project data. Add new projects here; the Projects section renders from this array.
//
// Status rules:
//  - Feature status "verify" means: not yet checked against the repository. Update it to
//    "completed", "in-progress" or "planned" after checking the code. Never mark a feature
//    completed without confirming it works.
//  - `repoUrl` / `liveUrl` of null render as placeholders, not broken links.
import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'nisala-travels',
    title: 'Nisala Travels Business Management System',
    category: 'Full-stack web application / Business management system',
    status: 'in-development',
    summary:
      'A centralised business management platform designed for a travel agency to manage customer information, travel documentation, staff activities, and administrative workflows.',
    problem:
      'Travel agency records (customers, documents, bookings and staff tasks) are easy to scatter across spreadsheets and messages. This project aims to bring them into one system.',
    myContribution:
      'Developing the application and its business workflows. [Confirm and describe your specific contributions.]',
    technologies: ['Laravel', 'React', 'TypeScript', 'Inertia.js', 'Tailwind CSS', 'MySQL', 'Git', 'GitHub'],
    features: [
      { label: 'Customer database management', status: 'verify' },
      { label: 'Customer document management', status: 'verify' },
      { label: 'Authentication and session management', status: 'verify' },
      { label: 'Role-based access control for employees and management', status: 'verify' },
      { label: 'Booking and customer workflow management', status: 'verify' },
      { label: 'Notifications and alerts', status: 'verify' },
      { label: 'File storage and document tracking', status: 'verify' },
      { label: 'Public-facing travel agency website', status: 'verify' },
      { label: 'Centralised administration and business operations', status: 'verify' },
    ],
    screenshot: null,
    screenshotAlt: 'Nisala Travels management system screenshot',
    repoUrl: 'https://github.com/Nisal-A/nisala-travels-management-system',
    liveUrl: null,
    featured: true,
  },
  {
    id: 'jobhub',
    title: 'Jobhub: Job Vacancy Website',
    category: 'Web development / Information systems',
    status: 'concept',
    summary:
      'A job vacancy website concept designed to organise job opportunities into categories and help users explore relevant employment listings.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      { label: 'Job category navigation', status: 'verify' },
      { label: 'Job vacancy listings', status: 'verify' },
      { label: 'Job descriptions', status: 'verify' },
      { label: 'Responsive website layout', status: 'verify' },
      { label: 'Navigation between pages and sections', status: 'verify' },
    ],
    screenshot: null,
    screenshotAlt: 'Jobhub job vacancy website screenshot',
    repoUrl: null,
    liveUrl: null,
    featured: true,
  },
  {
    id: 'luxestay',
    title: 'LuxeStay: Hotel Room Reservation System',
    category: 'Reservation management / Information systems',
    status: 'concept',
    summary:
      'A hotel reservation system concept focused on organising room reservations and supporting hotel operations through dedicated administrative and receptionist workflows.',
    technologies: ['[Add technologies]'],
    features: [
      { label: 'Administrator functions', status: 'verify' },
      { label: 'Receptionist functions', status: 'verify' },
      { label: 'Room and reservation management', status: 'verify' },
      { label: 'Guest information management', status: 'verify' },
      { label: 'Booking status tracking', status: 'verify' },
    ],
    screenshot: null,
    screenshotAlt: 'LuxeStay reservation system screenshot',
    repoUrl: null,
    liveUrl: null,
    featured: true,
  },
];

/** Academic and practice work (assignments, database designs, diagrams). Add entries as they are ready. */
export const academicProjects: Project[] = [];
