"use client";

import Link from "next/link";
import '@/styles/styles.css';

export default function PricingBanner() {
  return (
    <>
      <div className="grid" />
      <section className="bannerSec">
        <div className="container">
          <div className="bannerCntn">
            <h1 className="bannerHeading">
              Affordable Plans for Smarter <span className="subBanner">Money Management</span>
            </h1>
            <ul className="switchLink">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="bannerImg">
            <figure>
              <img src="/images/banner/pricing-banner.svg" alt="Pricing Banner" />
            </figure>
          </div>
        </div>
      </section>
      <div className="radial-blur" />
    </>
  );
}
