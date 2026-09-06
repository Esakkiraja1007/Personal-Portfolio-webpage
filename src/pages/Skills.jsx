
import { useState } from 'react';
import SkillCards from '../components/SkillCards';
import '../style/Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillsData = [
    {
      id: 1,
      name: 'HTML5 & CSS3',
      level: 'Advanced',
      category: 'Frontend',
      icon: '🌐',
    },
    {
      id: 2,
      name: 'JavaScript (ES6+)',
      level: 'Intermediate',
      category: 'Frontend',
      icon: '⚡',
    },
    {
      id: 3,
      name: 'React.js',
      level: 'Intermediate',
      category: 'Frontend',
      icon: '⚛️',
    },
    {
      id: 4,
      name: 'Bootstrap',
      level: 'Advanced',
      category: 'Frontend',
      icon: '🎨',
    },
    {
      id: 5,
      name: 'Git & GitHub',
      level: 'Intermediate',
      category: 'Tools',
      icon: '🐙',
    },
    {
      id: 6,
      name: 'Fetch API & JSON',
      level: 'Intermediate',
      category: 'Tools',
      icon: '🔄',
    },
  ];

  const categories = ['All', 'Frontend', 'Tools'];

  // Filtering list based on state
  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section className="skills-container" id="skills">
      {/* Section Header */}
      <div className="skills-header">
        <span className="skills-badge">My Technical Stack</span>
        <h2 className="skills-title">
          Skills &amp; <span className="skills-gradient">Abilities</span>
        </h2>
        <div className="skills-line"></div>
      </div>

      {/* Category Filter Tabs */}
      <div className="skills-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Reusable SkillCards */}
      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <SkillCards
            key={skill.id}
            name={skill.name}
            level={skill.level}
            category={skill.category}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
}