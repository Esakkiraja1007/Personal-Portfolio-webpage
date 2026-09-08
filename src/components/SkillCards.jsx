
import '../style/Skillcards.css';

export default function SkillCards({
  name = 'Skill Name',
  level = 'Intermediate',
  percentage = 75,
  category = 'Technology',
  icon = '⚡',
}) {
  return (
    <div className="skill-card">
      <div className="skill-card-top">
        <div className="skill-icon-box">
          <span className="skill-icon">{icon}</span>
        </div>
        <span className="skill-category-badge">{category}</span>
      </div>

      <h3 className="skill-name">{name}</h3>

      <div className="skill-level-wrapper">
        <div className="skill-level-header">
          <span className="skill-level-text">Proficiency: {level}</span>
          <span className="skill-percentage-text">{percentage}%</span>
        </div>

        {/* Dynamic inline width based on percentage */}
        <div className="skill-bar-track">
          <div
            className={`skill-bar-fill ${level.toLowerCase()}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}