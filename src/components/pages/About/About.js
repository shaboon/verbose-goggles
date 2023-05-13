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
            I am live in Greensboro, NC and am currently enrolled in the UNCC
            Full-Stack Coding bootcamp.
          </p>
          <p className="intro text-light">
            I have always been drawn to technology as a child. While it was on
            the more destructive side, I took apart everything I could and
            familiarized myself with its contents. As I have grown, I grew my
            ability to dissect and understand the inner workings of most things
            presented to me. While late to the field, I finally stumbled upon
            web-related code via FreeCodeCamp and a friend and found a slight
            affinity to it. While I may not be the most well-studied individual,
            I am fast at picking up nuiances and am always willing to learn.
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
    </div>
  );
}
