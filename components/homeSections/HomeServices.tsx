import Image from "next/image";
import styles from "@/styles/home/homeServices.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="radial-blur"></div>

      <div className="container">
        <div className={styles["section-content"]}>
          <h2 className="section-badge">Services</h2>
          <p className="sec-heading">
            Empowering You to Take Control of <span>Your Finances</span>
          </p>
          <p className="sec-description">
            We simplify money management to help you save, grow and achieve
            your financial goals. Start your journey to financial freedom
            today.
          </p>
        </div>

        <div className={styles["service-card-wrapper"]}>
          <div className={`${styles.row} row`}>
            <div className="col-3 col-lg-5 col-md-6 col-sm-10">
              <div className={`${styles["service-card"]} glass`}>
                <figure>
                  <Image
                    src="/images/services/secure-trust.png"
                    alt="secure and trust"
                    fill
                  />
                </figure>
                <div className={styles["service-content"]}>
                  <h3>Secure & Trusted</h3>
                  <p>Set and track your financial goals</p>
                </div>
              </div>
            </div>

            <div className="col-3 col-lg-5 col-md-6 col-sm-10">
              <div className={`${styles["service-card"]} glass`}>
                <figure>
                  <Image
                    src="/images/services/total-profits.png"
                    alt="total profits"
                    fill
                  />
                </figure>
                <div className={styles["service-content"]}>
                  <h3>Total Profits</h3>
                  <p>Optimize Spending Effortlessly</p>
                </div>
              </div>
            </div>

            <div className="col-3 col-lg-5 col-md-6 col-sm-10">
              <div className={`${styles["service-card"]} glass`}>
                <figure>
                  <Image
                    src="/images/services/expense-tracking.png"
                    alt="expense tracking"
                   fill
                  />
                </figure>
                <div className={styles["service-content"]}>
                  <h3>Expense Tracking</h3>
                  <p>Easily track all your expenses</p>
                </div>
              </div>
            </div>

            <div className="col-3 col-lg-5 col-md-6 col-sm-10">
              <div className={`${styles["service-card"]} glass`}>
                <figure>
                  <Image
                    src="/images/services/buddget-managing.png"
                    alt="buddget managing"
                   fill
                  />
                </figure>
                <div className={styles["service-content"]}>
                  <h3>Budget Managing</h3>
                  <p>Create and manage your budgets</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-btn">
          <a href="/features" className="btn btn-primary">
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
