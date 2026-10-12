import { LuCode, LuDatabase, LuWorkflow, LuUsers } from 'react-icons/lu';
import { aboutParagraphs } from '../data/profile';
import { Reveal, Section } from './ui';

const focusAreas = [
  { icon: LuCode, title: 'Application development', text: 'Building web applications with React, Laravel and TypeScript.' },
  { icon: LuDatabase, title: 'Database design', text: 'Structuring data with ERDs, normalisation and MySQL.' },
  { icon: LuWorkflow, title: 'Workflow automation', text: 'Turning manual business processes into clear digital steps.' },
  { icon: LuUsers, title: 'Business processes', text: 'Modelling how organisations work so systems fit real needs.' },
];

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Technology that serves real workflows">
      <div className="about-grid">
        <Reveal className="about-text">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </Reveal>

        <ul className="focus-list">
          {focusAreas.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="focus-item-wrap">
              <li className="card focus-item">
                <span className="card-icon" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <h3 className="card-title">{title}</h3>
                  <p className="card-text">{text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
