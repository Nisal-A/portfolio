import { useEffect, useRef } from 'react';
import { LuExternalLink, LuGithub, LuX } from 'react-icons/lu';
import { featureStatusLabel, projectStatusLabel } from '../lib/labels';
import type { Project } from '../types';
import { Placeholder } from './ui';

/**
 * Project details in a native <dialog>. The browser provides focus trapping,
 * Escape to close, and the backdrop; this component adds click-outside-to-close.
 */
export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="dialog-body">
          <button type="button" className="icon-button dialog-close" onClick={onClose} aria-label="Close project details">
            <LuX aria-hidden="true" />
          </button>

          <div className="project-meta">
            <span className={`status status-${project.status}`}>{projectStatusLabel[project.status]}</span>
            <span className="project-category">{project.category}</span>
          </div>

          <h3 id="project-dialog-title" className="dialog-title">
            {project.title}
          </h3>
          <p className="card-text">{project.summary}</p>

          {project.problem && (
            <p className="project-detail">
              <strong>Problem:</strong> {project.problem}
            </p>
          )}
          {project.myContribution && (
            <p className="project-detail">
              <strong>My contribution:</strong> {project.myContribution}
            </p>
          )}

          {project.features.length > 0 && (
            <>
              <h4 className="feature-heading">Features</h4>
              <ul className="feature-list">
                {project.features.map((f) => (
                  <li key={f.label}>
                    <span className="feature-label">{f.label}</span>
                    <span className={`feature-status feature-${f.status}`}>{featureStatusLabel[f.status]}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <ul className="chip-list" aria-label="Technologies used">
            {project.technologies.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <div className="project-links">
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
      )}
    </dialog>
  );
}
