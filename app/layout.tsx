"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const pathname = usePathname();

  
  // pages where navbar & footer should NOT appear
  const hideLayoutRoutes = [
    // '/login',
    // '/signup',
    '/auth/resetPassword',
  ]

   const hideLayout = hideLayoutRoutes.includes(pathname)


  return (
    <html lang="en">
      <body>
       {!hideLayout && <Navbar/>}
        {children}
       {!hideLayout && <Footer/>}
       

      </body>
    </html>
  );
}
