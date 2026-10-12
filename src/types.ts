// Shared types for portfolio content. Edit the data in src/data/ rather than these types.

/** Where a project or feature stands. Use "verify" when the status hasn't been checked against the repository yet. */
export type ProjectStatus = 'completed' | 'in-development' | 'planned' | 'concept';
export type FeatureStatus = 'completed' | 'in-progress' | 'planned' | 'verify';

export interface ProjectFeature {
  label: string;
  status: FeatureStatus;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  problem?: string;
  myContribution?: string;
  technologies: string[];
  features: ProjectFeature[];
  /** Relative path inside /public, or null when no screenshot exists yet. */
  screenshot: string | null;
  screenshotAlt: string;
  repoUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

/** A value that may still be a placeholder. `null` renders as a clearly marked placeholder. */
export type MaybeValue = string | null;

export interface SocialLink {
  label: string;
  url: MaybeValue;
  kind: 'github' | 'linkedin' | 'email';
}
