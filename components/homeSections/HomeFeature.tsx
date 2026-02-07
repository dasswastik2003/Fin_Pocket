import Image from "next/image";
import styles from "@/styles/home/homeFeature.module.css";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className="radial-blur"></div>

      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-content">
          <p className="section-badge">Features</p>

          <h2 className="sec-heading">
            <span>Smart Strategies</span> to Manage Your Money Better
          </h2>

          <p className="sec-description">
            Discover essential features and resources to help you save more
            efficiently.
          </p>
        </div>

        <div className={styles["features-grid"]}>
          {/* LEFT SIDE */}
          <div className={styles["features-left"]}>
            {/* LEFT SMALL COLUMN */}
            <div className={styles["left-stack"]}>
              <div className={`${styles.card} glass ${styles["top-card"]}`}>
                <div>
                  <span>Available for</span>
                  <strong>Android / iOS</strong>
                </div>
                <a className="btn btn-primary">Try Now</a>
              </div>

              <div
                className={`${styles.card} glass ${styles["center-card"]}`}
              >
                <figure className={styles["goal-tracking-img"]}>
                  <Image
                    src="/images/features/mobile-phone-screen-product.png"
                    alt="Goal Tracking"
                    width={200}
                    height={300}
                  />
                </figure>
                <h3>Goal Tracking</h3>
              </div>

              <div
                className={`${styles.card} glass ${styles["bottom-card"]}`}
              >
                <figure className={styles["icon-lock"]}>
                  <Image
                    src="/images/features/lock.svg"
                    alt="lock"
                    width={40}
                    height={40}
                  />
                </figure>
                <h3>Savings Protection</h3>
                <p>
                  Set lock into your savings and get reward up to ₹100 after 14
                  days
                </p>
              </div>
            </div>

            {/* LEFT BIG COLUMN */}
            <div className={`${styles["left-main"]} ${styles.card} glass`}>
              <div className={`${styles["left-main-top"]} glass`}>
                <div className={styles.transaction}>
                  <figure className={styles["transaction-icon"]}>
                    <Image
                      src="/images/features/transaction.svg"
                      alt="transaction"
                      width={40}
                      height={40}
                    />
                  </figure>
                  <h3>₹500</h3>
                  <small>Congratulation</small>
                  <small>25 Nov 2025, 2:14 PM</small>
                </div>

                <div className={styles["transaction-info"]}>
                  <div className={styles["transaction-info-left"]}>
                    <strong>To</strong>
                    <strong>UPI transaction ID</strong>
                  </div>
                  <div className={styles["transaction-info-right"]}>
                    <small>finpocket@support</small>
                    <small>532754018875</small>
                  </div>
                </div>

                <div className={`${styles["transaction-status"]} glass`}>
                  <figure className={styles.check}>
                    <Image
                      src="/images/features/check.svg"
                      alt="check"
                      width={24}
                      height={24}
                    />
                  </figure>
                  <div>
                    <strong>Done</strong>
                    <small>Autopay set successfully</small>
                  </div>
                  <figure className={styles.check}>
                    <Image
                      src="/images/features/x.svg"
                      alt="cancel"
                      width={24}
                      height={24}
                    />
                  </figure>
                </div>
              </div>

              <div className={styles.secure}>
                <h3>Secure & Private</h3>
                <p>
                  Your data is protected with industry-standard security.
                </p>
              </div>
            </div>

            {/* SAVINGS */}
            <div className={`${styles.savings} ${styles.card} glass`}>
              <figure className={styles["spending-img"]}>
                <Image
                  src="/images/features/total-spending.svg"
                  alt="Total Spending"
                  width={80}
                  height={80}
                />
              </figure>

              <h3>Total Spending</h3>
              <strong>₹19,500</strong>

              <div className={styles["savings-grid"]}>
                <div className={`${styles.pill} glass ${styles.saving}`}>
                  <strong>Saving</strong>
                  <span>5.4K</span>
                  <span>+13.4%</span>
                </div>

                <div className={`${styles.pill} glass ${styles.spending}`}>
                  <strong>Expenses</strong>
                  <span>2.1K</span>
                  <span>-1.4%</span>
                </div>

                <div
                  className={`${styles.pill} glass ${styles.investment}`}
                >
                  <strong>Investment</strong>
                  <span>1.1K</span>
                  <span>-1.4%</span>
                </div>

                <div className={`${styles.pill} glass ${styles.bills}`}>
                  <strong>Bills</strong>
                  <span>2.1K</span>
                  <span>+11.4%</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles["features-right"]}>
            <div className={`${styles.card} glass ${styles.chart}`}>
              <figure className={styles["chart-img"]}>
                <Image
                  src="/images/features/chart-graph.svg"
                  alt="chart"
                  width={200}
                  height={200}
                />
              </figure>

              <ul className={styles["chart-info"]}>
                <li>Investment</li>
                <li>Expenses</li>
                <li>Savings</li>
              </ul>
            </div>

            <div className={`${styles.card} glass ${styles.phone}`}>
              <figure className={styles["phone-img"]}>
                <Image
                  src="/images/features/phone-preview.svg"
                  alt="phone"
                  width={220}
                  height={300}
                />
              </figure>

              <h3>Manage all cards in one place</h3>
              <p>
                Log your daily spending quickly and categorize it for better
                clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
