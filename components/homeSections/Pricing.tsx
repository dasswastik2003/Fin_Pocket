"use client";

import { useState } from "react";
import styles from "@/styles/home/homePricing.module.css";
import Link from "next/link";
import Image from "next/image";

// All features are objects now
type Feature = { text: string; icon: string };

interface Plan {
    id: string;
    title: string;
    price?: string;
    priceMonthly?: string;
    priceYearly?: string;
    description: string;
    features: Feature[];
    icon: string;
    buttonText: string;
    buttonLink: string;
    featured?: boolean;
}

const plans: Plan[] = [
    {
        id: "free",
        title: "Free Plan",
        price: "Free",
        description: "Start budgeting with essential features.",
        features: [
            { text: "Track daily expenses", icon: "/images/pricing/dollar.svg" },
            { text: "Basic monthly budget", icon: "/images/pricing/time.svg" },
            { text: "Add unlimited categories", icon: "/images/pricing/categories.svg" },
            { text: "Simple analytics", icon: "/images/pricing/analytics.svg" },
        ],
        icon: "/images/pricing/free-label.svg",
        buttonText: "Get Started Free",
        buttonLink: "#",
    },
    {
        id: "pro",
        title: "Pro Plan",
        priceMonthly: "₹199/month",
        priceYearly: "₹1999/year",
        description: "Access advanced budgeting tools and analytics.",
        features: [
            { text: "Track daily expenses", icon: "/images/pricing/dollar.svg" },
            { text: "Basic monthly budget", icon: "/images/pricing/time.svg" },
            { text: "Add unlimited categories", icon: "/images/pricing/categories.svg" },
            { text: "Simple analytics", icon: "/images/pricing/analytics.svg" },
        ],
        icon: "/images/pricing/pro-label.svg",
        buttonText: "Get Started Pro",
        buttonLink: "#",
        featured: true,
    },
    {
        id: "premium",
        title: "Premium Plan",
        priceMonthly: "₹499/month",
        priceYearly: "₹4999/year",
        description: "All features unlocked plus exclusive insights.",
        features: [
            { text: "Track daily expenses", icon: "/images/pricing/dollar.svg" },
            { text: "Basic monthly budget", icon: "/images/pricing/time.svg" },
            { text: "Add unlimited categories", icon: "/images/pricing/categories.svg" },
            { text: "Simple analytics", icon: "/images/pricing/analytics.svg" },
        ],
        icon: "/images/pricing/premium-label.svg",
        buttonText: "Get Premium",
        buttonLink: "#",
    },
];

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    return (
        <section className={styles.pricing}>
            <div className="radial-blur"></div>
            <div className="container">
                {/* Section Heading */}
                <div className={styles["section-content"]}>
                    <p className="section-badge">Pricing Plan</p>
                    <h2 className="sec-heading">
                        <span>Choose the plan</span> that fits your financial journey
                    </h2>
                </div>

                {/* Reassurance List */}
                <div className={styles["pricing-reassurance"]}>
                    <ul className={styles["reassurance-list"]}>
                        <li className={styles["reassurance-item"]}>
                            <span>
                                <Image src="/images/pricing/circle-clock.svg" alt="14-day trial" width={24} height={24} />
                            </span>
                            14 Days free trial
                        </li>
                        <li className={styles["reassurance-item"]}>
                            <span>
                                <Image src="/images/pricing/x.svg" alt="Cancel anytime" width={24} height={24} />
                            </span>
                            Cancel anytime
                        </li>
                        <li className={styles["reassurance-item"]}>
                            <span>
                                <Image src="/images/pricing/shield-verify.svg" alt="Secure payment" width={24} height={24} />
                            </span>
                            Secure payment
                        </li>
                    </ul>
                </div>

                {/* Billing Toggle */}
                <div
                    className={`${styles["billing-toggle"]} ${billingCycle === "yearly" ? styles["yearlyToggle"] : ""}`}
                    role="tablist"
                    aria-label="Billing cycle"
                >
                    <button
                        className={`${styles["billing-option"]} ${billingCycle === "monthly" ? styles["is-active"] : ""}`}
                        onClick={() => setBillingCycle("monthly")}
                    >
                        Monthly
                    </button>
                    <button
                        className={`${styles["billing-option"]} ${billingCycle === "yearly" ? styles["is-active"] : ""}`}
                        onClick={() => setBillingCycle("yearly")}
                    >
                        Yearly
                    </button>
                </div>


                {/* Pricing Cards */}
                <div className={styles["pricing-cards"]}>
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`${styles["pricing-card"]} ${plan.featured ? styles["is-featured"] : ""} glass`}
                        >
                            <figure className={styles["plan-icon"]}>
                                <Image src={plan.icon} alt={`${plan.title} label`} width={80} height={80} />
                            </figure>

                            <h3 className={styles.price}>
                                {plan.price ?? (billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly)}
                            </h3>

                            <hr />

                            <p className={styles["plan-description"]}>{plan.description}</p>

                            {/* Features */}
                            <div className={styles["plan-features"]}>
                                <p className={styles["features-title"]}>Includes:</p>
                                <ul className={styles["features-list"]}>
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className={styles["feature-item"]}>
                                            <figure>
                                                <Image src={feature.icon} alt={feature.text} width={20} height={20} />
                                            </figure>
                                            {feature.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href={plan.buttonLink} className="btn btn-primary">
                                {plan.buttonText}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
