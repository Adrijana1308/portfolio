import React from "react";
import { useAppContext } from "../../AppContext";
import "./Footer.css";

function Footer() {
  const { isOn } = useAppContext();

  return (
    <div className={`Footer ${isOn ? "dark-mode" : ""}`}>
      <h2>adrijanababic4@gmail.com</h2>
      <div className="footer-icons">
        <img
          className="icons"
          src="https://www.svgrepo.com/show/452092/react.svg"
          alt="React Js icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/452228/html-5.svg"
          alt="HTML icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/452185/css-3.svg"
          alt="CSS icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/353925/javascript.svg"
          alt="JavaScript icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/374146/typescript-official.svg"
          alt="Ts icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/452088/php.svg"
          alt="PHP icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/353498/bootstrap.svg"
          alt="Bootstrap icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/452130/vue.svg"
          alt="Vue icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/376337/node-js.svg"
          alt="Node Js icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/354423/symfony.svg"
          alt="Symfony icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/374142/twig.svg"
          alt="Twig icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/355133/mysql.svg"
          alt="MySQL icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/354200/postgresql.svg"
          alt="Postgresql icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/452210/git.svg"
          alt="Git icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/439171/github.svg"
          alt="Github icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/452156/angular.svg"
          alt="Angular icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/452129/vs-code.svg"
          alt="VS Code icon"
        />
        <img
          className="icons"
          src="https://www.svgrepo.com/show/452102/slack.svg"
          alt="Slack icon"
        />
      </div>
    </div>
  );
}

export default Footer;
