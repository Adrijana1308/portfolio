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
          <div className="section">
            <p>Frontend</p>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/452092/react.svg"
                alt="React Js icon"
              />
              React Js
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/452228/html-5.svg"
                alt="HTML icon"
              />
              HTML
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/452185/css-3.svg"
                alt="CSS icon"
              />
              CSS
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/353925/javascript.svg"
                alt="JavaScript icon"
              />
              JavaScript
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/353498/bootstrap.svg"
                alt="Bootstrap icon"
              />
              Bootstrap
            </button>
          </div>
          <div className="section">
            <p>Backend</p>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/376337/node-js.svg"
                alt="Node Js icon"
              />
              Node Js
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/452091/python.svg"
                alt="Python icon"
              />
              Python
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/376358/c-plus-plus.svg"
                alt="C++ icon"
              />
              C++
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/355133/mysql.svg"
                alt="MySQL icon"
              />
              MySQL
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/354200/postgresql.svg"
                alt="Postgresql icon"
              />
              Postgresql
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/373845/mongo.svg"
                alt="Mongo icon"
              />
              Mongo
            </button>
          </div>
          <div className="section">
            <p>Other</p>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/452210/git.svg"
                alt="Git icon"
              />
              Git
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/439171/github.svg"
                alt="Github icon"
              />
              Github
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/373874/netlify.svg"
                alt="Netlify icon"
              />
              Netlify
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/452129/vs-code.svg"
                alt="VS Code icon"
              />
              VS Code
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/452102/slack.svg"
                alt="Slack icon"
              />
              Slack
            </button>
            <button className={`skill ${isOn ? "dark-mode" : ""}`}>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/354048/material-ui.svg"
                alt="Material UI icon"
              />
              Material UI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
