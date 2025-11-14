"use client";
import React from "react";
import { motion } from "framer-motion";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

/* ------------------------------
   ANIMATION VARIANTS
--------------------------------*/
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const Page = () => {
  return (
    <main className="w-full">
      <Navbar/>

      {/* ===========================
          HERO SECTION
      ============================ */}
     <section className="relative w-full pt-12 pb-16 sm:pt-24 sm:pb-28 flex flex-col justify-center items-center text-center text-white">

  {/* Curved Background */}
  <div
    className="
      absolute top-0 left-0 w-full
      h-[380px]          /* mobile height fix */
      xs:h-[280px]
      sm:h-[420px]
      md:h-[520px]
      bg-gradient-to-b from-[#0e1a28] to-[#1c2e46]
    "
    style={{
      clipPath: "ellipse(110% 60% at 50% 0%)" /* larger curve for mobile */
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 px-4 sm:px-6 max-w-xl sm:max-w-2xl md:max-w-3xl">
    
    <h1 className="text-3xl xs:text-xl sm:text-5xl ">
      Services
    </h1>

    <p className="text-white/80 text-sm xs:text-base mt-3 leading-relaxed">
      Our team of seasoned attorneys is committed to delivering tailored solutions,
      ensuring you receive the attention and representation you deserve.
    </p>

  </div>

</section>

      {/* ===========================
          SERVICES GRID
      ============================ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerParent}
        className="w-full max-w-7xl  pt-16 mx-auto px-4 sm:px-6  sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
      >
        {[
          {
            title: "Personal injury",
            desc: "Outstanding legal services with unparalleled expertise and a truly tailored approach.",
            icon: "🩺",
            img: "/personal-injury.avif",
          },
          {
            title: "Family law advocacy",
            desc: "We support your family law needs with care, professionalism, fairness and harmony.",
            icon: "👨‍👩‍👦",
            img: "/family-law.avif",
          },
          {
            title: "Property deals",
            desc: "Smooth & secure property deals — from detailed contracts to hassle-free closings.",
            icon: "🏠",
            img: "/property-deals.avif",
          },
          {
            title: "Business formation",
            desc: "Expert support from structure selection to compliance for confident business launch.",
            icon: "👥",
            img: "/business-formation.avif",
          },
          {
            title: "Criminal defense",
            desc: "Strategic defense ensuring your rights are protected and best outcome is achieved.",
            icon: "⚖️",
            img: "/document.avif",
          },
          {
            title: "Estate probate",
            desc: "Securely protect your legacy, minimize taxes, and simplify probate for smooth transfer.",
            icon: "📋",
            img: "/consultation.avif",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer bg-white"
          >
            {/* Image */}
            <img
              src={card.img}
              className="w-full h-52 sm:h-64 object-cover"
              alt={card.title}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

            {/* Content */}
            <div className="absolute bottom-5 sm:bottom-6 left-5 right-5 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-lg sm:text-xl">
                  {card.icon}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold">{card.title}</h3>
              <p className="text-xs sm:text-sm mt-2 opacity-90 leading-relaxed">
                {card.desc}
              </p>

              <a href="#" className="text-xs sm:text-sm underline mt-3 inline-block">
                Learn more
              </a>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* ===========================
          FOOTER SECTION
      ============================ */}
      <section className="w-full bg-[#f5f7fa] py-12 sm:py-16 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1c2e46]">Find us</h2>

        <div className="mt-4 text-gray-700 space-y-1 text-sm sm:text-base">
          <p>14 Tottenham Road, London, England</p>
          <p>information@office.com</p>
          <p>(704) 358-1528</p>
        </div>
      </section>
      <Footer/>

    </main>
  );
};

export default Page;
