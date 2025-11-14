"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#213753]/40 pb-3 transition-all cursor-pointer hover:opacity-80">
      {/* Header */}
      <div
        className="flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-2xl font-medium text-[#213753]">{question}</h4>

        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <FaPlus className="text-[#213753] text-[16px]" />
        </span>
      </div>

      {/* Body */}
      <div
        className={`transition-all overflow-hidden duration-300 ${
          isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 pr-4">{answer}</p>
      </div>
    </div>
  );
}
