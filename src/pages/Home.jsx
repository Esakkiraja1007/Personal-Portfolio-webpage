import { useState, useEffect} from 'react';
import myResume from '../assets/Esakkiraja.pdf';
import '../style/Home.css';



export default function Home() {
  const words = ['Esakki Raja', 'Frontend Developer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullWord = words[currentWordIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullWord.slice(0, currentText.length + 1));
        if (currentText.length + 1 === fullWord.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setCurrentText(fullWord.slice(0, currentText.length - 1));
        if (currentText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="home-container" id="home">
      <div className="home-centered-content">
        {/* Availability Badge */}
        <div className="status-badge">
          <span className="green-circle"></span>
          Ready for Interview &amp; Hire
        </div>

        <p className="greeting-text">Hello! I'm</p>

        {/* Big Centered Headline with Typewriter */}
        <h1 className="name-heading">
          <span className="gradient-text">{currentText}</span>
          <span className="blinking-bar">|</span>
        </h1>

        {/* Centered Bio */}
        <p className="description-text">
          Frontend Developer specializing in building responsive web applications,
          reusable component architectures, and clean user interfaces using React.js,
          modern JavaScript, and responsive design systems.
        </p>

        {/* Centered Call to Actions */}
        <div className="button-group">
          <a href={myResume} download="Esakki_Raja_Resume.pdf" className="resume-btn">
            Download Resume &darr;
          </a>
          <a href="#projects" className="projects-btn">
            View Projects &rarr;
          </a>
        </div>

        {/* Centered Quick Stats Bar */}
        <div className="quick-stats">
          <div className="stat-item">
            <strong>3+</strong>
            <span>Projects Built</span>
          </div>
          <div className="stat-item">
            <strong>2026</strong>
            <span>IT Graduate</span>
          </div>
          <div className="stat-item">
            <strong>React.js</strong>
            <span>Core Focus</span>
          </div>
          <div className="stat-item">
            <strong>Immediate</strong>
            <span>Availability</span>
          </div>
        </div>
      </div>
    </section>
  );
}