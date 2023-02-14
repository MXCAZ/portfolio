import React from "react";
import "./style/styleHeader.css";

export function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <p>
          <strong>My Full Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/MXCAZ" target="_blank" rel="noreferrer">
            Francisco Sanchez
          </a>
        </p>
      </div>
      <hr />
      <div className="footerContainer2">
        <a href="/"> Linkedin</a> |{" "}
        <a href="https://github.com/MXCAZ"> Github</a>
      </div>
    </footer>
  );
}
