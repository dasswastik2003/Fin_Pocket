"use client"

import Link from "next/link";
import Image from "next/image";
import '@/styles/expensecss/topbar.css'
import { useSelector } from "react-redux";



export default function DashboardHeader() {
  const { userId } = useSelector((state: any) => state.auth);

  return (
    <header className="topbar">
      <div className="topbar-left">
        {/* ✅ MENU BUTTON */}
        <div className="brand">
          <Link
            href="/"
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
          <strong className="name">{userId?.first_name} {userId?.last_name}</strong>
          <span className="avatar"></span>
        </div>
      </div>
    </header>
  );
}
