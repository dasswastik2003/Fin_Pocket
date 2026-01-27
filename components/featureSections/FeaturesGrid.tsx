import Image from 'next/image'
import React from 'react'

export default function FeaturesGrid() {
  return (
    <section className="features">
      <div className="radial-blur"></div>
      <div className="container">
        <div className="section-content">
          <p className="section-badge">Features</p>
          <h2 className="sec-heading">
            <span>Smart Strategies</span> to Manage Your Money Better
          </h2>
          <p className="sec-description">
            Discover essential features and resources to help you save more
            efficiently.
          </p>
        </div>

        <div className="features-grid">
          {/* LEFT SIDE */}
          <div className="features-left">
            {/* Left small column */}
            <div className="left-stack">
              <div className="card glass top-card">
                <div>
                  <span>Available for</span>
                  <strong>Android / iOS</strong>
                </div>
                <a className="btn btn-primary">Try Now</a>
              </div>

              <div className="card glass center-card">
                <figure className="goal-tracking-img">
                  <img
                    src="/images/features/mobile-phone-screen-product.png"
                    alt="Goal Tracking"
                  />
                </figure>
                <h3>Goal Tracking</h3>
              </div>

              <div className="card glass bottom-card">
                <figure className="icon-lock">
                  <img src="/images/features/lock.svg" alt="lock" />
                </figure>
                <h3>Savings Protection</h3>
                <p>
                  Set lock into your savings and get reward up to ₹100 after
                  14 days
                </p>
              </div>
            </div>

            {/* Left big column */}
            <div className="left-main card glass">
              {/* Transaction card */}
              <div className="left-main-top glass">
                <div className="transaction">
                  <figure className="transaction-icon">
                    <img
                      src="/images/features/transaction.svg"
                      alt="transaction"
                    />
                  </figure>
                  <h3>₹500</h3>
                  <small>Congratulation</small>
                  <small>25 Nov 2025, 2:14 PM</small>
                </div>

                <div className="transaction-info">
                  <div className="transaction-info-left">
                    <strong>To</strong>
                    <strong>UPI transaction ID</strong>
                  </div>
                  <div className="transaction-info-right">
                    <small>finpocket@support</small>
                    <small>532754018875</small>
                  </div>
                </div>

                <div className="transaction-status glass">
                  <figure className="check">
                    <img src="/images/features/check.svg" alt="check" />
                  </figure>
                  <div>
                    <strong>Done</strong>
                    <small>Autopay set successfully</small>
                  </div>
                  <figure className="check">
                    <img src="/images/features/x.svg" alt="check" />
                  </figure>
                </div>
              </div>
              <div className="secure">
                <h3>Secure & Private</h3>
                <p>Your data is protected with industry-standard security.</p>
              </div>
            </div>

            {/* Savings */}
            <div className="savings card glass">
              <h3>Total Spending</h3>
              <strong>₹19,500</strong>

              <div className="savings-grid">
                <div className="pill glass saving">
                  <strong>Saving</strong><span>5.4K</span><span>+13.4%</span>
                </div>
                <div className="pill glass spending">
                  <strong>Expenses</strong><span>2.1K</span><span>-1.4%</span>
                </div>
                <div className="pill glass investment">
                  <strong>Investment</strong><span>1.1K</span
                  ><span>-1.4%</span>
                </div>
                <div className="pill glass bills">
                  <strong>Bills</strong><span>2.1K</span><span>+11.4%</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="features-right">
            <div className="card glass chart">
              <figure className="chart-img">
                <img src="/images/features/chart-graph.svg" alt="Chart" />
              </figure>
              <ul className="chart-info">
                <li>Investment</li>
                <li>Expenses</li>
                <li>Savings</li>
              </ul>
            </div>

            <div className="card glass phone">
              <figure className="phone-img">
                <img src="/images/features/phone-preview.png" alt="Phone preview" />
              </figure>
              <h3>Manage all cards in one place</h3>
              <p>
                Log your daily spending quickly and categorize it for better
                clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
