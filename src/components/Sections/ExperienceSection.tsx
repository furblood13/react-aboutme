import type { RefObject } from 'react';
import { experiences } from '../../data/constants';
import './Sections.css';

interface ExperienceSectionProps {
  experienceRef: RefObject<HTMLElement | null>;
}

export const ExperienceSection = ({ experienceRef }: ExperienceSectionProps) => {
  return (
    <section className="experience-section" ref={experienceRef}>
      <h2 className="section-heading">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3 className="experience-company">{exp.company}</h3>
              <p className="experience-position">{exp.position}</p>
              <p className="experience-period">{exp.period}</p>
            </div>
            <ul className="experience-responsibilities">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
