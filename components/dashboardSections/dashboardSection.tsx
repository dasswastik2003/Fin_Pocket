import React from 'react'
import "@/styles/dashboard/dashboard.css"
import "@/styles/styles.css"
export default function DashboardSection() {
  return (
    <>
    
      <input type="checkbox" id="menuToggle" className="menu-toggle" />

      <div className="app">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <label htmlFor="menuToggle" className="sidebar-close">
            ✕
          </label>

          <div className="sidebar-header">
            <div className="brand">
              <a
                href="https://bikram8538.github.io/fin-pocket/"
                className="brand-logo"
              >
                <figure>
                  <img src="/images/dashboard/logo.svg" alt="logo" />
                </figure>
              </a>
            </div>

            <div className="user">
              <div className="user-img" />
              <div className="user-info">
                <strong className="user-name">Rajan Dutta</strong>
                <span className="ac-type">Personal Account</span>
              </div>
              <div className="user-chevron" />
            </div>
          </div>

          <div className="sidebar-scroll">
            <p className="menu-title">MAIN MENU</p>

            <nav className="nav top-nav">
              <a className="nav-link active" href="./index.html">
                <span className="ico" /> Dashboard
              </a>
              <a className="nav-link" href="#">
                <span className="ico" /> Payments
              </a>
              <a className="nav-link" href="#">
                <span className="ico" /> Transactions
              </a>
              <a className="nav-link" href="#">
                <span className="ico" /> My wallets
              </a>
              <a className="nav-link" href="#">
                <span className="ico" /> Savings plan
              </a>
            </nav>

            <p className="menu-title">PREFERENCE</p>

            <nav className="nav bottom-nav">
              <a className="nav-link" href="#">
                <span className="ico" /> Promos
              </a>
              <a className="nav-link" href="#">
                <span className="ico" /> Settings
              </a>
              <a className="nav-link" href="#">
                <span className="ico" /> Help center
              </a>
              <a className="nav-link" href="#">
                <span className="ico" /> Log out
              </a>
            </nav>
          </div>

          <div className="upgrade">
            <div className="upgrade-top">
              <a href="#" className="brand-logo">
                <figure>
                  <img src="/images/dashboard/logo.svg" alt="logo" />
                </figure>
              </a>
            </div>

            <h2>Upgrade Plans</h2>
            <p>
              “Upgrade from today to the smarter insights & financial control”.
            </p>

            <a href="#" className="btn btn-white">
              Upgrade your Plan <span className="arrow">↗</span>
            </a>
          </div>
        </aside>

        <label htmlFor="menuToggle" className="overlay" />

        {/* MAIN */}
        <main className="main">
          {/* TOPBAR */}
          <header className="topbar">
            <div className="topbar-left">
              <label htmlFor="menuToggle" className="menu-btn">
                ☰
              </label>
              <strong className="hello">Hello! Rajan,</strong>
            </div>

            <div className="topbar-right">
              <div className="search">
                <input type="text" placeholder="Search" />
                <span className="search-ico" />
              </div>

              <button className="icon-btn" />
              <button className="icon-btn" />

              <div className="profile-mini">
                <strong className="name">Rajan Dutta</strong>
                <span className="avatar" />
              </div>
            </div>
          </header>

          {/* GRID */}
          <section className="grid">
            <div className="col">
              {/* ROW 1 */}
              <div className="row row-1">
                <div className="card card-balance">
                  <div className="card-head">
                    <h1 className="card-title">Total Balance</h1>
                    <button className="chip-plus">
                      <figure>
                        <img
                          src="/images/dashboard/plus-icon.svg"
                          alt="Plus Icon"
                        />
                      </figure>
                    </button>
                  </div>

                  <div className="money">
                    <strong>$ 20,680</strong>
                    <sup>USD</sup>
                  </div>

                  <div className="actions">
                    <button className="btn btn-green">
                      Deposite
                      <figure>
                        <img
                          src="/images/dashboard/top-arrow-icon.svg"
                          alt="Up Arrow"
                        />
                      </figure>
                    </button>
                    <button className="btn btn-green">
                      Send
                      <figure>
                        <img
                          src="/images/dashboard/down-arrow.svg"
                          alt="Down Arrow"
                        />
                      </figure>
                    </button>
                  </div>
                </div>

                <div className="card card-enh">
                  <div className="card-head">
                    <h2 className="card-title">Enhancement</h2>
                    <button className="btn btn-outline small">
                      <figure>
                        <img src="/images/dashboard/plus-icon-60.svg" alt="" />
                      </figure>
                      Add Enhancement
                    </button>
                  </div>

                  <div className="enh-cards">
                    <div className="mini-box">
                      <div className="mini-head">
                        <figure className="mini-ico">
                          <img
                            src="/images/dashboard/incoming-outgoing-icon.svg"
                            alt="Income"
                          />
                        </figure>
                        <span className="mini-title">Income</span>
                      </div>
                      <div className="mini-bottom">
                        <strong className="mini-price">$14,480.40</strong>
                        <span className="mini-pill">+123.5%</span>
                      </div>
                    </div>

                    <div className="mini-box">
                      <div className="mini-head">
                        <figure className="mini-ico">
                          <img
                            src="/images/dashboard/incoming-outgoing-icon.svg"
                            alt="Expense"
                          />
                        </figure>
                        <span className="mini-title">Expense</span>
                      </div>
                      <div className="mini-bottom">
                        <strong className="mini-price">$14,480.40</strong>
                        <span className="mini-pill">-7%</span>
                      </div>
                    </div>

                    <div className="mini-box">
                      <div className="mini-head">
                        <figure className="mini-ico">
                          <img
                            src="/images/dashboard/saving-mini.svg"
                            alt="saving"
                          />
                        </figure>
                        <span className="mini-title">Savings</span>
                      </div>
                      <div className="mini-bottom">
                        <strong className="mini-price">$14,480.40</strong>
                        <span className="mini-pill">+9%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card card-score">
                  <div className="card-head">
                    <h2 className="card-title">Final Score</h2>
                    <button className="dot-menu">•••</button>
                  </div>

                  <p className="muted">Finance quality</p>

                  <div className="score">
                    <strong>Excellent</strong>
                    <span>82%</span>
                  </div>

                  <div className="score-bar-wrap" style={{ "--val": "82%" }}>
                    <div className="score-bar-dark" />
                    <div className="score-bar-light" />
                  </div>
                </div>
              </div>

              <div className="row row-2">
                {/* Cashflow Chart */}
                <div className="card card-chart">
                  <div className="card-head">
                    <div className="chart-top">
                      <h2 className="card-title">Cashflow</h2>
                      <p className="muted">Total Balance</p>
                      <strong className="big">$ 20,000</strong>
                    </div>

                    <div className="chart-controls">
                      <button className="btn btn-outline small">
                        Last 5 Days
                        <figure>
                          <img
                            src="/images/dashboard/bottom-chevron-icon.svg"
                            alt=""
                          />
                        </figure>
                      </button>

                      <div className="legend">
                        <span className="dot exp" /> Expense
                        <span className="dot inc" /> Income
                      </div>
                    </div>
                  </div>

                  <div className="chart-placeholder">
                    <div className="wave wave-a" />
                    <div className="wave wave-b" />
                    <div className="chart-x">
                      <span>Sun</span>
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                    </div>
                  </div>
                </div>

                <div className="card card-bal">
                  <div className="card-head">
                    <h2 className="card-title">Balance</h2>
                  </div>

                  <p className="muted">Total Balance</p>
                  <strong className="big">$122.2631</strong>

                  <div className="pay-cards">
                    <div className="pay-card">
                      <div className="pay-ico" />
                      <div className="pay-info">
                        <p>Platinum Plus Visa</p>
                        <strong>$122.2631</strong>
                        <span className="muted">48526 5486972 05546</span>
                      </div>
                    </div>

                    <div className="pay-card">
                      <div className="pay-ico alt" />
                      <div className="pay-info">
                        <p>Mastercard</p>
                        <strong>$122.2631</strong>
                        <span className="muted">48526 5486972 05546</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row-3">
                {/* Recent Transactions */}
                <div className="card card-table">
                  <div className="card-head">
                    <h2 className="card-title">Recent Transactions</h2>

                    <div className="table-actions">
                      <button className="btn btn-outline small">
                        This Month
                        <figure>
                          <img
                            src="/images/dashboard/bottom-chevron-icon.svg"
                            alt=""
                          />
                        </figure>
                      </button>

                      <button className="filter-btn">
                        <figure>
                          <img
                            src="/images/dashboard/filter-menu-icon.svg"
                            alt="filter"
                          />
                        </figure>
                      </button>
                    </div>
                  </div>

                  <div className="table-scroll">
                    <div className="table">
                      <div className="table-head">
                        <span>Transaction Name</span>
                        <span>Accounts</span>
                        <span>Date & Time</span>
                        <span>Amounts</span>
                        <span>Status</span>
                      </div>

                      <div className="table-row">
                        <strong>
                          Dividend Payment
                          <span>Investment</span>
                        </strong>
                        <span className="card-type visa">
                          Platinum Plus Visa
                        </span>
                        <span className="muted">
                          2024-05-20 <br />
                          12:25pm
                        </span>
                        <span className="amt plus">+$25.25</span>
                        <span className="status done">Completed</span>
                      </div>

                      <div className="table-row">
                        <strong>
                          Grocery Shopping
                          <span>Food&Dining</span>
                        </strong>
                        <span className="card-type visa">
                          Platinum Plus Visa
                        </span>
                        <span className="muted">
                          2024-05-20 <br />
                          12:25pm
                        </span>
                        <span className="amt minus">-$25.25</span>
                        <span className="status done">Completed</span>
                      </div>

                      <div className="table-row">
                        <strong>
                          Freelance Payments
                          <span>Income</span>
                        </strong>
                        <span className="card-type mastercard">
                          Platinum Mastercard
                        </span>
                        <span className="muted">
                          2024-05-20 <br />
                          12:25pm
                        </span>
                        <span className="amt plus">+$25.25</span>
                        <span className="status done">Completed</span>
                      </div>

                      <div className="table-row">
                        <strong>
                          Electricity Bill
                          <span>Ulities</span>
                        </strong>
                        <span className="card-type visa">
                          Platinum Plus Visa
                        </span>
                        <span className="muted">
                          2024-05-20 <br />
                          12:25pm
                        </span>
                        <span className="amt minus">-$25.25</span>
                        <span className="status pending">Pending</span>
                      </div>

                      <div className="table-row">
                        <strong>
                          Flipkart Shopping
                          <span>Shopping</span>
                        </strong>
                        <span className="card-type visa">
                          Platinum Plus Visa
                        </span>
                        <span className="muted">
                          2024-05-20 <br />
                          12:25pm
                        </span>
                        <span className="amt minus">-$25.25</span>
                        <span className="status done">Completed</span>
                      </div>

                      <div className="table-row">
                        <strong>
                          Roofcafe
                          <span>Food&Dining</span>
                        </strong>
                        <span className="card-type visa">
                          Platinum Plus Visa
                        </span>
                        <span className="muted">
                          2024-05-20 <br />
                          12:25pm
                        </span>
                        <span className="amt minus">-$25.25</span>
                        <span className="status done">Completed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Savings Plan */}
                <div className="card card-savings">
                  <div className="card-head">
                    <h2 className="card-title">Savings Plan</h2>
                    <button className="btn btn-outline small">
                      <figure>
                        <img
                          src="/images/dashboard/plus-icon-60.svg"
                          alt="down arrow"
                        />
                      </figure>
                      Add Plans
                    </button>
                  </div>

                  <p className="muted">Total Savings</p>
                  <strong className="big">$122.000</strong>

                  <div className="saving-item">
                    <p>Emergency Funds</p>
                    <div className="bar-wrap" style={{ "--val": "45%" }}>
                      <div className="bar-dark" />
                      <div className="bar-light" />
                    </div>
                    <div className="bar-meta">
                      <span>$4500 / $10,000</span>
                      <span>45%</span>
                    </div>
                  </div>

                  <div className="saving-item">
                    <p>Vacation Funds</p>
                    <div className="bar-wrap" style={{ "--val": "57%" }}>
                      <div className="bar-dark" />
                      <div className="bar-light" />
                    </div>
                    <div className="bar-meta">
                      <span>$5700 / $10,000</span>
                      <span>57%</span>
                    </div>
                  </div>

                  <div className="saving-item">
                    <p>Retirement Funds</p>
                    <div className="bar-wrap" style={{ "--val": "78%" }}>
                      <div className="bar-dark" />
                      <div className="bar-light" />
                    </div>
                    <div className="bar-meta">
                      <span>$7800 / $10,000</span>
                      <span>78%</span>
                    </div>
                  </div>
                </div>

                <div className="card card-breakdown">
                  <div className="card-head">
                    <h2 className="card-title">Expense Breakdown</h2>
                    <button className="btn btn-outline small">
                      Today
                      <figure>
                        <img
                          src="/images/dashboard/bottom-chevron-icon.svg"
                          alt=""
                        />
                      </figure>
                    </button>
                  </div>

                  <div className="expense-card">
                    <div className="donut-wrap">
                      <div className="donut" id="donut">
                        <div className="donut-center">
                          <p className="muted">Total Expense</p>
                          <strong className="big">$1500.00</strong>
                        </div>
                      </div>
                    </div>

                    <div className="breakdown" id="breakdown">
                      <div
                        className="break-row"
                        data-percent="50"
                        data-color="#B9FB6A"
                      >
                        <span className="tag-percent">50%</span>
                        <span className="tag">Education</span>
                        <span className="tag-value">$2100</span>
                      </div>

                      <div
                        className="break-row"
                        data-percent="20"
                        data-color="#7FA750"
                      >
                        <span className="tag-percent">20%</span>
                        <span className="tag">Rent & Living</span>
                        <span className="tag-value">$2100</span>
                      </div>

                      <div
                        className="break-row"
                        data-percent="15"
                        data-color="#709149"
                      >
                        <span className="tag-percent">15%</span>
                        <span className="tag">Investments</span>
                        <span className="tag-value">$2100</span>
                      </div>

                      <div
                        className="break-row"
                        data-percent="10"
                        data-color="#627C42"
                      >
                        <span className="tag-percent">10%</span>
                        <span className="tag">Grocery</span>
                        <span className="tag-value">$2100</span>
                      </div>

                      <div
                        className="break-row"
                        data-percent="5"
                        data-color="#53673C"
                      >
                        <span className="tag-percent">5%</span>
                        <span className="tag">Shopping</span>
                        <span className="tag-value">$2100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

