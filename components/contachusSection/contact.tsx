"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);

    setEmail("");
    setMessage("");
  };

  const handleInputChange = () => {
    setSubmitted(false);
  };

  return (
    <div>
      <div className={styles.container}>
        <img src="/BG.png" alt="" />

        <div className={styles.content}>
          <div className={styles.leftSide}>
            <img src="/BGI.jpg" alt="" />
          </div>
          <div className={styles.rightSide}>
            <h1>Let’s Chat!</h1>

            <h4>Email</h4>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onInput={handleInputChange}
            />

            <h4>Message</h4>
            <input
              type="text"
              placeholder="Enter your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onInput={handleInputChange}
            />

            {submitted ? (
              <p className={styles.submittedMessage}>
                We've got your message! 📩
              </p>
            ) : null}

            <button onClick={handleSubmit}>
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
