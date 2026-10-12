import { LuExternalLink, LuGithub, LuInfo } from 'react-icons/lu';
import { featureStatusLabel, projectStatusLabel } from '../lib/labels';
import { handleSpotlight } from '../lib/spotlight';
import type { Project } from '../types';
import { Placeholder, Reveal } from './ui';

export function ProjectCard({ project, onOpen, delay = 0 }: { project: Project; onOpen: (p: Project) => void; delay?: number }) {
  const headingId = `project-${project.id}`;
  return (
    <Reveal delay={delay} className="project-wrap">
      <article className="card project-card spotlight" aria-labelledby={headingId} onPointerMove={handleSpotlight}>
        <div className="project-thumb">
          {project.screenshot ? (
            <img src={project.screenshot} alt={project.screenshotAlt} loading="lazy" width={960} height={540} />
          ) : (
            <div className="thumb-placeholder" role="img" aria-label={project.screenshotAlt}>
              <span>Screenshot coming soon</span>
            </div>
          )}
        </div>

        <div className="project-body">
          <div className="project-meta">
            <span className={`status status-${project.status}`}>{projectStatusLabel[project.status]}</span>
            <span className="project-category">{project.category}</span>
          </div>

          <h3 id={headingId} className="card-title">
            {project.title}
          </h3>
          <p className="card-text">{project.summary}</p>

          {project.features.length > 0 && (
            <div className="feature-block">
              <h4 className="feature-heading">Features</h4>
              <ul className="feature-list">
                {project.features.slice(0, 4).map((f) => (
                  <li key={f.label}>
                    <span className="feature-label">{f.label}</span>
                    <span className={`feature-status feature-${f.status}`}>{featureStatusLabel[f.status]}</span>
                  </li>
                ))}
              </ul>
              {project.features.length > 4 && (
                <p className="muted small more-features">+ {project.features.length - 4} more in details</p>
              )}
            </div>
          )}

          <ul className="chip-list" aria-label="Technologies used">
            {project.technologies.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <div className="project-links">
            <button type="button" className="btn btn-primary btn-sm" onClick={() => onOpen(project)}>
              <LuInfo aria-hidden="true" /> Details
            </button>
            {project.repoUrl ? (
              <a className="btn btn-outline btn-sm" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <LuGithub aria-hidden="true" /> Repository
              </a>
            ) : (
              <span className="btn btn-outline btn-sm is-disabled" aria-disabled="true">
                <LuGithub aria-hidden="true" /> <Placeholder>Repository link missing</Placeholder>
              </span>
            )}
            {project.liveUrl ? (
              <a className="btn btn-outline btn-sm" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <LuExternalLink aria-hidden="true" /> Live demo
              </a>
            ) : (
              <span className="btn btn-outline btn-sm is-disabled" aria-disabled="true">
                <LuExternalLink aria-hidden="true" /> <Placeholder>Live demo not available</Placeholder>
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
