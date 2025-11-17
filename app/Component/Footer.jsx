"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { Scale } from "lucide-react"; 

const footerData = [
  {
    title: "Company",
    links: [
      { name: "Home", url: "/" },
          { name: "About", url: "/about" },
      { name: "Attorneys", url: "/#attorney" },
      { name: "Pricing", url: "/pricing" },
  
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "History", url: "/about" },
      { name: "Services", url: "/ourservices" },
      { name: "Expertise", url: "/ourservices" },
    ],
  },

  
];

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
          <div>
            <h3 className="text-lg md:text-xl font-medium">
              The journey begins with a personalized consultation
            </h3>

            <motion.div
              variants={childVariants}
              className="text-white/80 text-sm md:text-sm mt-2"
            >
              We proudly serve and represent clients in Delhi, Haryana & Punjab High Courts.
            </motion.div>
          </div>

        
        </motion.div>
         <motion.div
          variants={parentVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10"
        >
        <div className="sm:block hidden" >
             <Link href="/" className="flex items-center gap-2 mb-4">
          <Scale className="w-6 h-6 text-[#324563]" />
          <h1 className="font-serif text-lg text-white ">Saini & Associates</h1>
        </Link>
                    <p
               
                   
                    className="text-sm text-gray-300 hover:text-white"
                  >
Professional lawyer specialising in Criminal Matters, Civil Matters and  Matrimonial Matters.
                  </p>
      
         </div>


        {/* --- Footer Links --- */}
       
          {footerData.map(({ title, links }) => (
            <motion.div key={title} variants={childVariants}>
              <h4 className="text-lg mb-4">{title}</h4>
              <ul className="space-y-2 text-white/70">
                {links.map((link) => (
                  <motion.li
                    whileHover={{ scale: 1.08, x: 4 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    key={link.name}
                    className="text-sm hover:text-white"
                  >
                    <Link href={link.url}>{link.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
<div className="sm:hidden block mb-5" >
             <Link href="/" className="flex items-center gap-2 mb-4">
          <Scale className="w-6 h-6 text-[#324563]" />
          <h1 className="font-serif text-lg text-white ">Saini & Associates</h1>
        </Link>
                    <p
               
                   
                    className="text-sm text-gray-300 hover:text-white"
                  >
Professional lawyer specialising in Criminal Matters, Civil Matters and  Matrimonial Matters.
                  </p>
      
         </div>
        {/* --- Bottom Section --- */}
        <motion.div
          variants={childVariants}
          className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60 gap-4"
        >
          <p>© {new Date().getFullYear()}  Saini & Associates. All Rights Reserved</p>

          <div className="flex items-center gap-4 text-white/80">
            <motion.a href="https://www.instagram.com/advocate_saini_02/" whileHover={{ scale: 1.2 }}>
              <FaInstagram size={20} />
            </motion.a>

            <motion.a href="https://www.facebook.com/share/1FU8yBmyUK/?mibextid=wwXIfr" whileHover={{ scale: 1.2 }}>
              <FaFacebookF size={20} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/adv-divya-saini-96141714b/"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedinIn size={20} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
