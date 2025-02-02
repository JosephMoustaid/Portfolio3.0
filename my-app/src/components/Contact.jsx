import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // Import EmailJS
import useInView from '../hooks/useInView'; // Custom hook to detect visibility
import contactImg from '../assets/images/contact.avif';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false); // Track sending state
  const [isSent, setIsSent] = useState(false); // Track if the email was sent
  const [error, setError] = useState(null); // Track errors

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, 0.2); // Track visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); // Set sending state to true
    setError(null); // Reset error state

    try {
      // Send the email using EmailJS
      await emailjs.send(
        'service_zayc11f', // Replace with your EmailJS Service ID
        'template_oy1fymj', // Replace with your EmailJS Template ID
        formData,
        '1oS4zcv-TOhP2Vwoz' // Replace with your EmailJS User ID
      );

      setIsSent(true); // Set sent state to true
      alert('Thank you for your message!'); // Notify the user
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (err) {
      setError('Failed to send the message. Please try again.'); // Handle errors
      console.error('Error sending email:', err);
    } finally {
      setIsSending(false); // Reset sending state
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className={`contact-section section-animation ${isInView ? 'visible' : ''}`} // Add class dynamically
    >
      <motion.h2 className="sec-title" id='contact'>Get in Touch</motion.h2>
      <div className="container" >
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
                disabled={isSending} // Disable the button while sending
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {error && <p className="error-message">{error}</p>}
              {isSent && <p className="success-message">Message sent successfully!</p>}
            </form>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <p>
          You can also reach me at{' '}
          <a href="mailto:moustaidbusiness@gmail.com">moustaidbusiness@gmail.com</a>
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