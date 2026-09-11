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
    {
      id: 2,
      name: 'Java',
      level: 'Intermediate',
      percentage: 75,
      category: 'Languages',
      icon: '☕',
    },
    {
      id: 3,
      name: 'SQL (Query Language)',
      level: 'Intermediate',
      percentage: 80,
      category: 'Languages',
      icon: '📝',
    },

    // 2. Web & Frontend
    {
      id: 4,
      name: 'HTML5 Semantic Structure',
      level: 'Advanced',
      percentage: 92,
      category: 'Web & Frontend',
      icon: '🌐',
    },
    {
      id: 5,
      name: 'CSS3 Flexbox & Grid',
      level: 'Advanced',
      percentage: 88,
      category: 'Web & Frontend',
      icon: '🎨',
    },
    {
      id: 6,
      name: 'Responsive Web Design',
      level: 'Advanced',
      percentage: 90,
      category: 'Web & Frontend',
      icon: '📱',
    },
    {
      id: 7,
      name: 'Fetch API & JSON Handling',
      level: 'Intermediate',
      percentage: 84,
      category: 'Web & Frontend',
      icon: '🔄',
    },
    {
      id: 8,
      name: 'DOM Manipulation & Local Storage',
      level: 'Intermediate',
      percentage: 82,
      category: 'Web & Frontend',
      icon: '💾',
    },

    // 3. Frameworks
    {
      id: 9,
      name: 'React.js',
      level: 'Intermediate',
      percentage: 82,
      category: 'Frameworks',
      icon: '⚛️',
    },
    {
      id: 10,
      name: 'Bootstrap 5',
      level: 'Advanced',
      percentage: 88,
      category: 'Frameworks',
      icon: '📦',
    },

    // 4. Database
    {
      id: 11,
      name: 'MySQL (Relational Database)',
      level: 'Intermediate',
      percentage: 78,
      category: 'Database',
      icon: '🐬',
    },

    // 5. Tools & Workflow
    {
      id: 12,
      name: 'Git & GitHub',
      level: 'Intermediate',
      percentage: 80,
      category: 'Tools & Workflow',
      icon: '🐙',
    },
    {
      id: 13,
      name: 'Vite Build Tooling',
      level: 'Intermediate',
      percentage: 78,
      category: 'Tools & Workflow',
      icon: '⚡',
    },
    {
      id: 14,
      name: 'Vercel Deployment',
      level: 'Intermediate',
      percentage: 85,
      category: 'Tools & Workflow',
      icon: '🚀',
    },
  ];

  const categories = [
    'All',
    'Languages',
    'Web & Frontend',
    'Frameworks',
    'Database',
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