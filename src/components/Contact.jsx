import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (you can send the data to a server or perform any other action)
    console.log('Form submitted:', formData);

    // Reset form after submission
    setFormData(initialFormData);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {/* First Column - List */}
          <div className="col-md-6">
          <h1 className="m-5">Contact links</h1>
            <div className="list-group m-5" style={{ maxWidth: "300px" }}>
              <Link to="mailto:c.borrega@proton.me" className="list-group-item list-group-item-action" aria-current="true">
                c.borrega@proton.me
              </Link>
              <Link to="https://drive.google.com/file/d/1AfhdNU2lRLLAt0Rf49UK2_zbpZejf63X/view?usp=sharing" download="resume.pdf" className="list-group-item list-group-item-action" aria-current="true">
                Download my resume
              </Link>
              <Link to="https://www.linkedin.com/in/carlosborrega/" className="list-group-item list-group-item-action" aria-current="true">
                LinkedIn
              </Link>
              <Link to="https://github.com/borregaio" className="list-group-item list-group-item-action" aria-current="true">
                GitHub
              </Link>
            </div>
          </div>

          {/* Second Column - Form */}
          <div className="col-md-6">
            <h1 className="m-5">Send me a message</h1>
            <form onSubmit={handleSubmit} className="m-5" style={{ maxWidth: "300px" }}>
              <div className="form-group p-2">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group p-2">
                <label htmlFor="exampleInputEmail1">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group p-2">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-success m-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
