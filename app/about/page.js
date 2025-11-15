"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

/* ------------------------------
   ANIMATION VARIANTS
--------------------------------*/

// Fade Up
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

// Stagger Parent
const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

// Letter-by-letter Animation
const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const letterParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const Page = () => {
  return (
    <main className="w-full">
      <Navbar />

      {/* ---------- Hero Section (With Letter Animation) ---------- */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative h-[20vh] w-full mt-12 sm:mt-20"
      >
        <img
          src="/about-hero.jpg"
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#213753]/70 flex items-center justify-center">
          <motion.h1
            variants={letterParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl text-white flex gap-1"
          >
            {"About Us".split("").map((char, i) => (
              <motion.span key={i} variants={letterVariant}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </motion.section>

      {/* ---------- Section 1 ---------- */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="w-full py-20 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Image */}
        <motion.div variants={fadeUp}>
          <motion.img
              src="/about-hero.png"
            alt="Law Consultation"
            className="rounded-xl w-full object-cover"
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={staggerParent}>
          <motion.h2 variants={fadeUp} className="text-4xl text-[#213753] mb-6">
            We uphold the highest standards of integrity
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-600 mb-8 leading-relaxed">
            We prioritize our clients&apos; needs, understanding that each case is unique.
            Our team of seasoned attorneys is committed to delivering tailored solutions,
            ensuring you receive the attention and representation you deserve.
          </motion.p>

          <motion.div variants={staggerParent} className="space-y-4">
            {["Proven track record", "Personalized approach"].map((item, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
                whileHover={{ x: 8 }}
                className="flex justify-between items-center border-b border-[#213753]/30 pb-2 cursor-pointer hover:opacity-80"
              >
                <h4 className="text-lg font-medium text-[#213753]">{item}</h4>
                <FaPlus className="text-[#213753]" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ---------- Section 2 ---------- */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerParent}
className="w-full  py-20  px-6   md:px-16  grid grid-cols-1 md:grid-cols-[50%_50%]  gap-16  items-center   bg-white"
      >
        {/* Left Content
        <motion.div variants={fadeUp}>
          <h3 className="text-3xl text-[#213753] mb-4">
            We handle a wide range of legal matters
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our team of seasoned attorneys is committed to delivering tailored
            solutions, ensuring you receive the attention and representation you deserve.
          </p>

          <motion.div variants={staggerParent} className="flex gap-12">
            <motion.div variants={fadeUp}>
              <h4 className="text-3xl font-bold text-[#213753]">5+</h4>
              <p className="text-gray-600">Years of experience</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h4 className="text-3xl font-bold text-[#213753]">20k</h4>
              <p className="text-gray-600">Clients worldwide</p>
            </motion.div>
          </motion.div>
        </motion.div> */}
        {/* Left Content */}
<motion.div variants={fadeUp}>
  <h3 className="text-3xl text-[#213753] mb-4">
    We handle a wide range of legal matters
  </h3>

  <p className="text-gray-600 leading-relaxed mb-6">
    At <span className="font-semibold text-[#213753]">Saini & Associates</span>, 
    our philosophy is straightforward — clients always come first. We believe that 
    genuine legal representation is more than just winning cases; it is about 
    safeguarding rights, preserving dignity, and empowering clients to make 
    informed and confident decisions.
  </p>

  <p className="text-gray-600 leading-relaxed mb-6">
    Our work ethic is rooted in four core principles:
    <br />• <strong>Integrity</strong> — Upholding the highest standards of ethics and professionalism.
    <br />• <strong>Accountability</strong> — Taking full responsibility and delivering on every commitment.
    <br />• <strong>Transparency</strong> — Providing clear, honest, and consistent communication throughout the legal process.
    <br />• <strong>Excellence</strong> — Pursuing the strongest outcomes with dedication and thorough preparation.
  </p>

  <motion.div variants={staggerParent} className="flex gap-12 mb-6">
    <motion.div variants={fadeUp}>
      <h4 className="text-3xl font-bold text-[#213753]">5+</h4>
      <p className="text-gray-600">Years of experience</p>
    </motion.div>

    <motion.div variants={fadeUp}>
      <h4 className="text-3xl font-bold text-[#213753]">20k</h4>
      <p className="text-gray-600">Clients worldwide</p>
    </motion.div>
  </motion.div>


  <p className="text-gray-600 leading-relaxed mb-10">
    We aim to be more than just legal representatives — we act as strategic partners, 
    offering insight, foresight, and unwavering commitment to our clients’ success.
  </p>

</motion.div>


        {/* Right Image */}
        <motion.div variants={fadeUp}>
          <motion.img
            // src="/legal-docs.avif"
                  src="/supremecourt.jpg"
            alt="Documents"
            className="rounded-xl w-full object-cover"
            initial={{ opacity: 0, scale: 1.07 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>
      </motion.section>

      {/* ---------- Section 3 ---------- */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerParent}
        className="bg-[#dce9f9] py-20 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Accordion */}
        <motion.div variants={staggerParent} className="space-y-4">
          {[
            { title: "Initial consultation", active: false },
            { title: "Tailored legal strategy", active: true },
            { title: "Dedicated representation", active: false },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
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
            </motion.div>
          ))}
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeUp}>
          <h3 className="text-3xl text-[#213753] mb-4">
            Your rights matter, we are here to defend them
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We prioritize our clients’ needs, understanding that each case is unique.
            Our team of seasoned attorneys is committed to delivering tailored
            solutions, ensuring you receive the attention and representation you deserve.
          </p>

          <motion.a
            whileHover={{ scale: 1.06 }}
            href="/contact"
            className="bg-[#213753] text-white px-6 py-3 rounded-full hover:bg-[#1a2f4d] transition-all inline-block"
          >
            Get  Consultation
          </motion.a>
        </motion.div>
      </motion.section>

      {/* ---------- Section 4 ---------- */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerParent}
        className="bg-[#1c2e46] text-white py-20 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Content */}
        <motion.div variants={fadeUp}>
          <h3 className="text-3xl mb-6">
            Trust is the foundation of attorney–client relationship
          </h3>
          <p className="text-white/80 mb-8 leading-relaxed">
            We are built on a legacy of complete immigration systems, regulations,
            and protection of human rights.
          </p>

         <div className="flex gap-4">
  <motion.a
    whileHover={{ scale: 1.07 }}
    href="/services"
    className="bg-white text-[#1c2e46] px-6 py-3 rounded-full font-medium 
             transition-all hover:scale-105"
  >
    Explore More
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.07 }}
    href="/contact"
    className="border border-white px-6 py-3 rounded-full font-medium 
              transition-all hover:scale-105"
  >
    Get in Touch
  </motion.a>
</div>

        </motion.div>

        {/* Right Image */}
        <motion.div variants={fadeUp}>
          <motion.img
            src="/justice.jpg"
            alt="Attorney Meeting"
            className="rounded-xl w-full object-cover"
            initial={{ opacity: 0, scale: 1.07 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>
      </motion.section>
{/* ---------- Services Section (Inserted) ---------- */}

<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={staggerParent}
  className="w-full py-24 px-6 md:px-16"
>
  {/* Header */}
  <div className="flex items-center justify-between mb-12">
    <div>
      <motion.h2 variants={fadeUp} className="text-4xl text-[#213753]">
        Services
      </motion.h2>
      <motion.p variants={fadeUp} className="text-gray-600 mt-2">
        We prioritize our clients&apos; needs, understanding that each case is unique.
      </motion.p>
    </div>

    <motion.a
      variants={fadeUp}
      whileHover={{ scale: 1.05 }}
      href="/our-services"
      className="px-6 py-2 rounded-full bg-[#213753] text-white hover:bg-[#1a2f4d] transition"
    >
      Explore All
    </motion.a>
  </div>

  {/* Grid */}
  <motion.div variants={staggerParent} className="grid md:grid-cols-2 gap-10">
    {[
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
    title: "Consumer Matters",
    desc: "Consumer court cases related to defective services, products, fraud and unfair practices.",
    icon: "🛍️",
    img: "consumerlaw.jpeg",
  },
    ].map((card, i) => (
      <motion.div
        key={i}
        variants={fadeUp}
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden shadow-lg group rounded-xl"
      >
        {/* Image */}
        <img
          src={card.img}
          className="w-full h-64 object-cover"
          alt={card.title}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>

        {/* Content */}
        <div className="absolute bottom-6 left-6 text-white max-w-md">
          <div className="mb-4">
            <div className="h-12 w-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-xl">
              {card.icon}
            </div>
          </div>

          <h3 className="text-2xl ">{card.title}</h3>
          <p className="text-sm mt-2 opacity-90">{card.desc}</p>

        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.section>


      <Footer />
    </main>
  );
};

export default Page;
