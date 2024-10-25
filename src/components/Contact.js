import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Use navigate to programmatically change routes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://172.17.15.65:3000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSuccessMessage(data.message || 'Success'); // Set success message
      setTimeout(() => navigate('/'), 2000); // Navigate to main component after 2 seconds
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div className="contact-page">
      <h2 className="contact-heading">/Contact us/</h2>
      <h2 className="contact-subheading">Send us a message</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first-name">Name</label>
          <div className="form-row">
            <input
              type="text"
              id="first-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {successMessage && (
        <div className="success-card">
          <p>{successMessage}</p>
        </div>
      )}
      <div className="social-media">
        <p>Follow for more updates</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
