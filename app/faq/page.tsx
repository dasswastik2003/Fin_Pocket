
import FaqBannerSections from '@/components/faqSections/bannerSections'
import FaqTestimonialSections from '@/components/faqSections/testimonialSections'
import "@/styles/faq/accordionSections.module.css";
// import "@/styles/faq/bannerSections.css";
import "@/styles/faq/testimonialS.module.css";
import "@/styles/faq/faqSections.module.css"

import React from 'react'
import AccordionSections from '@/components/faqSections/accordionSections'

export default function FaqPage() {
  return (
  <>
  <FaqBannerSections/>
  <AccordionSections/>
  <FaqTestimonialSections/>
  </>
  )
}
