import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import Scene from './Scene.jsx';

function Hero() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.35/build/spline-viewer.js';
    script.type = 'module';
    document.body.appendChild(script);
  }, []);

  return (
    <section id="home" className="hero hhhhhh">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8 col-xl-6" id="description">
            <motion.div
              className="home__titles m-sm-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {/* Jaw-Dropping Title Animation */}
              <motion.h1
                className="home__titles--tiltle jaw-dropping"
                initial={{ scale: 0.5, opacity: 0, rotate: -20, y: 50 }}
                animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 15,
                  delay: 0.5,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0], // Slight wobble effect on hover
                  textShadow: '0px 0px 20px rgba(255, 255, 255, 0.8)', // Glow effect
                  transition: { duration: 0.5, ease: 'easeInOut' },
                }}
                style={{
                  textShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)', // Initial glow
                }}
              >
                Moustaid Youssef.
              </motion.h1>

              {/* Scene Component */}
              <Scene />

              {/* Typed Text Animation */}
              <motion.div
                className="type-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
              >
                <ReactTyped
                  strings={[
                    "I'm a software engineer...",
                    "I'm passionate about LLM models...",
                    "I love building innovative solutions!",
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;