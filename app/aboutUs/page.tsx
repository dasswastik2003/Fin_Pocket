import AboutUsSection from '@/components/aboutUsSections/aboutUsSection'
import TestimonialSection from '@/components/aboutUsSections/testimonialSection'
import WhyChooseUsSection from '@/components/aboutUsSections/whyChooseUsSection'
import WorkFlowSection from '@/components/aboutUsSections/workFlowSection'
import React from 'react'
import '@/styles/styles.css'
import AboutBannerSection from '@/components/aboutUsSections/bannerSection'

export default function AboutPage() {
  return (
   <>
   <div className='grid'></div>
   
   <AboutBannerSection/>
   <AboutUsSection/>
   <WorkFlowSection/>
   <WhyChooseUsSection/>
   <TestimonialSection/>
  
   </>
  )
}
