"use client";

import Pricing from "../Component/pricing"
import RightsMatterSection from "../Component/RightsMatterSection"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"

export default function Page() {
  return (
    <>
    <Navbar/>
      {/* SECTION 1 — Legal Matters Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-semibold text-[#213753] leading-tight">
              We handle a wide range of <br /> legal matters
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              We prioritize our clients' needs, understanding that each case is unique.
              Our team of experienced attorneys delivers tailored legal solutions,
              ensuring you receive the attention and representation you deserve.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-[#eef3fa] p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-[#213753]">5+</h3>
                <p className="text-gray-600">Years of experience</p>
              </div>

              <div className="bg-[#eef3fa] p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-[#213753]">20k</h3>
                <p className="text-gray-600">Clients worldwide</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <img
            src="/lady-justice.avif"
            alt="Legal statue"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
      </section>

      {/* SECTION 2 — Pricing Plans */}
   <Pricing/>
<RightsMatterSection/>
<Footer/>
    </>
  );
}
