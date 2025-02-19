import React from "react";
import { useAppContext } from "../../AppContext";
import "./Projects.css";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import project4 from "./images/project4.png";
import project5 from "./images/project5.png";
import project6 from "./images/project6.png";
import locksify from "./images/locksify.png";

function Projects() {
  const { isOn } = useAppContext();

  const projectsData = [
    {
      image: locksify,
      title: "Locksify",
      description:
        "The app has user/employees registration and login. The user can browse and select a hair salon, book an appointment which is then saved in the database. Employees have access to view all appointments, comments, and ratings after logging in",
      url: "https://locksify.netlify.app",
    },
    {
      image: project6,
      title: "Calendar",
      description:
        "A calendar with the capability to select days, months, and years, showcasing GitHub commit details through the API for the Calendar project. Last entry was November 2023 if you want to see commit details displayed.",
      url: "https://b2calendar.netlify.app",
    },
    {
      image: project1,
      title: "Password Generator",
      description:
        "A tool that creates random or customized passwords for users. It contains different combinations of characters such as letters, numbers, symbols, etc.",
      url: "https://github.com/Adrijana1308/password-generator",
    },
    {
      image: project2,
      title: "Chatbot",
      description:
        "This chatbot has an elegant and responsive user interface, ensuring a seamless experience across various devices. To generate a response to the user query, this chatbot uses the OpenAI API.",
      url: "https://github.com/Adrijana1308/chatbot",
    },
    {
      image: project3,
      title: "Instagram clone",
      description:
        "I created a simple Instagram-like interface using ReactJS, as one of my recent projects.",
      url: "https://github.com/Adrijana1308/insta-clone",
    },
    {
      image: project4,
      title: "Rock Paper Scissors game",
      description:
        "I have developed a basic Rock Paper Scissors game using HTML, CSS, and JavaScript.",
      url: "https://github.com/Adrijana1308/RockPaperScissors",
    },
    {
      image: project5,
      title: "Todo List",
      description: "A todo list app that has create, edit and delete options.",
      url: "https://github.com/Adrijana1308/todo-list",
    },
  ];

  return (
    <div id="projects" className={`${isOn ? "dark-mode" : ""}`}>
      <div className="Projects">
        <h2>Projects</h2>
        <p>Here are some of my projects on which I have been working on.</p>
        <div className="pro-sections">
          {projectsData.map((project, index) => (
            <div className="pro-section" key={index}>
              <img
                className="project-img"
                src={project.image}
                alt={project.title}
              />
              <p className="project-title">{project.title}</p>
              <p className="project-disc">{project.description}</p>
              <a href={project.url} target="_blank" rel="noreferrer">
                <button className={`code-button ${isOn ? "dark-mode" : ""}`}>
                  View project
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
