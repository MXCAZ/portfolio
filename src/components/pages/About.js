import React from "react";
import "./style/aboutStyle.css";

function About() {
  return (
    <div>
      <div className="wrapper">
        <div className="testimonial">
          <article>
            <h1>about me</h1>
            <img src={require("./assets/benito.png")} alt="profile-pic" />
            <blockquote>
              Hi my name its Francisco Sanchez, I live on Utah i went to the
              university of vera-cruz on Mexico i graduated in business
              administration, right now im taking a web pager design curse on
              the Utah university, during this curse i have learned how to
              create professionals web pages using the newest computational
              languages, my dedication its to continue learning about new web
              design trends and concepts so i can be valuable member of my work
              team.
            </blockquote>
            <h5>Francisco</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;
