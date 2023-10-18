import React from 'react'
import { Link } from 'react-scroll';
import { useAppContext } from '../../AppContext';
import './Footer.css';



function Footer() {
  const { isOn } = useAppContext();

  return (
    <div className={`Footer ${isOn ? 'dark-mode' : ''}`}>
        <h2>adrijanababic4@gmail.com</h2>
        <div className='footer-links'>
            <Link to="about" spy={true} smooth={true} duration={500} className='footer-links'>About</Link>
            <Link to="skills" spy={true} smooth={true} duration={500} className='footer-links'>Skills</Link>
            <Link to="experience" spy={true} smooth={true} duration={500} className='footer-links'>Experience</Link>
            <Link to="projects" spy={true} smooth={true} duration={500} className='footer-links'>Projects</Link>
            <Link to="education" spy={true} smooth={true} duration={500} className='footer-links'>Education</Link>
        </div>
    </div>
  )
}

export default Footer