import React from "react";
import "./pages/style/styleHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </label>
        <label className="logo">Francisco Sanchez </label>
        <ul className="ul">
          <li>
            <a
              href="#About"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }>
              About
            </a>
          </li>
          <li>
            <a
              href="#Portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }>
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }>
              Contact
            </a>
          </li>
          <li>
            <a
              href="#Resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
