import Image from "next/image";
import Link from "next/link";
import '@/styles/expensecss/expense.css'

export default function ExpensePage() {
  return (
    <div className="container">
      <h1 className="title">Expense Management</h1>
      <p className="subtitle">
        Track and manage your business expenditures with ease.
      </p>

      <div className="grid">
        {/* LEFT FORM */}
        <div className="card">
          <div className="card-head">
            <figure>
              <Image
                src="/images/expences/add-icon.svg"
                alt="add-icon"
                width={30}
                height={30}
              />
            </figure>
            <h2>Add New Expense</h2>
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="category">Category</label>

              <select className="input" id="category" defaultValue="">
                <option value="" disabled>
                  Select category
                </option>

                <optgroup label="Operational">
                  <option>Office Supplies</option>
                  <option>Utilities</option>
                  <option>Rent</option>
                  <option>Maintenance</option>
                  <option>Internet & Phone</option>
                </optgroup>

                <optgroup label="Travel & Client">
                  <option>Travel</option>
                  <option>Accommodation</option>
                  <option>Meals</option>
                  <option>Client Entertainment</option>
                  <option>Transportation</option>
                </optgroup>

                <optgroup label="Technology">
                  <option>Software Subscription</option>
                  <option>Hardware</option>
                  <option>Cloud Services</option>
                  <option>Web Hosting</option>
                  <option>Domain Renewal</option>
                </optgroup>

                <optgroup label="Marketing">
                  <option>Advertising</option>
                  <option>Social Media Ads</option>
                  <option>Printing</option>
                  <option>Branding</option>
                  <option>Content Creation</option>
                </optgroup>

                <optgroup label="HR & Admin">
                  <option>Salaries</option>
                  <option>Freelancers</option>
                  <option>Training</option>
                  <option>Recruitment</option>
                  <option>Insurance</option>
                </optgroup>

                <optgroup label="Finance">
                  <option>Bank Charges</option>
                  <option>Taxes</option>
                  <option>Loan Repayment</option>
                  <option>Accounting Services</option>
                </optgroup>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input className="input" placeholder="$ 0.00" id="amount" />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" className="input" />
            </div>

            <div className="form-group">
              <label htmlFor="note">Note</label>
              <textarea
                className="input"
                id="note"
                placeholder="Description of the expense..."
              ></textarea>
            </div>

            <input
              type="submit"
              value="Submit Expense"
              className="submit-btn"
            />
          </form>
        </div>

        {/* RIGHT TABLE */}
        <div className="card">
          <div className="card-top">
            <div className="card-head">
              <figure>
                <Image
                  src="/images/expences/recent-icon.svg"
                  alt="recent-icon"
                  width={30}
                  height={30}
                />
              </figure>
              <h2>Recent Expenses</h2>
            </div>

            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Notes</th>
                    <th>Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Oct 24, 2023</td>
                    <td>
                      <span className="badge travel">
                        <div className="travel-ico"></div>
                        Travel
                      </span>
                    </td>
                    <td>Flight to Chicago for Q4 conference</td>
                    <td>$450.00</td>
                    <td>
                      <ul className="actions">
                        <li>
                          <button className="edit-btn-ico"></button>
                        </li>
                        <li>
                          <button className="del-btn-ico"></button>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>Oct 23, 2023</td>
                    <td>
                      <span className="badge meal">
                        <div className="meal-ico"></div>
                        Meals
                      </span>
                    </td>
                    <td>Client lunch meeting</td>
                    <td>$84.50</td>
                    <td>
                      <ul className="actions">
                        <li>
                          <button className="edit-btn-ico"></button>
                        </li>
                        <li>
                          <button className="del-btn-ico"></button>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>Oct 22, 2023</td>
                    <td>
                      <span className="badge office">
                        <div className="office-ico"></div>
                        Office Supplies
                      </span>
                    </td>
                    <td>Printer toner and paper</td>
                    <td>$125.20</td>
                    <td>
                      <ul className="actions">
                        <li>
                          <button className="edit-btn-ico"></button>
                        </li>
                        <li>
                          <button className="del-btn-ico"></button>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>Oct 20, 2023</td>
                    <td>
                      <span className="badge software">
                        <div className="soft-ico"></div>
                        Software
                      </span>
                    </td>
                    <td>Annual cloud storage subscription</td>
                    <td>$240.00</td>
                    <td>
                      <ul className="actions">
                        <li>
                          <button className="edit-btn-ico"></button>
                        </li>
                        <li>
                          <button className="del-btn-ico"></button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* STATS */}
          <div className="stats">
            {/* Card 1 */}
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

            {/* Card 2 */}
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

            {/* Card 3 */}
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
                      width={30}
                      height={30}
                    />
                  </figure>

                  <figure>
                    <Image
                      src="/images/profile/user-2.svg"
                      alt="user-2"
                      width={30}
                      height={30}
                    />
                  </figure>

                  <figure>
                    <Image
                      src="/images/profile/user-3.svg"
                      alt="user-3"
                      width={30}
                      height={30}
                    />
                  </figure>
                </div>
              </div>

              <Link href="#" className="fn-btn">
                View report queue →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
