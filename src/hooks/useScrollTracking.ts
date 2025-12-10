import { useEffect } from 'react';
import type { RefObject } from 'react';
import type { SectionType } from '../types';

interface SectionRefs {
  aboutRef: RefObject<HTMLElement | null>;
  experienceRef: RefObject<HTMLElement | null>;
  projectsRef: RefObject<HTMLElement | null>;
  educationRef: RefObject<HTMLElement | null>;
  skillsRef: RefObject<HTMLElement | null>;
}

export const useScrollTracking = (
  mainContentRef: RefObject<HTMLElement | null>,
  sectionRefs: SectionRefs,
  setActiveSection: (section: SectionType) => void
) => {
  useEffect(() => {
    const handleScroll = () => {
      if (!mainContentRef.current) return;

      const scrollPosition = mainContentRef.current.scrollTop + 200;
      const { experienceRef, projectsRef, educationRef, skillsRef } = sectionRefs;

      if (skillsRef.current && scrollPosition >= skillsRef.current.offsetTop) {
        setActiveSection('skills');
      } else if (educationRef.current && scrollPosition >= educationRef.current.offsetTop) {
        setActiveSection('education');
      } else if (projectsRef.current && scrollPosition >= projectsRef.current.offsetTop) {
        setActiveSection('projects');
      } else if (experienceRef.current && scrollPosition >= experienceRef.current.offsetTop) {
        setActiveSection('experience');
      } else {
        setActiveSection('about');
      }
    };

    const mainContent = mainContentRef.current;
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
      return () => {
        mainContent.removeEventListener('scroll', handleScroll);
      };
    }
  }, [mainContentRef, sectionRefs, setActiveSection]);
};
