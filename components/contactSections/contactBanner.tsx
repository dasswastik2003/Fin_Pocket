'use client';

import Link from 'next/link';
import '@/styles/styles.css';

export default function ContactBanner() {
  return (
    <>
      <div className="grid" />
      <section className="bannerSec">
        <div className="container">
          <div className="bannerCntn">
            <h1 className="bannerHeading">
              Here to Support Your
              <span className="subBanner">Financial Journey</span>
            </h1>
            <ul className="switchLink">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="bannerImg">
            <figure><img src="/images/banner/banner-img.png" alt="" /></figure>
          </div>
        </div>
      </section>
      <div className="radialBlur" />
    </>
  );
}
