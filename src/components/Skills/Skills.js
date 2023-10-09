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
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452092/react.svg" />React Js</button>
              <button className='skill'><img className='icon' src="data:image/png;base64,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" />Next Js</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452228/html-5.svg" />HTML</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452185/css-3.svg" />CSS</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/353925/javascript.svg" />JavaScript</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/353498/bootstrap.svg" />Bootstrap</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/354048/material-ui.svg" />Material UI</button>
            </div>
            <div className='section'>
              <p>Backend</p>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/376337/node-js.svg" />Node Js</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452091/python.svg" />Python</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/376358/c-plus-plus.svg" />C++</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/355133/mysql.svg" />MySQL</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/354200/postgresql.svg" />Postgresql</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/373595/firebase.svg" />Firebase</button>
            </div>
            <div className='section'>
              <p>Other</p>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452210/git.svg" />Git</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/512317/github-142.svg" />Github</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/373874/netlify.svg" />Netlify</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452129/vs-code.svg" />VS Code</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/354202/postman-icon.svg" />Postman</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452202/figma.svg" />Figma</button>
              <button className='skill'><img className='icon' src="https://www.svgrepo.com/show/452102/slack.svg" />Slack</button>
            </div>
        </div> 
    </div>
    </div>
  );
}

export default Skills;