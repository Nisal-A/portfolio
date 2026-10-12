import type { FeatureStatus, ProjectStatus } from '../types';

export const projectStatusLabel: Record<ProjectStatus, string> = {
  completed: 'Completed',
  'in-development': 'In development',
  planned: 'Planned',
  concept: 'Concept',
};

export const featureStatusLabel: Record<FeatureStatus, string> = {
  completed: 'Completed',
  'in-progress': 'In progress',
  planned: 'Planned',
  verify: 'Status to verify',
};
