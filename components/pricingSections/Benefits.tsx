"use client";

import Image from "next/image";
import styles from "@/styles/pricing/benefits.module.css";
// import '@/styles/styles.css';

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className="radial-blur"></div>
      <div className="container">
        <div className="section-content">
          <p className="section-badge">Benefits</p>
          <h2 className="sec-heading">
            Upgrade to Pro.<span> Experience more.</span>
          </h2>
        </div>
        <div className={styles["benefits-cards"]}>
          <div className="row">
            <div className="col col-4 col-md-12">
              <div className={`${styles["benefits-card"]} glass`}>
                <h3 className={styles["benefits-card-heading"]}>
                  <figure>
                    <Image
                      src="/images/benefits/insights.svg"
                      alt="insights"
                      width={48}
                      height={48}
                    />
                  </figure>
                  Smart Expense Tracking
                </h3>
                <p className={styles["benefits-card-des"]}>
                  Track daily expenses automatically with clear categories,
                  monthly summaries, and visual insights. Stay in control
                  without manual effort
                </p>
              </div>
            </div>
            <div className="col col-4 col-md-12">
              <div className={`${styles["benefits-card"]} glass`}>
                <h3 className={styles["benefits-card-heading"]}>
                  <figure>
                    <Image
                      src="/images/benefits/alert.svg"
                      alt="alert"
                      width={48}
                      height={48}
                    />
                  </figure>
                  Budget Planning & Alerts
                </h3>
                <p className={styles["benefits-card-des"]}>
                  Create custom budgets and get real-time alerts when you’re
                  close to overspending. Plan smarter and avoid financial
                  stress.
                </p>
              </div>
            </div>
            <div className="col col-4 col-md-12">
              <div className={`${styles["benefits-card"]} glass`}>
                <h3 className={styles["benefits-card-heading"]}>
                  <figure>
                    <Image
                      src="/images/benefits/reports.svg"
                      alt="reports"
                      width={48}
                      height={48}
                    />
                  </figure>
                  Detailed Reports & Insights
                </h3>
                <p className={styles["benefits-card-des"]}>
                  Access interactive charts and downloadable reports to
                  understand spending patterns and make better financial
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
