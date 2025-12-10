import type { RefObject } from 'react';
import { education } from '../../data/constants';
import './Sections.css';

interface EducationSectionProps {
  educationRef: RefObject<HTMLElement | null>;
}

export const EducationSection = ({ educationRef }: EducationSectionProps) => {
  return (
    <section className="education-section" ref={educationRef}>
      <h2 className="section-heading">Education</h2>
      <div className="education-item">
        <h3 className="education-university">{education.university}</h3>
        <p className="education-degree">{education.degree}</p>
        <p className="education-period">{education.period}</p>
        <div className="education-thesis">
          <h4>Thesis Project:</h4>
          <p>{education.thesis}</p>
        </div>
      </div>
    </section>
  );
};
