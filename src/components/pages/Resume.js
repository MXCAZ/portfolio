import React from "react";
import "./style/skills.css";

export function Resume() {
  return (
    <div className="container">
      <div className="container1">
        <h2>Skills</h2>
        <p>
          I am an enthusiastic learner. Here are a couple of languages and tools
          I've worked with.
        </p>
      </div>
      <div className="container2">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>MySQL</li>
          <li>API/JSON</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="container3">
        <ul>
          <li>Bulma</li>
          <li>JQuerry</li>
          <li>React</li>
          <li>Wordpress</li>
          <li>Python</li>
          <li>Mongo</li>
        </ul>
      </div>
    </div>
  );
}
