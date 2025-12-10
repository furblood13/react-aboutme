import type { RefObject } from 'react';
import { HiFolder, HiDocumentText, HiBriefcase, HiAcademicCap, HiCode } from 'react-icons/hi';
import type { SectionType } from '../../types';

interface NavigationProps {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
  mainContentRef: RefObject<HTMLElement | null>;
  experienceRef: RefObject<HTMLElement | null>;
  projectsRef: RefObject<HTMLElement | null>;
  educationRef: RefObject<HTMLElement | null>;
  skillsRef: RefObject<HTMLElement | null>;
  aboutRef: RefObject<HTMLElement | null>;
  onNavigate?: () => void;
}

export const Navigation = ({
  activeSection,
  setActiveSection,
  mainContentRef,
  experienceRef,
  projectsRef,
  educationRef,
  skillsRef,
  aboutRef,
  onNavigate
}: NavigationProps) => {
  const handleNavigate = (section: SectionType, ref: RefObject<HTMLElement | null>) => {
    setActiveSection(section);
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onNavigate?.();
  };

  return (
    <nav className="nav-section">
      <div
        className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
        onClick={() => handleNavigate('about', aboutRef)}
      >
        <HiDocumentText className="nav-icon" />
        <span className="nav-text">About</span>
      </div>
      <div
        className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
        onClick={() => handleNavigate('experience', experienceRef)}
      >
        <HiBriefcase className="nav-icon" />
        <span className="nav-text">Experience</span>
      </div>
      <div
        className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
        onClick={() => handleNavigate('projects', projectsRef)}
      >
        <HiFolder className="nav-icon" />
        <span className="nav-text">Projects</span>
      </div>
      <div
        className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
        onClick={() => handleNavigate('education', educationRef)}
      >
        <HiAcademicCap className="nav-icon" />
        <span className="nav-text">Education</span>
      </div>
      <div
        className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
        onClick={() => handleNavigate('skills', skillsRef)}
      >
        <HiCode className="nav-icon" />
        <span className="nav-text">Skills</span>
      </div>
    </nav>
  );
};
