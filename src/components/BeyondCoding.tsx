import { LuBriefcase, LuBuilding2, LuAward, LuGraduationCap } from 'react-icons/lu';
import { Reveal, Section } from './ui';

const experiences = [
  {
    icon: LuBriefcase,
    role: 'Founder & Operator',
    organization: 'Nisala Travels',
    period: '2025 – Present',
    description:
      'Manage daily operations, customer itineraries, and relations for an independent travel agency. Direct agency branding, promotional strategies, and business process automation.',
  },
  {
    icon: LuBuilding2,
    role: 'Senior Receptionist',
    organization: 'Agbo Hotel',
    period: '2023 – 2024',
    description:
      'Progressed rapidly from trainee to senior receptionist over a one-year tenure. Managed front desk operations, guest check-ins, reservation records, and front office workflow optimization.',
  },
  {
    icon: LuAward,
    role: 'Junior Treasurer & Leadership',
    organization: 'Society of Computer Sciences (SUSL)',
    period: '2026 – Present',
    description:
      'Serving as Junior Treasurer for the Faculty of Computing student body. Also volunteered at the International Conference on Advanced Research in Computing (ARC).',
  },
  {
    icon: LuGraduationCap,
    role: 'Professional Certifications',
    organization: 'AWS, Univ. of Moratuwa & Udemy',
    period: '2025',
    description:
      'Amazon CloudWatch Getting Started (AWS), Python for Beginners (University of Moratuwa), and Professional Social Media Marketing (SMM) certification.',
  },
];

export function BeyondCoding() {
  return (
    <Section id="beyond" eyebrow="Experience & Leadership" title="Connecting technology with business operations">
      <p className="section-lead">
        Bridging technical engineering with real-world business ownership, hospitality operations, and student leadership.
      </p>
      <div className="beyond-grid">
        {experiences.map(({ icon: Icon, role, organization, period, description }, i) => (
          <Reveal key={organization} delay={i * 80}>
            <article className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="card-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="chip" style={{ fontSize: '0.75rem' }}>{period}</span>
              </div>
              <h3 className="card-title" style={{ marginBottom: 0 }}>{organization}</h3>
              <p style={{ margin: 0, fontWeight: 600, fontSize: '0.92rem', color: 'var(--accent)' }}>{role}</p>
              <p className="card-text">{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
