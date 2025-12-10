import type { RefObject } from 'react';
import { skills } from '../../data/constants';
import './Sections.css';

interface SkillsSectionProps {
  skillsRef: RefObject<HTMLElement | null>;
}

export const SkillsSection = ({ skillsRef }: SkillsSectionProps) => {
  return (
    <section className="skills-section" ref={skillsRef}>
      <h2 className="section-heading">Skills</h2>
      <div className="skills-content">
        <div className="skill-category">
          <h3 className="skill-category-title">Programming Languages</h3>
          <div className="skill-tags">
            {skills.languages.map((skill, idx) => (
              <span key={idx} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h3 className="skill-category-title">Frameworks & Tools</h3>
          <div className="skill-tags">
            {skills.frameworks.map((skill, idx) => (
              <span key={idx} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h3 className="skill-category-title">Architecture & Design Patterns</h3>
          <div className="skill-tags">
            {skills.architecture.map((skill, idx) => (
              <span key={idx} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
