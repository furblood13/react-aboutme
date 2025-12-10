import type { RefObject } from 'react';
import type { Project } from '../../types';
import { projects } from '../../data/constants';
import './Sections.css';

interface ProjectsSectionProps {
  projectsRef: RefObject<HTMLElement | null>;
  onProjectClick: (project: Project) => void;
}

export const ProjectsSection = ({ projectsRef, onProjectClick }: ProjectsSectionProps) => {
  return (
    <section className="projects-section" ref={projectsRef}>
      <h2 className="section-heading">Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => onProjectClick(project)}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-thumbnail" />
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-preview">{project.description.substring(0, 150)}...</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
