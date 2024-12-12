import React from "react";
import Hero from "./Hero";

const technologies = {
  frontend: ["react.svg", "scss.svg", "vite.svg"],
  server: ["node.svg", "express.svg"],
  database: ["mongo.svg", "docker.svg"],
};

const HeroAnimation = () => {
  return (
    <div className="architecture-container">
      {/* Frontend Row */}
      <div className="tech-row">
        {technologies.frontend.map((tech, index) => (
          <div className="tech-icon" key={index}>
            <img src={`/assets/${tech}`} alt={tech} />
          </div>
        ))}
      </div>

      {/* Pipe */}
      <div className="pipe" />

      {/* Server Row */}
      <div className="tech-row">
        {technologies.server.map((tech, index) => (
          <div className="tech-icon" key={index}>
            <img src={`/assets/${tech}`} alt={tech} />
          </div>
        ))}
      </div>

      {/* Pipe */}
      <div className="pipe" />

      {/* Database Row */}
      <div className="tech-row">
        {technologies.database.map((tech, index) => (
          <div className="tech-icon" key={index}>
            <img src={`/assets/${tech}`} alt={tech} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroAnimation;
