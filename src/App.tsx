import { About } from './components/About';
import { BackToTop } from './components/BackToTop';
import { BeyondCoding } from './components/BeyondCoding';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Learning } from './components/Learning';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { ScrollProgress } from './components/ScrollProgress';
import { Skills } from './components/Skills';

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Learning />
        <BeyondCoding />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
