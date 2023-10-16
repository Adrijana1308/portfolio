import './About.css';
import foto from './photo.jpg'

function About() {
  return (
    <div id="about">
    <div className="About">
        <img className='foto' src={foto} alt="profile"/>
        <div>
          <h1>Hi, I am Adrijana Babić</h1>
          <p>I am a passionate computer science student who strives to create intuitive and visually appealing websites and web apps. I am dedicated to continuous learning and improving my skills in web development.</p>
          <a target="_blank" rel="noreferrer" href="https://github.com/Adrijana1308"><button className='github-link'>Github Profile</button></a>
        </div>
    </div>
    </div>
  );
}

export default About;