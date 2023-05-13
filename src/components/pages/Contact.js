import React from "react";

export default function Contact() {
  return (
    <div className="rendered">
      <h1 className="px-4 my-2">Contact Page</h1>
      <form className="container mx-auto my-5 col-12 p-3">
        <input
          className="col-8 row mx-auto my-2"
          type="text"
          placeholder="Name"
        />
        <input
          className="col-8 row mx-auto my-2"
          type="email"
          placeholder="Email"
        />
        <textarea className="col-8 row mx-auto my-2" placeholder="Message" />

        <button
          className="col-2 mx-auto my-3 row justify-content-center align-items-center"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
