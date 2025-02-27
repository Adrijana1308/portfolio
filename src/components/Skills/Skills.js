import "./Skills.css";
import { useAppContext } from "../../AppContext";

function Skills() {
  const { isOn } = useAppContext();

  return (
    <div id="skills" className={`${isOn ? "dark-mode" : ""}`}>
      <div className="Skills">
        <h2>Skills</h2>
        <p>
          Here are some of my skills on which I have been working on for the
          past 5 years.
        </p>
        <div className="sections">
          <div className="sectionOfSkill reactSkill">
            <img
              className="iconOfSkill "
              src="https://www.svgrepo.com/show/452092/react.svg"
              alt="React Js icon"
            />
            <p className="skillText">React</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/452228/html-5.svg"
              alt="HTML icon"
            />
            <p className="skillText">HTML</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/452185/css-3.svg"
              alt="CSS icon"
            />
            <p className="skillText">CSS</p>
          </div>
          <div className="sectionOfSkill jsSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/349419/javascript.svg"
              alt="JS icon"
            />
            <p className="skillText">Javascript</p>
          </div>
          <div className="sectionOfSkill tsSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/374146/typescript-official.svg"
              alt="Ts icon"
            />
            <p className="skillText">Typescript</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/452130/vue.svg"
              alt="Vue icon"
            />
            <p className="skillText">Vue</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/452156/angular.svg"
              alt="Angular icon"
            />
            <p className="skillText">Angular</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/353498/bootstrap.svg"
              alt="Bootstrap icon"
            />
            <p className="skillText">Bootstrap</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/452088/php.svg"
              alt="PHP icon"
            />
            <p className="skillText">PHP</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/376337/node-js.svg"
              alt="Node Js icon"
            />
            <p className="skillText">Node.js</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/376358/c-plus-plus.svg"
              alt="C++ icon"
            />
            <p className="skillText">C++</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/355133/mysql.svg"
              alt="MySQL icon"
            />
            <p className="skillText">MySQL</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/354200/postgresql.svg"
              alt="Postgresql icon"
            />
            <p className="skillText">PostgreSQL</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/373845/mongo.svg"
              alt="Mongo icon"
            />
            <p className="skillText">Mongo</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/452091/python.svg"
              alt="Python icon"
            />
            <p className="skillText">Python</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/452210/git.svg"
              alt="Git icon"
            />
            <p className="skillText">Git</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/439171/github.svg"
              alt="Github icon"
            />
            <p className="skillText">Github</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/373874/netlify.svg"
              alt="Netlify icon"
            />
            <p className="skillText">Netlify</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/452129/vs-code.svg"
              alt="VS Code icon"
            />
            <p className="skillText">VS Code</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/452102/slack.svg"
              alt="Slack icon"
            />
            <p className="skillText">Slack</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/354048/material-ui.svg"
              alt="Material UI icon"
            />
            <p className="skillText">Material UI</p>
          </div>
          <div className="sectionOfSkill">
            <img
              className="iconOfSkill"
              src="https://www.svgrepo.com/show/475696/wordpress-color.svg"
              alt="Wordpress icon"
            />
            <p className="skillText">Wordpress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
