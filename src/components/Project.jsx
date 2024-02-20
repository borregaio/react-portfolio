import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = (props) => (
  <div className="card m-5 border-0">
    <img className="card-img-top" src={props.screenshot} alt={props.title} />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <Link to={props.githubLink} className="btn btn-success m-1">
        GitHub repository
      </Link>
      <Link to={props.deployedLink} className="btn btn-success m-1">
        Live site
      </Link>
    </div>
  </div>
);

export default Project;
