import React, { useEffect } from 'react';
import HeroAnimation from './HeroAnimation';
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
          <div className="col-8" id="description">
            <div className="home__titles m-sm-auto">
              <h1 className="home__titles--tiltle">Moustaid Youssef.</h1>
              <div className="type-container">
                <h4 className="home__titles--helper typed">I'm a software engineer that is interested in LLM models and innovation. </h4>
              </div>
            </div>
          </div>
          {/*
          <div className="col-12 col-md-6 offset-md-2">
            
            <div className="glow-effects">
              <div className="glow-circle"></div>
              <div className="glow-line"></div>
              <div className="glow-circle small"></div>
            </div>
            
            <section style={{ height: '640px' }}>
              <spline-viewer url="https://prod.spline.design/Ys-b1MG3DJDsHUA8/scene.splinecode"></spline-viewer>
            </section>
             
          </div>
          */}
        </div>
      </div>
      
    </section>
  );
}

export default Hero;

