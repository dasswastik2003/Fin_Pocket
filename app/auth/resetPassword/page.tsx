"use client";

import React from 'react'
import styles from "@/styles/register/register.module.css"
import "@/styles/styles.css"

export default function ResetPassword() {
    return (
        <>
            <div className='radialBlur'></div>
            <section className={styles.loginSec}>
                <div className="container">
                    {/* <div className={styles.container}> */}
                    <div className="row ">
                        {/* <div className={styles.rows}> */}
                        <div className={styles.col5}>
                            <div className={styles.welcomeSec}>
                                <div className={styles.title}>Reset Password</div>
                                <p className="subtitle">
                                    Get unlimited type of forms,questions and responsed, free forever
                                </p>
                                <form id="auth-form">
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
                                        defaultValue="Reset Password"
                                        className={styles.loginBtn}
                                    />
                                    <p className={styles.signupText}>
                                        Don't receive the code?
                                        <a href="#" className={styles.signupLink}>
                                            Resend Code
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                        {/* <div className={styles.col7 + " " + styles.colRight}> */}
                        <div className={styles.col7 + " col-right"}>
                            <figure className={styles.imageCard}>
                                <img src="/images/modals/resetpass-img.png" alt="Login-side-image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
