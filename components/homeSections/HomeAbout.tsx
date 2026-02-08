import Image from "next/image";
import styles from "@/styles/home/homeAboutUs.module.css";
import Link from "next/link";

export default function AboutUs() {
    return (
        <section className={styles["about-us"]}>
            <div className="radial-blur"></div>

            <div className="container">
                <div className={styles["section-content"]}>
                    <h2 className={`${styles["section-badge"]} section-badge`}
                    >About Us</h2>
                </div>

                <div className={styles["about-wrapper"]}>
                    <div className="row">
                        <div
                            className="col col-5 col-lg-12"
                        >
                            {/* ======= main div */}
                            <div className={styles["about-left"]}>
                                <figure>
                                    <Image
                                        src="/images/about-us/laptop-clip-path.svg"
                                        alt="laptop"
                                        width={500}
                                        height={500}
                                    />
                                </figure>

                                {/* ======= top div */}
                                <div className={`${styles["live-chat"]} glass`}>

                                    <div className={styles["live-chat-content"]}>
                                        <span>Prefer to Chat Live?</span>
                                        <span>
                                            Our support team is available 24/7 to assist you in
                                            real-time.
                                        </span>
                                    </div>

                                    <div className={styles["live-chat-btn"]}>
                                        <figure>
                                            <Image
                                                src="/images/about-us/live-chat.svg"
                                                alt="chat"
                                                width={40}
                                                height={40}
                                            />
                                        </figure>

                                        <Link href="#" className='btn btn-primary'>
                                            Your Own Budgeting friend
                                        </Link>
                                    </div>
                                </div>

                                {/* ======= bottom div */}
                                <div className={`${styles["about-feature"]} glass`}>
                                    <span>Smart, Simple</span>
                                    <span>Money</span>
                                    <span>Management</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col col-6 col-lg-12">
                            <div className={styles["section-content"]}>
                                <p className={`${styles["sec-heading"]} sec-heading`}>
                                    Your Pocket-Sized <span>Financial Coach</span>
                                </p>

                                <p className={`${styles["sec-description"]} sec-description`}>
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

                                <div className={styles["section-btn"]}>
                                    <Link
                                        href="about-us.html"
                                        className="btn btn-primary"
                                    >
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
