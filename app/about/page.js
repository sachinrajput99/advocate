

"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import Footer from "../Component/Footer";
import Navbar from '../Component/Navbar';

const Page = () => {
  return (
    <main className="w-full">
      <Navbar/>
      {/* ---------- Hero Section ---------- */}
      <section className="relative h-[20vh] w-full mt-20">
        <img
          src="/about-hero.avif"
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#213753]/70 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl  text-white">About</h1>
        </div>
      </section>

      {/* ---------- Section 1 ---------- */}
      <section className="w-full py-20 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div>
          <img
            src="/law-meeting.avif"
            alt="Law Consultation"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl  text-[#213753] mb-6">
            We uphold the highest standards of integrity
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We prioritize our clients' needs, understanding that each case is unique.
            Our team of seasoned attorneys is committed to delivering tailored solutions,
            ensuring you receive the attention and representation you deserve.
          </p>

          {/* Accordion */}
          <div className="space-y-4">
            {["Proven track record", "Personalized approach"].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-[#213753]/30 pb-2 cursor-pointer hover:opacity-80"
              >
                <h4 className="text-lg font-medium text-[#213753]">{item}</h4>
                <FaPlus className="text-[#213753]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Section 2 ---------- */}
      <section className="w-full py-20 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white">
        {/* Left Content */}
        <div>
          <h3 className="text-3xl  text-[#213753] mb-4">
            We handle a wide range of legal matters
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our team of seasoned attorneys is committed to delivering tailored
            solutions, ensuring you receive the attention and representation you deserve.
          </p>
          <div className="flex gap-12">
            <div>
              <h4 className="text-3xl font-bold text-[#213753]">15+</h4>
              <p className="text-gray-600">Years of experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-[#213753]">84k</h4>
              <p className="text-gray-600">Clients worldwide</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/legal-docs.avif"
            alt="Documents"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </section>

      {/* ---------- Section 3 ---------- */}
      <section className="bg-[#dce9f9] py-20 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Accordion */}
        <div className="space-y-4">
          {[
            { title: "Initial consultation", active: false },
            { title: "Tailored legal strategy", active: true },
            { title: "Dedicated representation", active: false },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-4 rounded-lg ${
                item.active
                  ? "bg-[#213753] text-white"
                  : "bg-white text-[#213753]"
              } shadow-sm`}
            >
              <h4 className="font-medium text-lg">{item.title}</h4>
              <p
                className={`mt-2 text-sm ${
                  item.active ? "text-white/80" : "text-gray-600"
                }`}
              >
                Our comprehensive expertise allows us to handle a wide range of
                legal matters efficiently.
              </p>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-3xl  text-[#213753] mb-4">
            Your rights matter, we are here to defend them
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We prioritize our clients’ needs, understanding that each case is unique.
            Our team of seasoned attorneys is committed to delivering tailored
            solutions, ensuring you receive the attention and representation you deserve.
          </p>
          <a
            href="/contact"
            className="bg-[#213753] text-white px-6 py-3 rounded-full hover:bg-[#1a2f4d] transition-all inline-block"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* ---------- Section 4 ---------- */}
      <section className="bg-[#1c2e46] text-white py-20 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-3xl  mb-6">
            Trust is the foundation of attorney–client relationship
          </h3>
          <p className="text-white/80 mb-8 leading-relaxed">
            We are built on a legacy of complete immigration systems, regulations,
            and protection of human rights.
          </p>

          <div className="flex gap-4">
            <a
              href="/services"
              className="bg-white text-[#1c2e46] px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all"
            >
              Explore More
            </a>
            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#1c2e46] transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Video/Image */}
        <div>
          <img
            src="/trust-section.jpg"
            alt="Attorney Meeting"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </section>
          <Footer />
    </main>
  );
};

export default Page;
