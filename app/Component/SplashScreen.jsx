"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  const fullText = "ADVOCATE DIVYA SAINI".toUpperCase();
  const mobileLines = ["ADVOCATE", "DIVYA", "SAINI"];

  useEffect(() => {
    setTimeout(() => {
      onFinish();
    }, 2500);
  }, []);

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
      {/* BG IMAGE */}
      <motion.div
        className="absolute inset-0 bg-cover bg-right sm:bg-center bg-[length:auto_100%]
        bg-[position:calc(100%_-_-130px)_center]"
        style={{ backgroundImage: "url('/divya-trust.jpeg')" }}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
{/* ⭐ MOBILE VERSION (Perfect Center + Vertical Gap) */}
<div className="absolute inset-0 z-10 text-white flex flex-col justify-center items-center sm:hidden space-y-4">
  {mobileLines.map((line, lineIndex) => (
    <div
      key={lineIndex}
      className="flex gap-[0.25em] tracking-[0.25em] justify-center"
    >
      {line.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariant}
          initial="hidden"
          animate="show"
          className="text-5xl font-bold font-[cursive]"
        >
          {char}
        </motion.span>
      ))}
    </div>
  ))}
</div>


      {/* ⭐ DESKTOP VERSION (Original, unchanged) */}
      <div className="relative z-10 gap-[0.25em] tracking-[0.25em] text-white hidden sm:flex mt-0">
        {fullText.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariant}
            initial="hidden"
            animate="show"
            className="text-7xl font-bold font-[cursive]"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
