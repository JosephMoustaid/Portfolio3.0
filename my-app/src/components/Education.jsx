import React from 'react';

function Education() {
  const education = [
    {
      degree: 'High School Degree',
      year: '2018 - 2022',
      description: 'Focused on foundational computer science and mathematics, participating in coding competitions and extracurricular activities.'
    },
    {
      degree: 'Bachelor\'s Degree in Computer Science',
      year: '2022 - 2026',
      description: 'Studied advanced algorithms, software engineering, and AI. Worked on projects including a machine learning model for data analysis.'
    },
    {
      degree: 'Master\'s Degree in Software Engineering',
      year: '2026 - 2028',
      description: 'Specialized in system architecture and cloud computing, completing a thesis on distributed systems optimization.'
    }
  ];

  return (
    <section id="education" className="education-section mt-5">
      <div className="container">
      <h1 className="mt-5 pt-5 sec-title">About me.</h1>
        <div className="row">
          <div className="col-12 col-md-6"><h2 className="sec-title--helper">Education :</h2>
            <div className="timeline">
              {education.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <p className="year blue">{edu.year}</p>
                    <h3 className="degree">{edu.degree}</h3>
                    <p className="description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h2 className="sec-title--helper">Experience :</h2>
            <div className="timeline">
              {education.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <p className="year blue">{edu.year}</p>
                    <h3 className="degree">{edu.degree}</h3>
                    <p className="description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
