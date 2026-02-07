import AboutUs from "@/components/homeSections/HomeAbout";
import HomeBanner from "@/components/homeSections/HomeBanner";
import DownloadSection from "@/components/homeSections/HomeDownload";
import ExpensesSection from "@/components/homeSections/HomeExpenses";
import Faq from "@/components/homeSections/HomeFaq";
import Features from "@/components/homeSections/HomeFeature";
import Services from "@/components/homeSections/HomeServices";
import Workflow from "@/components/homeSections/HomeWorkFlow";
import HowItWorks from "@/components/homeSections/HowItWorks";
import Pricing from "@/components/homeSections/Pricing";
import Testimonials from "@/components/homeSections/Testimonials";
import WhyChooseUs from "@/components/homeSections/WhyChooseUs";
import Image from "next/image";
import '@/styles/styles.css';
export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <div className="grid"></div>
      <HomeBanner />
      <Features />
      <HowItWorks />
      <Services/>
      <WhyChooseUs/>
      <Workflow/>
      <AboutUs/>
      <ExpensesSection/>
      <Pricing/>
      <Testimonials/>
      <Faq/>
      <DownloadSection/>
      <div className="radialBlur"></div>

    </main>
  );
}
