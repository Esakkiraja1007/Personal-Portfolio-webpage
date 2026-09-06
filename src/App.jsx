import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import './style/App.css';



export default function App() {
  return (
    <div className="portfolio-app">

      <header>
        <Navbar />
      </header>
      
      <main className="main-content">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>

      <footer>
        <Footer/>

      </footer>
     
    </div>
  );
}