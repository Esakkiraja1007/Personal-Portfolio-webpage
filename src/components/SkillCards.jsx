
import '../style/Skillcards.css';

export default function SkillCards({ 
  name = 'Skill', 
  level = 'Beginner', 
  category = 'General',
  icon = '⚡' 
}) {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
       
          <span className="skill-icon">{icon}</span>
      
        <span className="skill-category">{category}</span>
      </div>

      <h3 className="skill-name">{name}</h3>

      <div className="skill-level-wrapper">
        <span className="skill-level-text">Proficiency: {level}</span>
        {/* Dynamic visual bar based on level prop */}
        <div className="skill-bar-track">
          <div 
            className={`skill-bar-fill ${level.toLowerCase()}`}
          ></div>
        </div>
      </div>
    </div>
  );
}