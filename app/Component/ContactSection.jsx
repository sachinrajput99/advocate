"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // success, error, loading

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("loading");

    emailjs
      .send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          contact: form.phone,
          service: form.service,
          message: form.message,
        },
       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        // remove message after 4 seconds
        setTimeout(() => setStatus(null), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <section className="bg-white p-4 md:p-24 ">
      <motion.div
        className="flex flex-col md:flex-row bg-[#dce9f9]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Image Section */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img
            src="/contact-image.jpg"
            alt="Legal Consultation"
            className="w-full h-full object-cover object-[5%_50%]"
          />
        </motion.div>

        {/* Right Form Section */}
        <div className="w-full p-8 md:p-16 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-4xl text-left text-[#213753] mb-8"
          >
            We handle a wide range of legal matters
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input
                type="text"
                name="name"
                placeholder="Full name*"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#213753]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              />

              <motion.input
                type="email"
                name="email"
                placeholder="Email*"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#213753]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input
                type="tel"
                name="phone"
                placeholder="Contact number*"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#213753]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              />

              <motion.select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#213753]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <option value="">Choose service*</option>
                <option value="Criminal Matters">Criminal Matters</option>
                <option value="Civil Matters">Civil Matters</option>
                <option value="Matrimonial Matters">Matrimonial Matters</option>
                <option value="Commercial Matters">Commercial Matters</option>
                <option value="Consumer Matters">Consumer Matters</option>
                <option value="Arbitration Services">Arbitration Services</option>
                <option value="Property Registration">Property Registration</option>
                <option value="Legal Notices">Legal Notices</option>
                <option value="Court Marriage">Court Marriage</option>
                <option value="marriage-registration">
                  Marriage Registration
                </option>
              </motion.select>
            </div>

            {/* Message */}
            <motion.textarea
              name="message"
              placeholder="Message"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#213753]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            ></motion.textarea>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#213753] text-white rounded-full px-6 py-3 font-medium hover:bg-[#1a2f4d] transition-all disabled:opacity-70"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {status === "loading" ? "Sending..." : "Submit Request"}
            </motion.button>

            {/* Success / Error Messages */}
            {status === "success" && (
              <p className="text-green-600 mt-2">Message sent successfully!</p>
            )}

            {status === "error" && (
              <p className="text-red-600 mt-2">
                Failed to send message. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
