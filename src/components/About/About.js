import { useAppContext } from "../../AppContext";
import "./About.css";
import foto from "./photo.jpg";

function About() {
  const { isOn } = useAppContext();

  return (
    <div id="about" className={`${isOn ? "dark-mode" : ""}`}>
      <div className={`About ${isOn ? "dark-mode" : ""}`}>
        <img className="foto" src={foto} alt="profile" />
        <div>
          <h1>Hi, I am Adrijana Sviben</h1>
          <p>
            Bachelor of Information Technology with strong motivation and a
            desire to learn new technologies and enhance knowledge of existing
            ones. I have an eye for detail, excellent problem-solving skills,
            and the ability to work effectively in a team environment.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Adrijana1308"
          >
            <button className={`github-link ${isOn ? "dark-mode" : ""}`}>
              Github Profile
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
