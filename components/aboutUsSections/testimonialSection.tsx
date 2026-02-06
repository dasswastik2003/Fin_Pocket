'use client';

import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '@/styles/aboutUs/testimonialSection.module.css';


const testimonials = [
  {
    id: 1,
    name: "Rohit Mishra",
    location: "Mumbai, India",
    image: "/images/slider/dp-1.png",
    rating: 4,
    text: "Managing my monthly budget has never been simple. The dashboard gives me instant clarity on where my money is going."
  },
  {
    id: 2,
    name: "Daniel Collins",
    location: "Berlin, Germany",
    image: "/images/slider/dp-2.png",
    rating: 4,
    text: "This tool helped me cut unnecessary expenses and save more every month. The charts are super easy to understand."
  },
  {
    id: 3,
    name: "Aditi Ghosh",
    location: "Kolkata, India",
    image: "/images/slider/dp-3.png",
    rating: 4,
    text: "As a student, budgeting used to be stressful. This planner made it effortless and even fun to track every rupee."
  },
  {
    id: 4,
    name: "Rohit Mishra",
    location: "Mumbai, India",
    image: "/images/slider/dp-1.png",
    rating: 4,
    text: "Managing my monthly budget has never been simple. The dashboard gives me instant clarity on where my money is going."
  },
  {
    id: 5,
    name: "Daniel Collins",
    location: "Berlin, Germany",
    image: "/images/slider/dp-2.png",
    rating: 4,
    text: "This tool helped me cut unnecessary expenses and save more every month. The charts are super easy to understand."
  }
];

export default function TestimonialSection() {
  useEffect(() => {
    // Initialize Swiper after component mounts
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.async = true;
    script.onload = () => {
      // Swiper will be initialized from external script or inline script
      if (typeof (window as any).Swiper !== 'undefined') {
        new (window as any).Swiper('.testimonialSwiper', {
          slidesPerView: 3,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          },
          breakpoints: {
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
          grabCursor: true,
          freeMode: false,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className={styles["testimonial-sec"]}>
      <div className="container">
        <div className="section-content">
          <p className={`section-badge ${styles["test-badge"]}`}>Testimonials</p>
          <h2 className={`sec-heading ${styles["test-head"]}`}>What our users say</h2>
          <p className={`sec-description ${styles["test-desc"]}`}>
            Users love our app for tracking expenses, saving smarter, and
            enjoying secure tools, personalized insights, and rewarding
            financial management
          </p>
        </div>
        <div className={`swiper testimonialSwiper ${styles.testimonialSwiper}`}>
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={`swiper-slide ${styles["testimonial-card"]}`}>
                <div className={styles.info}>
                  <div className={styles.profile}>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div>
                    <h3 className={styles.name}>{testimonial.name}</h3>
                    <p className={styles.location}>— {testimonial.location}</p>
                  </div>
                </div>

                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={styles.star}>
                      <img
                        src={i < testimonial.rating ? "/images/slider/star-1.png" : "/images/slider/star-2.png"}
                        alt={`star-${i}`}
                      />
                    </div>
                  ))}
                </div>

                <p className={styles["slider-para"]}>
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
