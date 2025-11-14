"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <section className="w-full relative overflow-hidden">
      {/* -------- Top Section -------- */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2 w-full px-6 md:px-16 py-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#213753] mb-6">
            We uphold the highest standards of integrity
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            We prioritize our clients' needs, understanding that each case is
            unique. Our team of seasoned attorneys is committed to delivering
            tailored solutions, ensuring you receive the attention and
            representation you deserve. Our comprehensive expertise allows us
            to handle a wide range of legal matters effectively.
          </p>

          <div className="flex gap-4">
            <a
              href="/services"
              className="bg-[#213753] text-white px-6 py-3 rounded-full hover:bg-[#1a2f4d] transition-all"
            >
              Explore More
            </a>
            <a
              href="/contact-us"
              className="border border-[#213753] text-[#213753] px-6 py-3 rounded-full hover:bg-[#213753] hover:text-white transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Image (Overlapping) */}
        <div className="md:w-1/2 w-full relative">
          <img
            src="/about-us.avif"
            alt="Consultation"
            className="w-full h-[600px] object-cover md:translate-y-16"
          />
        </div>
      </div>

      {/* -------- Bottom Q&A Section -------- */}
      <div className="bg-[#dce9f9] px-6 md:px-16 pt-64 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-0 -mt-20">
        {/* Left Column */}
        <div>
          <h3 className="text-3xl  text-[#213753] mb-4">
            Highest standards
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Our team of seasoned attorneys is committed to delivering tailored
            solutions, ensuring you receive the attention and representation you
            deserve.
          </p>
        </div>

        {/* Right Column – Accordion style */}
        <div className="flex flex-col space-y-6">
          {[
            "Proven track record",
            "Personalized approach",
            "Accessible and responsive",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-[#213753]/40 pb-3 cursor-pointer hover:opacity-80 transition-all"
            >
              <h4 className="text-lg font-medium text-[#213753]">{item}</h4>
              <FaPlus className="text-[#213753]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
