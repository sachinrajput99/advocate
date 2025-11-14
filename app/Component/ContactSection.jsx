"use client";
import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-white p-24 ">
    <div className="flex flex-col md:flex-row bg-[#dce9f9] ">
      {/* Left Image Section */}
      <div className="md:w-1/2 w-full">
        <img
          src="/contact-image.avif"
          alt="Legal Consultation"
          className="w-full h-full object-cover object-[5%_50%]"
        />
      </div>

      {/* Right Form Section */}
      <div className=" w-full p-8 md:p-16 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl text-left text-[#213753] mb-8">
          We handle a wide range of legal matters
        </h2>

        <form className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name*"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#213753]"
            />
            <input
              type="email"
              placeholder="Email*"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#213753]"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Contact number*"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#213753]"
            />
            <select
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#213753]"
            >
              <option value="">Choose service*</option>
              <option value="option one">Option One</option>
              <option value="option two">Option Two</option>
              <option value="option three">Option Three</option>
            </select>
          </div>

          {/* Message */}
          <textarea
            placeholder="Message"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#213753]"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#213753] text-white rounded-full px-6 py-3 font-medium hover:bg-[#1a2f4d] transition-all"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
     </section>
  );
};

export default ContactSection;
