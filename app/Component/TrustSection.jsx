"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TrustSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden">
      
      {/* 🔹 Background Image Fade-In */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/divya-trust.jpg"
          alt="Lawyers discussing"
          className="w-full h-full object-cover
         
          "
        />

        {/* 🔹 Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* 🔹 Bottom Left Text Content */}
      <div className="absolute bottom-10 left-6 md:bottom-20 md:left-20 max-w-3xl text-white">
        
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl leading-snug mb-4"
        >
          Trust is the foundation of any <br className="hidden sm:block" />
          attorney–client relationship
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-sm md:text-lg text-gray-200 leading-relaxed max-w-xl"
        >
          We uphold the highest standards of integrity and transparency. We keep
          our clients informed throughout the legal process, empowering them
          with knowledge to make informed decisions.
        </motion.p>

      </div>
    </section>
  );
}
