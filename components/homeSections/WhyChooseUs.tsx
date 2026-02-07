import Image from "next/image";
import styles from "@/styles/home/whyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section className={styles["why-choose-us"]}>
      <div className="radial-blur"></div>

      <div className="container">
        <div className="section-content">
          <p className="section-badge">Why Choose Us</p>
          <h2 className="sec-heading">
            Why Choose Our <span>Budget Planner?</span>
          </h2>
        </div>

        <div className={`${styles["buddget-planner-wrapper"]} row`}>
          <div className={`${styles["buddget-planner-left"]} col-6`}>
            <figure>
              <Image
                src="/images/why-choose-us/girl-holding-pen.svg"
                alt="girl holding pen"
                width={600}
                height={600}
                className="img"
              />
            </figure>
          </div>

          <div className={`${styles["buddget-planner-right"]} col-6`}>
            <div className={styles["feature-step"]}>
              <figure>
                <Image
                  src="/images/why-choose-us/laptop-mobile.svg"
                  alt="laptop-mobile"
                  width={80}
                  height={80}
                  className={`${styles.img} img`}
                />
              </figure>
              <div className={styles["feature-content"]}>
                <h3>Easy to Use</h3>
                <p>Clean, minimalist interface designed for everyone.</p>
              </div>
            </div>

            <div className={styles["feature-step"]}>
              <figure>
                <Image
                  src="/images/why-choose-us/object-subtract.svg"
                  alt="object-subtract"
                  width={80}
                  height={80}
                  className={`${styles.img} img`}
                />
              </figure>
              <div className={styles["feature-content"]}>
                <h3>Fully Customizable</h3>
                <p>Create unlimited budgets and categories.</p>
              </div>
            </div>

            <div className={styles["feature-step"]}>
              <figure>
                <Image
                  src="/images/why-choose-us/money-bill-wheat.svg"
                  alt="money-bill-wheat"
                  width={80}
                  height={80}
                  className={`${styles.img} img`}
                />
              </figure>
              <div className={styles["feature-content"]}>
                <h3>Real-Time Updates</h3>
                <p>Stay on top of your finances instantly.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-btn">
          <a href="/features" className='btn btn-primary'>
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
