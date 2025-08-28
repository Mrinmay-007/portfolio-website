

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiCertificateFill } from "react-icons/pi";
import {
  HiHome,
  HiCode,
  HiBriefcase,
  HiAcademicCap,
  HiCollection,
  HiMail,
  HiMenu,
  HiX,
} from "react-icons/hi";

const navLinks = [
  { id: "home", text: "Home", icon: <HiHome className="h-5 w-5" /> },
  { id: "skills", text: "Skills", icon: <HiCode className="h-5 w-5" /> },
  { id: "certificate", text: "Certificate", icon: <PiCertificateFill className="h-5 w-5" /> },
  { id: "experience", text: "Experience", icon: <HiBriefcase className="h-5 w-5" /> },
  { id: "education", text: "Education", icon: <HiAcademicCap className="h-5 w-5" /> },
  { id: "projects", text: "Projects", icon: <HiCollection className="h-5 w-5" /> },
  { id: "contact", text: "Contact", icon: <HiMail className="h-5 w-5" /> },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar container */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-2">
        <div className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 p-0.5 rounded-full">
          <div className="bg-[#182232] rounded-full flex items-center justify-between p-2 relative">
            {/* Desktop & Tablet Links */}
            <ul className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === `/${link.id}`;
                return (
                  <li key={link.id}>
                    <Link
                      to={`/${link.id}`}
                      className={`flex items-center gap-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-slate-700/80 text-white"
                          : "text-slate-300 hover:bg-slate-700/80 hover:text-white"
                      }`}
                    >
                      {link.icon}
                      <span>{link.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(true)}
                className="text-white p-2 focus:outline-none"
              >
                <HiMenu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#182232] z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white p-2 focus:outline-none"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar links */}
        <ul className="flex flex-col gap-4 mt-4 px-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === `/${link.id}`;
            return (
              <Link
                key={link.id}
                to={`/${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-slate-700/80 text-white"
                    : "text-slate-300 hover:bg-slate-700/80 hover:text-white"
                }`}
              >
                {link.icon}
                <span>{link.text}</span>
              </Link>
            );
          })}
        </ul>
      </div>

      {/* Sidebar overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;

