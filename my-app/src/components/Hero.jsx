import HeroAnimation from './HeroAnimation';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {ReactTyped} from 'react-typed';
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
              <motion.h1
                className="home__titles--tiltle jaw-dropping"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  duration: 1.5,
                }}
              >
                Moustaid Youssef.
              </motion.h1>
              < Scene />
              <div className="type-container">
                <ReactTyped
                  strings={[
                    "I'm a software engineer...",
                    "I'm passionate about LLM models...",
                    "I love building innovative solutions!"
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
