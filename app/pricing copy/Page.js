"use client";

export default function Page() {
  return (
    <>
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
                <h3 className="text-3xl font-bold text-[#213753]">15+</h3>
                <p className="text-gray-600">Years of experience</p>
              </div>

              <div className="bg-[#eef3fa] p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-[#213753]">84k</h3>
                <p className="text-gray-600">Clients worldwide</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <img
            src="/lady-justice.jpg"
            alt="Legal statue"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
      </section>

      {/* SECTION 2 — Pricing Plans */}
      <section className="py-20 bg-[#eef3fa]">
        <div className="container mx-auto px-6 lg:px-12">

          <div className="grid md:grid-cols-3 gap-10">

            {/* Standard */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-[#213753]">Standard</h3>
              <p className="text-gray-600 mt-2">Access to 10h of legal consultation.</p>

              <p className="text-4xl font-bold text-[#213753] mt-6">$1,500</p>
              <span className="text-gray-500 text-sm">/USD</span>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li>• 10 hours of legal consultation</li>
                <li>• 24 hour response time</li>
                <li>• Phone/email consultation</li>
                <li>• Assistance in 6 practice areas</li>
              </ul>

              <button className="mt-8 w-full bg-[#213753] text-white py-3 rounded-full hover:bg-[#142536] transition">
                Buy Now
              </button>
            </div>

            {/* Growth */}
            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <span className="absolute top-4 right-4 bg-[#213753] text-white text-xs px-3 py-1 rounded-full">
                Popular
              </span>

              <h3 className="text-2xl font-semibold text-[#213753]">Growth</h3>
              <p className="text-gray-600 mt-2">Access to 24h of legal consultation.</p>

              <p className="text-4xl font-bold text-[#213753] mt-6">$3,000</p>
              <span className="text-gray-500 text-sm">/USD</span>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li>• 24 hours of legal consultation</li>
                <li>• 3 hour response time</li>
                <li>• On-site consultation</li>
                <li>• Assistance in 9 practice areas</li>
              </ul>

              <button className="mt-8 w-full bg-[#213753] text-white py-3 rounded-full hover:bg-[#142536] transition">
                Buy Now
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-[#213753]">Enterprise</h3>
              <p className="text-gray-600 mt-2">Access to 60h of legal consultation.</p>

              <p className="text-4xl font-bold text-[#213753] mt-6">$5,000</p>
              <span className="text-gray-500 text-sm">/USD</span>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li>• 60 hours of legal consultation</li>
                <li>• 1 hour response time</li>
                <li>• Dedicated associate</li>
                <li>• Premium service & assistance</li>
              </ul>

              <button className="mt-8 w-full bg-[#213753] text-white py-3 rounded-full hover:bg-[#142536] transition">
                Buy Now
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
