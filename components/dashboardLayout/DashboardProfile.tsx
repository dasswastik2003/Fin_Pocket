import Image from "next/image";
import Link from "next/link";
import '@/styles/expensecss/profile.css'

export default function ProfilePage() {
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
              <Link
                href="https://bikram8538.github.io/fin-pocket/"
                target="_blank"
                className="brand-logo"
              >
                <figure>
                  <Image
                    src="/assets/dashboard/logo.svg"
                    alt="logo"
                    width={120}
                    height={40}
                  />
                </figure>
              </Link>
            </div>

            <div className="user">
              <Link href="/dashboard/profile" className="nav-link active">
                <div className="user-img"></div>

                <div className="user-info">
                  <strong className="user-name">Rajan Dutta</strong>
                  <span className="ac-type">Personal Account</span>
                </div>

                <div className="user-chevron"></div>
              </Link>
            </div>
          </div>

          {/* SCROLL AREA */}
          <div className="sidebar-scroll">
            <p className="menu-title">MAIN MENU</p>

            <nav className="nav top-nav">
              <Link className="nav-link" href="/dashboard">
                <span className="ico"></span> Dashboard
              </Link>

              <Link className="nav-link" href="/dashboard/expense">
                <span className="ico"></span> Add Expenses
              </Link>

              <Link className="nav-link" href="#">
                <span className="ico"></span> Recent Expenses
              </Link>

              <Link className="nav-link" href="#">
                <span className="ico"></span> Goal Tracking
              </Link>

              <Link className="nav-link" href="/dashboard/budget">
                <span className="ico"></span> Budget Categories
              </Link>
            </nav>

            <p className="menu-title">PREFERENCE</p>

            <nav className="nav bottom-nav">
              <Link className="nav-link" href="#">
                <span className="ico"></span> Promos
              </Link>

              <Link className="nav-link" href="#">
                <span className="ico"></span> Settings
              </Link>

              <Link className="nav-link" href="#">
                <span className="ico"></span> Help center
              </Link>

              <Link className="nav-link" href="#">
                <span className="ico"></span> Log out
              </Link>
            </nav>
          </div>

          {/* UPGRADE */}
          <div className="upgrade">
            <div className="upgrade-top">
              <Link href="#" className="brand-logo">
                <figure>
                  <Image
                    src="/images/dashboard/logo.svg"
                    alt="logo"
                    width={120}
                    height={40}
                  />
                </figure>
              </Link>
            </div>

            <h2>Upgrade Plans</h2>
            <p>
              “Upgrade from today to the smarter insights & financial control”.
            </p>

            <Link href="#" className="btn btn-white">
              Upgrade your Plan <span className="arrow">↗</span>
            </Link>
          </div>
        </aside>

        <label htmlFor="menuToggle" className="overlay"></label>

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
                <span className="search-ico"></span>
              </div>

              <button className="icon-btn"></button>
              <button className="icon-btn"></button>

              <div className="profile-mini">
                <strong className="name">Rajan Dutta</strong>
                <span className="avatar"></span>
              </div>
            </div>
          </header>

          {/* GRID */}
          <section className="grid">
            <div className="col">
              {/* ROW 1 */}
              <div className="row row-1">
                <div className="profile">
                  <figure>
                    <Image
                      src="/images/profile/main-profile.svg"
                      alt="Profile"
                      width={200}
                      height={200}
                    />
                  </figure>

                  <div className="profile-mini-right">
                    <div className="user-name-email">
                      <h2 className="user-name-main">Rajan Dutta</h2>
                      <a
                        href="mailto:rajandutta123@gmail.com"
                        className="user-email"
                      >
                        rajandutta123@gmail.com
                      </a>
                    </div>

                    <div className="membership">
                      <span>
                        Pro Member
                        <figure className="member-right-ico">
                          <Image
                            src="/images/profile/chevron-right.svg"
                            alt="chevron-right"
                            width={15}
                            height={15}
                          />
                        </figure>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="profile-update">
                  <ul className="edit-upgrade">
                    <li className="btn btn-primary">
                      <Link href="#">Edit profile</Link>
                    </li>
                    <li className="btn btn-secondary">
                      <Link href="#">Upgrade Plane</Link>
                    </li>
                  </ul>

                  <div className="total-expence-btm">
                    <span>
                      Total Expense this month: <strong>₹ 5034</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* FINANCIAL TITLE */}
              <div className="financial-title">
                <strong>Financial Overview</strong>
                <span className="hr-line"></span>
              </div>

              {/* ROW 2 */}
              <div className="row row-2">
                <div className="financial-card">
                  <div className="financial-card-header">
                    <span>Monthly Budget</span>
                    <span className="positive">↗ 12%</span>
                  </div>

                  <h3>$5,000.00</h3>

                  <div className="progress">
                    <div className="progress-fill"></div>
                  </div>

                  <p className="sub-text">65% of budget used</p>
                </div>

                <div className="financial-card">
                  <div className="financial-card-header">
                    <span>Total Expenses (MTD)</span>
                    <span className="financial-negative">↗ 8.4%</span>
                  </div>

                  <h3>$3,249.70</h3>

                  <div className="financial-mini-chart">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="financial-card">
                  <div className="financial-card-header">
                    <span>Pending Approvals</span>
                  </div>

                  <div className="approval-row">
                    <h3>04</h3>

                    <div className="financial-avatars">
                      <figure>
                        <Image
                          src="/images/profile/user-1.svg"
                          alt="user-1"
                          width={25}
                          height={25}
                        />
                      </figure>

                      <figure>
                        <Image
                          src="/images/profile/user-2.svg"
                          alt="user-2"
                          width={25}
                          height={25}
                        />
                      </figure>

                      <figure>
                        <Image
                          src="/images/profile/user-3.svg"
                          alt="user-3"
                          width={25}
                          height={25}
                        />
                      </figure>
                    </div>
                  </div>

                  <Link href="#" className="fn-btn">
                    View report queue →
                  </Link>
                </div>

                <div className="financial-card">
                  <div className="financial-card-header">
                    <span>Total Transaction</span>
                  </div>

                  <h3>78</h3>

                  <Link href="#" className="fn-btn">
                    View report queue →
                  </Link>
                </div>
              </div>

              {/* ROW 3 SETTINGS */}
              <div className="row row-3">
                <div className="settings-card">
                  <div className="tabs">
                    <button className="tab active">Account</button>
                    <button className="tab">Security</button>
                    <button className="tab">Billing</button>
                    <button className="tab">Preference</button>
                    <button className="tab">Data</button>
                  </div>

                  <form>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Full name</label>
                        <input type="text" defaultValue="Rajan Dutta" />
                      </div>

                      <div className="form-group">
                        <label>Currency</label>
                        <div className="select-wrapper">
                          <select className="fintech-select" defaultValue="">
                            <option value="" disabled>
                              Select Currency
                            </option>

                            <option value="INR">INR — Indian Rupee (₹)</option>
                            <option value="USD">USD — US Dollar ($)</option>
                            <option value="EUR">EUR — Euro (€)</option>
                            <option value="GBP">GBP — British Pound (£)</option>
                            <option value="JPY">JPY — Japanese Yen (¥)</option>
                            <option value="CNY">CNY — Chinese Yuan (¥)</option>
                            <option value="AUD">AUD — Australian Dollar ($)</option>
                            <option value="CAD">CAD — Canadian Dollar ($)</option>
                            <option value="SGD">SGD — Singapore Dollar ($)</option>
                            <option value="AED">AED — UAE Dirham (د.إ)</option>
                            <option value="SAR">SAR — Saudi Riyal (﷼)</option>
                            <option value="BDT">BDT — Bangladeshi Taka (৳)</option>
                            <option value="PKR">PKR — Pakistani Rupee (₨)</option>
                            <option value="LKR">LKR — Sri Lankan Rupee (Rs)</option>
                            <option value="NPR">NPR — Nepalese Rupee (₨)</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Email Id</label>
                        <input
                          type="email"
                          defaultValue="rajdutta123@gmail.com"
                        />
                      </div>

                      <div className="form-group">
                        <label>Country</label>
                        <div className="select-wrapper">
                          <select className="fintech-select" defaultValue="">
                            <option value="" disabled>
                              Select Country
                            </option>

                            <option value="IN">India</option>
                            <option value="US">United States</option>
                            <option value="GB">United Kingdom</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="IT">Italy</option>
                            <option value="ES">Spain</option>

                            <option value="AE">United Arab Emirates</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SG">Singapore</option>
                            <option value="AU">Australia</option>
                            <option value="CA">Canada</option>

                            <option value="BD">Bangladesh</option>
                            <option value="PK">Pakistan</option>
                            <option value="NP">Nepal</option>
                            <option value="LK">Sri Lanka</option>

                            <option value="JP">Japan</option>
                            <option value="CN">China</option>
                            <option value="KR">South Korea</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="text"
                          id="phone"
                          defaultValue="+91 9254678999"
                        />
                      </div>

                      <div className="form-group">
                        <label>Language</label>
                        <div className="select-wrapper">
                          <select className="fintech-select" defaultValue="">
                            <option value="" disabled>
                              Select Language
                            </option>

                            <option value="en">English</option>
                            <option value="hi">Hindi</option>
                            <option value="bn">Bengali</option>
                            <option value="ur">Urdu</option>

                            <option value="ar">Arabic</option>
                            <option value="zh">Chinese (Mandarin)</option>
                            <option value="ja">Japanese</option>
                            <option value="ko">Korean</option>

                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="es">Spanish</option>
                            <option value="it">Italian</option>
                            <option value="pt">Portuguese</option>

                            <option value="ru">Russian</option>
                            <option value="tr">Turkish</option>
                            <option value="id">Indonesian</option>
                            <option value="th">Thai</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Timezone</label>
                        <div className="select-wrapper">
                          <select className="fintech-select" defaultValue="">
                            <option value="" disabled>
                              Select Timezone
                            </option>

                            <option value="UTC">
                              UTC — Coordinated Universal Time
                            </option>

                            <option value="IST">
                              GMT +5:30 — India Standard Time (IST)
                            </option>
                            <option value="BST">
                              GMT +6:00 — Bangladesh Standard Time (BST)
                            </option>
                            <option value="NPT">
                              GMT +5:45 — Nepal Time (NPT)
                            </option>
                            <option value="PKT">
                              GMT +5:00 — Pakistan Standard Time (PKT)
                            </option>
                            <option value="LKT">
                              GMT +5:30 — Sri Lanka Time (LKT)
                            </option>

                            <option value="GST">
                              GMT +4:00 — Gulf Standard Time (UAE)
                            </option>
                            <option value="AST">GMT +3:00 — Arabia Standard Time</option>

                            <option value="CET">
                              GMT +1:00 — Central European Time
                            </option>
                            <option value="GMT">GMT +0:00 — Greenwich Mean Time</option>

                            <option value="EST">
                              GMT -5:00 — Eastern Standard Time (US)
                            </option>
                            <option value="CST">
                              GMT -6:00 — Central Standard Time (US)
                            </option>
                            <option value="MST">
                              GMT -7:00 — Mountain Standard Time (US)
                            </option>
                            <option value="PST">
                              GMT -8:00 — Pacific Standard Time (US)
                            </option>

                            <option value="JST">
                              GMT +9:00 — Japan Standard Time
                            </option>
                            <option value="CST-CHINA">
                              GMT +8:00 — China Standard Time
                            </option>
                            <option value="KST">
                              GMT +9:00 — Korea Standard Time
                            </option>

                            <option value="AEST">
                              GMT +10:00 — Australian Eastern Time
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <input
                      type="submit"
                      value="Save Changes"
                      className="save-btn"
                    />
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
