"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const specialisations = [
  {
    title: "Criminal Matters",
    description:
      "Handling bail, anticipatory bail, quashing, criminal appeals, and other criminal litigation.",
    link: "/specialisations/criminal-matters",
  },
  {
    title: "Civil Matters",
    description:
      "Property disputes, injunctions, recovery suits, and all types of civil litigation.",
    link: "/specialisations/civil-matters",
  },
  {
    title: "Matrimonial Matters",
    description:
      "Divorce, judicial separation, restitution, alimony, domestic violence and family disputes.",
    link: "/specialisations/matrimonial-matters",
  },
  {
    title: "Commercial Matters",
    description:
      "Business disputes, breach of contract, partnership issues and commercial litigation.",
    link: "/specialisations/commercial-matters",
  },
  {
    title: "Customer Matters",
    description:
      "Consumer court cases related to services, products, fraud, and unfair trade practices.",
    link: "/specialisations/customer-matters",
  },
  {
    title: "Arbitration Services Matters",
    description:
      "Arbitration petitions, settlement drafting, and representation in arbitration proceedings.",
    link: "/specialisations/arbitration-matters",
  },
  {
    title: "Property Registration",
    description:
      "Property sale deed, gift deed, registry assistance, documentation and verification.",
    link: "/specialisations/property-registration",
  },
  {
    title: "Legal Notices",
    description:
      "Drafting and sending legal notices for civil, criminal, matrimonial, and business disputes.",
    link: "/specialisations/legal-notices",
  },
  {
    title: "Court Marriage",
    description:
      "Assistance with court marriage procedure, documentation, and legal compliance.",
    link: "/specialisations/court-marriage",
  },
  {
    title: "Marriage Registration",
    description:
      "Online and offline marriage registration assistance under relevant laws.",
    link: "/specialisations/marriage-registration",
  },
];

export default function SpecialisationsSection() {
  return (
    <section id="specialized" className="bg-[#eef1f8] py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl  text-[#213753] mb-5"
        >
          We specialize in
        </motion.h2>
        <p className="text-[#213753] text-lg mb-10">
          We practice in Delhi High Court, Punjab & Haryana High Court, and
          District Courts.
        </p>
        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {specialisations.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="h-0.5 w-10 bg-[#324563] mb-4 rounded"></div>
                <h3 className="text-xl  text-[#213753] mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
              </div>

              {/* <motion.a
                href='/contact'
                whileHover={{ x: 4 }}
                className="flex items-center text-[#213753] font-medium hover:text-[#0a2540] transition"
              >
                Get consultation <ArrowUpRight className="ml-1 w-4 h-4" />
              </motion.a> */}
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <div className="flex justify-center">
          <motion.a
            href="/ourservices"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="flex items-center bg-[#324563] text-white px-6 py-3 rounded-full font-medium hover:bg-[#213753] transition"
          >
            See all specialisations
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
