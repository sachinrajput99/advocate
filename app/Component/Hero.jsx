"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="
        sm:mt-16
        relative 
        min-h-screen 
        flex flex-col 
        justify-start             /* mobile = top aligned */
        pt-32                     /* mobile padding */
        sm:justify-center         /* desktop center */
        sm:pt-0                   /* desktop remove padding */
        text-white 

        /* Desktop / Tablet background */
        sm:bg-[url('/divya-hero.jpg')]
        sm:bg-cover 
        sm:bg-center
        sm:bg-no-repeat

        /* Mobile background */
        bg-[url('/divya-hero.jpg')]
        bg-[length:auto_100%]
        bg-[position:calc(100%_-_-140px)_center]
        bg-no-repeat
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
        className="
          relative z-10  
          container mx-auto px-4 md:px-16 max-w-6xl

          flex flex-col
          items-center text-start       /* ⭐ Mobile center align */
          sm:items-start sm:text-left    /* ⭐ Desktop left align */

          pb-20                          /* ⭐ Buttons upar mobile */
          mt-[92px]
        
        "
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-4xl md:text-5xl leading-snug md:leading-tight mb-6 max-w-xl"
        >
          We tailor our approach to meet individual needs
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-200 max-w-xl mb-8"
        >
          Our team of seasoned attorneys is committed to delivering tailored
          solutions, ensuring you receive the attention and representation you deserve.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Button 1 */}
          <motion.a
            href="/contact"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.3 }}
            className="bg-[#ddebf9] text-[#213753] px-5 py-3 rounded-full text-sm sm:text-base"
          >
            Book Consultation
          </motion.a>

          {/* Button 2 */}
          <motion.a
            href="#specialized"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.3 }}
            className="border border-[#ddebf9] text-[#ddebf9] px-5 py-3 rounded-full text-sm sm:text-base"
          >
            Explore More
          </motion.a>
        </motion.div>
      </div>

      {/* ======================== */}
      {/* Bottom Stats Bar */}
      {/* ======================== */}
      <div className="absolute bottom-0 w-full bg-[#213753]/90 py-8">
        <motion.div
          className="container mx-auto px-4 md:px-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {[
            { number: "5+", label: "Years of Experience" },
            { number: "20k", label: "Clients Served" },
            { number: "10+", label: "Specialized Legal Fields" },
            { number: "24/7", label: "Legal Assistance" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.h3
                className="text-2xl sm:text-3xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {item.number}
              </motion.h3>

              <motion.p
                className="text-gray-300 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                {item.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
