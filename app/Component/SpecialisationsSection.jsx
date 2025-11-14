"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const specialisations = [
  {
    title: "Mediation Law",
    description:
      "Facilitating out-of-court resolutions for family and business disputes through mediation.",
    link: "/specialisations/mediation-law",
  },
  {
    title: "Estate Planning Law",
    description:
      "Preparing wills, trusts, and powers of attorney to protect assets and ensure wishes are honored.",
    link: "/specialisations/estate-planning-law",
  },
  {
    title: "Business Formation Law",
    description:
      "Assisting entrepreneurs in forming LLCs, corporations, and partnerships.",
    link: "/specialisations/business-formation-law",
  },
  {
    title: "Contract Law",
    description:
      "Drafting, reviewing, and negotiating legally sound contracts for businesses and individuals.",
    link: "/specialisations/contract-law",
  },
  {
    title: "Child Custody Law",
    description:
      "Helping parents establish custody agreements in the child’s best interest.",
    link: "/specialisations/child-custody-law",
  },
  {
    title: "Divorce Law",
    description:
      "Legal support for asset division, alimony, and navigating the divorce process fairly.",
    link: "/specialisations/divorce-law",
  },
];

export default function SpecialisationsSection() {
  return (
    <section className="bg-[#eef1f8] py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#213753] mb-12">
          We specialize in
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {specialisations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-0.5 w-10 bg-[#324563] mb-4 rounded"></div>
                <h3 className="text-xl font-semibold text-[#213753] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
              </div>

              <a
                href={item.link}
                className="flex items-center text-[#213753] font-medium hover:text-[#0a2540] transition"
              >
                Read more <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <a
            href="/specialisations"
            className="flex items-center bg-[#324563] text-white px-6 py-3 rounded-full font-medium hover:bg-[#213753] transition"
          >
            See all specialisations
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
