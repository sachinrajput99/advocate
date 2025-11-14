"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center text-white bg-[url('/lawyer-bg.avif')] bg-cover bg-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-6xl">
        <h1 className="text-3xl md:text-6xl  leading-tight mb-6">
          We tailor our approach to meet individual needs
        </h1>

        <p className="text-lg md:text-lg text-gray-200 max-w-2xl mb-8">
          Our team of seasoned attorneys is committed to delivering tailored solutions, ensuring you receive the attention and representation you deserve. Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-[#ddebf9] text-[#213753] ` px-6 py-3 rounded-full hover:bg-[#c7dff5] transition">
            Book Consultation
          </button>
          <button className="border border-[#ddebf9] text-[#ddebf9]  px-6 py-3 rounded-full hover:bg-[#ddebf9]/10 transition">
            Explore More
          </button>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 w-full bg-[#213753]/90 py-8">
        <div className="container mx-auto px-6 md:px-16 flex flex-wrap justify-between text-center text-white">
          <div className="flex-1 min-w-[150px] mb-4 md:mb-0">
            <h3 className="text-3xl font-bold">15+</h3>
            <p className="text-gray-300">Years of experience</p>
          </div>
          <div className="flex-1 min-w-[150px] mb-4 md:mb-0">
            <h3 className="text-3xl font-bold">84k</h3>
            <p className="text-gray-300">Clients worldwide</p>
          </div>
          <div className="flex-1 min-w-[150px] mb-4 md:mb-0">
            <h3 className="text-3xl font-bold">28</h3>
            <p className="text-gray-300">Awards & honors</p>
          </div>
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-3xl font-bold">15+</h3>
            <p className="text-gray-300">Years of experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
