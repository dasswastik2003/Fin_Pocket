"use client";
import Image from "next/image";
import styles from "@/styles/pricing/getStarted.module.css";

export default function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <figure className={styles.getStartedLeft}>
        <Image src="/images/get-started/left-card.svg" alt="card" width={180} height={180} />
      </figure>
      <figure className={styles.getStartedRight}>
        <Image src="/images/get-started/right-card.svg" alt="card" width={180} height={180} />
      </figure>
      <div className={styles.container}>
        <div className={styles.sectionContent}>
          <h2 className={styles.secHeading}>
            Are you ready to get <span>started ?</span>
          </h2>
          <p className={styles.getStartedDec}>
            Take control of your expenses today. Start tracking smarter in just minutes.
          </p>
          <div className={styles.sectionBtn}>
            <a href="#" className={styles.btn + " btn btn-primary"}>Upgrade to Pro</a>
          </div>
        </div>
      </div>
    </section>
  );
}
