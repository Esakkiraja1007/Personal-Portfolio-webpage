
import '../style/ProjectCards.css';

export default function ProjectCards({
  title = 'Project Title',
  description = 'Short project overview...',
  techStack = [],
  githubUrl = '#',
  liveUrl = null,
}) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        
        {/* Link Icons */}
        <div className="project-actions">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="action-link"
            title="View GitHub Code"
          >
            GitHub &rarr;
          </a>

          {/* Conditional rendering using && */}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="action-link live-btn"
              title="View Live Site"
            >
              Live Demo &rarr;
            </a>
          )}
        </div>
      </div>

      <p className="project-description">{description}</p>

      {/* Rendering list of tech tags using map with key */}
      <div className="tech-tags-list">
        {techStack.map((tech) => (
          <span key={tech} className="tech-tag-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}