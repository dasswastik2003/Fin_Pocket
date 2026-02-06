"use client"

import React from 'react'
import styles from '../resetPassword/resetPassword.module.css'

export default function ResetPassword() {
  return (
    <section className={styles.loginSec}>
      <div className="container">
        <div className={`row ${styles.loginRow}`}>
          {/* LEFT CONTENT */}
          <div className="col-6">
            <div className={styles.welcomeSec}>
              <h1 className={styles.title}>Reset Password</h1>

              <p className={styles.subtitle}>
                Get unlimited type of forms, questions and responses, free forever
              </p>

              <form className={styles.authForm}>
                <div className={styles.loginForm}>
                  <label htmlFor="new-password">New Password</label>
                  <input
                    id="new-password"
                    type="password"
                    placeholder="Enter new password"
                  />

                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                    id="confirm-password"
                    type="password"
                    placeholder="Re-enter new password"
                  />
                </div>

                <input
                  type="submit"
                  value="Reset Password"
                  className={styles.loginBtn}
                />

                <p className={styles.signupText}>
                  Don&apos;t receive the code?
                  <a href="#" className={styles.signupLink}>
                    Resend Code
                  </a>
                </p>
              </form>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={`col-6 ${styles.colRight}`}>
            <figure className={styles.imageCard}>
              <img
                src="/images/modals/resetpass-img.png"
                alt="Reset password illustration"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
