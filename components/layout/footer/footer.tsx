import React from 'react'
import styles from '@/styles/footerCSS/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="grid"></div>
      <div className="container">
        <div className={styles.footerTop}>
          <div className="row">
            {/* Logo & Newsletter */}
            <div className="col col-4 col-xl-3 col-lg-12 col-sm-12">
              <div className={styles.footerContent}>
                <div className={styles.footerLogo}>
                  <a href="/">
                    <img src="/images/navbar/logo.svg" alt="Fin Pocket" />
                  </a>
                </div>
                <p className={styles.footerText} style={{textAlign:"start"}}>
                  Take Control of Your Financial Journey
                </p>
                <form className={styles.newsletterForm}>
                  <input type="email" placeholder="Enter your email" suppressHydrationWarning />
                  <input type="submit" value="Subscribe" suppressHydrationWarning />
                </form>
              </div>
            </div>

            {/* Company */}
            <div className="col col-1-5 col-xl-2 col-lg-6 col-sm-12">
              <div className={styles.footerContent}>
                <ul>
                  <li className={styles.footerHeading}>Company</li>
                  <li><a href="/">Home</a></li>
                  <li><a href="/features">Features</a></li>
                  <li><a href="/features">Services</a></li>
                  <li><a href="/">FAQ</a></li>
                  <li><a href="/">Pricing</a></li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="col col-2 col-xl-2 col-lg-6 col-sm-12">
              <div className={styles.footerContent}>
                <ul>
                  <li className={styles.footerHeading}>Services</li>
                  <li><a href="">CVP</a></li>
                  <li><a href="">Budget planning</a></li>
                  <li><a href="">Expense tracking</a></li>
                  <li><a href="">Trust</a></li>
                  <li><a href="">Profit</a></li>
                </ul>
              </div>
            </div>

            {/* Support */}
            <div className="col col-1-5 col-xl-2 col-lg-6 col-sm-12">
              <div className={styles.footerContent}>
                <ul>
                  <li className={styles.footerHeading}>Support</li>
                  <li><a href="">Testimonials</a></li>
                  <li><a href="">Contact Us</a></li>
                  <li><a href="">Notification</a></li>
                  <li><a href="">Technical Help</a></li>
                  <li><a href="">Privacy Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col col-3 col-xl-3 col-lg-6 col-sm-12">
              <div className={styles.footerContent}>
                <ul>
                  <li className={styles.footerHeading}>Contact</li>
                  <li><a href="mailto:support@finpocket.com">Email: support@finpocket.com</a></li>
                  <li><a href="tel:+18004567890">Phone: +1 (800) 456-7890</a></li>
                  <li>
                    <div className={styles.socials}>
                      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-logo/facebook.svg" alt="facebook" />
                      </a>
                      <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-logo/twitter.svg" alt="twitter" />
                      </a>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-logo/instagram.svg" alt="instagram" />
                      </a>
                      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-logo/youtube.svg" alt="youtube" />
                      </a>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-logo/linkedin.svg" alt="linkedin" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLeft}>
            <p>© Copyright 2025. All rights reserved.</p>
          </div>
          <ul className={styles.footerBottomRight}>
            <li><a href="#">Terms & Conditions.</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
