"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import FAQItem from "../Component/FAQItem";
const AboutUsSection = () => {
  return (
    <section className="w-full relative overflow-hidden">
      {/* -------- Top Section -------- */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white relative z-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 w-full px-6 md:px-16 py-12">
          
          {/* Heading Animation */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-semibold text-[#213753] mb-6"
          >
            We uphold the highest standards of integrity
          </motion.h2>

          {/* Paragraph Animation */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-gray-600 text-base leading-relaxed mb-8"
          >
            We prioritize our clients&apos; needs, understanding that each case is
            unique. Our team of seasoned attorneys is committed to delivering
            tailored solutions, ensuring you receive the attention and
            representation you deserve. Our comprehensive expertise allows us
            to handle a wide range of legal matters effectively.
          </motion.p>

          {/* Buttons with stagger animation */}
          <motion.div
            className="flex gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {/* Button 1 */}
            <motion.a
              href="#specialized"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-[#213753] text-white px-6 py-3 rounded-full hover:bg-[#1a2f4d] transition-all"
            >
              Explore More
            </motion.a>

            {/* Button 2 */}
            <motion.a
              href="/contact"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="border border-[#213753] text-[#213753] px-6 py-3 rounded-full hover:bg-[#213753] hover:text-white transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Right Image - Slide In Animation */}
        <motion.div
          className="md:w-1/2 w-full relative"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/justice.jpg"
            alt="Consultation"
            className="w-full sm:h-[500px] h-[300px] md:h-[600px] object-cover md:translate-y-16"
          />
        </motion.div>
      </div>

      {/* -------- Bottom Q&A Section -------- */}
      <div className="bg-[#dce9f9] px-6 md:px-16 pt-32 sm:pt-64 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-0 -mt-20">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-3xl text-[#213753] mb-4">Highest standards</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Our team of seasoned attorneys is committed to delivering tailored
            solutions, ensuring you receive the attention and representation you
            deserve.
          </p>
        </motion.div>

     {/* Right Column – Accordion */}
<motion.div
  className="flex flex-col space-y-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } }
  }}
>
  {[
    {
      question: "Proven track record",
      answer: "Our successful case outcomes and satisfied clients speak volumes about our dedication to excellence."
    },
    {
      question: "Personalized approach",
      answer: "We understand that every client is unique, and we tailor our approach to meet individual needs."
    },
    {
      question: "Accessible and responsive",
      answer: "Communication is key. Our team is readily available to address your concerns and provide updates on your case."
    }
  ].map((item, index) => (
    <FAQItem key={index} {...item} />
  ))}
</motion.div>

      </div>
    </section>
  );
};

export default AboutUsSection;
