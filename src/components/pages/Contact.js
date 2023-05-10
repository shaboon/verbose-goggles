import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
