import styles from "@/styles/home/homeExpenses.module.css";
import Image from "next/image";
import Link from "next/link";

// Data for variable cards
const variableCards = [
    {
        title: "Groceries",
        spent: 320.5,
        total: 500,
        remaining: 179.5,
        progressClass: "progress-1",
        svg: (
            <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 5C0 2.23858 2.23858 0 5 0H30C32.7614 0 35 2.23858 35 5V30C35 32.7614 32.7614 35 30 35H5C2.23858 35 0 32.7614 0 30V5Z"
                    fill="#B9FB6A"
                    fillOpacity="0.05"
                />
                <path
                    d="M25.7943 26.2513C26.5678 26.2513 27.3097 26.5586 27.8567 27.1056C28.4037 27.6526 28.7109 28.3944 28.7109 29.168C28.7109 29.9415 28.4037 30.6834 27.8567 31.2304C27.3097 31.7773 26.5678 32.0846 25.7943 32.0846C25.0207 32.0846 24.2789 31.7773 23.7319 31.2304C23.1849 30.6834 22.8776 29.9415 22.8776 29.168C22.8776 27.5492 24.1755 26.2513 25.7943 26.2513ZM2.46094 2.91797H7.22969L8.60052 5.83464H30.1693C30.556 5.83464 30.927 5.98828 31.2005 6.26177C31.474 6.53526 31.6276 6.9062 31.6276 7.29297C31.6276 7.54089 31.5547 7.7888 31.4526 8.02214L26.2318 17.4576C25.7359 18.3471 24.7734 18.9596 23.6797 18.9596H12.8151L11.5026 21.3367L11.4589 21.5117C11.4589 21.6084 11.4973 21.7011 11.5656 21.7695C11.634 21.8379 11.7267 21.8763 11.8234 21.8763H28.7109V24.793H11.2109C10.4374 24.793 9.69553 24.4857 9.14854 23.9387C8.60156 23.3917 8.29427 22.6499 8.29427 21.8763C8.29427 21.3659 8.42552 20.8846 8.64427 20.4763L10.6276 16.9034L5.3776 5.83464H2.46094V2.91797ZM11.2109 26.2513C11.9845 26.2513 12.7264 26.5586 13.2733 27.1056C13.8203 27.6526 14.1276 28.3944 14.1276 29.168C14.1276 29.9415 13.8203 30.6834 13.2733 31.2304C12.7264 31.7773 11.9845 32.0846 11.2109 32.0846C10.4374 32.0846 9.69553 31.7773 9.14854 31.2304C8.60156 30.6834 8.29427 29.9415 8.29427 29.168C8.29427 27.5492 9.59219 26.2513 11.2109 26.2513ZM24.3359 16.043L28.3901 8.7513H9.95677L13.3984 16.043H24.3359Z"
                    fill="#B9FB6A"
                />
            </svg>
        ),
    },
    {
        title: "Healthcare",
        spent: 1500,
        total: 2000,
        remaining: 500,
        progressClass: "progress-2",
        svg: (
            <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 5C0 2.23858 2.23858 0 5 0H30C32.7614 0 35 2.23858 35 5V30C35 32.7614 32.7614 35 30 35H5C2.23858 35 0 32.7614 0 30V5Z"
                    fill="#B9FB6A"
                    fillOpacity="0.05"
                />
                <path
                    d="M26.7189 22.04C27.1237 21.6557 27.446 21.193 27.6662 20.6802C27.8864 20.1673 28 19.615 28 19.0569C28 18.4988 27.8864 17.9465 27.6662 17.4337C27.446 16.9208 27.1237 16.4582 26.7189 16.0738C25.8904 15.2876 24.7918 14.8492 23.6495 14.8492C22.5073 14.8492 21.4086 15.2876 20.5802 16.0738L17.5 19.1538L14.4198 16.0738C13.5914 15.2876 12.4927 14.8492 11.3505 14.8492C10.2082 14.8492 9.10956 15.2876 8.28107 16.0738C7.87634 16.4582 7.55405 16.9208 7.33381 17.4337C7.11357 17.9465 7 18.4988 7 19.0569C7 19.615 7.11357 20.1673 7.33381 20.6802C7.55405 21.193 7.87634 21.6557 8.28107 22.04L17.5 31L26.7189 22.04ZM17.5 11.6154C18.6425 11.6154 19.7383 11.1615 20.5462 10.3537C21.354 9.54584 21.8079 8.45016 21.8079 7.30769C21.8079 6.16522 21.354 5.06954 20.5462 4.26169C19.7383 3.45384 18.6425 3 17.5 3C16.3575 3 15.2617 3.45384 14.4538 4.26169C13.646 5.06954 13.1921 6.16522 13.1921 7.30769C13.1921 8.45016 13.646 9.54584 14.4538 10.3537C15.2617 11.1615 16.3575 11.6154 17.5 11.6154Z"
                    stroke="#B9FB6A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        title: "Transportation",
        spent: 500,
        total: 700,
        remaining: 200,
        progressClass: "progress-3",
        svg: (

            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C0 2.23858 2.23858 0 5 0H30C32.7614 0 35 2.23858 35 5V30C35 32.7614 32.7614 35 30 35H5C2.23858 35 0 32.7614 0 30V5Z" fill="#B9FB6A" fill-opacity="0.05"></path>
                <path d="M14.7552 29.4525V21.3704L16.74 15.6989C16.7867 15.5823 16.8601 15.4884 16.9602 15.4175C17.0603 15.3475 17.2057 15.3125 17.3962 15.3125H27.8175C27.9828 15.3125 28.1218 15.3475 28.2346 15.4175C28.3474 15.4875 28.4271 15.5818 28.4738 15.7004L30.46 21.3704V29.4525C30.46 29.6246 30.4012 29.7694 30.2835 29.8871C30.1659 30.0047 30.0206 30.0635 29.8475 30.0635H29.6127C29.4397 30.0635 29.2943 30.0052 29.1767 29.8885C29.059 29.7719 29.0007 29.6265 29.0017 29.4525V27.596H16.2121V29.4525C16.2121 29.6246 16.1537 29.7694 16.0371 29.8871C15.9204 30.0047 15.7751 30.0635 15.601 30.0635H15.3662C15.1932 30.0635 15.0478 30.0052 14.9302 29.8885C14.8135 29.7699 14.7552 29.6246 14.7552 29.4525ZM16.549 20.1921H28.6648L27.4194 16.6031H17.7944L16.549 20.1921ZM18.3442 25.0716C18.7097 25.0716 19.016 24.9482 19.2629 24.7012C19.5099 24.4543 19.6338 24.148 19.6348 23.7825C19.6358 23.4169 19.5118 23.1107 19.2629 22.8637C19.014 22.6168 18.7078 22.4928 18.3442 22.4918C17.9806 22.4909 17.6743 22.6143 17.4254 22.8623C17.1765 23.1102 17.0526 23.4164 17.0535 23.781C17.0545 24.1456 17.1785 24.4523 17.4254 24.7012C17.6724 24.9501 17.9786 25.0736 18.3442 25.0716ZM26.8696 25.0716C27.2351 25.0716 27.5414 24.9482 27.7883 24.7012C28.0362 24.4543 28.1602 24.148 28.1602 23.7825C28.1602 23.4169 28.0362 23.1107 27.7883 22.8637C27.5404 22.6168 27.2342 22.4928 26.8696 22.4918C26.505 22.4909 26.1987 22.6143 25.9508 22.8623C25.7029 23.1102 25.5794 23.4164 25.5804 23.781C25.5814 24.1456 25.7049 24.4523 25.9508 24.7012C26.1968 24.9501 26.5031 25.0736 26.8696 25.0716ZM9.25729 18.3983V16.1539H11.5017V18.3983H9.25729ZM15.0906 11.1066V8.86227H17.335V11.1066H15.0906ZM9.25729 24.2316V21.9873H11.5017V24.2316H9.25729ZM9.25729 30.065V27.8206H11.5017V30.065H9.25729ZM4.54688 30.065V11.4421H10.3802V4.15039H22.0469V12.0604H20.5885V5.60872H11.8385V12.9004H6.00521V30.065H4.54688Z" fill="#B9FB6A"></path>
            </svg>
        ),
    },
];

export default function ExpensesSection() {
    const fixedExpenses = [
        { category: "Housing", name: "Rent", amount: 5000, dueDate: "OCT 1 2024", autoPay: true },
        { category: "Subscription", name: "Netflix", amount: 5000, dueDate: "OCT 1 2024", autoPay: true },
        { category: "Insurance", name: "Car", amount: 5000, dueDate: "OCT 1 2024", autoPay: true },
        { category: "Loans", name: "Gold loan", amount: 5000, dueDate: "OCT 1 2024", autoPay: true },
        { category: "Services", name: "Water", amount: 5000, dueDate: "OCT 1 2024", autoPay: true },
        { category: "Food", name: "Grocery Shopping", amount: 5000, dueDate: "OCT 1 2024", autoPay: true },
        { category: "Transportation", name: "Fuel", amount: 5000, dueDate: "OCT 1 2024", autoPay: true },
        { category: "Healthcare", name: "Medical Checkup", amount: 5000, dueDate: "OCT 1 2024", autoPay: true },
        { category: "Education", name: "Online Course", amount: 5000, dueDate: "OCT 1 2024", autoPay: true },
    ];

    return (
        <section className={styles["expenses-section"]}>
            <div className="radial-blur"></div>

            <div className="container">
                {/* Expense Header */}
                <div className={styles["section-content"]}>
                    <p className="section-badge">
                        Core Value Propositions and Integration
                    </p>

                    <h2 className={`${styles["sec-heading"]} sec-heading`}>
                        <span>Expenses</span> Overview
                    </h2>

                    <p className={`${styles["sec-description"]} sec-description`}>
                        Understand your financial habits. Quick insights for smarter
                        choices.
                    </p>
                </div>

                {/* Summary Cards */}
                <div className={`row ${styles["expenses-summary"]}`}>
                    <div className="col col-4 col-md-12">
                        <div className={`${styles["summary-card"]} ${styles["glass-border"]}`}>

                            <p>Total Expenses</p>
                            <span>₹45,000</span>
                        </div>
                    </div>

                    <div className="col col-4 col-md-12">
                        <div className={`${styles["summary-card"]} ${styles["glass-border"]}`}>

                            <p>Fixed Expenses</p>
                            <span>₹30,000</span>
                        </div>
                    </div>

                    <div className="col col-4 col-md-12">
                        <div className={`${styles["summary-card"]} ${styles["glass-border"]}`}>

                            <p>Variable Expenses</p>
                            <span>₹15,000</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className={`row ${styles["exp-table"]}`}>
                    {/* Fixed Expenses Table */}
                    <div className="col col-8 col-lg-12">
                        <div className={styles["table-header"]}>
                            <h3>Fixed Expenses</h3>

                            <button className={`${styles.btn} btn`}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4Z"
                                        fill="white"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13 7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11H13V7Z"
                                        fill="white"
                                    />
                                </svg>

                                <span>Add Fixed Expenses</span>
                            </button>
                        </div>

                        <div className={`${styles["glass-border"]} ${styles["expenses-table"]}`}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Name</th>
                                        <th>Amount</th>
                                        <th>Due Date</th>
                                        <th>Auto Pay</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {fixedExpenses.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.category}</td>
                                            <td>{item.name}</td>
                                            <td>₹{item.amount.toFixed(2)}</td>
                                            <td>{item.dueDate}</td>

                                            <td>
                                                <span className={styles["toggle-on"]}>
                                                    {item.autoPay ? "ON" : "OFF"}
                                                </span>
                                            </td>

                                            <td>
                                                <svg
                                                    width="35"
                                                    height="35"
                                                    viewBox="0 0 35 35"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M7.29167 27.7083H9.36979L23.625 13.4531L21.5469 11.375L7.29167 25.6302V27.7083ZM4.375 30.625V24.4271L23.625 5.21354C23.9167 4.94618 24.239 4.73958 24.5919 4.59375C24.9448 4.44792 25.3152 4.375 25.7031 4.375C26.091 4.375 26.4678 4.44792 26.8333 4.59375C27.1989 4.73958 27.5149 4.95833 27.7812 5.25L29.7865 7.29167C30.0781 7.55903 30.291 7.875 30.4252 8.23958C30.5594 8.60417 30.626 8.96875 30.625 9.33333C30.625 9.72222 30.5584 10.0931 30.4252 10.446C30.292 10.799 30.0791 11.1208 29.7865 11.4115L10.5729 30.625H4.375ZM22.5677 12.4323L21.5469 11.375L23.625 13.4531L22.5677 12.4323Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>

                    {/* Variable Expenses */}
                    <div className='col col-4 col-lg-12'>
                        <div className={styles["variable-expenses"]}>
                            {/* Header */}
                            <div className={styles["table-header"]}>
                                <h3>Variable Expenses</h3>
                                <button className={styles.btn}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4Z"
                                            fill="white"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M13 7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11H13V7Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Add Category</span>
                                </button>
                            </div>

                            {/* Variable Cards */}
                            {variableCards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`${styles["variable-card"]} ${styles["glass-border"]}`}
                                >
                                    <div className={styles["card-top"]}>
                                        {card.svg}
                                        <span>{card.title}</span>
                                    </div>
                                    <div className={styles.amount}>
                                        <span>
                                            ₹{card.spent} <small>of ₹{card.total}</small>
                                        </span>
                                    </div>
                                    <div className={styles.progress}>
                                        <span className={styles[card.progressClass]}></span>
                                    </div>
                                    <small>₹{card.remaining} Remaining</small>
                                </div>
                            ))}

                            {/* Bottom CTA */}
                            <div className={styles["expenses-cta"]}>
                                <a href="signup.html" className='btn btn-secondary'>
                                    Sign Up
                                </a>
                                <a
                                    href="https://bikram8538.github.io/dashboard-finpocket/"
                                    className='btn btn-primary'
                                >
                                    Know More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Savings Goals */}
                <div className={styles["savings-goals"]}>
                    {/* Header */}
                    <div className={styles["section-content"]}>
                        <h2 className={`${styles["sec-heading"]} sec-heading`}>
                            <span>Savings</span> Goals
                        </h2>
                    </div>

                    {/* Layout */}
                    <div className={styles["goals-layout"]}>
                        {/* LEFT COLUMN */}
                        <div className={styles["savings-column"]}>
                            <div className={styles["goals-header"]}>
                                <h3>Savings Account</h3>
                                <Link
                                    href="https://bikram8538.github.io/dashboard-finpocket/"
                                    className={styles["add-goal-btn"]}
                                ></Link>
                            </div>

                            {[
                                { title: "High-Yield Savings", current: 15000, target: 20000 },
                                { title: "Emergency Fund", current: 25500, target: 30000 },
                                { title: "Travel Fund", current: 6200, target: 10000 },
                            ].map((goal, index) => {
                                const percent = Math.round((goal.current / goal.target) * 100);

                                const radius = 52;
                                const circumference = 2 * Math.PI * radius;
                                const offset = circumference - (percent / 100) * circumference;

                                return (
                                    <div
                                        key={index}
                                        className={`${styles["goal-card"]} ${styles["wide-card"]}`}
                                    >
                                        {/* LEFT CONTENT */}
                                        <div className={styles["goal-info"]}>
                                            <h4>{goal.title}</h4>

                                            <div className={styles["goal-meta"]}>
                                                <span>₹{goal.target.toLocaleString()} Target:</span>
                                                <span className={styles["goal-percent"]}>{percent}%</span>
                                            </div>

                                            <div className={styles["goal-progress-bar"]}>
                                                <span
                                                    className={styles["progress-fill"]}
                                                    style={{ width: `${percent}%` }}
                                                ></span>
                                            </div>
                                        </div>

                                        {/* RIGHT CIRCLE */}
                                        <div className={styles["goal-ring"]}>
                                            <svg viewBox="0 0 120 120">
                                                <circle className={styles["ring-bg"]} cx="60" cy="60" r="52" />
                                                <circle
                                                    className={styles["ring-progress"]}
                                                    cx="60"
                                                    cy="60"
                                                    r="52"
                                                    style={{
                                                        strokeDasharray: circumference,
                                                        strokeDashoffset: offset,
                                                    }}
                                                />
                                            </svg>
                                            <span className={styles["ring-value"]}>
                                                {goal.current.toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className={styles["goals-column"]}>
                            <div className={styles["goals-header"]}>
                                <h3>Financial Goals</h3>
                                <a
                                    href="https://bikram8538.github.io/dashboard-finpocket/"
                                    className={styles["add-goal-btn"]}
                                ></a>
                            </div>

                            <div className={styles["goals-grid"]}>
                                {[
                                    {
                                        title: "Home Renovation",
                                        current: 108000,
                                        target: 150000,
                                        icon: "/images/saving-goal/home-renovation.svg",
                                    },
                                    {
                                        title: "Medical",
                                        current: 26000,
                                        target: 50000,
                                        icon: "/images/saving-goal/medical.svg",
                                    },
                                    {
                                        title: "Education",
                                        current: 24600,
                                        target: 30000,
                                        icon: "/images/saving-goal/education.svg",
                                    },
                                    {
                                        title: "New Car",
                                        current: 189000,
                                        target: 450000,
                                        icon: "/images/saving-goal/car.svg",
                                    },
                                ].map((goal, index) => {
                                    const percent = Math.round((goal.current / goal.target) * 100);

                                    const radius = 48;
                                    const circumference = 2 * Math.PI * radius;
                                    const offset = circumference - (percent / 100) * circumference;

                                    return (
                                        <div key={index} className={styles["goal-card"]}>
                                            <div className={styles["goal-header"]}>
                                                <img src={goal.icon} alt={goal.title} />
                                                <h4>{goal.title}</h4>
                                            </div>

                                            <div className={styles["goal-footer"]}>
                                                <p className={styles["goal-target"]}>
                                                    ₹{goal.target.toLocaleString()} <span>Target:</span>
                                                </p>

                                                <div className={styles["goal-ring"]}>
                                                    <svg viewBox="0 0 110 110">
                                                        <circle
                                                            className={styles["ring-bg"]}
                                                            cx="55"
                                                            cy="55"
                                                            r="48"
                                                        />
                                                        <circle
                                                            className={styles["ring-progress"]}
                                                            cx="55"
                                                            cy="55"
                                                            r="48"
                                                            style={{
                                                                strokeDasharray: circumference,
                                                                strokeDashoffset: offset,
                                                            }}
                                                        />
                                                    </svg>
                                                    <span className={styles["ring-percent"]}>{percent}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
