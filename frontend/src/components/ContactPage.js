// src/components/Contact.js
import { React, useState } from "react";
import background from '../images/flight.jpg';
import "../index.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to handle the form submission, like sending the data to a server.
  };

  return (
    <div className="maindiv " style={{backgroundImage: `url(${background})`,backgroundSize: "cover",
    backgroundPosition: "center"}}>
      <div className="contact-container mt-3 bg-primary">
        <h2 className="text-white">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group text-white">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white color-black text-black"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white color-black text-black"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
              className="bg-white color-black text-black"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
