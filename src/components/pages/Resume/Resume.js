import React from "react";
import "../../css/styles.css";

export default function Resume() {
  return (
    <div className="container mx-auto p-3 rounded about rendered">
      <div className="container row">
        <div className="col-8">
          <h1 className="my-2">My Resume</h1>
          <p className="my-3">Here is a short cut of my resume!</p>
          <h2>Experience</h2>
          <h3>Thunderbird Molding Greensboro</h3>
          <p>Quality Engineer:</p>
          <p>2019-2022</p>
          <p>
            I was responsible for recieving drawings from customers and creating
            a short-hand qualtiy control plan for the manufacturing floor to
            follow. Furthermore, my responsibilites also included mainting the
            instruments used in quality via calibration and maintenance.
          </p>
          <h2>UNCC Full-Stack Bootcamp Participant</h2>
          <p>2023-2023</p>
          <p>
            Within this bootcamp, I learned front-end and back-end development.
            In the bootcamp, I find that I am most in tune with React and
            Node.js.
          </p>
        </div>
        <div className="col-4">
          <article className="mx-auto row">
            <p>6 Spring Oak Drive,</p>
            <p>Greensboro NC 27410</p>
            <p>Cell Number: (336) 912-2937</p>
            <p>shaboon3928@gmail.com</p>
          </article>
          <button className="col-12 mx-auto my-3 row justify-content-center align-items-center resume-button">
            <a
              href={
                "https://drive.google.com/file/d/1aRANJKSDNjIeREipy1orfCfOzv6T9-N8/view?usp=sharing"
              }
            >
              Find My Full Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="container col-8 mx-auto">
        <section className="col-8 row">Sean Haboon</section>
        <section className="col-8 row">
          <h2>Experience</h2>
          <h3>Thunderbird Molding Greensboro</h3>
          <p>Quality Engineer:</p>
          <p>
            I was responsible for recieving drawings from customers and creating
            a short-hand qualtiy control plan for the manufacturing floor to
            follow. FUrthermore, my responsibilites also included mainting the
            instruments used in quality via calibration and maintenance.
          </p>
          <h3>UNCC Full-Stack Coding Bootcamp</h3>
        </section>
      </div>
      <div className="col-4 mx-auto">
        <article className="col-4 mx-auto row">
          <p>6 Spring Oak Drive,</p>
          <p>Greensboro NC 27410</p>
          <p>Cell Number: (336) 912-2937</p>
          <p>shaboon3928@gmail.com</p>
        </article>
        <section className="col-4 row">
          
        </section>
      </div> */
}
