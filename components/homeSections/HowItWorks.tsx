import Image from "next/image";
import styles from "@/styles/home/howItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles["how-it-works"]}>
      <div className={styles["radial-blur"]}></div>

      <div className="container">
        <div className={styles["section-content"]}>
          <p className="section-badge">How it works</p>
          <h2 className="sec-heading">
            From download to <span>daily use</span> in minutes
          </h2>
        </div>

        <div className={styles["daily-use-wrapper"]}>
          <div className="row">

            {/* LEFT */}
            <div className={`col-md-12 col-lg-10 col-4 ${styles["col-4"]}`} >
              <div className={`${styles.left} ${styles.glass} glass`}>
                <div className={styles["left-wrapper"]}>

                  <form className={styles["signup-wrapper"]}>
                    {[
                      { icon: "user", placeholder: "Your name", type: "text" },
                      { icon: "mail", placeholder: "Email address", type: "email" },
                      { icon: "lock", placeholder: "Password", type: "password" },
                      { icon: "lock", placeholder: "Retype Password", type: "password" },
                    ].map((item, i) => (
                      <div key={i} className={`${styles["input-box"]} ${styles.glass} glass`}>
                        <figure>
                          <Image
                            src={`/images/how-it-works/left-col/${item.icon}.svg`}
                            alt=""
                            width={24}
                            height={24}
                            className={item.icon !== "mail" ? styles.inputClr : ""}
                          />
                        </figure>
                        <input type={item.type} placeholder={item.placeholder} />
                      </div>
                    ))}

                    <div className={styles["submit-btn-wrapper"]}>
                      <input
                        type="submit"
                        value="Sign Up"
                        className="btn btn-primary"
                      />
                    </div>
                  </form>

                  <div className={styles["daily-use-content"]}>
                    <h3>Sign up with Fin Pocket</h3>
                    <p>
                      Sign up in seconds and personalize your preferred currency
                      and categories.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* MID */}
            <div className={`col-md-12 col-lg-10 col-4 ${styles["col-4"]}`}>
              <div className={`${styles.mid} ${styles.glass} glass`}>
                <div className={styles["mid-wrapper"]}>
                  <div className={styles["mid-wrapper-inner"]}>

                    {/* 4 USER AVATARS */}
                    <div className={styles.users}>
                      {[...Array(4)].map((_, i) => (
                        <figure key={i}>
                          <Image
                            src="/images/how-it-works/user-avatar.svg"
                            alt="user"
                            width={40}
                            height={40}
                             className={styles.whiteIcon}
                          />
                        </figure>
                      ))}
                    </div>

                    <div className={styles.lines}>
                      <Image
                        src="/images/how-it-works/lines.svg"
                        alt="lines"
                        width={200}
                        height={100}
                        className="img"
                      />
                    </div>

                    <div className={styles["mid-logo"]}>
                      <Image
                        src="/images/how-it-works/logo.svg"
                        alt="logo"
                        width={70}
                        height={70}
                         className="img"
                      />
                    </div>

                    <h3>Integrate your accounts</h3>
                  </div>
                </div>

                <div className={styles["daily-use-content"]}>
                  <p>
                    Connect all your platforms to start seeing the analytics.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className={`col-md-12 col-lg-10 col-4 ${styles["col-4"]}`}>
              <div className={`${styles.right} ${styles.glass} glass`}>
                <div className={styles["right-wrapper"]}>

                  <form className={styles["buddget-wrapper"]}>
                    {[
                      {
                        icon: "user",
                        placeholder: "Monthly Expenses",
                      },
                      {
                        icon: "discount",
                        placeholder: "discount",
                      },
                      {
                        icon: "calendar",
                        placeholder: "Monthly Budget",
                      },
                    ].map((item, i) => (
                      <div key={i} className={`${styles["input-box"]} ${styles.glass} glass`}>
                        <figure>
                          <Image
                            src={`/images/how-it-works/${item.icon}.svg`}
                            alt=""
                            width={24}
                            height={24}
                             className={item.icon === "user" ? styles.greenIcon : ""}
                          />
                        </figure>
                        <input type="number" placeholder={item.placeholder} />
                      </div>
                    ))}
                  </form>


                  <div className={styles["daily-use-content"]}>
                    <h3>Monitor everything</h3>
                    <p>
                      Nothing else! you’re all done. now enjoy Fin Pocket on your own.
                    </p>
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
