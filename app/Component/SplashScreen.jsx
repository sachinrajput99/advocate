"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  const text = "DIVYA SAINI AND ASSOCIATES";

  useEffect(() => {
    setTimeout(() => {
      onFinish();
    }, 1900);
  }, []);

  const letterVariant = {
    hidden: { opacity: 0, x: 50 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.045,
        duration: 0.38,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="relative h-screen w-full flex justify-center items-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* 🔥 FULL BACKGROUND IMAGE */}
      <img
        src="/divya.jpeg"
        alt="Background"
        className="absolute  bottom-[15%] w-full h-full object-cover"
      />

      {/* 🔥 SOFT DARK OVERLAY FOR TEXT CLARITY */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* 🔥 ANIMATED TEXT */}
      <div className="relative z-10 flex gap-[0.28em] flex-wrap justify-center tracking-[0.32em] text-white">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariant}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
