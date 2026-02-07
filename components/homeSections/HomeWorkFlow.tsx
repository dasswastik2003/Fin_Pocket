import Image from "next/image";
import styles from "@/styles/home/homeWorkFlow.module.css";

export default function Workflow() {
  return (
    <section className={styles.workflow}>
      <div className='container'>
        <div className={styles["workflow-wrapper"]}>
          <div className='row'>
            <div className='col col-6 col-lg-12'>
              <div className={styles["workflow-content"]}>
                <div className={styles["section-content"]}>
                  <p className={`${styles["section-badge"]} section-badge`}>Workflow</p>
                  <h2 className="sec-heading">
                    A smarter way to manage your money
                  </h2>
                  <p>
                    Our ultimate solution for seamless and intelligent money
                    management.
                  </p>
                </div>

                <div className={styles["savings-content"]}>
                  <h3>Automated Savings</h3>
                  <p>
                    Effortlessly save money with our automated savings
                    feature. Set your goals, and Smart cash will do the rest,
                    helping you achieve financial milestones without even
                    thinking about it.
                  </p>
                </div>

                <div className={styles["expences-content"]}>
                  <h3>Track your expenses</h3>
                  <p>
                    Stay on top of your spending with a simple and intuitive
                    tracking system. Add, edit, and monitor expenses in
                    seconds, helping you understand where your money goes and
                    make smarter financial decisions every day.
                  </p>
                </div>
              </div>
            </div>

            <div className='col col-6 col-lg-12'>
              <div className={styles["workflow-steps"]}>
                <div className={styles["steps-cards"]}>

                  <div>
                    <figure>
                      <Image
                        src="/images/workflow/signup.svg"
                        alt="signup"
                        width={100}
                        height={100}
                      />
                    </figure>
                    <div>
                      <h3>Sign Up</h3>
                      <p>Create your account in minutes.</p>
                    </div>
                  </div>

                  <div>
                    <figure>
                      <Image
                        src="/images/workflow/album.svg"
                        alt="album"
                        width={100}
                        height={100}
                      />
                    </figure>
                    <div>
                      <h3>Link Accounts</h3>
                      <p>Securely connect your financial accounts.</p>
                    </div>
                  </div>

                  <div>
                    <figure>
                      <Image
                        src="/images/workflow/analyze.svg"
                        alt="analyze"
                        width={100}
                        height={100}
                      />
                    </figure>
                    <div>
                      <h3>Analyze</h3>
                      <p>Access detailed insights and analytics.</p>
                    </div>
                  </div>

                  <div>
                    <figure>
                      <Image
                        src="/images/workflow/transact.svg"
                        alt="transact"
                        width={100}
                        height={100}
                      />
                    </figure>
                    <div>
                      <h3>Transact</h3>
                      <p>Send or receive payments effortlessly.</p>
                    </div>
                  </div>

                  <div>
                    <figure>
                      <Image
                        src="/images/workflow/optimize.svg"
                        alt="optimize"
                        width={100}
                        height={100}
                      />
                    </figure>
                    <div>
                      <h3>Optimize</h3>
                      <p>Use our tools to improve financial decisions.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
