'use client';

import Link from 'next/link';
import '@/styles/styles.css';

export default function FeaturesBanner() {
  return (
    <>
      <div className="grid" />
      <section className="bannerSec">
        <div className="container">
          <div className="bannerCntn">
            <h1 className="bannerHeading">
              Smart Features for Better <span className="subBanner">Financial Control</span>
            </h1>
            <ul className="switchLink">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/features">Features</Link>
              </li>
            </ul>
          </div>
          <div className="bannerImg">
            <figure>
              <img src="/images/banner/features-banner.svg" alt="Features Banner" />
            </figure>
          </div>
        </div>
      </section>
      <div className="radialBlur" />
    </>
  );
}
