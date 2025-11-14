"use client";
import React from "react";

export default function TrustSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-[85vh]">
      {/* 🔹 Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://framerusercontent.com/images/MDTIxacK7g2pz8XwmhehKudXG8.jpg?width=1920&height=1282"
          alt="Lawyers discussing"
          className="w-full h-full object-cover"
        />
        {/* 🔹 Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 🔹 Bottom Left Text Content */}
      <div className="absolute bottom-10 left-6 md:bottom-20 md:left-20 max-w-3xl text-white">
        <h2 className="text-3xl md:text-5xl  leading-snug mb-4">
          Trust is the foundation of any 
          attorney–client relationship
        </h2>
        <p className="text-sm md:text-lg text-gray-200 leading-relaxed max-w-xl">
          We uphold the highest standards of integrity and transparency. We keep
          our clients informed throughout the legal process, empowering them
          with knowledge to make informed decisions.
        </p>
      </div>
    </section>
  );
}
