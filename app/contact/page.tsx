import ContactBanner from '@/components/contactSections/contactBanner'
import Navbar from '@/components/layout/navbar'
import React from 'react'
import styles from "../../styles/contact/contacts.module.css";
import Footer from '@/components/layout/footer';
import ContactDownload from '@/components/contactSections/contactDownload';

export default function Contact() {
    return (
        <main style={{ position: 'relative', minHeight: '100vh' }}>
            <div className="grid"></div>
            {/* Navbar */}
            <Navbar />

            {/* Contact Banner */}
            <ContactBanner />

            {/* contact part */}
            <section className={styles.contact}>
                <div className="radial-blur"></div>

                <div className="container">
                    <div className="section-content">
                        <p className="section-badge">Contact</p>
                    </div>

                    <div className={styles.cntCards}>
                        <div className="row">
                            <div className="col col-4 col-md-12">
                                <div className={styles.cntCard}>
                                    <a
                                        href="https://maps.app.goo.gl/DBrr9gNRLEs4MCLW7"
                                        target="_blank"
                                    >
                                        <figure className={styles.cntImg}>
                                            <img src="/images/contact/location.svg" alt="location" />
                                        </figure>
                                        <h3 className={styles.cntHeading}>Our Address</h3>
                                        <span className={styles.cntAbt}>
                                            2464 Royal Ln. Mesa New Jersey 45463
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="col col-4 col-md-12">
                                <div className={styles.cntCard}>
                                    <a href="mailto:contact@example.com" target="_blank">
                                        <figure className={styles.cntImg}>
                                            <img src="/images/contact/mail-open.svg" alt="mail" />
                                        </figure>
                                        <h3 className={styles.cntHeading}>contact@example.com</h3>
                                        <span className={styles.cntAbt}>
                                            Email us anytime for any kind of query
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="col col-4 col-md-12">
                                <div className={styles.cntCard}>
                                    <a href="tel:+1086660112" target="_blank">
                                        <figure className={styles.cntImg}>
                                            <img src="/images/contact/calling.svg" alt="calling" />
                                        </figure>
                                        <h3 className={styles.cntHeading}>Call: +108-666-0112</h3>
                                        <span className={styles.cntAbt}>
                                            Call us any kind support, we will wait for it.
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactLayout}>
                        <div className="row">
                            <div className="col col-6">
                                <div className={styles.contactMap}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=..."
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>

                            <div className="col col-6">
                                <div className={styles.contactForm}>
                                    <h2 className={styles.contactTitle}>Get in Touch</h2>
                                    <p className={styles.contactSubtitle}>
                                        Let’s build something impactful together.
                                    </p>

                                    <form className={styles.cntFormBody}>
                                        <div className={styles.cntFormGrp}>
                                            <label htmlFor="name" className={styles.cntFormLabel} >
                                                Full Name*
                                            </label>
                                            <input id="name" className={styles.cntFormInput} placeholder="Your Name" />
                                        </div>
                                        <div className={styles.cntFormGrp}>
                                            <label htmlFor="email" className={styles.cntFormLabel}
                                            >Email Address*</label>

                                            <input
                                                id="email"
                                                type="email"
                                                className={styles.cntFormInput}
                                                placeholder="Enter Your Email"
                                            />
                                        </div>
                                        <div className={styles.cntFormGrp}>
                                            <label htmlFor="subject" className={styles.cntFormLabel}
                                            >Subject*</label>


                                            <input
                                                id="subject"
                                                type="text"
                                                className={styles.cntFormInput}
                                                placeholder="I would like to discussed"
                                            />
                                        </div>
                                        <div className={styles.cntFormGrp}>
                                            <label htmlFor="message" className={styles.cntFormLabel}
                                            >Message*</label>

                                            <textarea
                                                id="message"
                                                className={styles.cntFormTextarea}
                                                placeholder="Write message"
                                            ></textarea>
                                        </div>

                                        <div className="section-btn">
                                            <button className="btn btn-primary">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <ContactDownload/>
            {/* Footer */}
            <Footer />
        </main>
    )
}
