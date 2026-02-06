"use client";
import Image from "next/image";
import otpImage from "../../../public/images/modals/otpverify-img.png";
import { useRef } from "react";
import styles from "../../../styles/otpVerification/otpVerification.module.css";

export default function OTPVerification() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add OTP verification logic here
  };

  return (
    <section className={styles["login-sec"]}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles["col-5"]}>
            <div className={styles["welcome-sec"]}>
              <div className={styles.title}>OTP Verification</div>
              <p className={styles.subtitle}>
                We sent to your email amr***@gmail.com be careful not to share
                the code with anyone.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className={styles["otp-wrapper"]}>
                  {[...Array(6)].map((_, i) => (
                    <input
                      key={i}
                      maxLength={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className={styles["otp-input"]}
                      required
                    />
                  ))}
                </div>
                <input type="submit" value="Verify Code" className={styles["login-btn"]} />
                <p className={styles["signup-text"]}>
                  Don't receive the code?
                  <a href="#" className={styles["signup-link"]}>Resend Code</a>
                </p>
              </form>
            </div>
          </div>
          <div className={styles["col-7"]}>
            <div className={styles["image-card"]}>
              <Image src={otpImage} alt="Login-side-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
