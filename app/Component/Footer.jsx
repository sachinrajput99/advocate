"use client";
import React from "react";
import { motion } from "framer-motion";

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

// parent animation for stagger
const parentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};

// child animation for each column
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="bg-[#1c2e46] text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={parentVariants}
        className="container mx-auto px-6 md:px-16 py-16"
      >
        {/* --- Top Section --- */}
        <motion.div
          variants={childVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/30 pb-10 mb-10 gap-4"
        >
          <h3 className="text-lg md:text-xl font-medium">
            The journey begins with a personalized consultation
          </h3>
          <div className="text-right">
            <p className="text-lg md:text-xl font-medium">Emergency call</p>
            <p className="text-2xl font-semibold">(704) 358-1528</p>
          </div>
        </motion.div>

        {/* --- Footer Links --- */}
        <motion.div
          variants={parentVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10"
        >
          {footerData.map(({ title, links }) => (
            <motion.div key={title} variants={childVariants}>
              <h4 className="text-lg mb-4">{title}</h4>
              <ul className="space-y-2 text-white/70">
                {links.map((link) => (
                  <motion.li
                    whileHover={{ scale: 1.08, x: 4 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    key={link}
                    className="cursor-pointer text-sm hover:text-white"
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Bottom Section --- */}
        <motion.div
          variants={childVariants}
          className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60"
        >
          <p>© {new Date().getFullYear()} Law Sphere. All Rights Reserved</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
