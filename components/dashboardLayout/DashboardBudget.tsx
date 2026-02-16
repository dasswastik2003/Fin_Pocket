import Image from "next/image";
import '@/styles/budgetcss/buget.css'

export default function BudgetPage() {
  return (
    <div className="container">
      {/* TITLE SECTION */}
      <div className="title-section">
        <h1>Monthly Budget Management</h1>
        <p>Plan your expenses and take control of your monthly spending.</p>
      </div>

      {/* CREATE NEW BUDGET CARD */}
      <div className="card budget-card">
        <div className="card-header">
          <span className="green-dot"></span>
          Create New Budget
        </div>

        <div className="form-row">
          <div className="form-group custom-select-wrapper">
            <label>Category</label>

            <div className="custom-select">
              <div className="select-trigger">Select category</div>

              <div className="select-dropdown">
                <div className="select-item">Housing</div>
                <div className="select-item">Food</div>
                <div className="select-item">Transport</div>
                <div className="select-item">Bills</div>
                <div className="select-item">EMI</div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Month (YYYY-MM)</label>
            <input type="text" placeholder="---- --" />
          </div>
        </div>

        <div className="form-group full">
          <label>Budget Amount</label>
          <input type="text" placeholder="$ 0.00" />
        </div>

        <button className="btn-green">Save Budget</button>
      </div>

      {/* EXISTING BUDGET TABLE */}
      <div className="card table-card">
        <div className="card-header table-header">
          <div>
            <span className="green-dot"></span>
            Existing Budgets
          </div>
          <div className="entries">3 ENTRIES</div>
        </div>

        <table>
          <thead>
            <tr>
              <th>CATEGORY</th>
              <th>MONTH</th>
              <th>AMOUNT</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="category">
                  <span className="cat-icon food">
                    <Image
                      src="/images/budget/icon-1.png"
                      alt="food"
                      width={20}
                      height={20}
                    />
                  </span>
                  Food & Dining
                </div>
              </td>
              <td>2023-10</td>
              <td>$1,200.00</td>
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
              <td>
                <div className="category">
                  <span className="cat-icon travel">
                    <Image
                      src="/images/budget/icon-2.png"
                      alt="travel"
                      width={20}
                      height={20}
                    />
                  </span>
                  Travel
                </div>
              </td>
              <td>2023-11</td>
              <td>$3,500.00</td>
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
              <td>
                <div className="category">
                  <span className="cat-icon rent">
                    <Image
                      src="/images/budget/icon-3.png"
                      alt="rent"
                      width={20}
                      height={20}
                    />
                  </span>
                  Rent / Mortgage
                </div>
              </td>
              <td>2023-10</td>
              <td>$2,800.00</td>
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

        {/* TABLE FOOTER */}
        <div className="table-footer">
          <span>Showing 1 to 3 of 3 entries</span>

          <div className="pagination">
            <button>Previous</button>
            <button className="active">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
