import React from 'react'
import '@/styles/banner.css'
import "@/styles/faq/faqSections.module.css"

export default function FaqBannerSections() {
  return (
   <>
<>
  <div className="grid" />
  <section className="bannerSec">
    <div className="container">
      <div className="bannerCntn">
        <h1 className="bannerHeading">
          Common Questions About Managing{" "}
          <span className="subBanner">Your Money</span>
        </h1>
        <ul className="switchLink">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="faq.html">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="bannerImg">
        <figure>
          <img src="/images/banner/faq-banner.svg" alt="faq-banner" />
        </figure>
      </div>
    </div>
  </section>
</>

   </>
  )
}
