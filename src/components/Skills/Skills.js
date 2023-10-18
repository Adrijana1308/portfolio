import './Skills.css';
import { useAppContext } from '../../AppContext';


function Skills() {

  const { isOn } = useAppContext();

  return (
    <div id="skills" className={`${isOn ? 'dark-mode' : ''}`}>
    <div className="Skills">
      <h2>Skills</h2>
      <p>Here are some of my skills on which I have been working on for the past 4 years.</p>
        <div className='sections'> 
            <div className='section'>
              <p>Frontend</p>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/452092/react.svg" />React Js</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/452228/html-5.svg" />HTML</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/452185/css-3.svg" />CSS</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/353925/javascript.svg" />JavaScript</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/353498/bootstrap.svg" />Bootstrap</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/354048/material-ui.svg" />Material UI</button>
            </div>
            <div className='section'>
              <p>Backend</p>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/376337/node-js.svg" />Node Js</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/452091/python.svg" />Python</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/376358/c-plus-plus.svg" />C++</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/355133/mysql.svg" />MySQL</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/354200/postgresql.svg" />Postgresql</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/373595/firebase.svg" />Firebase</button>
            </div>
            <div className='section'>
              <p>Other</p>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/452210/git.svg" />Git</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/439171/github.svg" />Github</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/373874/netlify.svg" />Netlify</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/452129/vs-code.svg" />VS Code</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/354202/postman-icon.svg" />Postman</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/452202/figma.svg" />Figma</button>
              <button className={`skill ${isOn ? 'dark-mode' : ''}`}><img className='icon' src="https://www.svgrepo.com/show/452102/slack.svg" />Slack</button>
            </div>
        </div> 
    </div>
    </div>
  );
}

export default Skills;