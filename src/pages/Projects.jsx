
import ProjectCards from '../components/ProjectCards';
import '../style/Projects.css';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';



export default function Projects() {
  const projectsList = [
    {
      id: 1,
      title: 'Mini E-Commerce Store',
      image: project1,
      description:
        'A multi-page responsive store featuring dynamic product catalogs (Electronics, Fashion, Bags, Watches), dedicated cart management, and dark mode toggling.',
      techStack: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'localStorage', 'Git & GitHub'],
      githubUrl: 'https://github.com/Esakkiraja1007/Mini-E-Commerce-Store',
      liveUrl: 'https://mini-e-commerce-store-chi.vercel.app/',
    },
    {
      id: 2,
      title: 'Personal Finance Tracker',
      image: project2,
      description:
        'An interactive budget application to log income and expenses, calculate cash flow balances in real time, and persist transaction records.',
      techStack: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'localStorage', 'Git & GitHub'],
      githubUrl: 'https://github.com/Esakkiraja1007/Personal-Finance-Tracker',
      liveUrl: 'https://personal-finance-tracker-three-alpha.vercel.app/',
    },
    {
      id: 3,
      title: 'Real-Time Weather App',
      image:  project3,
      description:
        'A weather forecasting tool integrating asynchronous REST APIs to display current temperatures, humidity levels, and climate condition icons.',
      techStack: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Fetch API', 'Git & GitHub'],
      githubUrl: 'https://github.com/Esakkiraja1007/Weather-app',
      liveUrl: 'https://weather-app-nine-chi-kqwgnh9zmn.vercel.app/',
    },
    {
      id: 4,
      title: 'Personal Portfolio Website',
      image: project4,
      description:
        'A modern personal portfolio showcasing clean UI design, responsive layouts, modular card sections, and dynamic interactive state.',
      techStack: ['React.js', 'CSS3', 'JavaScript (ES6)', 'Vite', 'Git & GitHub'],
      githubUrl: 'https://github.com/Esakkiraja1007',
      liveUrl: 'https://example.com',
    },
  ];

  return (
    <section className="projects-container" id="projects">
      {/* Main Section Header */}
      <div className="projects-header">
        <span className="projects-badge">Portfolio Showcase</span>
        <h2 className="projects-title">
          Featured <span className="projects-gradient">Projects</span>
        </h2>
        <div className="projects-line"></div>
      </div>

      {/* Unified 2x2 Grid */}
      <div className="projects-grid">
        {projectsList.map((project) => (
          <ProjectCards
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}