"use client";

import React, { ReactNode, useState } from "react";
import { Inter } from "next/font/google";
import Sidebar from "./_components/sidebar";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const inter = Inter({ subsets: ["latin"] });

const LayoutDashboard = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentDate = new Date();
  const formatDate = currentDate.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex min-h-screen w-full flex-col bg-muted/40 ${inter.className}`}
    >
      <nav className="flex justify-center">
        <div className="container pt-2 px-6 flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold text-primaryColor">Broissant</h1>
            <p className="text-gray-600">{formatDate}</p>
          </div>

          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <GiHamburgerMenu className="text-3xl" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 border-t-2 border-gray-200">
            <Link
              href="/dashboard/home"
              className="block text-gray-700 hover:text-primaryColor"
            >
              Home
            </Link>
            <Link
              href="/dashboard/discounts"
              className="block text-gray-700 hover:text-primaryColor"
            >
              Discounts
            </Link>
            <Link
              href="/dashboard/data"
              className="block text-gray-700 hover:text-primaryColor"
            >
              Data
            </Link>
            <Link
              href="/dashboard/mail"
              className="block text-gray-700 hover:text-primaryColor"
            >
              Mail
            </Link>
            <Link
              href="/dashboard/notification"
              className="block text-gray-700 hover:text-primaryColor"
            >
              Notification
            </Link>
            <Link
              href="/dashboard/settings"
              className="block text-gray-700 hover:text-primaryColor"
            >
              Settings
            </Link>
          </div>
        )}
      </nav>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Sidebar />
        <div className="py-4 px-6">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
