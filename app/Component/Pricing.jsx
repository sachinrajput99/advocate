"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const pricingData = [
    {
      title: "Online Consultation",
      desc: "Online meeting + phone support. Clear step-by-step guidance.",
      price: "₹1,000",
      points: [
        "30–45 minutes session",
        "Zoom / WhatsApp / Call",
        "Quick legal guidance",
        "Case review included",
      ],
      badge: null,
      btnText: "Book Now",
    },
    {
      title: "Offline Consultation",
      desc: "Meet in chambers/office for full guidance.",
      price: "₹5,000",
      points: [
        "1–1.5 hour in-person meeting",
        "Document inspection",
        "Detailed case strategy",
        "Priority appointment slot",
      ],
      badge: "Popular",
      btnText: "Book Now",
    },
    {
      title: "Legal Notice Drafting",
      desc: "Professional legal notice drafted & sent.",
      price: "₹15,000",
      points: [
        "Detailed case study",
        "Drafting by advocate",
        "Notice dispatch via email/post",
        "Follow-up support included",
      ],
      badge: null,
      btnText: "Get Started",
    },
  ];

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {pricingData.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="bg-blue-50 p-10 rounded-xl shadow-sm border border-blue-100 relative flex flex-col justify-between"
          >
            {item.badge && (
              <div className="absolute top-6 right-6 bg-white px-3 py-1 text-xs rounded-full shadow">
                {item.badge}
              </div>
            )}

            {/* TOP CONTENT */}
            <div>
              <h2 className="text-3xl text-gray-800">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.desc}</p>

              <div className="mt-6">
                <p className="text-gray-700 text-xl">
                  <span className="text-4xl font-bold">{item.price}</span>
                </p>
              </div>

              <hr className="my-6 border-gray-300" />

              <ul className="space-y-3 text-gray-700">
                {item.points.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>
            </div>

          
          </motion.div>
        ))}
      </div>
    </div>
  );
}
