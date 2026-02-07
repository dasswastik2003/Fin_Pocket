"use client";

import styles from "@/styles/home/homeTestimonials.module.css";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Rohit Mishra",
    location: "— Mumbai, India",
    profile: "/images/slider/dp-1.png",
    text: `“Managing my monthly budget has never been simple. The dashboard gives me instant clarity on where my money is going.”`,
  },
  {
    id: 2,
    name: "Daniel Collins",
    location: "— Berlin, Germany",
    profile: "/images/slider/dp-2.png",
    text: `“This tool helped me cut unnecessary expenses and save more every month. The charts are super easy to understand.”`,
  },
  {
    id: 3,
    name: "Aditi Ghosh",
    location: "— Kolkata, India",
    profile: "/images/slider/dp-3.png",
    text: `“As a student, budgeting used to be stressful. This planner made it effortless and even fun to track every rupee.”`,
  },
  {
    id: 4,
    name: "Rohit Mishra",
    location: "— Mumbai, India",
    profile: "/images/slider/dp-1.png",
    text: `“Managing my monthly budget has never been simple. The dashboard gives me instant clarity on where my money is going.”`,
  },
  {
    id: 5,
    name: "Daniel Collins",
    location: "— Berlin, Germany",
    profile: "/images/slider/dp-2.png",
    text: `“This tool helped me cut unnecessary expenses and save more every month. The charts are super easy to understand.”`,
  },
];

export default function Testimonials() {
  return (
    <section className={styles["testimonial-sec"]} id="testimonials">
      <div className="container">
        <div className={styles["section-content"]}>
          <p className={`${styles["test-badge"]} section-badge`}>
            Testimonials
          </p>

          <h2 className={`${styles["test-head"]} sec-heading`}>
            What our users say
          </h2>

          <p className={`${styles["test-desc"] } sec-description`}>
            Users love our app for tracking expenses, saving smarter, and
            enjoying secure tools, personalized insights, and rewarding
            financial management
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className={styles["testimonialSwiper"]}
        >
          {testimonials.map((item) => (
            <SwiperSlide
              key={item.id}
              className={styles["testimonial-card"]}
            >
              <div className={styles["info"]}>
                <div className={styles["profile"]}>
                  <Image
                    src={item.profile}
                    alt={item.name}
                    width={60}
                    height={60}
                  />
                </div>

                <div>
                  <h3 className={styles["name"]}>{item.name}</h3>
                  <p className={styles["location"]}>{item.location}</p>
                </div>
              </div>

              <div className={styles["stars"]}>
                {[1, 2, 3, 4].map((star) => (
                  <div key={star} className={styles["star"]}>
                    <Image
                      src="/images/slider/star-1.png"
                      alt="star"
                      width={18}
                      height={18}
                    />
                  </div>
                ))}

                <div className={styles["star"]}>
                  <Image
                    src="/images/slider/star-2.png"
                    alt="star"
                    width={18}
                    height={18}
                  />
                </div>
              </div>

              <p className={styles["slider-para"]}>{item.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
