

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PiCertificateFill } from "react-icons/pi";

import {
  HiHome,
  HiCode,
  HiBriefcase,
  HiAcademicCap,
  HiCollection,
  HiMail,
} from "react-icons/hi";

// --- Navigation Data ---
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

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 p-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 z-50">
      <nav className="bg-[#182232] p-2 rounded-full">
        <ul className="flex items-center space-x-1 md:space-x-2">
          {navLinks.map((link) => {
            // ✅ Check if current route matches link
            const isActive = location.pathname === `/${link.id}`;
            return (
              <li key={link.id}>
                <Link
                  to={`/${link.id}`} // Navigates to /home, /skills, etc.
                  className={`flex items-center justify-center gap-x-2 px-3 md:px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300 ${
                    isActive
                      ? "bg-slate-700/80 text-white"
                      : "text-slate-300 hover:bg-slate-700/80 hover:text-white"
                  }`}
                >
                  {link.icon}
                  <span className="hidden sm:inline">{link.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
