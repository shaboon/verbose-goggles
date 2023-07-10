import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [badName, setBadName] = useState(false);
  const [badEmail, setBadEmail] = useState(false);
  const [badMessage, setBadMessage] = useState(false);

  const [formSubmit, setFormSubmit] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setBadName(false);
    setBadEmail(false);
    setBadMessage(false);

    if (name === "") {
      setBadName(true);
      alert("Please enter your name");
      return;
    }
    const emailContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailContent.test(email)) {
      setBadEmail(true);
      alert("Please enter a valid email address");
      return;
    }
    if (message === "") {
      setBadMessage(true);
      alert("Please enter your message");
      return;
    }
    setFormSubmit(true);

    if (formSubmit) {
      console.log("Name: " + name);
      console.log("Email: " + email);
      console.log("Message: " + message);
    }
  };

  return (
    <form className="container mx-auto my-5 col-12 p-3">
      <input
        className={`col-8 row mx-auto my-2 name form-control`}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={badName ? "Please enter your name" : "Name"}
      />

      <input
        className={`col-8 row mx-auto my-2 email form-control ${
          badEmail ? "is-invalid" : ""
        }`}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={badEmail ? "Please enter a valid email address" : "Email"}
      />

      <textarea
        className={`col-8 row mx-auto my-2 message form-control ${
          badMessage ? "is-invalid" : ""
        }`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={badMessage ? "Please enter your message" : "Your Message"}
      />

      <button
        onClick={handleFormSubmit}
        className="col-12 col-md-2 mx-auto my-3 row justify-content-center align-items-center submit-btn"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
