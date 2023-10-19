import React from 'react'
import { useAppContext } from '../../AppContext';
import './Footer.css';



function Footer() {
  const { isOn } = useAppContext();

  return (
    <div className={`Footer ${isOn ? 'dark-mode' : ''}`}>
        <h2>adrijanababic4@gmail.com</h2>
        <div className='footer-icons'>
              <img className='icons' src="https://www.svgrepo.com/show/452092/react.svg" alt="React Js icon" />
              <img className='icons' src="https://www.svgrepo.com/show/452228/html-5.svg" alt="HTML icon" />
              <img className='icons' src="https://www.svgrepo.com/show/452185/css-3.svg" alt="CSS icon" />
              <img className='icons' src="https://www.svgrepo.com/show/353925/javascript.svg" alt="JavaScript icon" />
              <img className='icons' src="https://www.svgrepo.com/show/353498/bootstrap.svg" alt="Bootstrap icon" />
              <img className='icons' src="https://www.svgrepo.com/show/354048/material-ui.svg" alt="Material UI icon" />
              <img className='icons' src="https://www.svgrepo.com/show/376337/node-js.svg" alt="Node Js icon" />
              <img className='icons' src="https://www.svgrepo.com/show/452091/python.svg" alt="Python icon" />
              <img className='icons' src="https://www.svgrepo.com/show/376358/c-plus-plus.svg" alt="C++ icon" />
              <img className='icons' src="https://www.svgrepo.com/show/355133/mysql.svg" alt="MySQL icon" />
              <img className='icons' src="https://www.svgrepo.com/show/354200/postgresql.svg" alt="Postgresql icon" />
              <img className='icons' src="https://www.svgrepo.com/show/373595/firebase.svg" alt="Firebase icon" />
              <img className='icons' src="https://www.svgrepo.com/show/452210/git.svg" alt="Git icon" />
              <img className='icons' src="https://www.svgrepo.com/show/439171/github.svg" alt="Github icon" />
              <img className='icons' src="https://www.svgrepo.com/show/373874/netlify.svg" alt="Netlify icon" />
              <img className='icons' src="https://www.svgrepo.com/show/452129/vs-code.svg" alt="VS Code icon" />
              <img className='icons' src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman icon" />
              <img className='icons' src="https://www.svgrepo.com/show/452202/figma.svg" alt="Figma icon" />
              <img className='icons' src="https://www.svgrepo.com/show/452102/slack.svg" alt="Slack icon" />
        </div>
    </div>
    
  )
}

export default Footer