"use client";
import React from "react";

const footerData = [
  {
    title: "Company",
    links: ["Home", "Attorneys", "Pricing", "About"],
  },
  {
    title: "About Us",
    links: ["History", "Services", "Expertise"],
  },
  {
    title: "Personal injury",
    links: ["Family law advocacy", "Property deals"],
  },
  {
    title: "Q&A",
    links: [
      "How do I choose a lawyer?",
      "Are you licensed in my country?",
      "How long does the legal process take?",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1c2e46] text-white">
      <div className="container mx-auto px-6 md:px-16 py-16">
        {/* --- Top Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/30 pb-10 mb-10 gap-4">
          <h3 className="text-lg md:text-xl font-medium">
            The journey begins with a personalized consultation
          </h3>
          <div className="text-right">
            <p className="text-lg md:text-xl font-medium">Emergency call</p>
            <p className="text-2xl font-semibold">(704) 358-1528</p>
          </div>
        </div>

        {/* --- Footer Links --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {footerData.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-lg  mb-4">{title}</h4>
              <ul className="space-y-2 text-white/70">
                {links.map((link) => (
                  <li key={link} className="hover:text-white cursor-pointer text-sm">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- Bottom Section --- */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Law Sphere. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
