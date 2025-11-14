"use client";

import Image from "next/image";

export default function LegalSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 leading-tight">
          We handle a wide range of <br /> legal matters
        </h2>

        <p className="text-gray-600 mt-6 leading-relaxed">
          We prioritize our clients' needs, understanding that each case is unique.
          Our team of seasoned attorneys is committed to delivering tailored
          solutions, ensuring you receive the attention and representation you
          deserve. Our comprehensive expertise allows us to handle a wide range
          of legal matters effectively.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-3xl font-semibold text-slate-800">15+</h3>
            <p className="text-gray-600 text-sm mt-2">Years of experience</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-3xl font-semibold text-slate-800">84k</h3>
            <p className="text-gray-600 text-sm mt-2">Clients worldwide</p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full">
        <Image
          src="/your-image.jpg"  // CHANGE THIS IMAGE
          width={600}
          height={600}
          alt="Legal scale statue"
          className="w-full rounded-md object-cover"
        />
      </div>

    </section>
  );
}
