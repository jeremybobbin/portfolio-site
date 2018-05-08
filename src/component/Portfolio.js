import React from 'react';
import ProjectList from './ProjectList';


export default class Portfolio extends React.Component {
  render() {
    return (
      <main className="portfolio">
        <h1 className="portfolio-title">Portfolio</h1>
          <div className="skills">
            <h2>Skills</h2>
          </div>
        <h2 className="project-title">My Projects</h2>
          <div className="projects clear">
            <ProjectList/>
          </div>
      </main>
    );
  }
}
