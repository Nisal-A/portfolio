import { learningTopics } from '../data/skills';
import { Reveal, Section } from './ui';

export function Learning() {
  return (
    <Section id="learning" eyebrow="Development journey" title="Currently Learning & Exploring">
      <p className="section-lead">
        Topics I am actively working on. This list shows ongoing development, not mastery of every area.
      </p>
      <ul className="learning-list">
        {learningTopics.map((topic, i) => (
          <Reveal key={topic} delay={i * 50}>
            <li className="learning-item">
              <span className="learning-dot" aria-hidden="true" />
              {topic}
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
