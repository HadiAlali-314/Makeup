import React from "react";
import styles from "./sign.module.css";
import Link from "next/link";
const SignUpForm = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <img src="/makee.jpg" alt="" />
          </div>
          <div className={styles.rightSide}>
            <h1>Hey! Start Your Journey Here</h1>
            <h2>Lets get started</h2>

            <h4>Name</h4>
            <input type="Name" placeholder="Enter your full name" />
            <h4>Mobile number</h4>
            <input type="number" placeholder="Enter your phone number" />
            <h4>Email</h4>
            <input type="Email" placeholder="Please enter your email address" />
            <h4>Password</h4>
            <input type="Password" placeholder="Please enter your password" />

            <h5>
              Already have an acoout?{" "}
              <Link href="/login">
                <span>login</span>
              </Link>
            </h5>

            <button>
              <span>Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
