"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/pricing/faqAccordion.module.css";
const faqs = [
  {
    question: "How do I sign up for an account?",
    answer:
      "Signing up is easy, just download the app, click on ‘Get started’, and follow the prompts. You can use your email address, Google, or Facebook to create an account.",
  },
  {
    question: "Can I get access the app from multiple devices?",
    answer:
      "Yes, you can log in from multiple devices using the same account.",
  },
  {
    question: "How can I download the application?",
    answer:
      "The application is available on Play Store and App Store.",
  },
  {
    question: "Can I track cash transactions?",
    answer:
      "Yes, cash transactions can be tracked easily.",
  },
  {
    question: "Can I customize expense categories?",
    answer:
      "You can create and manage your own categories.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Your data is encrypted and completely secure.",
  },
  {
    question: "Can I create weekly or yearly budgets?",
    answer:
      "Yes, budgets can be created weekly, monthly, or yearly.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.accordianSec}>
      <div className={styles.radialBlur}></div>
      <div className={styles.container}>
        <div className={styles.sectionContent}>
          <div className={styles.accordianContent}>
            <p className={`${styles.sectionBadge}`}>Frequently Asked Questions</p>
            <h2 className={styles.secHeading}>
              Everything You Need to Know About Fin Pocket
            </h2>
            <p className={styles.secDescription}>
              Find quick answers to common questions about your budget
              planning, expenses and more.
            </p>
          </div>
          <div className={styles.sectionBtn}>
            <a href="/faq" className={styles.btn + " btn btn-primary"}>Explore More</a>
          </div>
        </div>
        <div className={styles.accordianRow + " row"}>
          <div className="col col5">
            <div className={styles.accordianImg} id="accordionImage">
              <Image
                src="/images/Accordian/accordian.png"
                alt="A guy using fin pocket on his laptop"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
          <div className="col col5">
            <div className={styles.accordionWrapper} id="accordionWrapper">
              {faqs.map((faq, idx) => (
                <div className={styles.accordionItem + (openIndex === idx ? " " + styles.accordionItemActive : "")} key={idx}>
                  <div
                    className={styles.accordionHeader}
                    onClick={() => handleToggle(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    <span>{faq.question}</span>
                    <span className={styles.icon}>{openIndex === idx ? "−" : "+"}</span>
                  </div>
                  <div className={styles.accordionBody} style={openIndex === idx ? {maxHeight: 140, padding: "14px 20px"} : {}}>
                    {openIndex === idx && faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
