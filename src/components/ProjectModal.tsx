import type { Project } from '../types';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-header">
          <img src={project.image} alt={project.title} className="modal-image" />
          <h2 className="modal-title">{project.title}</h2>
        </div>
        <div className="modal-body">
          <p className="modal-description">{project.description}</p>
          <div className="modal-tech">
            <h4>Technologies:</h4>
            <div className="tech-list">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
