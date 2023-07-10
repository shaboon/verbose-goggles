import React from "react";
import Form from "./Form";

export default function Contact() {
  return (
    <div className="container col-10 mx-auto rendered">
      <h1 className="px-4 my-2 contact-head">Contact Page</h1>
      <div>
        <p className="px-4 my-2 contact-opener">
          If you would like to contact me, please fill out the form below and I
          will get back to you as soon as possible.
        </p>
        <p className="px-4 my-2 contact-opener">
          If you have a more personal request, you can directly email me at
          shaboon3928@gmail.com
        </p>
      </div>
      <Form />
    </div>
  );
}
