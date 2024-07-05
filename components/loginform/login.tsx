import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
const LoginForm = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <img src="/makee.jpg" alt="" />
          </div>
          <div className={styles.rightSide}>
            <h1>Hey! Login to Your Profile Here</h1>
            <h2>Continue your journey </h2>

            <h4>Email</h4>
            <input type="Email" placeholder="Please enter your email address" />
            <h4>Password</h4>
            <input type="Password" placeholder="Please enter your password" />

            <h5>
              don't have account?{" "}
              <Link href="/sign">
                <span>SignUp</span>
              </Link>
            </h5>

            <button>
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
