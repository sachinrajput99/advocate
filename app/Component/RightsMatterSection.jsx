"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RightsMatterSection() {
  const advantages = [
    {
      number: "01",
      title: "Initial consultation",
      description:
        "Our comprehensive expertise allows us to handle a wide range of legal matters effectively.",
      bg: "bg-[#ddebf9]",
      textColor: "text-[#213753]",
    },
    {
      number: "02",
      title: "Tailored legal strategy",
      description:
        "Providing personalized strategies to address your unique legal challenges effectively.",
      bg: "bg-[#213753]",
      textColor: "text-white",
    },
    {
      number: "03",
      title: "Dedicated representation",
      description:
        "Dedicated to defending your rights with focused and unwavering legal representation.",
      bg: "bg-[#ddebf9]",
      textColor: "text-[#213753]",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl grid md:grid-cols-2 gap-12 items-center">

        {/* Left Column - Animated Cards */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${item.bg} ${item.textColor} rounded-md p-6 flex flex-col gap-3 shadow-sm`}
            >
              <div className="flex justify-between items-start">
                <motion.h5
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl"
                >
                  {item.title}
                </motion.h5>

                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-base font-medium"
                >
                  {item.number}
                </motion.span>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className={`text-sm md:text-base ${
                  item.textColor === "text-white"
                    ? "text-gray-200"
                    : "text-gray-600"
                }`}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column - Text Content Animation */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl text-[#213753] leading-snug mb-6"
          >
            Your rights matter, we are here to defend them
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 mb-8 leading-relaxed"
          >
            We prioritize our clients&apos; needs, understanding that each case is
            unique. Our team of seasoned attorneys is committed to delivering
            tailored solutions, ensuring you receive the attention and
            representation you deserve. Our comprehensive expertise allows us to
            handle a wide range of legal matters effectively.
          </motion.p>
<div className="text-center sm:text-left">

         <motion.a
  href="/contact"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{
    scale: 1.07,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.4, ease: "easeIn" }}
  className="bg-[#213753]  text-white px-6 py-3 rounded-full font-medium hover:bg-[#1b2f4d] transition inline-block"
>
  Get A Free Consultation
</motion.a>
</div>

        </motion.div>
      </div>
    </section>
  );
}
