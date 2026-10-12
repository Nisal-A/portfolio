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
    title: 'Nisala Travels Management System',
    category: 'Full-Stack Web Application / Travel Operations',
    status: 'in-development',
    summary:
      'A centralized travel agency platform that replaces scattered files and manual tracking with a single source of truth for customers, bookings, packages, and payments.',
    problem:
      'Travel agency records (customers, documents, bookings and staff tasks) are easy to scatter across spreadsheets and messages. This project centralises them into a secure, single system.',
    myContribution:
      'Designed and developed role-based access control (Super Admin, Manager, Travel Staff, Finance, Customer), booking engine, payment ledger with PDF receipts, customer self-service portal, and secure document vault with audit logs and server-side calculations.',
    technologies: ['Laravel 11', 'React', 'TypeScript', 'Inertia.js', 'MySQL', 'Tailwind CSS', 'Git', 'GitHub'],
    features: [
      { label: 'Role-based access control (Super Admin, Manager, Travel Staff, Finance, Customer)', status: 'completed' },
      { label: 'Comprehensive booking engine & workflow management', status: 'completed' },
      { label: 'Payment ledger with automated PDF receipts generation', status: 'completed' },
      { label: 'Customer self-service portal for tracking itineraries', status: 'completed' },
      { label: 'Secure document vault for passports, NICs, and visas with verification workflows', status: 'completed' },
      { label: 'Server-side calculation engine and double validation for data integrity', status: 'completed' },
      { label: 'Audit logs & activity tracking across employees and management', status: 'completed' },
      { label: 'Centralised operations console and travel agency web interface', status: 'in-progress' },
    ],
    screenshot: null,
    screenshotAlt: 'Nisala Travels management system screenshot',
    repoUrl: 'https://github.com/Nisal-A/nisala-travels-management-system',
    liveUrl: null,
    featured: true,
  },
  {
    id: 'unilink-urms',
    title: 'UniLink – University Resource Management System',
    category: 'Full-Stack / University Resource Management System',
    status: 'in-development',
    summary:
      'A production-grade centralized university resource management platform designed for scheduling, tracking, and allocating university facilities, labs, and equipment across departments.',
    problem:
      'Managing lecture halls, laboratory equipment, and maintenance tickets across university faculties leads to scheduling clashes, unmonitored maintenance, and fragmented asset tracking.',
    myContribution:
      'Contributed to full-stack architecture, resource booking logic, role-based dashboards (Admin, Lecturer, Student, Maintenance), timeline tracking, and conflict-free scheduling engine.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'Supabase', 'Tailwind CSS', 'Chart.js'],
    features: [
      { label: 'Role-based dashboards (Admin, Lecturer, Student, Maintenance)', status: 'completed' },
      { label: 'Resource booking & conflict-free scheduling engine', status: 'completed' },
      { label: 'Interactive resource catalog explorer with omni-search', status: 'completed' },
      { label: 'Maintenance ticket reporting & lifecycle timeline tracking', status: 'completed' },
      { label: 'Analytics dashboard and resource usage metrics with Chart.js', status: 'completed' },
      { label: 'Bulk resource import via CSV/Excel spreadsheets', status: 'completed' },
      { label: 'Firebase authentication & Supabase database integration', status: 'completed' },
    ],
    screenshot: null,
    screenshotAlt: 'UniLink University Resource Management System screenshot',
    repoUrl: 'https://github.com/a-zahi2002/Capstone---URMS',
    liveUrl: 'https://unilink-urms.vercel.app',
    featured: true,
  },
  {
    id: 'luxestay',
    title: 'LuxeStay: Hotel Room Reservation System',
    category: 'Full-Stack Web Application / Hospitality Management',
    status: 'completed',
    summary:
      'A comprehensive full-stack hotel reservation and management system designed to automate booking workflows for customers, receptionists, and hotel administrators.',
    problem:
      'Manual hotel reception records, guest check-in delays, and disconnected billing workflows create operational friction and risk reservation conflicts.',
    myContribution:
      'Designed and developed the full-stack architecture drawing from hands-on hotel front office experience, implementing JWT authentication, receptionist desk workflows, and occupancy reporting.',
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'CSS', 'Lucide React'],
    features: [
      { label: 'Administrator analytics dashboard and user management', status: 'completed' },
      { label: 'Room management with pricing, status control, and image upload', status: 'completed' },
      { label: 'Receptionist desk: check-in, check-out and final billing', status: 'completed' },
      { label: 'Customer browsing, search, and online room booking module', status: 'completed' },
      { label: 'JWT-based role authentication and bcrypt password hashing', status: 'completed' },
      { label: 'Daily/monthly revenue, reservation, and occupancy statistics reporting', status: 'completed' },
    ],
    screenshot: null,
    screenshotAlt: 'LuxeStay reservation system screenshot',
    repoUrl: 'https://github.com/Nisal-A/Reservation-mana',
    liveUrl: null,
    featured: true,
  },
];

/** Academic and practice work (assignments, database designs, concepts). */
export const academicProjects: Project[] = [

];
