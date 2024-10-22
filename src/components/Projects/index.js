import React from 'react';
import Header from '../Header'
import './index.css'

function Projects() {
  return (
    <>
    <Header />
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Covid Dashboard:</strong> A responsive Covid Dashboard where users can see state-wise Covid statistics.
          <br />
          Link: <a href="https://pjcovid19.ccbp.tech">Covid Dashboard</a>
        </li>
        <li>
          <strong>Todo-list Application:</strong> A Todo List application to manage tasks.
          <br />
          Link: <a href="https://prasanthtask.ccbp.tech">Todo-list</a>
        </li>
      </ul>
    </section>
    </>
  );
}

export default Projects;
