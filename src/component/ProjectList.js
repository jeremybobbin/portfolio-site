import React from 'react';

import Project from './Project';


export default class ProjectList extends React.Component {

  constructor() {
    super();
    this.projects =
     [{
        id: 1,
        title: "Web Framework",
        technologies: ["Java"],
        description: "A simple HTTP request handling framework that exposes selected static files",
        src: "https://images.pexels.com/photos/34085/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
        link: "https://github.com/jeremybobbin/vanilla-java-web-server"
      },
      {
        id: 2,
        title: "Poker Bot",
        technologies: ["Java", "TensorFlow"],
        description: "An object-oriented poker simulation played by two 'TensorFlow' neural networks.",
        src: "https://images.pexels.com/photos/269630/pexels-photo-269630.jpeg?auto=compress&cs=tinysrgb&h=350",
        link: "https://github.com/jeremybobbin/com.jeremybobbin.poker"
      },
      {
        id: 3,
        title: "Portfolio Site",
        technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB", "React", "Express", "Mongoose"],
        description: "This site.",
        src: "https://images.pexels.com/photos/268435/pexels-photo-268435.jpeg?auto=compress&cs=tinysrgb&h=350",
        link: "https://jeremybobbin.com"
      }];
  }

  render() {
    return (
      <div className="projects">
          {
            this.projects.map((proj, index) =>
              <Project
                key={proj.id}
                id={proj.id}
                title={proj.title}
                description={proj.description}
                link={proj.link}
                src={proj.src}
                tech={proj.technologies}/>
            )
          }
      </div >
    );
  }
}
