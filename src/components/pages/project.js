/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style/projectStyle.css";

function Project(props) {
  return (
    <>
      {props.projects.map((project) => (
        <div id="containerProject">
          <div className="card">
            <div className="imgbx">
              <img src={project.image} />
            </div>
            <div className="content">
              <h2>{project.title}</h2>
              <p key={project.id}>{project.description}</p>
              <p className="languages">Languages: {project.languages}</p>
              <p className="languages">Npm Packages: {project.packages}</p>
              <div className="containerProject1">
                <a href={project.repo} className="link">
                  See the repo
                </a>
                <a href={project.site} className="link">
                  See the live site!
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Project;
