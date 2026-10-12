import type { CSSProperties } from 'react';
import { LuArrowRight, LuGithub, LuUser } from 'react-icons/lu';
import { profile, socialLinks } from '../data/profile';
import { heroTechLabels } from '../data/skills';
import { HeroCanvas } from './HeroCanvas';
import { Placeholder } from './ui';
import { Typewriter } from './Typewriter';

const roles = [
  'an Information Systems undergraduate',
  'a Project Manager & Business Analyst',
  'a Networking & Communication Specialist',
  'a Full-Stack Developer',
];

/** Staggers the entrance animation of each hero element. */
const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

export function Hero() {
  const github = socialLinks.find((l) => l.kind === 'github')?.url ?? null;

  return (
    <section id="home" className="hero" aria-labelledby="hero-name">
      <div className="hero-bg" aria-hidden="true">
        <HeroCanvas />
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker rise" style={delay(0)}>
            Hello, I'm
          </p>
          <h1 id="hero-name" className="hero-name rise" style={delay(80)}>
            {profile.name}
          </h1>
          <p className="hero-headline rise" style={delay(160)}>
            {profile.headline}
          </p>
          <p className="hero-typed rise" style={delay(220)}>
            I'm <Typewriter words={roles} />
            <span className="typed-cursor" aria-hidden="true" />
          </p>
          <p className="hero-intro rise" style={delay(280)}>
            {profile.intro}
          </p>

          <div className="hero-actions rise" style={delay(360)}>
            <a className="btn btn-primary" href="#projects">
              View My Projects <LuArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn-outline" href="#contact">
              Contact Me
            </a>
            {github ? (
              <a className="btn btn-ghost" href={github} target="_blank" rel="noopener noreferrer">
                <LuGithub aria-hidden="true" /> GitHub
              </a>
            ) : (
              <span className="btn btn-ghost is-disabled" aria-disabled="true">
                <LuGithub aria-hidden="true" /> <Placeholder>GitHub link missing</Placeholder>
              </span>
            )}
          </div>

          <ul className="tech-labels rise" style={delay(440)} aria-label="Technologies">
            {heroTechLabels.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual rise" style={delay(200)}>
          <div className="photo-frame" role="img" aria-label="Profile photo placeholder">
            {profile.photo ? (
              <img src={profile.photo} alt={`Photo of ${profile.name}`} width={320} height={320} />
            ) : (
              <div className="photo-placeholder">
                <LuUser aria-hidden="true" />
                <span>Add profile photo</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
