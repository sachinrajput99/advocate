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

  const [status, setStatus] = useState(null); // success | error | loading

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("loading"); // button "Sending..."

    emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  form,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
)
      .then(() => {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          contact: "",
          service: "",
          message: "",
        });

        setTimeout(() => setStatus(null), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(null), 4000);
      });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    show: { transition: { staggerChildren: 0.15 } },
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
                  We proudly serve clients in Delhi, Haryana & Punjab High
                  Courts.
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
                <option value="Criminal Matters">Criminal Matters</option>
                <option value="Civil Matters">Civil Matters</option>
                <option value="Matrimonial Matters">Matrimonial Matters</option>
                <option value="Commercial Matters">Commercial Matters</option>
                <option value="Consumer Matters">Consumer Matters</option>
                <option value="Arbitration Services">Arbitration Services</option>
                <option value="Property Registration">
                  Property Registration
                </option>
                <option value="Legal Notices">Legal Notices</option>
                <option value="Court Marriage">Court Marriage</option>
                <option value="Marriage Registration">
                  Marriage Registration
                </option>
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
              required
            ></motion.textarea>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="bg-slate-900 w-full text-white px-6 py-4 text-lg rounded-md shadow-md disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Submit Request"}
            </motion.button>

            {/* SUCCESS & ERROR MESSAGES */}
            {status === "success" && (
              <p className="text-green-600 text-center">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </motion.form>
        </section>
      </div>

      <Pricing />
      <Footer />
    </>
  );
}
