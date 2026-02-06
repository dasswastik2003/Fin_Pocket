"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="radial-blur"></div>
      {/* <div className="grid"></div> */}
      <div className="container">
        <div className="section-content">
          <p className="section-badge">Why Choose Us</p>
          <h2 className="sec-heading">
            Why Choose Our <span>Budget Planner?</span>
          </h2>
        </div>
        <div className="buddget-planner-wrapper row">
          <div className="buddget-planner-left col-5">
            <figure>
              <Image
                src="/images/why-choose-us/girl-holding-pen.svg"
                alt="girl holding pen"
                width={350}
                height={350}
                priority
              />
            </figure>
          </div>
          <div className="buddget-planner-right col-6">
            <div className="feature-step">
              <figure>
                <Image
                  src="/images/why-choose-us/laptop-mobile.svg"
                  alt="laptop-mobile"
                  width={48}
                  height={48}
                />
              </figure>
              <div className="feature-content">
                <h3>Easy to Use</h3>
                <p>Clean, minimalist interface designed for everyone.</p>
              </div>
            </div>
            <div className="feature-step">
              <figure>
                <Image
                  src="/images/why-choose-us/object-subtract.svg"
                  alt="object-subtract"
                  width={48}
                  height={48}
                />
              </figure>
              <div className="feature-content">
                <h3>Fully Customizable</h3>
                <p>Create unlimited budgets and categories.</p>
              </div>
            </div>
            <div className="feature-step">
              <figure>
                <Image
                  src="/images/why-choose-us/money-bill-wheat.svg"
                  alt="money-bill-wheat"
                  width={48}
                  height={48}
                />
              </figure>
              <div className="feature-content">
                <h3>Real-Time Updates</h3>
                <p>Stay on top of your finances instantly.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-btn">
          <a href="#" className="btn btn-primary">Explore More</a>
        </div>
      </div>
    </section>
  );
}
