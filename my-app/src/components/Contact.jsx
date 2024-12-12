import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView'; // Custom hook to detect visibility
import contactImg from '../assets/images/contact.avif';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, 0.2); // Track visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
  };

  return (
    <motion.section
      ref={sectionRef}
      className={`contact-section section-animation ${isInView ? 'visible' : ''}`} // Add class dynamically
    >
      <motion.h2 className="sec-title">Get in Touch</motion.h2>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="p-2 contact-helper">
              <h4>Let's discuss whatever you have in mind</h4>
              <img
                className="img-hover-effect" // Apply hover effect class here
                src={contactImg}
                alt="Contact Image"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-hover-effect" // Apply button hover effect class
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <p>
          You can also reach me at{' '}
          <a href="moustaidbusiness@gmail.com">moustaidbusiness@gmail.com</a>
        </p>
        <p>
          Or connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/youssef-moustaid-71013a240?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4BBoEOAFRkCv9cOWkMWVXg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </motion.section>
  );
};

export default Contact;

