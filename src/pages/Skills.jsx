import { useState } from 'react';
import SkillCards from '../components/SkillCards';
import '../style/Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillsData = [
    // 1. Languages
    {
      id: 1,
      name: 'JavaScript (ES6+)',
      level: 'Intermediate',
      percentage: 80,
      category: 'Languages',
      icon: '⚡',
    },

    // 2. Web & Frontend (Merged)
    {
      id: 2,
      name: 'HTML5 Semantic Structure',
      level: 'Advanced',
      percentage: 92,
      category: 'Web & Frontend',
      icon: '🌐',
    },
    {
      id: 3,
      name: 'CSS3 Flexbox & Grid',
      level: 'Advanced',
      percentage: 88,
      category: 'Web & Frontend',
      icon: '🎨',
    },
    {
      id: 4,
      name: 'Responsive Web Design',
      level: 'Advanced',
      percentage: 90,
      category: 'Web & Frontend',
      icon: '📱',
    },
    {
      id: 5,
      name: 'Fetch API & JSON Handling',
      level: 'Intermediate',
      percentage: 84,
      category: 'Web & Frontend',
      icon: '🔄',
    },
    {
      id: 6,
      name: 'DOM Manipulation & Local Storage',
      level: 'Intermediate',
      percentage: 82,
      category: 'Web & Frontend',
      icon: '💾',
    },

    // 3. Frameworks
    {
      id: 7,
      name: 'React.js',
      level: 'Intermediate',
      percentage: 82,
      category: 'Frameworks',
      icon: '⚛️',
    },
    {
      id: 8,
      name: 'Bootstrap 5',
      level: 'Advanced',
      percentage: 88,
      category: 'Frameworks',
      icon: '📦',
    },

    // 4. Tools & Workflow
    {
      id: 9,
      name: 'Git & GitHub',
      level: 'Intermediate',
      percentage: 80,
      category: 'Tools & Workflow',
      icon: '🐙',
    },
    {
      id: 10,
      name: 'Vite Build Tooling',
      level: 'Intermediate',
      percentage: 78,
      category: 'Tools & Workflow',
      icon: '⚡',
    },
    {
      id: 11,
      name: 'Vercel Deployment',
      level: 'Intermediate',
      percentage: 85,
      category: 'Tools & Workflow',
      icon: '🚀',
    },
  ];

  // Updated filter buttons with Web & Frontend combined
  const categories = [
    'All',
    'Languages',
    'Web & Frontend',
    'Frameworks',
    'Tools & Workflow',
  ];

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section className="skills-container" id="skills">
      {/* Section Header */}
      <div className="skills-header">
        <span className="skills-badge">Technical Competency</span>
        <h2 className="skills-title">
          Skills &amp; <span className="skills-gradient">Abilities</span>
        </h2>
        <div className="skills-line"></div>
      </div>

      {/* Category Filter Pills */}
      <div className="skills-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Cards Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <SkillCards
            key={skill.id}
            name={skill.name}
            level={skill.level}
            percentage={skill.percentage}
            category={skill.category}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
}