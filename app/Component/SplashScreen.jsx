"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  const text = "Saini & Associates".toUpperCase();

  useEffect(() => {
    setTimeout(() => {
      onFinish();
    }, 2500); // full animation duration
  }, []);

  // Animation for each letter
  const letterVariant = {
    hidden: { opacity: 0, x: 60 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <motion.div
      className="relative flex justify-start items-center h-screen w-screen overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        className="absolute inset-0 bg-cover bg-right sm:bg-center        bg-[length:auto_100%]   /* height full, width auto */
    bg-[position:calc(100%_-_-130px)_center] /* start 400px from right */"
        style={{ backgroundImage: "url('/divya-trust3.jpeg')" }}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* TEXT */}
      <div className="relative flex gap-[0.25em] flex-wrap justify-center tracking-[0.25em] text-white z-10">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariant}
            initial="hidden"
            animate="show"
            className="text-xl md:text-7xl font-bold   font-[cursive] mt-16 sm:mt-0"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
