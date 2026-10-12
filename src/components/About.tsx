import { LuCode, LuDatabase, LuWorkflow, LuNetwork } from 'react-icons/lu';
import { aboutParagraphs } from '../data/profile';
import { Reveal, Section } from './ui';

const focusAreas = [
  { icon: LuCode, title: 'Full-Stack Development', text: 'Building performant web applications with Laravel 11, React, Next.js, and TypeScript.' },
  { icon: LuNetwork, title: 'Networking & Communication', text: 'Designing robust network architectures, understanding communication protocols (TCP/IP), and managing data transmission.' },
  { icon: LuWorkflow, title: 'Project Management & BA', text: 'Translating business requirements into clear architectures, UML workflows, and Jira sprints.' },
  { icon: LuDatabase, title: 'Databases & Analytics', text: 'Designing relational databases (MySQL, PostgreSQL) and interactive Power BI dashboards.' },
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
