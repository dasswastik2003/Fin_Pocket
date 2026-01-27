import React from 'react'

export default function Services() {
  const services = [
    {
      id: 1,
      image: '/images/services/service-card-01.svg',
      title: 'Secure & Trusted',
      description: 'Set and track your financial goals easily',
      alt: 'secure and trust'
    },
    {
      id: 2,
      image: '/images/services/service-card-02.svg',
      title: 'Total Profits',
      description: 'Optimize Spending Effortlessly',
      alt: 'total profits'
    },
    {
      id: 3,
      image: '/images/services/service-card-03.svg',
      title: 'Expense Tracking',
      description: 'Easily track all your expenses in one place',
      alt: 'expense tracking'
    },
    {
      id: 4,
      image: '/images/services/service-card-04.svg',
      title: 'Budget Managing',
      description: 'Create and manage your budgets effortlessly',
      alt: 'budget managing'
    },
    {
      id: 5,
      image: '/images/services/service-card-05.png',
      title: 'Smart Insights & Alerts',
      description: 'Get personalized tips and fraud notifications',
      alt: 'smart insights'
    },
    {
      id: 6,
      image: '/images/services/service-card-06.svg',
      title: 'Goal-Based Saving Planner',
      description: 'Plan track progress towards your dreams',
      alt: 'goal-based saving'
    },
    {
      id: 7,
      image: '/images/services/service-card-07.svg',
      title: 'Financial Reports & Analytics',
      description: 'Visualize your finances with easy to read charts',
      alt: 'financial reports'
    },
    {
      id: 8,
      image: '/images/services/service-card-08.svg',
      title: 'Investment Portfolio Tracker',
      description: 'Monitor your investment and trends',
      alt: 'investment tracker'
    }
  ]

  return (
    <section className="services">
      <div className="radial-blur"></div>
      <div className="container">
        <div className="section-content">
          <h2 className="section-badge">Services</h2>
          <p className="sec-heading">
            Empowering You to Take Control of <span>Your Finances</span>
          </p>
          <p className="sec-description">
            We simplify money management to help you save, grow and achieve
            your financial goals. Start your journey to financial freedom
            today.
          </p>
        </div>

        <div className="service-card-wrapper">
          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-3 col-lg-5 col-md-6 col-sm-10">
                <div className="service-card glass">
                  <figure>
                    <img src={service.image} alt={service.alt} />
                  </figure>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-btn">
          <a href="/features" className="btn btn-primary">
            View More
          </a>
        </div>
      </div>
    </section>
  )
}
