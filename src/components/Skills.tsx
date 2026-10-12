import { LuBlocks, LuDatabase, LuLayers, LuServer, LuWrench } from 'react-icons/lu';
import { skillGroups } from '../data/skills';
import { handleSpotlight } from '../lib/spotlight';
import { Reveal, Section } from './ui';

// Icons are matched by group title. Add an entry when you add a new group.
const icons = {
  'Frontend Development': LuBlocks,
  'Backend Development': LuServer,
  'Database Management': LuDatabase,
  'Development Tools': LuWrench,
  'Information Systems': LuLayers,
} as const;

export function Skills() {
  return (
    <Section id="skills" eyebrow="Technical skills" title="Technologies I work with and am learning">
      <p className="section-lead">
        These are tools and topics I have worked with or am currently learning, not a measure of mastery.
      </p>
      <div className="skills-grid">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.title as keyof typeof icons] ?? LuLayers;
          return (
            <Reveal key={group.title} delay={i * 60}>
              <article className="card skill-card spotlight" onPointerMove={handleSpotlight}>
                <header className="skill-header">
                  <span className="card-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3 className="card-title">{group.title}</h3>
                </header>
                <ul className="chip-list">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
