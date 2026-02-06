"use client";

import { useState } from "react";
import Image from "next/image";
import '@/styles/styles.css';

export default function PricingPlans() {
    // React state for billing cycle and price switching animation
    const [billingCycle, setBillingCycle] = useState("monthly");
    const [switching, setSwitching] = useState(false);

    // Pricing data
    const plans = [
      {
        label: "Free Plan",
        price: "Free Plan",
        features: [
          "Track daily expenses",
          "Basic monthly budget",
          "Add unlimited categories",
          "Simple analytics",
        ],
        icon: "/images/pricing/free-label.svg",
        button: "Get Started Free",
      },
      {
        label: "Pro Plan",
        priceMonthly: "Pro Plan – ₹199/month",
        priceYearly: "Pro Plan – ₹1999/year",
        features: [
          "Track daily expenses",
          "Basic monthly budget",
          "Add unlimited categories",
          "Simple analytics",
        ],
        icon: "/images/pricing/pricing-pro-plan.svg",
        button: "Upgrade to Pro",
        featured: true,
      },
      {
        label: "Premium",
        priceMonthly: "Premium – ₹399/month",
        priceYearly: "Premium – ₹3999/year",
        features: [
          "Track daily expenses",
          "Basic monthly budget",
          "Add unlimited categories",
          "Simple analytics",
        ],
        icon: "/images/pricing/premium-label.svg",
        button: "Go Premium",
      },
    ];

    // Handler for billing cycle toggle
    const handleBillingToggle = (cycle: string) => {
      if (cycle === billingCycle) return;
      setSwitching(true);
      setTimeout(() => {
        setBillingCycle(cycle);
        setSwitching(false);
      }, 250);
    };

    return (
      <>
        <div className="grid" />
        <section className="pricing">
          <div className="container">
            <div className="section-content">
              <p className="section-badge">Pricing Plan</p>
              <h2 className="sec-heading">
                <span>Choose the plan</span> that fits your financial journey
              </h2>
            </div>
            <div className="pricing-reassurance">
              <ul className="reassurance-list">
                <li className="reassurance-item">
                  <span>
                    <Image src="/images/pricing/circle-clock.svg" alt="time" width={40} height={40} />
                  </span>
                  14 Days free trial
                </li>
                <li className="reassurance-item">
                  <span>
                    <Image src="/images/pricing/x.svg" alt="x" width={40} height={40} />
                  </span>
                  Cancel anytime
                </li>
                <li className="reassurance-item">
                  <span>
                    <Image src="/images/pricing/shield-verify.svg" alt="shield-verify" width={40} height={40} />
                  </span>
                  Secure payment
                </li>
              </ul>
            </div>
            <div className={`billing-toggle${billingCycle === "yearly" ? " yearly" : ""}`} role="tablist" aria-label="Billing cycle">
              <button
                className={`billing-option${billingCycle === "monthly" ? " is-active" : ""}`}
                data-cycle="monthly"
                role="tab"
                aria-selected={billingCycle === "monthly"}
                onClick={() => handleBillingToggle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`billing-option${billingCycle === "yearly" ? " is-active" : ""}`}
                data-cycle="yearly"
                role="tab"
                aria-selected={billingCycle === "yearly"}
                onClick={() => handleBillingToggle("yearly")}
              >
                Yearly
              </button>
            </div>
            <div className="pricing-cards" id="pricing">
              {/* FREE */}
              <div className="pricing-card glass">
                <figure className="plan-icon">
                  <Image src={plans[0].icon} alt="free-label" width={60} height={60} />
                </figure>
                <h3 className="price">{plans[0].price}</h3>
                <hr />
                <p className="plan-description">Start budgeting with essential features.</p>
                <div className="plan-features">
                  <p className="features-title">Includes:</p>
                  <ul className="features-list">
                    {plans[0].features.map((feature, idx) => (
                      <li className="feature-item" key={idx}>
                        <figure>{/* SVG inline here */}</figure>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#" className="btn btn-primary">{plans[0].button}</a>
              </div>
              {/* PRO */}
              <div className="pricing-card glass is-featured">
                <figure className="plan-icon">
                  <Image src={plans[1].icon} alt="pro-label" width={60} height={60} />
                </figure>
                <h3
                  className={`price${switching ? " is-switching" : ""}`}
                  data-monthly={plans[1].priceMonthly}
                  data-yearly={plans[1].priceYearly}
                >
                  {billingCycle === "yearly" ? plans[1].priceYearly : plans[1].priceMonthly}
                </h3>
                <hr />
                <p className="plan-description">Start budgeting with essential features.</p>
                <div className="plan-features">
                  <p className="features-title">Includes:</p>
                  <ul className="features-list">
                    {plans[1].features.map((feature, idx) => (
                      <li className="feature-item" key={idx}>
                        <figure>{/* SVG inline here */}</figure>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#" className="btn btn-primary">{plans[1].button}</a>
              </div>
              {/* PREMIUM */}
              <div className="pricing-card glass ">
                <figure className="plan-icon">
                  <Image src={plans[2].icon} alt="premium-label" width={60} height={60} />
                </figure>
                <h3
                  className={`price${switching ? " is-switching" : ""}`}
                  data-monthly={plans[2].priceMonthly}
                  data-yearly={plans[2].priceYearly}
                >
                  {billingCycle === "yearly" ? plans[2].priceYearly : plans[2].priceMonthly}
                </h3>
                <hr />
                <p className="plan-description">Start budgeting with essential features.</p>
                <div className="plan-features">
                  <p className="features-title">Includes:</p>
                  <ul className="features-list">
                    {plans[2].features.map((feature, idx) => (
                      <li className="feature-item" key={idx}>
                        <figure>{/* SVG inline here */}</figure>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#" className="btn btn-primary">{plans[2].button}</a>
              </div>
            </div>
          </div>
        </section>
        <div className="radial-blur" />
      </>
    );
}
