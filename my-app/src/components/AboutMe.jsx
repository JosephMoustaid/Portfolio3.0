import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="sec-title">About Me</h2>
        <div className="about-content">
          <img src="path/to/your/photo.jpg" alt="Your Name" className="about-photo" />
          <div className="about-text">
            <p>Hello! I'm [Your Name], a passionate software developer with experience in frontend and backend technologies. I love creating beautiful and functional web applications that solve real-world problems.</p>
            <p>With a background in [Your Background], I have honed my skills in [Your Skills]. I am always eager to learn new technologies and take on challenging projects.</p>
            <p>In my free time, I enjoy [Your Hobbies]. Feel free to explore my portfolio and get in touch if you'd like to collaborate!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;