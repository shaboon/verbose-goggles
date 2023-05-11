import React from "react";

export default function Contact() {
  return (
    <div>
      <h1 className="px-4 my-2">Contact Page</h1>
      <form className="container my-5">
        <input className="col-12 row my-2" type="text" placeholder="Name" />
        <input className="col-12 row my-2" type="email" placeholder="Email" />
        <textarea className="col-12 row my-2" placeholder="Message" />

        <button
          className="col-2 row justify-content-center align-items-center"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
