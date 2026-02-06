"use client";
import Image from "next/image";
import styles from "@/styles/contact/contacts.module.css";

export default function ContactSection() {
  return (
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
                <a href="https://maps.app.goo.gl/DBrr9gNRLEs4MCLW7" target="_blank" rel="noopener noreferrer">
                  <figure className={styles.cntImg}>
                    <Image src="/images/contact/location.svg" alt="location" width={48} height={48} />
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
                <a href="mailto:contact@example.com" target="_blank" rel="noopener noreferrer">
                  <figure className={styles.cntImg}>
                    <Image src="/images/contact/mail-open.svg" alt="mail" width={48} height={48} />
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
                <a href="tel:+1086660112" target="_blank" rel="noopener noreferrer">
                  <figure className={styles.cntImg}>
                    <Image src="/images/contact/calling.svg" alt="calling" width={48} height={48} />
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
            <div className="col col6">
              <div className={styles.contactMap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953735315904!3d-37.81627974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2s2464%20Royal%20Ln%2C%20Mesa%2C%20New%20Jersey%2045463!5e0!3m2!1sen!2sus!4v1660000000000!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                />
              </div>
            </div>
            <div className="col col6">
              <div className={styles.contactForm}>
                <h2 className={styles.contactTitle}>Get in Touch</h2>
                <p className={styles.contactSubtitle}>
                  Let’s build something impactful together.
                </p>
                <form className={styles.cntFormBody} autoComplete="off">
                  <div className={styles.cntFormGrp}>
                    <label htmlFor="name" className={styles.cntFormLabel}>
                      Full Name*
                    </label>
                    <input id="name" className={styles.cntFormInput} placeholder="Your Name" required />
                  </div>
                  <div className={styles.cntFormGrp}>
                    <label htmlFor="email" className={styles.cntFormLabel}>
                      Email Address*
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={styles.cntFormInput}
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className={styles.cntFormGrp}>
                    <label htmlFor="subject" className={styles.cntFormLabel}>
                      Subject*
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={styles.cntFormInput}
                      placeholder="I would like to discuss"
                      required
                    />
                  </div>
                  <div className={styles.cntFormGrp}>
                    <label htmlFor="message" className={styles.cntFormLabel}>
                      Message*
                    </label>
                    <textarea
                      id="message"
                      className={styles.cntFormTextarea}
                      placeholder="Write message"
                      required
                    ></textarea>
                  </div>
                  <div className="section-btn">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
