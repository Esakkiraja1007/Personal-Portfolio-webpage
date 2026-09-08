
import '../style/About.css';


export default function About() {
  const highlights = [
    {
      id: 1,
      title: 'React Development',
      description:
        'Building interactive interfaces with React.js, reusable components, props, state, and hooks.',
      icon: '⚛️',
    },
    {
      id: 2,
      title: 'Responsive Design',
      description:
        'Creating mobile-first and responsive interfaces using CSS, Bootstrap, Flexbox, and Grid.',
      icon: '📱',
    },
    {
      id: 3,
      title: 'API Integration',
      description:
        'Working with REST APIs, JSON, Fetch API, asynchronous JavaScript, and loading/error states.',
      icon: '🌐',
    },
  ];

  const stats = [
    { id: 'stat-1', label: 'CURRENT FOCUS', value: 'JavaScript & React' },
    { id: 'stat-2', label: 'BUILT & LEARNING', value: '3+ Projects' },
    { id: 'stat-3', label: 'OPEN TO OPPORTUNITIES', value: 'Frontend Developer' },
  ];

  return (
    <section className="about-container" id="about">
      {/* Section Header */}
      <div className="about-header">
        <span className="about-badge">Get To Know Me</span>
        <h2 className="about-title">
          About <span className="about-gradient">Me</span>
        </h2>
        <div className="about-line"></div>
      </div>

      {/* Main Grid: Bio on Left, Highlight Cards on Right */}
      <div className="about-content">
        {/* Left Side: Bio & Updated Stat Cards */}
        <div className="about-bio-card">
          <h3 className="bio-heading">Aspiring Full Stack Developer</h3>
          <p className="bio-text">
            Hello! I’m a 2026 IT graduate and aspiring Frontend Developer focused on
            building responsive, interactive, and user-friendly web applications. I
            have hands-on experience with HTML, CSS, JavaScript, Bootstrap, and
            Git/GitHub, and I’m currently developing my skills in React.js.
          </p>
          <p className="bio-text">
            I’m currently looking for an entry-level Frontend Developer or React
            Developer opportunity where I can contribute to real-world projects,
            strengthen my software engineering skills, and grow into a full-stack developer.
          </p>

          {/* Quick Stats Grid */}
          <div className="stats-row">
            {stats.map((item) => (
              <div key={item.id} className="stat-box">
                <span className="stat-value">{item.value}</span>
                <span className="stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Updated Focus Cards */}
        <div className="about-highlights">
          {highlights.map((item) => (
            <div key={item.id} className="highlight-card">
              <span className="highlight-icon">{item.icon}</span>
              <div className="highlight-info">
                <h4 className="highlight-title">{item.title}</h4>
                <p className="highlight-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}