import React from "react";
import { projects } from "../constants/project";
import ContactButton from "./ContactButton";

export default function Project() {
  return (
    <div className="projects">
      <div className="project-heading">
        <h2>Projects</h2>
        <ContactButton />
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="viewLink">
              <a href={project.link} className="project-link">
                View Project
              </a>
              <a href={project.code} className="project-link">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
