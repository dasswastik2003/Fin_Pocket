import React from "react";
import "@/styles/styles.css";
import "@/styles/aboutUs/aboutUsSection.module.css";

export default function AboutUsSection() {
  return (
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us - Fin Pocket</title>
  {/* Favicon */}
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/images/favicon/favicon-32x32.png"
  />
  {/* Swiper css  */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
  />
  {/* Swiper-cdn */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"
  />
  <link rel="stylesheet" href="./css/styles.css" />
  <link rel="stylesheet" href="./css/global.css" />
  <link rel="stylesheet" href="./css/navbar.css" />
  <link rel="stylesheet" href="./css/left-right-gradient.css" />
  <link rel="stylesheet" href="./css/banner-common.css" />
  <link rel="stylesheet" href="./css/download.css" />
  <link rel="stylesheet" href="./css/footer.css" />
  <link rel="stylesheet" href="./css/responsive.css" />
  <header>
 
  </header>
  <main>
    {/* Removed broken grid class. Use .row and .col for grid layout */}
     <div className="grid" />
    <section className="about-us">
      <div className="radial-blur" />
      <div className="container">
        <div className="section-content">
          <h2 className="section-badge">About Us</h2>
        </div>
        <div className="about-wrapper">
          <div className="row">
            <div className="col col-6 col-lg-12">
              {/* =======  main div */}
              <div className="about-left">
                <figure>
                  <img
                    src="/images/about-us/laptop-clip-path.svg"
                    alt="laptop"
                  />
                </figure>
                {/* ======= top div */}
                <div className="live-chat glass">
                  <div className="live-chat-content">
                    <span>Prefer to Chat Live?</span>
                    <span>
                      Our support team is available 24/7 to assist you in
                      real-time.
                    </span>
                  </div>
                  <div className="live-chat-btn">
                    <figure>
                      <img src="/images/about-us/live-chat.svg" alt="chat" />
                    </figure>
                    <a href="#" className="btn btn-primary">
                      Your Own Budgeting friend
                    </a>
                    {/* <button class="btn btn-primary">
                  Your Own Budgeting friend
                </button> */}
                  </div>
                </div>
                {/* ======= bottom div */}
                <div className="about-feature glass">
                  {/* <div class="feature"> */}
                  <span>Smart, Simple</span>
                  <span>Money</span>
                  <span>Management</span>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="col col-6 col-lg-12">
              <div className="section-content">
                <p className="sec-heading">
                  Your Pocket-Sized <span>Financial Coach</span>
                </p>
                <p className="sec-description">
                  We designed this platform to make expense tracking simple and
                  intuitive. Managing money should feel easy, not overwhelming.
                  Our clean interface helps you understand your spending at a
                  glance. Smart tools highlight patterns so you can make
                  informed decisions. You can track expenses quickly and stay
                  organized every day. Visual insights show exactly where your
                  money goes. The platform works seamlessly across all your
                  devices. Whether you're at home or on the go, your budget is
                  always accessible. We believe financial clarity leads to
                  financial confidence. That’s why we focus on reliability and
                  ease of use. Your data stays safe with strong security and
                  privacy protection. Our mission is to help you take control of
                  your finances with confidence and ease.
                </p>
                <div className="section-btn">
                  <a href="about-us.html" className="btn btn-primary">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}








