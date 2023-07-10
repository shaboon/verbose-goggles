import React from "react";
import picture from "./IMG_2470.jpg";

export default function About() {
  return (
    <div className="container col-10 p-3 mx-auto rendered">
      <h1 className="text-light">About Page</h1>
      <div className="container row">
        <article className="col-9">
          <p className="about-opener text-light">
            Hello World! My name is Sean Haboon, and I am studying with the goal
            to become a software-engineer of the full-stack flavor.
          </p>
          <p className="self-dox text-light">
            I am located in Greensboro, NC and am currently enrolled in the UNCC
            Full-Stack Coding bootcamp.
          </p>
          <p className="intro text-light">
            Since a young age, I've messed with both the physical internals of
            computers as well as the software side. As I have grown, I grew my
            ability to dissect and understand the inner workings of most things
            presented to me. While late to the field, I finally stumbled upon
            web-related code via FreeCodeCamp and a friend and found a slight
            affinity to it. While I may not be the most well-studied individual,
            I am fast at picking up nuiances and am always willing to learn.
            <br />
            During the bootcamp, I was presented with oppertunities to
            understand the fundamentals of web-development as well as the
            work-flow for team projects. Furthermore, each assignment revealed
            weaknesses within my approach to specific bugs and issues as well as
            my ability to understand content. Following the bootcamp, I not only
            walked away with a greater understanding of available resources, but
            also a solid foundation for team-based Web-Development.
          </p>
        </article>
        <div className="col-12 col-md-3">
          <img
            className="justify-content-center mx-auto portrait"
            src={picture}
            alt="picture of Sean Haboon"
          />
        </div>
      </div>
      <div className="container">
        <h2 className="text-light">Skills</h2>
        <article className="col-12 col-md-6 scroll-container">
          <ul className="text-light scroll-text">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Handlebars</li>
            <li>RESTful APIs</li>
            <li>JSON</li>
            <li>Command Line</li>
            <li>Object Oriented Programming</li>
            <li>Test Driven Development</li>
            <li>Progressive Web Applications</li>
            <li>Agile Development</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
