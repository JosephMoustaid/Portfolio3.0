import React, { useState } from 'react';
import ProjectComponent from '../components/ProjectComponent';

import CustomCursor from '../utilities/CustomCursor';
import MorphingBackground from '../effects/MorphingBackground';

import projectsData from "../projectsData/all";
import { useLocation } from 'react-router-dom';  // For capturing the path

import '../css/style.css'; 

function Project() {

  const location = useLocation();
  
  // Extract project name from the URL path (assuming project name is part of the path)
  const projectName = location.pathname.split('/').pop(); // Adjust based on your URL structure
  
  // Get project data based on the project name
  const projectData = projectsData[projectName];

  return (
    <div className='project-body'>
      <MorphingBackground  style={{zIndex:"0" }}/>
      <CustomCursor />

      <div id="loading-screen">
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

      <ProjectComponent 
       title={projectData["title"]}
       techStack={projectData["techStack"]}
       description={projectData["description"]}
       images={projectData["images"]}
       githubLink={projectData["githubLink"]}
       feautures = {projectData["feautures"] }
       next = {projectData["next"]}
       prev = {projectData["prev"]}
      />
    </div>
  );
}

export default Project;