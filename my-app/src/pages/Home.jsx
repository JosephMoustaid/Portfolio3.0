import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Skills from "../components/Skills";
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import AwardSection from '../components/AwardSection';
import MorphingBackground from '../effects/MorphingBackground';
import CustomCursor from '../utilities/CustomCursor';
import '../css/style.css'; 
function Home() {


  return (
    <div>
      <MorphingBackground  style={{zIndex:"jpg0"}}/>
      <CustomCursor />

      <div className="fixed-left">
        <ul>
            <li><a href="." className='cyan-link'  ><i className="bi bi-linkedin"></i></a></li> 
            <li><a href="." className='cyan-link'  ><i className="bi bi-github"></i></a></li>
            <li><a href="." className='cyan-link'><i className="bi bi-braces"></i></a></li>
            <li className='mb-0'><span></span></li>
        </ul>
      </div>
      <div className="fixed-right">
        <ul>
            <li><i  className="bi bi-mouse cyan-link"></i></li>
            <li className="email"><a className='cyan-link'  href="mailto:moustaidbusiness@gmail.com" >moustaidbusiness@gmail.com</a></li>
            <li><span></span></li>
        </ul>
      </div>

      <div id="loading-screen" style={{ position: 'relative' , zIndex:"0"}}>
        <l-ring size="60" color="coral"></l-ring>
        <div className="logoContainer">
          <svg
            className="containerforLoader"
            x="0px"
            y="0px"
            viewBox="0 0 40 40"
            height="40"
            width="40"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              className="track"
              fill="none"
              strokeWidth="4"
              pathLength="100"
              d="M29.760000000000005 18.72 c0 7.28 -3.9200000000000004 13.600000000000001 -9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.840000000000002 2.64 c -3.6 0 -6.88 -0.96 -9.76 -2.64 c0 -7.28 3.9200000000000004 -13.52 9.840000000000002 -16.96 c2.8800000000000003 -1.6800000000000002 6.24 -2.64 9.76 -2.64 S26.880000000000003 17.040000000000003 29.760000000000005 18.72 c5.84 3.3600000000000003 9.76 9.68 9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.76 2.64 c -3.6 0 -6.88 -0.96 -9.840000000000002 -2.64 c -5.84 -3.3600000000000003 -9.76 -9.68 -9.76 -16.96 c0 -7.28 3.9200000000000004 -13.600000000000001 9.76 -16.96 C25.84 5.120000000000001 29.760000000000005 11.440000000000001 29.760000000000005 18.72z"
            ></path>
            <path
              className="car"
              fill="none"
              strokeWidth="4"
              pathLength="100"
              d="M29.760000000000005 18.72 c0 7.28 -3.9200000000000004 13.600000000000001 -9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.840000000000002 2.64 c -3.6 0 -6.88 -0.96 -9.76 -2.64 c0 -7.28 3.9200000000000004 -13.52 9.840000000000002 -16.96 c2.8800000000000003 -1.6800000000000002 6.24 -2.64 9.76 -2.64 S26.880000000000003 17.040000000000003 29.760000000000005 18.72 c5.84 3.3600000000000003 9.76 9.68 9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.76 2.64 c -3.6 0 -6.88 -0.96 -9.840000000000002 -2.64 c -5.84 -3.3600000000000003 -9.76 -9.68 -9.76 -16.96 c0 -7.28 3.9200000000000004 -13.600000000000001 9.76 -16.96 C25.84 5.120000000000001 29.760000000000005 11.440000000000001 29.760000000000005 18.72z"
            ></path>
          </svg>
        </div>
      </div>
      
      <div style={{ position: 'relative' , zIndex:"1"}}>
        <Nav />
        <main>
          <Hero />
          <Skills />
          <TechStack />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;