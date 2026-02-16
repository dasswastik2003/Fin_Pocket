import Link from "next/link";
import Image from "next/image";
import '@/styles/expensecss/topbar.css'



export default function DashboardHeader() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        {/* ✅ MENU BUTTON */}
        <div className="brand">
          <Link
            href="https://bikram8538.github.io/fin-pocket/"
            target="_blank"
            className="brand-logo"
          >
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
      </div>

      <div className="topbar-right">
        <div className="profile-mini">
          <strong className="name">Rajan Dutta</strong>
          <span className="avatar"></span>
        </div>
      </div>
    </header>
  );
}
