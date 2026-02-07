import styles from "@/styles/home/homeDownload.module.css";
import Image from "next/image";
import Link from "next/link";

export default function DownloadSection() {
  return (
    <section className={styles["download-sec"]}>
      <div className="container">
        <div className="row">
          <div className="col col-9">
            <div className={styles["download-btn"]}>
              <p className={`${styles["section-badge"]} section-badge`}>Download Our App</p>
            </div>

            <div className={styles["dowload-cntn"]}>
              <h4>"Save First Spend later,Stress never."</h4>
            </div>

            <div className={styles["download-para"]}>
              <p>
                Smart money management empowers you to track expenses, save
                wisely invest effectively, and achieve financial freedom.
              </p>
            </div>

            <div className={styles["download-img"]}>
              <div className={styles["left-download"]}>
                <Link href="#">
                  <Image
                    src="/images/download/google-play 1.png"
                    alt="Google Play"
                    width={200}
                    height={200}

                  />
                </Link>
              </div>

              <div className={styles["right-download"]}>
                <Link href="#">
                  <Image
                    src="/images/download/app-store 1.png"
                    alt="App Store"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col col-3">
            <div className={styles["mobile-img"]}>
              <Image
                src="/images/download/asdfasiPhone-15-Pro-Black-Titanium-Mockup-Portrait 6.png"
                alt="Mobile App Mockup"
                width={300}
                height={500}
                
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
