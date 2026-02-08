"use client";

import Image from "next/image";
import "swiper/css";
import styles from "@/styles/home/homeBanner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
// import '@/styles/styles.css';



const HomeBanner = () => {
  const clients = [
    { src: "/images/users/google-pay.png", alt: "google-pay" },
    { src: "/images/users/phonepe.png", alt: "phonepe" },
    { src: "/images/users/razorpay.png", alt: "razorpay" },
    { src: "/images/users/hdfc.png", alt: "hdfc" },
    { src: "/images/users/paytm.png", alt: "paytm" },
    { src: "/images/users/paypal.png", alt: "paypal" },
    { src: "/images/users/icici.png", alt: "icici" },
    { src: "/images/users/bharat-pay.png", alt: "bharat-pay" },
  ];
  return (
    <>
      <div className='grid'></div>

      <section className={`${styles.banner} banner`}>
        <div className={`${styles.grid} grid`}></div>

        <div className={`${styles.container} container`}>
          {/* LEFT CONTENT */}
          <div className={styles["banner-content"]}>
            <h1>
              Take Control of Your Money With{" "}
              <span>Smarter Budgeting</span>
            </h1>

            <p>
              A simple, secure, and effective financial management system
              designed for everyday users.
            </p>

            <div className={styles["banner-btn"]}>
              <Link
                href="/dashboard"
               className={`${styles.btn} ${styles["btn-primary"]} btn btn-primary`}

                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </Link>

              <Link href="/signup" className="btn btn-secondary">
                Sign Up
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles["banner-image"]}>
            <Image
              src="/images/banner/dashboard.svg"
              alt="Dashboard"
              width={500}
              height={400}
              priority
            />
          </div>
        </div>

        {/* CLIENT SLIDER */}
        <div className={styles["client-band-wrapper"]}>
          {/* TOP SLIDER */}
          <div
            className={`${styles.clients} ${styles["client-top"]}`}
            id="client-top"
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={6}
              spaceBetween={5}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              allowTouchMove={false}
            >
              {clients.map((item, index) => (
                <SwiperSlide key={`top-${index}`}>
                  <figure className={styles["clients-img"]}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={110}
                      height={40}
                      className={styles["client-logo"]}
                    />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* BOTTOM SLIDER */}
          <div
            className={`${styles.clients} ${styles["client-bottom"]}`}
            id="client-bottom"
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={6}
              spaceBetween={5}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              allowTouchMove={false}
            >
              {clients.map((item, index) => (
                <SwiperSlide key={`bottom-${index}`}>
                  <figure className={styles["clients-img"]}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={110}
                      height={40}
                      className={styles["client-logo"]}
                    />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </section>
    </>
  );
};

export default HomeBanner;
