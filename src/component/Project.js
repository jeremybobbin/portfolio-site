import React from 'react';

const getStyles = src => {
  return {
    "backgroundImage": `url("${src}")`
  };
}

const Project = props =>
    <div className={`project-${props.id}`} style={getStyles(props.src)}>
      <div className="project-overlay">
        <div className="hex-text-container">
          <h1>{props.title}</h1>
          <p>Featuring: {props.tech.join(', ')}</p>
        </div>
      </div>
      <div className="project-details">
        <div className="hex-text-container">
          <p>{props.description}</p>
          <a href={props.link}><button className="repo">Repo</button></a>
        </div>
      </div>
    </div>;

export default Project;
