import { useState, useRef } from 'react';
import './App.css';
import type { Project, SectionType } from './types';
import { Sidebar } from './components/Sidebar/Sidebar';
import { AboutSection } from './components/Sections/AboutSection';
import { ExperienceSection } from './components/Sections/ExperienceSection';
import { ProjectsSection } from './components/Sections/ProjectsSection';
import { EducationSection } from './components/Sections/EducationSection';
import { SkillsSection } from './components/Sections/SkillsSection';
import { ProjectModal } from './components/ProjectModal';
import { useScrollTracking } from './hooks/useScrollTracking';
import { useOverlayHeight } from './hooks/useOverlayHeight';
import bgImage from './assets/bg.jpeg';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<SectionType>('about');

  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const mainContentRef = useRef<HTMLElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useScrollTracking(
    mainContentRef,
    { aboutRef, experienceRef, projectsRef, educationRef, skillsRef },
    setActiveSection
  );

  useOverlayHeight(contentWrapperRef, overlayRef);

  return (
    <div className="app-container">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mainContentRef={mainContentRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        educationRef={educationRef}
        skillsRef={skillsRef}
        aboutRef={aboutRef}
      />

      <main className="main-content" ref={mainContentRef} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="background-overlay" ref={overlayRef}></div>
        <div className="content-wrapper" ref={contentWrapperRef}>
          <AboutSection aboutRef={aboutRef} />
          <ExperienceSection experienceRef={experienceRef} />
          <ProjectsSection projectsRef={projectsRef} onProjectClick={setSelectedProject} />
          <EducationSection educationRef={educationRef} />
          <SkillsSection skillsRef={skillsRef} />
        </div>
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
