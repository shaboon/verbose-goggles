import React from "react";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import twitter from "../img/twitter-sign.png";

export default function Footer() {
  return (
    <div>
      <footer className="foot">
        <section className="icon-container">
          <a href="https://github.com/shaboon">
            <img src={github} className="icon" alt="Github Logo and Link" />
          </a>
          <a href="https://www.linkedin.com/in/sean-haboon-6494501a7/">
            <img src={linkedin} className="icon" alt="LinkedIn Logo and Link" />
          </a>
          <a href="https://twitter.com/SeanHaboon">
            <img src={twitter} className="icon" alt="Twitter Logo and Link" />
          </a>
        </section>
      </footer>
    </div>
  );
}
