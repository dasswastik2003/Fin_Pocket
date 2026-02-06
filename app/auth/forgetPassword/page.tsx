"use client";
import Image from "next/image";
import forgotImg from "../../../public/images/modals/forgotpass-img.png";
import { useRef } from "react";
import styles from "../../../styles/forgetPassword/forgetPassword.module.css";

export default function ForgotPassword() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add forgot password logic here
  };

  return (
    <section className={styles["login-sec"]}>
      <div className={styles.container}>
        <div className={styles.row}> 
          <div className={styles["col-5"]}>
            <div className={styles["welcome-sec"]}>
              <div className={styles.title}>Forgot Password</div>
              <p className={styles.subtitle}>
                Get unlimited type of forms, questions and responses, free forever
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className={styles["login-form"]}>
                  <label htmlFor="email">Email address</label>
                  <input id="email" type="email" placeholder="Enter your email address" required />
                </div>
                <input type="submit" value="Send Reset Code" className={styles["login-btn"]} />
                <p className={styles["signup-text"]}>
                  Remember your password?
                  <a href="/auth/login" className={styles["signup-link"]}>Back to Login</a>
                </p>
              </form>
            </div>
          </div>
          <div className={styles["col-7"]}> 
            <div className={styles["image-card"]}>
              <Image src={forgotImg} alt="Login-side-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
