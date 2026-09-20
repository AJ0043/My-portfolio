import {
  profile, socials, stats, skills, projects, experience, education, certifications,
} from "./data.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero profile={profile} />
        <About profile={profile} stats={stats} />
        <Skills groups={skills} />
        <Projects projects={projects} />
        <Timeline id="experience" title="Experience" items={experience} />
        <Timeline id="education" title="Education" items={education} />
        <Certifications items={certifications} />
      </main>
      <Contact profile={profile} socials={socials} />
    </>
  );
}
