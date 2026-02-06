"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from "@/styles/pricing/testimonials.module.css";

SwiperCore.use([Autoplay, Pagination]);

const testimonials = [
	{
		name: "Rohit Mishra",
		location: "Mumbai, India",
		profile: "/images/slider/dp-1.png",
		stars: [1, 1, 1, 1, 2],
		text: "Managing my monthly budget has never been simple. The dashboard gives me instant clarity on where my money is going.",
	},
	{
		name: "Daniel Collins",
		location: "Berlin, Germany",
		profile: "/images/slider/dp-2.png",
		stars: [1, 1, 1, 1, 2],
		text: "This tool helped me cut unnecessary expenses and save more every month. The charts are super easy to understand.",
	},
	{
		name: "Aditi Ghosh",
		location: "Kolkata, India",
		profile: "/images/slider/dp-3.png",
		stars: [1, 1, 1, 1, 2],
		text: "As a student, budgeting used to be stressful. This planner made it effortless and even fun to track every rupee.",
	},
];

export default function Testimonials() {
	return (
		<section className={styles.testimonialSec}>
			<div className={styles.container}>
				<div className={styles.sectionContent}>
					<p className={`${styles.sectionBadge} ${styles.testBadge}`}>Testimonials</p>
					<h2 className={styles.secHeading + " test-head"}>What our users say</h2>
					<p className={`${styles.secDescription} ${styles.testDesc}`}>
						Users love our app for tracking expenses, saving smarter, and enjoying secure tools, personalized insights, and rewarding
						financial management
					</p>
				</div>
				<Swiper
					className={styles.testimonialSwiper}
                    loop={true}
					spaceBetween={30}
					slidesPerView={2}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					pagination={{ clickable: true }}
					modules={[Autoplay, Pagination]}
				>
					{testimonials.map((t, idx) => (
						<SwiperSlide key={idx}>
							<div className={styles.testimonialCard + " testimonial-card"}>
								<div className={styles.info + " info"}>
									<div className={styles.profile + " profile"}>
										<Image src={t.profile} alt={t.name} width={88} height={88} />
									</div>
									<div>
										<h3 className={styles.name + " name"}>{t.name}</h3>
										<p className={styles.location + " location"}>— {t.location}</p>
									</div>
								</div>
								<div className={styles.stars + " stars"}>
									{t.stars.map((star, i) => (
										<div className={styles.star + " star"} key={i}>
											<Image
												src={star === 1 ? "/images/slider/star-1.png" : "/images/slider/star-2.png"}
												alt="star"
												width={24}
												height={24}
											/>
										</div>
									))}
								</div>
								<p className={styles.sliderPara + " slider-para"}>{t.text}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
