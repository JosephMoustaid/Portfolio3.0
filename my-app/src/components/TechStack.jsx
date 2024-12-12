import React from 'react';

function TechStack() {
  const techStacks = [
    {
      title: 'Software Development',
      description: `// Experted in OOP along with UI libraries: Python, JAVA, JAVASCRIPT, PHP, C++ and C#;`,
    },
    {
      title: 'Frontend Development',
      description: `// With over 18 months of constant projects-based learning: HTML, CSS, JS, Bootstrap, Node.js, React.js, NPM terminal commands;`,
    },
    {
      title: 'Backend Development',
      description: `// Managed couple of databases related to customer analytics: Data analysis, Data Prep & Visualisation, SQL, no SQL, MS Power BI;`,
    }
  ];

  return (
    <section id="techStack" className="w-75 m-auto text-center">
      <div className="medium-spacing">
        <h2 className="home__titles sec-title about__titles--tiltle scroll ">My Expertise.</h2>
        <h4 className="home__titles sec-title__helper scroll mb-2 ">Technologies I have been working with recently</h4>
        <div className="row medium-spacing ">
          {techStacks.map((stack, index) => (
            <div className="col-12 col-sm-12 col-md-4 mt-5" key={index}>
              <div className={`card-title card-title-${index + 1}`}> {stack.title} </div>
              <div className="card tech-card">
                <div className="card-body">
                  <div className="code-container">
                    <div className="code-header">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <pre className="code-text">
                      <code>
                        <span className="comment">{stack.description}</span><br />
                        <span className="keyword">class</span> <span className="variable">{stack.title.replace(/\s+/g, '')}</span> {'{'}<br />
                        &nbsp;&nbsp;<span className="keyword">public</span> <span className="type">String</span> <span className="variable">description</span> = <span className="string">"{stack.description}"</span>;<br />
                        {'}'}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
