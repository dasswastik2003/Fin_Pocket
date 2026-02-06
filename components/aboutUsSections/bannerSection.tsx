import React from 'react'
import '@/styles/banner.css'



export default function AboutBannerSection() {
  return (
    <>
     <div className="grid" />
    {/* <div className={styles.grid}></div> */}
    <section className="bannerSec">
  <div className="container">
    <div className="bannerCntn">
      <h1 className="bannerHeading">
        Designed to Help You <span className="subBanner">Spend Wisely</span> and Live Stress-Free
      </h1>

      {/* <ul className="switchLink">
        <li><a href="index.html">Home</a></li>
        <li><a href="aboutUs.html">About Us</a></li>
      </ul> */}
    </div>

    <div className="bannerImg">
      <figure>
        <img src="/images/banner/about-us-banner.svg" alt="About Us Banner"/>
      </figure>
    </div>
  </div>
</section>
</>
  )
}
