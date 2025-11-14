"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
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
            src="/contact-image.avif"
            alt="Legal Consultation"
            className="w-full h-full object-cover object-[5%_50%]"
          />
        </motion.div>

        {/* Right Form Section */}
        <div className="w-full p-8 md:p-16 flex flex-col justify-center">
          {/* Heading Animation */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-4xl text-left text-[#213753] mb-8"
          >
            We handle a wide range of legal matters
          </motion.h2>

          {/* Form Animation Stagger */}
          <motion.form
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
                placeholder="Full name*"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#213753]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              />

              <motion.input
                type="email"
                placeholder="Email*"
                required
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
                placeholder="Contact number*"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#213753]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              />

              <motion.select
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#213753]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <option value="">Choose service*</option>
                <option value="option one">Option One</option>
                <option value="option two">Option Two</option>
                <option value="option three">Option Three</option>
              </motion.select>
            </div>

            {/* Message */}
            <motion.textarea
              placeholder="Message"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#213753]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            ></motion.textarea>

            {/* Submit Button with Hover Animation */}
            <motion.button
              type="submit"
              className="bg-[#213753] text-white rounded-full px-6 py-3 font-medium hover:bg-[#1a2f4d] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Submit Request
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
