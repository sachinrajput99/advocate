"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  // Framer Motion Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  // LETTER BY LETTER TITLE
  const title = "Contact Us".split("");

  const letterAnim = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" }
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-white mt-24">

        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 text-white py-20 text-center">
          <motion.h1
            className="text-4xl  flex justify-center gap-[2px]"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {title.map((letter, i) => (
              <motion.span key={i} variants={letterAnim}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </section>

        {/* LEGAL MATTERS */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          
          {/* TEXT BLOCK */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-2xl text-gray-900 mb-4">
              We handle a wide range of legal matters
            </h2>
            <p className="text-gray-600 mb-6">
              We prioritize our clients&apos; needs, understanding that each case is
              unique. Our team of seasoned attorneys is committed to delivering tailored
              solutions.
            </p>

            {/* CARDS */}
            <div className="flex gap-6">
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                className="bg-slate-100 p-4 rounded-lg text-center w-32"
              >
                <p className="text-2xl text-slate-800">15+</p>
                <p className="text-gray-500 text-sm">Years of experience</p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                className="bg-slate-100 p-4 rounded-lg text-center w-32"
              >
                <p className="text-2xl text-slate-800">84k</p>
                <p className="text-gray-500 text-sm">Clients worldwide</p>
              </motion.div>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.img
            src="/law-office.avif"
            alt="Law office"
            className="rounded-xl shadow-md w-full object-cover"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          />
        </section>

        {/* CUSTOMER SUPPORT + FORM */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          
          {/* TEXT */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-2xl text-gray-900 mb-4">
              Customer support and assistance
            </h2>
            <p className="text-gray-600">
              We prioritize our clients&apos; needs and provide tailored legal assistance.
            </p>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="space-y-4"
          >
            <motion.div className="grid md:grid-cols-2 gap-4" variants={fadeUp}>
              <input
                type="text"
                name="name"
                placeholder="Full name*"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-slate-100 outline-none focus:ring-2 focus:ring-slate-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-slate-100 outline-none focus:ring-2 focus:ring-slate-400"
                required
              />
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-4" variants={fadeUp}>
              <input
                type="text"
                name="contact"
                placeholder="Contact number*"
                value={form.contact}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-slate-100 outline-none focus:ring-2 focus:ring-slate-400"
                required
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-slate-100 outline-none focus:ring-2 focus:ring-slate-400"
                required
              >
                <option value="">Choose service*</option>
                <option value="corporate-law">Corporate Law</option>
                <option value="family-law">Family Law</option>
                <option value="civil-rights">Civil Rights</option>
                <option value="criminal-law">Criminal Law</option>
              </select>
            </motion.div>

            <motion.textarea
              variants={fadeUp}
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-slate-100 outline-none focus:ring-2 focus:ring-slate-400"
              rows="4"
            ></motion.textarea>

            {/* BUTTON */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="bg-slate-900 text-white px-6 py-3 rounded-md transition-all"
            >
              Submit Request
            </motion.button>
          </motion.form>
        </section>
      </div>

      <Footer />
    </>
  );
}
