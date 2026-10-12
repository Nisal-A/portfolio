import { LuBookOpen, LuCalendar, LuGraduationCap, LuBuilding2 } from 'react-icons/lu';
import { education } from '../data/profile';
import { Placeholder, Reveal, Section } from './ui';

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <Reveal>
        <article className="card education-card">
          <header className="education-header">
            <span className="card-icon" aria-hidden="true">
              <LuGraduationCap />
            </span>
            <div>
              <h3 className="card-title education-institution">{education.institution}</h3>
              <p className="card-text">{education.programme}</p>
            </div>
          </header>

          <dl className="education-facts">
            <div>
              <dt>
                <LuBuilding2 aria-hidden="true" /> Faculty or department
              </dt>
              <dd>{education.faculty ?? <Placeholder>Add faculty or department</Placeholder>}</dd>
            </div>
            <div>
              <dt>
                <LuCalendar aria-hidden="true" /> Enrolment year
              </dt>
              <dd>{education.enrolmentYear ?? <Placeholder>Add enrolment year</Placeholder>}</dd>
            </div>
            <div>
              <dt>
                <LuCalendar aria-hidden="true" /> Expected graduation
              </dt>
              <dd>{education.expectedGraduation ?? <Placeholder>Add expected graduation year</Placeholder>}</dd>
            </div>
          </dl>

          <div className="education-lists">
            <div>
              <h4 className="feature-heading">
                <LuBookOpen aria-hidden="true" /> Relevant coursework
              </h4>
              {education.coursework.length > 0 ? (
                <ul className="chip-list">
                  {education.coursework.map((c) => (
                    <li key={c} className="chip">
                      {c}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="muted">
                  <Placeholder>Add relevant coursework in src/data/profile.ts</Placeholder>
                </p>
              )}
            </div>
            <div>
              <h4 className="feature-heading">Academic achievements</h4>
              {education.achievements.length > 0 ? (
                <ul className="bullet-list">
                  {education.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              ) : (
                <p className="muted">
                  <Placeholder>Add achievements only once confirmed</Placeholder>
                </p>
              )}
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
