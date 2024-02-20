import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import Header from './Header';
import profileImage from './images/profile.png';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="jumbotron container-fluid p-5 home">
        <h1 className="display-2">Hello, I'm Carlos!</h1>
        <h2 className="display-6">Welcome to my online portfolio</h2>
        <p className="lead">I code clean, efficient and responsive websites</p>
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
    </div>

  );
};

export default Home;
