import PricingPlans from "@/components/pricingSections/PricingPlans";
import PricingBanner from "../../components/pricingSections/PricingBanner";
import WhyChooseUs from "@/components/pricingSections/WhyChooseUs";
import Benefits from "@/components/pricingSections/Benefits";
import FAQAccordion from "@/components/pricingSections/FAQAccordion";
import Testimonials from "@/components/pricingSections/Testimonials";
import GetStarted from "@/components/pricingSections/GetStarted";

export default function PricingPage() {
    return (

        <main style={{ position: 'relative', minHeight: '100vh' }}>
            <div className="grid"></div>
            <PricingBanner />
            <PricingPlans />
            <WhyChooseUs />
            <Benefits />
            <FAQAccordion />
            <Testimonials />
            <GetStarted />
        </main>

    );
}
