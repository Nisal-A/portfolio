import { LuBriefcase, LuMessageSquare, LuGlobe } from 'react-icons/lu';
import { Reveal, Section } from './ui';

const interests = [
  { icon: LuBriefcase, title: 'Nisala Travels', text: 'A travel business brand I am developing a management system for, as a project and an entrepreneurial interest.' },
  { icon: LuGlobe, title: 'Online presence', text: 'Exploring how digital tools can support a business that wants to be found and trusted online.' },
  { icon: LuMessageSquare, title: 'Customer management', text: 'Looking at how records, bookings and communication can be organised so customers are served well.' },
];

export function BeyondCoding() {
  return (
    <Section id="beyond" eyebrow="Beyond coding" title="Connecting technology with business needs">
      <p className="section-lead">
        I'm interested in software that makes everyday business operations simpler. This is an area I am exploring,
        not a record of business results.
      </p>
      <div className="beyond-grid">
        {interests.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 80}>
            <article className="card">
              <span className="card-icon" aria-hidden="true">
                <Icon />
              </span>
              <h3 className="card-title">{title}</h3>
              <p className="card-text">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
