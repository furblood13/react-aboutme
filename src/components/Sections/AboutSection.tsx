import type { RefObject } from 'react';
import { aboutText } from '../../data/constants';
import './Sections.css';

interface AboutSectionProps {
  aboutRef: RefObject<HTMLElement | null>;
}

export const AboutSection = ({ aboutRef }: AboutSectionProps) => {
  return (
    <section className="about-section" ref={aboutRef}>
      <h2 className="section-heading">About Me</h2>
      <div className="section-content">
        <p>{aboutText}</p>
      </div>
    </section>
  );
};
