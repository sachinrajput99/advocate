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

 const service=[
  {
    title: "Criminal Matters",
    desc: "Bail, anticipatory bail, quashing, criminal appeals, and complete criminal litigation support.",
    icon: "⚖️",
    img: "/document.avif",
  },
  {
    title: "Civil Matters",
    desc: "Property disputes, injunctions, recovery suits, and all types of civil litigation.",
    icon: "📜",
    img: "civillaw.jpeg",
  },
  {
    title: "Matrimonial Matters",
    desc: "Divorce, alimony, domestic violence, judicial separation, and family dispute resolution.",
    icon: "💍",
    img: "/family-law.avif",
  },
  {
    title: "Commercial Matters",
    desc: "Business disputes, breach of contract, partnership issues and commercial litigation.",
    icon: "📈",
    img: "/business-formation.avif",
  },
  {
    title: "Customer Matters",
    desc: "Consumer court cases related to defective services, products, fraud and unfair practices.",
    icon: "🛍️",
    img: "consumerlaw.jpeg",
  },
  {
    title: "Arbitration Services",
    desc: "Arbitration petitions, settlement drafting, and representation in arbitration proceedings.",
    icon: "📝",
    img:" /artribationlaw.jpeg",
  },
  {
    title: "Property Registration",
    desc: "Property sale deed, gift deed, registry assistance, documentation and verification.",
    icon: "🏠",
    img: "/property-deals.avif",
  },
  {
    title: "Legal Notices",
    desc: "Drafting and sending legal notices for civil, criminal, matrimonial, and business disputes.",
    icon: "📨",
    img: "/consultation.avif",
  },
  {
    title: "Court Marriage",
    desc: "Assistance with court marriage procedure, documentation, and legal compliance.",
    icon: "💒",
    img: "courtmarriagelaw.png",
  },
  {
    title: "Marriage Registration",
    desc: "Marriage registration guidance, documentation, verification, and certificate issuance.",
    icon: "📑",
    img: "marriageregistrationlaw.jpeg",
  },
]


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
        {service.map((card, index) => (
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

          
            </div>
          </motion.div>
        ))}
      </motion.section>

    
      <Footer/>

    </main>
  );
};

export default Page;
