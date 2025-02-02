import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MorphingBackground from '../effects/MorphingBackground';
import CustomCursor from '../utilities/CustomCursor';
import { FaArrowRight } from "react-icons/fa";

function About() {
  const [openSection, setOpenSection] = useState('who-am-i');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Framer Motion animation variants
  const variants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <div>
      <MorphingBackground style={{ zIndex: "0" }} />
      <CustomCursor />

      {/* Fixed Social Links */}
      <div className="fixed-left">
        <ul>
        <li><a href="https://www.linkedin.com/in/youssef-moustaid-71013a240?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bpo6WFMZATsiUzASxCRvzfw%3D%3D" className='cyan-link'  ><i className="bi bi-linkedin"></i></a></li> 
            <li><a href="https://github.com/JosephMoustaid" className='cyan-link'  ><i className="bi bi-github"></i></a></li>
            <li><a href="https://www.hackerrank.com/profile/josephjoestar" className='cyan-link'><i className="bi bi-braces"></i></a></li>
            <li className='mb-0'><span></span></li>
        </ul>
      </div>

      {/* Fixed Email and Scroll Indicator */}
      <div className="fixed-right">
        <ul>
          <li><i className="bi bi-mouse cyan-link"></i></li>
          <li className="email"><a className='cyan-link' href="mailto:moustaidbusiness@gmail.com">moustaidbusiness@gmail.com</a></li>
          <li><span></span></li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: "1" }}>
        <Nav />
        <main className="about-main-layout">
          {/* Hero Section */}
          <section className="hero-section">
            <h1>About Me</h1>
            <p className="tagline">
              I’m a passionate developer and designer who loves creating meaningful and impactful digital experiences.
            </p>
            <a className='custom-button mb-5' href='blog'>Blog <FaArrowRight /> </a>
          </section>

          {/* Accordion Section */}
          <section className="dropdown-section shadow">
          {['who-am-i', 'what-i-do', 'my-journey', 'lets-work-together'].map((section, index) => (
            <div
              key={index}
              className={`dropdown-item ${openSection === section ? 'open' : ''}`}
              style={index === 3 ? { borderBottom: '0px' } : {}}
            >
              <h2 onClick={() => toggleSection(section)}>
                {section === 'who-am-i' && 'Who Am I'}
                {section === 'what-i-do' && 'What I Do'}
                {section === 'my-journey' && 'My Journey'}
                {section === 'lets-work-together' && "Let's Work Together"}
                <i
                  className={`bi me-2 ${openSection === section ? 'bi-chevron-up' : 'bi-chevron-down'}`}
                  style={{ float: 'right' }}
                ></i>
              </h2>
              <motion.div
                className="dropdown-content"
                initial="closed"
                animate={openSection === section ? 'open' : 'closed'}
                variants={variants}
              >
                {section === 'who-am-i' && (
                  <>
                    <br />
                    <h4>About Me</h4>
                    <p>
                      I am a <strong>software engineering student</strong> with a passion for <em>art</em>. My work revolves around
                      combining technical expertise with creative vision to deliver innovative solutions.
                    </p>
                    <ul>
                      <li>Specialist in immersive web technologies.</li>
                      <li>An artist who enjoys creating paintings that inspire and evoke emotions.</li>
                      <li>Always exploring new ways to merge creativity with technology.</li>
                    </ul>
                    <p>
                      Learn more about my artwork on my{' '}
                      <a href="https://my-portfolio.com" target="_blank" rel="noopener noreferrer">
                        portfolio website
                      </a>.
                    </p>
                  </>
                )}
                {section === 'what-i-do' && (
                  <>
                    <br />
                    <h4>Professional Focus</h4>
                    <p>
                      I specialize in developing <strong>immersive virtual environments</strong> and scalable web applications.
                    </p>
                    <ul>
                      <li>Building platforms using <em>MERN</em>, <em>Django</em>, and <em>.NET</em>.</li>
                      <li>Creating 3D worlds with technologies like <strong>A-Frame</strong> and <strong>React</strong>.</li>
                      <li>Integrating advanced user experiences with <em>state-of-the-art tools</em>.</li>
                    </ul>
                    <p>
                      Check out my GitHub repository for open-source projects:
                      <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                        {' '}
                        GitHub Profile
                      </a>.
                    </p>
                  </>
                )}
                {section === 'my-journey' && (
                  <>
                    <br />
                    <h4>How It All Began</h4>
                    <p>
                      My journey began with console applications and evolved into crafting complex web platforms. Along the way, I:
                    </p>
                    <ol>
                      <li>Learned programming languages like <em>Java</em>, <em>Python</em>, and <em>JavaScript</em>.</li>
                      <li>Built immersive applications with <strong>React</strong> and <strong>Node.js</strong>.</li>
                      <li>Explored creative expression through painting and design.</li>
                    </ol>
                    <p>These experiences have shaped my approach to problem-solving and creativity.</p>
                  </>
                )}
                {section === 'lets-work-together' && (
                  <>
                    <br />
                    <h4>Collaborate With Me</h4>
                    <p>
                      Are you looking for someone with a unique blend of <strong>technical expertise</strong> and <em>artistic vision</em>? Let's
                      bring innovative ideas to life!
                    </p>
                    <p>
                      Whether it's building a platform, creating an immersive environment, or developing an artistic concept, I'm here to
                      help. Feel free to{' '}
                      <a href="mailto:your-email@example.com">reach out via email</a> for collaboration opportunities.
                    </p>
                  </>
                )}
              </motion.div>
            </div>
          ))}
        </section>

        </main>
        <Footer />
      </div>
    </div>
  );
}

export default About;
