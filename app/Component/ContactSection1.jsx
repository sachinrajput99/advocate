"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 md:py-20 relative"
    >
      <div className="mx-auto px-4 sm:px-6 md:px-20">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold mb-4 text-blue-900">
            Get In Touch
          </h3>
          <p className="text-base sm:text-lg text-slate-600 leading-6 sm:leading-7 max-w-2xl mx-auto">
            Need reliable <strong>AC Repair</strong> or{" "}
            <strong>Washing Machine Repair</strong> services? Our expert
            technicians are here to help you — anytime, anywhere in Delhi NCR.
          </p>
        </div>
  <div className="w-full sm:hidden">
            <ContactForm />
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Info Section */}
          <div className="space-y-8 sm:space-y-10 ">
            <div  className="hidden sm:block"   >
              <h4 className="text-xl sm:text-2xl font-heading font-semibold text-blue-900 leading-6 sm:leading-7 mb-4 sm:mb-6">
                Let&apos;s Start a Conversation
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-5 sm:leading-6">
                Whether your <strong>AC</strong> is not cooling or your <strong>washing machine</strong> has stopped working — our expert technicians are here to help. We offer same-day doorstep appliance repair services with genuine spare parts and transparent pricing. We repair <strong>AC</strong>, <strong>Washing Machine</strong>, <strong>Refrigerator</strong>, <strong>Microwave</strong>, and <strong>LED TV</strong> for all major brands.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid gap-4 sm:gap-6">
              {[
                {
                  title: "Visit Our Service Center",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  ),
                  lines: ["C-29, BPTP Parklands, Sector-85,", "Faridabad, Haryana"],
                },
                {
                  title: "Call Us",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  ),
                  lines: ["📞 1800-570-3132"],
                },
                {
                  title: "Email Us",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                  lines: ["info@customerservice.co.in"],
                },
                {
                  title: "Working Hours",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  lines: ["Mon - Sun: 9:00 AM - 8:00 PM"],
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-base sm:text-lg font-semibold text-blue-900 mb-1">
                      {item.title}
                    </h5>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-sm sm:text-base text-slate-700 leading-5 sm:leading-6">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4 sm:pt-6 border-t border-slate-200">
              <h5 className="text-base sm:text-lg font-semibold text-blue-900 mb-3 sm:mb-4">
                Follow Us
              </h5>
              <div className="flex gap-3 sm:gap-4">
                {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <Icon size={14} className="sm:text-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full hidden sm:block">
            <ContactForm    />
          </div>
        </div>
      </div>

      {/* Decorative Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/40 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}
