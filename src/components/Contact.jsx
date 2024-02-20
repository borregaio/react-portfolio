import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

const Contact = () => {
  return (
    <div>
      <Header />
      <h2>Contact</h2>
      <p>Email: your@email.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
      <p>GitHub: <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">Your GitHub</a></p>
      {/* Add phone number and CV link as needed */}
    </div>
  );
};

export default Contact;
