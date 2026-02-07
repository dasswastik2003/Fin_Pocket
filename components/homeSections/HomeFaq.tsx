"use client";
import { useState } from "react";
import styles from "@/styles/home/homeFaq.module.css";
import Image from "next/image";
import Link from "next/link";

const faqData = [
  {
    question: "How do I sign up for an account?",
    answer:
      'Signing up is easy, just download the app, click on “Get started”, and follow the prompts. You can use your email address, Google, or Facebook to create an account.',
  },
  {
    question: "Can I get access the app from multiple devices?",
    answer: "Yes, you can log in from multiple devices using the same account.",
  },
  {
    question: "How can I download the application?",
    answer: "The application is available on Play Store and App Store.",
  },
  {
    question: "Can I track cash transactions?",
    answer: "Yes, cash transactions can be tracked easily.",
  },
  {
    question: "Can I customize expense categories?",
    answer: "You can create and manage your own categories.",
  },
  {
    question: "Is my financial data secure?",
    answer: "Your data is encrypted and completely secure.",
  },
  {
    question: "Can I create weekly or yearly budgets?",
    answer: "Yes, budgets can be created weekly, monthly, or yearly.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles["accordian-sec"]}>
      <div className="radial-blur"></div>

      <div className="container">
        <div className={styles["section-content"]}>
          <div className={styles["accordian-content"]}>
            <p className={`${styles["section-badge"]} section-badge`}>
              Frequently Asked Questions
            </p>

            <h2 className={`${styles["sec-heading"]} sec-heading`}>

              Everything You Need to Know About Fin Pocket
            </h2>

            <p className={`${styles["sec-description"]} sec-description`}>
              Find quick answers to common questions about your budget planning,
              expenses and more.
            </p>
          </div>

          <div className={`${styles["section-btn"]} section-btn`}>
            <Link href="/faq" className="btn btn-primary">
              Explore More
            </Link>
          </div>
        </div>

        <div className={`${styles["accordian-row"]} row`}>
          <div className={`${styles["col-6"]} col col-6 `}>
            <div className={styles["accordian-img"]} id="accordionImage">
              <Image
                src="/images/Accordian/accordian.png"
                alt="A guy using fin pocket on his laptop"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className={`${styles["col-6"]} col col-6 `}>
            <div className={styles["accordion-wrapper"]} id="accordionWrapper">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`${styles["accordion-item"]} ${
                    activeIndex === index ? styles["active"] : ""
                  }`}
                >
                  <div
                    className={styles["accordion-header"]}
                    onClick={() => handleToggle(index)}
                  >
                    <span>{item.question}</span>
                    <span className={styles["icon"]}>
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  {activeIndex === index && (
                    <div className={styles["accordion-body"]}>
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
