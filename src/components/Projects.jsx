import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Project from './Project';
import projectsData from './projectsData.json';

const Projects = () => (
  <div>
    <Header />
    <div className="container-fluid projects">
    <h1 className="m-5">Projects</h1>
    {projectsData.map(project => (
      <Project key={project.id} {...project} />
    ))}
    </div>
  </div>
);

export default Projects;
