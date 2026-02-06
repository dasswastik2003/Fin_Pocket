// import React from 'react'
// // import "@/styles/faq/accordionSections.module.css"
// import styles from '@/styles/faq/accordionSections.module.css'  

// export default function AccordionSections() {
//   return (
//     <section className={styles['accordion-sec']}>
//       <div className="radial-blur" />

//       <div className="container">
//         <div className={styles['section-content']}>
//           <div className={styles['accordion-content']}>
//             <p className="section-badge">Frequently Asked Questions</p>

//             <h2 className="sec-heading">
//               Everything You Need to Know About Fin Pocket
//             </h2>

//             <p className="sec-description">
//               Find quick answers to common questions about your budget planning,
//               expenses and more.
//             </p>
//           </div>

//           <div className={styles['section-btn']}>
//             <a className="btn btn-primary">Explore More</a>
//           </div>
//         </div>

//         <div className={`row ${styles['accordion-row']}`}>
//           <div className="col col-6">
//             <div className={styles['accordion-img']}>
//               <img
//                 src="/images/Accordian/accordian.png"
//                 alt="A guy using fin pocket on his laptop"
//               />
//             </div>
//           </div>

//           <div className="col col-6">
//             <div className={styles['accordion-wrapper']}>
//               {/** accordion items */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"


import React, { useState } from 'react'
import styles from '@/styles/faq/accordionSections.module.css'

const accordionData = [
  {
    question: 'How do I sign up for an account?',
    answer:
      'Signing up is easy, just download the app, click on “Get started”, and follow the prompts. You can use your email address, Google, or Facebook to create an account.',
  },
  {
    question: 'Can I get access the app from multiple devices?',
    answer:
      'Yes, you can log in from multiple devices using the same account.',
  },
  {
    question: 'How can I download the application?',
    answer:
      'The application is available on Play Store and App Store.',
  },
  {
    question: 'Can I track cash transactions?',
    answer:
      'Yes, cash transactions can be tracked easily.',
  },
  {
    question: 'Can I customize expense categories?',
    answer:
      'You can create and manage your own categories.',
  },
  {
    question: 'Is my financial data secure?',
    answer:
      'Your data is encrypted and completely secure.',
  },
  {
    question: 'Can I create weekly or yearly budgets?',
    answer:
      'Yes, budgets can be created weekly, monthly, or yearly.',
  },
]

export default function AccordionSections() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className={styles['accordion-sec']}>
      <div className="radial-blur" />

      <div className="container">
        <div className={styles['section-content']}>
          <div className={styles['accordion-content']}>
            <p className="section-badge" id='accordionbadge'>Frequently Asked Questions</p>

            <h2 className="sec-heading">
              Everything You Need to Know About Fin Pocket
            </h2>

            <p className="sec-description">
              Find quick answers to common questions about your budget planning,
              expenses and more.
            </p>
          </div>

          <div className={styles['section-btn']}>
            <a className="btn btn-primary">Explore More</a>
          </div>
        </div>

        <div className={`row ${styles['accordion-row']}`}>
          <div className="col col-6">
            <div className={styles['accordion-img']}>
              <img
                src="/images/Accordian/accordian.png"
                alt="A guy using fin pocket on his laptop"
              />
            </div>
          </div>

          <div className="col col-6">
            <div className={styles['accordion-wrapper']}>
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className={`${styles['accordion-item']} ${
                    activeIndex === index ? styles.active : ''
                  }`}
                >
                  <div
                    className={styles['accordion-header']}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{item.question}</span>
                    <span className={styles.icon}>
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </div>

                  <div className={styles['accordion-body']}>
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
