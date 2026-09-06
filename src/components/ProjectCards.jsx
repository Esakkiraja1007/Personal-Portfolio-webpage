
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
      <div className="project-body">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
        </div>

        <p className="project-description">{description}</p>

        {/* Tech Stack Badges */}
        <div className="tech-tags-list">
          {techStack.map((tech) => (
            <span key={tech} className="tech-tag-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons: Positioned Below Tech Stack */}
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
  );
}