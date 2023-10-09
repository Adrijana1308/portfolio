import React, { useState } from 'react';
import './Projects.css';
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/project3.png';
import project4 from './images/project4.png';
import project5 from './images/project5.png';



function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      image: project1,
      title: 'Password Generator',
      description:
        'A tool that creates random or customized passwords for users. It contains different combinations of characters such as letters, numbers, symbols, etc.',
    },
    {
      image: project2,
      title: 'Chatbot',
      description:
        'This chatbot has an elegant and responsive user interface, ensuring a seamless experience across various devices. To generate a response to the user query, this chatbot uses the OpenAI API.',
    },
    {
      image: project3,
      title: 'Instagram clone',
      description: 'I created a simple Instagram-like interface using ReactJS.',
    },
    {
      image: project4,
      title: 'Rock Paper Scissors game',
      description: 'I have developed a basic Rock Paper Scissors game using HTML, CSS, and JavaScript.',
    },
    {
      image: project5,
      title: 'Todo List',
      description: 'A todo list app that has create, edit and delete options.',
    },
  ];

  return (
    <div id="projects">
      <div className="Projects">
        <h2>Projects</h2>
        <p>Here are some of my projects on which I have been working on during my last year of college.</p>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;