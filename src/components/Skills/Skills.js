import './Skills.css';

function Skills() {
  return (
    <div id="skills">
    <div className="Skills">
      <h2>Skills</h2>
      <p>Here are some of my skills on which I have been working on for the past 4 years.</p>
        <div className='sections'> 
            <div className='section'>
              <p>Frontend</p>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452092/react.svg" alt="React Js icon" />React Js</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452228/html-5.svg" alt="HTML icon" />HTML</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452185/css-3.svg" alt="CSS icon" />CSS</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/353925/javascript.svg" alt="JavaScript icon" />JavaScript</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/353498/bootstrap.svg" alt="Bootstrap icon" />Bootstrap</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/354048/material-ui.svg" alt="Material UI icon" />Material UI</button>
            </div>
            <div className='section'>
              <p>Backend</p>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/376337/node-js.svg" alt="Node Js icon" />Node Js</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452091/python.svg" alt="Python icon" />Python</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/376358/c-plus-plus.svg" alt="C++ icon" />C++</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/355133/mysql.svg" alt="MySQL icon" />MySQL</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/354200/postgresql.svg" alt="Postgresql icon" />Postgresql</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/373595/firebase.svg" alt="Firebase icon" />Firebase</button>
            </div>
            <div className='section'>
              <p>Other</p>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452210/git.svg" alt="Git icon" />Git</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/512317/github-142.svg" alt="Github icon" />Github</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/373874/netlify.svg" alt="Netlify icon" />Netlify</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452129/vs-code.svg" alt="VS Code icon" />VS Code</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman icon" />Postman</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452202/figma.svg" alt="Figma icon" />Figma</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452102/slack.svg" alt="Slack icon" />Slack</button>
            </div>
        </div> 
    </div>
    </div>
  );
}

export default Skills;