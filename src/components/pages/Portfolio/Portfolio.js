import React from "react";
import github from "./img/github.png";
import website from "./img/world-wide-web.png";
import cms from "./img/cmsrunning.png";
import work from "./img/workday.png";
import password from "./img/password-gen.png";
import finis from "./img/finis.png";
import marvel from "./img/marvel.png";
import proj3 from "./img/NoImageAvailable.png";

export default function Projects() {
  return (
    <div className="container col-10 row justify-content-center mx-auto my-5 p-5 rendered">
      <h1 className="col-12 row justify-content-center">My Projects</h1>
      <article className="bg-secondary rounded col-12 col-md-3 mx-1 p-2 my-3">
        <img className="mx-auto proj-img" src={cms} alt="cms menu"></img>
        <div className="container row">
          <section className="col-9 text-align-center">
            Employee Tracker: CMS
          </section>
          <a
            className="col-3 justify-content-center text-align-center"
            href="https://github.com/shaboon/silver-palm-tree"
          >
            <img
              src={github}
              className="link-icon"
              alt="Github Logo and Link"
            />
          </a>
        </div>
      </article>
      <article className="bg-secondary rounded col-12 col-md-3 mx-1 p-2 my-3">
        <img
          className="mx-auto proj-img"
          src={work}
          alt="Work Day Scheduler screenshot"
        ></img>
        <div className="container row">
          <section className="col-9 text-align-center">
            Work Day Scheduler
          </section>
          <a
            className="col-1"
            href="https://github.com/shaboon/potential-guacamole"
          >
            <img
              src={github}
              className="link-icon mx-1"
              alt="Github Logo and Link"
            />
          </a>
          <a
            className="col-1"
            href="https://shaboon.github.io/potential-guacamole/"
          >
            <img
              src={website}
              className="link-icon"
              alt="Link to Deployed Website"
            />
          </a>
        </div>
      </article>
      <article className="bg-secondary rounded col-12 col-md-3 mx-1 p-2 my-3">
        <img
          className="mx-auto proj-img"
          src={password}
          alt="Password Generator Screenshot"
        ></img>
        <div className="container row">
          <section className="col-9 text-align-center">
            Password Generator
          </section>
          <a
            className="col-1"
            href="https://github.com/shaboon/expert-adventure-builtido"
          >
            <img
              src={github}
              className="link-icon mx-1"
              alt="Github Logo and Link"
            />
          </a>
          <a
            className="col-1"
            href="https://shaboon.github.io/expert-adventure-builtido/"
          >
            <img
              src={website}
              className="link-icon"
              alt="Link to Deployed Website"
            />
          </a>
        </div>
      </article>
      <article className="bg-secondary rounded col-12 col-md-3 mx-1 p-2 my-3">
        <img
          className="mx-auto proj-img"
          src={finis}
          alt="Project 1 Resort Page Screenshot"
        ></img>
        <div className="container row">
          <section className="col-9 text-align-center">
            Isle Finis Noctis
          </section>
          <a
            className="col-1"
            href="https://github.com/shaboon/improved-happiness"
          >
            <img
              src={github}
              className="link-icon mx-1"
              alt="Github Logo and Link"
            />
          </a>
          <a
            className="col-1"
            href="https://shaboon.github.io/improved-happiness/"
          >
            <img
              src={website}
              className="link-icon"
              alt="Link to Deployed Website"
            />
          </a>
        </div>
      </article>
      <article className="bg-secondary rounded col-12 col-md-3 mx-1 p-2 my-3">
        <img
          className="mx-auto proj-img"
          src={marvel}
          alt="Marvel Database Screenshot"
        ></img>
        <div className="container row">
          <section className="col-9 text-align-center">Marvel Database</section>
          <a
            className="col-1"
            href="https://github.com/anthonylieu/marvel-team-builder"
          >
            <img
              src={github}
              className="link-icon mx-1"
              alt="Github Logo and Link"
            />
          </a>
          <a
            className="col-1"
            href="https://intense-savannah-08912.herokuapp.com/"
          >
            <img
              src={website}
              className="link-icon"
              alt="Link to Deployed Website"
            />
          </a>
        </div>
      </article>
      <article className="bg-secondary rounded col-12 col-md-3 mx-1 p-2 my-3">
        <img
          className="mx-auto proj-img"
          src={proj3}
          alt="Placeholder image till project 3 is completed"
        ></img>
        <div className="container row">
          <section className="col-9 text-align-center">
            InterStellar Index (Not Ready Yet)
          </section>
          <a
            className="col-3"
            href="https://github.com/shaboon/symmetrical-robot"
          >
            <img
              src={github}
              className="link-icon mx-1"
              alt="Github Logo and Link"
            />
          </a>
        </div>
      </article>
    </div>
  );
}
