"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative mt-[60px] bg-[url('/hero.jpg')]  bg-cover  bg-center md:bg-top min-h-[90vh] flex flex-col text-white"
    >
      {/* 🔹 Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔹 Hero Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1
            className="
              font-semibold 
              leading-tight 
              text-[39px] 
              sm:text-[40px] 
              md:text-[52px] 
              lg:text-[60px]
            "
          >
            Quick{" "}
            <span
              className="
                font-light 
                 sm:inline 
                text-[20px] 
                sm:text-[28px] 
                md:text-[32px]
              "
            >
              Best Services
            </span>
          </h1>

          {/* Paragraph */}
          <p
            className="
              text-white/90 
              mt-3 sm:mt-5 
              text-[14px] 
              sm:text-[16px] 
              md:text-[18px] 
              leading-[22px] sm:leading-[28px] 
              max-w-md
            "
          >
            We provide the best service and repair for all brands of home
            appliances at your home.
          </p>

          {/* Button */}
          <div className="mt-8 sm:mt-8">
            <a
              href="tel:18001030575"
              className="
                inline-block 
                bg-[#ca232a] 
                text-white 
                font-semibold 
                text-[18px] 
                sm:text-[14px] 
                px-5 sm:px-7 
                py-2 sm:py-3 
                rounded-md 
                border border-transparent
                hover:bg-transparent 
                hover:border-[#ca232a] 
                transition-all 
                duration-300
              "
            >
              📞 1800 103 0575
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
