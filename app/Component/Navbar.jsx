"use client";

import Link from "next/link";
import { useState } from "react";
import { Scale } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "specialization", href: "/ourservices" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="w-full bg-[#F9FAFC] py-5 fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Scale className="w-6 h-6 text-[#324563]" />
          <h1 className="font-serif text-2xl text-[#131820]">
            Saini & Associates
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-[#131820] text-[15px] font-normal">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group transition-colors duration-300"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#324563] rounded group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-[#131820]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#F9FAFC] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* 🔥 REPLACED “Menu” WITH LOGO + NAME */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <Link 
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <Scale className="w-6 h-6 text-[#324563]" />
            <h1 className="font-serif text-lg text-[#131820]">
              Saini & Associates
            </h1>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl text-[#131820]"
          >
            &times;
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col p-6 text-[#131820] gap-6 text-base">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#324563] rounded group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
