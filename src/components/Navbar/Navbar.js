import './Navbar.css';
import logo from './resume.png';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleNav = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);

      if (!newIsMobile) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`Navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-content">
        <img className='logo' src={logo} alt="Logo" />
        <p className='title'>Portfolio</p>
        {isMobile && (
          <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          </div>
        )}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="about" spy={true} smooth={true} duration={500} className='link' onClick={toggleNav}>About</Link>
          <Link to="skills" spy={true} smooth={true} duration={500} className='link' onClick={toggleNav}>Skills</Link>
          <Link to="experience" spy={true} smooth={true} duration={500} className='link' onClick={toggleNav}>Experience</Link>
          <Link to="projects" spy={true} smooth={true} duration={500} className='link' onClick={toggleNav}>Projects</Link>
          <Link to="education" spy={true} smooth={true} duration={500} className='link' onClick={toggleNav}>Education</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;