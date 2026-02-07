"use client";
import Image from "next/image";
import otpImage from "../../../public/images/modals/otpverify-img.png";
import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/otpVerification/otpVerification.module.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { verifyOtp } from "@/redux/slice/authSlice";

export default function OTPVerification() {
  const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/g, "").slice(-1);
    e.target.value = value;
    if (value) {
      const next = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
      if (next) next.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert("Email not found. Please register again.");

    let otp = "";
    for (let i = 0; i < 6; i++) {
      const input = document.getElementById(`otp-${i}`) as HTMLInputElement;
      otp += input?.value || "";
    }

    try {
      await dispatch(verifyOtp({ email, otp })).unwrap();
      router.push("/auth/login");
    } catch (err) {
      alert("OTP verification failed");
      console.error(err);
    }
  };


  return (
    <section className={styles["login-sec"]}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles["col-5"]}>
            <div className={styles["welcome-sec"]}>
              <div className={styles.title}>OTP Verification</div>
              <p className={styles.subtitle}>
                We sent to your email {email} be careful not to share
                the code with anyone.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className={styles["otp-wrapper"]}>
                  {[...Array(6)].map((_, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      maxLength={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className={styles["otp-input"]}
                      required
                      onChange={(e) => handleChange(e, index)}
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
