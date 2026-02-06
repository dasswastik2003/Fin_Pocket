"use client";

import Link from "next/link";

export default function WhyChooseSection() {
  const features = [
    {
      icon: "/images/why-choose-us/laptop-mobile.svg",
      title: "Easy to Use",
      description: "Clean, minimalist interface designed for everyone.",
    },
    {
      icon: "/images/why-choose-us/object-subtract.svg",
      title: "Fully Customizable",
      description: "Create unlimited budgets and categories.",
    },
    {
      icon: "/images/why-choose-us/money-bill-wheat.svg",
      title: "Real-Time Updates",
      description: "Stay on top of your finances instantly.",
    },
  ];

  return (
    
    <section className="why-choose-us">
       <div className="grid" />
      <div className="radial-blur"></div>
      <div className="container">
        <div className="section-content">
          <p className="section-badge">Why Choose Us</p>
          <h2 className="sec-heading">
            Why Choose Our <span>Budget Planner?</span>
          </h2>
        </div>

        <div className="buddget-planner-wrapper row">
          <div className="buddget-planner-left col-6">
            <figure>
              <img
                src="/images/why-choose-us/girl-holding-pen.svg"
                alt="girl holding pen"
              />
            </figure>
          </div>
          <div className="buddget-planner-right col-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-step">
                <figure>
                  <img src={feature.icon} alt={feature.title} width={60} height={60} />
                </figure>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-btn">
          <Link href="#" className="btn btn-primary">
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}
