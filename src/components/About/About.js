import { useAppContext } from "../../AppContext";
import "./About.css";
import foto from "./profPic.jpg";

function About() {
  const { isOn } = useAppContext();

  return (
    <div id="about" className={`${isOn ? "dark-mode" : ""}`}>
      <div className={`About ${isOn ? "dark-mode" : ""}`}>
        <div className="gradient-border">
          <img className="foto" src={foto} alt="profile" />
        </div>
        <div>
          <h1>Hi, I am Adrijana Sviben</h1>
          <p>
            Bachelor of Information Technology with strong motivation and a
            desire to learn new technologies and enhance knowledge of existing
            ones. I have an eye for detail, excellent problem-solving skills,
            and the ability to work effectively in a team environment.
          </p>
          <div className="gradient-border-buttons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Adrijana1308"
            >
              <button className={`code-button ${isOn ? "dark-mode" : ""}`}>
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
