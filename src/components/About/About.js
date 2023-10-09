import './About.css';
import foto from './photo.jpg'

function About() {
  return (
    <div id="about">
    <div className="About">
        <img className='foto' src={foto} alt="profile"/>
        <div>
          <h1>Hi, I am Adrijana Babić</h1>
          /*<h2>I am a Frontend Developer</h2>*/
          <p>I am a passionate computer science student who strives to create intuitive and visually appealing websites and web apps. Although I lack formal work experience in the industry, I am dedicated to continuous learning and improving my skills in front-end development.</p>
          <a target="_blank" rel="noreferrer" href="https://github.com/Adrijana1308"><button className='github-link'>Github Profile</button></a>
        </div>
    </div>
    </div>
  );
}

export default About;