import { useState } from 'react';
import { projects } from '../data/projects';
import { projectStatusLabel } from '../lib/labels';
import type { Project, ProjectStatus } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Section } from './ui';

type Filter = 'all' | ProjectStatus;

const statusOrder: ProjectStatus[] = ['in-development', 'concept', 'planned', 'completed'];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = filter === 'all' ? projects : projects.filter((p) => p.status === filter);
  // Only offer status filters that have at least one project, so the filter bar stays honest.
  const availableStatuses = statusOrder.filter((s) => projects.some((p) => p.status === s));

  return (
    <Section id="projects" eyebrow="Featured projects" title="Work in progress and concepts">
      <p className="section-lead">
        Each project is labelled by its real status. Features marked "Status to verify" have not been checked
        against the code yet. Select a project for full details.
      </p>

      <div className="filter-bar" role="group" aria-label="Filter projects by status">
        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')} label="All" count={projects.length} />
        {availableStatuses.map((status) => (
          <FilterButton
            key={status}
            active={filter === status}
            onClick={() => setFilter(status)}
            label={projectStatusLabel[status]}
            count={projects.filter((p) => p.status === status).length}
          />
        ))}
      </div>

      {/* Keyed so the grid re-animates whenever the filter changes. */}
      <div key={filter} className="projects-grid">
        {visible.map((project, i) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelected} delay={i * 80} />
        ))}
      </div>
      {visible.length === 0 && <p className="muted">No projects with this status yet.</p>}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}

function FilterButton({ active, onClick, label, count }: { active: boolean; onClick: () => void; label: string; count: number }) {
  return (
    <button type="button" className="filter-chip" aria-pressed={active} onClick={onClick}>
      {label}
      <span className="filter-count">{count}</span>
    </button>
  );
}
