"use client";
import React from "react";

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
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Advantages */}
        <div className="flex flex-col gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} ${item.textColor} rounded-md p-6 flex flex-col gap-3 shadow-sm`}
            >
              <div className="flex justify-between items-start">
                <h5 className="text-lg md:text-xl ">
                  {item.title}
                </h5>
                <span className="text-base font-medium">{item.number}</span>
              </div>
              <p
                className={`text-sm md:text-base ${
                  item.textColor === "text-white"
                    ? "text-gray-200"
                    : "text-gray-600"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column - Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl  text-[#213753] leading-snug mb-6">
            Your rights matter, we are here to defend them
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We prioritize our clients' needs, understanding that each case is
            unique. Our team of seasoned attorneys is committed to delivering
            tailored solutions, ensuring you receive the attention and
            representation you deserve. Our comprehensive expertise allows us to
            handle a wide range of legal matters effectively.
          </p>
          <a
            href="/contact-us"
            className="bg-[#213753] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1b2f4d] transition"
          >
            Get A Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
