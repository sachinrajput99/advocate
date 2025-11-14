"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Pricing from "../Component/Pricing";

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

    emailjs
      .send(
        "YOUR_SERVICE_ID",    // ⭐ Replace
        "YOUR_TEMPLATE_ID",   // ⭐ Replace
        form,                 // Yeh data EmailJS template me jayega
        "YOUR_PUBLIC_KEY"     // ⭐ Replace
      )
      .then(
        () => {
          alert("Request sent successfully!");

          setForm({
            name: "",
            email: "",
            contact: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Failed to send request, please try again.");
        }
      );
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 mt-24">
        <section className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12">

          {/* LEFT SECTION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="max-w-md space-y-8"
          >
            <h2 className="text-4xl font-semibold text-gray-900">Contact</h2>

            <hr className="border-gray-300" />

            <div className="space-y-5 text-gray-700">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <p className="text-gray-800">sainidivya1003@gmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <p className="text-gray-800">
                  We proudly serve clients in Delhi, Haryana & Punjab High Courts.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <p className="text-gray-800">Book consultation</p>
              </div>
            </div>
          </motion.div>

          {/* FORM SECTION */}
          <motion.form
            onSubmit={handleSubmit}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="space-y-6 bg-white p-8 rounded-xl shadow-md"
          >
            <motion.div className="grid md:grid-cols-2 gap-6" variants={fadeUp}>
              <input
                type="text"
                name="name"
                placeholder="Full name*"
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-6" variants={fadeUp}>
              <input
                type="text"
                name="contact"
                placeholder="Contact number*"
                value={form.contact}
                onChange={handleChange}
                className="w-full p-4 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full p-4 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Choose service*</option>
                <option value="criminal">Criminal Matters</option>
                <option value="civil">Civil Matters</option>
                <option value="matrimonial">Matrimonial Matters</option>
                <option value="commercial">Commercial Matters</option>
                <option value="consumer">Consumer Matters</option>
                <option value="arbitration">Arbitration Services</option>
                <option value="property">Property Registration</option>
                <option value="legal-notice">Legal Notices</option>
                <option value="court-marriage">Court Marriage</option>
                <option value="marriage-registration">Marriage Registration</option>
              </select>
            </motion.div>

            <motion.textarea
              variants={fadeUp}
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-4 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
            ></motion.textarea>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="bg-slate-900 w-full text-white px-6 py-4 text-lg rounded-md shadow-md"
            >
              Submit Request
            </motion.button>

          </motion.form>
        </section>
      </div>

      <Pricing />
      <Footer />
    </>
  );
}
