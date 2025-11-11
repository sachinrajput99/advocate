import Image from "next/image";
import React from "react";

export default function Experience() {
  return (
    <section
      id="about"
      className="mx-auto bg-[#e5ebf3] px-6 md:px-20 py-20 md:py-20 md:pt-10 space-y-20"
    >
      {/* Block 1 - Ultimate Luxury */}
      <div className="grid lg:grid-cols-[40%_1fr] gap-12 items-center">
        {/* Image */}
        <div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              // src="  /repairservice.jpg"
              src="/repair.png"
              alt="Luxury property exterior showcasing modern architecture"
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[400px] "
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="text-sm text-blue-600 text-center sm:text-left font-semibold uppercase tracking-wide mb-4">
            20 Years Experience
          </div>
          <h2 className="text-2xl text-center md:text-3xl sm:text-left font-semibold mb-6 text-slate-900">
            Home Appliance Repair Services
          </h2>
          <p className="text-md text-slate-500 mb-8 leading-relaxed">
            24x7 Customer Service Centre is backed by skilled technicians and
            service professionals dedicated to delivering high-quality repair
            and maintenance solutions. We understand the vital role home
            appliances play in your daily life. We offer all home appliance
            repair and services within a short period of time. Our technicians
            are well experienced in troubleshooting all appliances like Air
            conditioners, washing machines, Refrigerators, Geysers, Dishwasher,
            Dryer, televisions, Microwave ovens etc. We provide the best &
            genuine service of all spare parts. We also provide skilled
            technicians to install & uninstall all the appliances safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-blue-600  text-center text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Call Now
            </a>
            <a
              href="#properties"
              className="border border-slate-300 text-center px-6 py-3 font-semibold text-slate-700 rounded hover:bg-slate-50 transition"
            >
              View All Properties
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-blue-600">✔</span>
              Highly skilled & experienced engineers
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-blue-600">✔</span>
              Work guaranteed for 2 year
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-blue-600">✔</span>
              Emergency call outs 24/7
            </div>
          </div>
        </div>
      </div>

      {/* Block 2 - Extreme Comfort */}
      {/* <div className="hidden sm:grid lg:grid-cols-[1fr_40%]  gap-12 items-center">
  
        <div>
          <div className="text-sm text-orange-500 font-semibold uppercase tracking-wide mb-4">
            Extreme Comfort
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-900">
            Find the Perfect Place to Call Home
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We curate listings tailored to your specific needs and preferences.
            Explore top neighborhoods and enjoy a completely hassle-free
            property buying experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#visit"
              className="bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition"
            >
              Schedule Visit
            </a>
            <a
              href="#amenities"
              className="border border-slate-300 px-6 py-3 font-semibold text-slate-700 rounded hover:bg-slate-50 transition"
            >
              View Amenities
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-orange-500">✔</span>
              Verified Properties
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-orange-500">✔</span>
              Legal Assistance
            </div>
          </div>
        </div>

        
        <div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="  /extreme_comfort.webp"
              alt="Modern luxury property"
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
 */}
    </section>
  );
}
