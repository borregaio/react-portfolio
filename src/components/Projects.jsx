import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h2>Projects Page</h2>
        {/* Add your projects content here */}
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default Projects;
