import React from "react";
import Project from "./project";
import "./style/portfolio.css";

const projects = [
  {
    id: 0,
    title: "Twytter",
    languages: "html, css, javascript, handlebars",
    packages: "express.js, bycrypt, env, SQL, handlebars",
    image: new URL("./assets/twytter.png", import.meta.url),
    description: "An a social media where you can follow other users",
    repo: "https://github.com/MXCAZ/twytter",
    site: "https://twytter-redo.herokuapp.com/",
  },

  {
    id: 1,
    title: "Weather Dashboard",
    languages: "Html,css, javascript, bootstrap",
    packages: "None",
    image: new URL("./assets/weather-app.png", import.meta.url),
    description:
      "An app that use an a weather API to find the weather on a specific city",
    repo: "https://github.com/MXCAZ/Weather-Dashboard",
    site: "https://mxcaz.github.io/Weather-Dashboard/",
  },

  {
    id: 2,
    title: "Tech-Blog",
    languages: "Html,css, javascript, bootstrap",
    packages:
      "express.js, bycript, Dotenv, MySQL, Sequelize,Handlebars,Heroku ",
    image: new URL("./assets/tech-blog.png", import.meta.url),
    description:
      "An a web-blog-site where you can make an user and start an a blog",
    repo: "https://github.com/MXCAZ/Tech-Blog",
    site: "https://francisco-tech-blog.herokuapp.com/",
  },
  {
    id: 3,
    title: "Concert Finder",
    languages: "Html,css, javascript, Bulma",
    packages: "None",
    image: new URL("./assets/concertFinder.png", import.meta.url),
    description:
      "When a user puts in the name of an artist, it will return a list of up to three of their upcoming concerts, the dates, cities, venues, average price, and a link to buy tickets. You can also learn more about the artist by clicking a button. ",
    repo: "https://github.com/MXCAZ/project-01-music-suggester",
    site: "https://prkrgreenwell.github.io/project-01-music-suggester/firstindex.html",
  },
  {
    id: 4,
    title: "Code-Quiz",
    languages: "Html,CSS, javascript",
    packages: "None",
    image: new URL("./assets/quiz.png", import.meta.url),
    description: "it is a quiz application using HTML, CSS and Javascript. ",
    repo: "https://github.com/MXCAZ/MXCA-Code-Quiz",
    site: "https://mxcaz.github.io/MXCA-Code-Quiz/index.html",
  },
  {
    id: 5,
    title: "Text-editor",
    languages: "Html,CSS, javascript, bootstrap ",
    packages: "Concurrently, express, webpack",
    image: new URL("./assets/text-editor.png", import.meta.url),
    description:
      "This application takes an existing text editor app and adds functionality for it to work as a PWA (Progressive Web App) and function online. This application its deployed to heroku and also functions offline. ",
    repo: "https://github.com/MXCAZ/PWA-Text-editor",
    site: "https://francisco-pwa-text-editor.herokuapp.com/",
  },
  {
    id: 6,
    title: "Note-Taker",
    languages: "Html,CSS, javascript, bootstrap ",
    packages: "express.js, ",
    image: new URL("./assets/note-taker.png", import.meta.url),
    description:
      "Write extensive notes and keep track of tasks, then save them for later reading or deletion. ",
    repo: "https://github.com/MXCAZ/Note-Taker",
    site: "https://francisco-note-taker.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div div className="portfolio">
      <h2 className="center">Portfolio</h2>

      <div className="containerPortfolio">
        <Project projects={projects} />
      </div>
    </div>
  );
}

export default Portfolio;
