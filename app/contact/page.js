// "use client";
// import React from "react";
// import Navbar from "../Component/Navbar";
// import ContactSection from "../Component/ContactSection1";
// import Footer from "../Component/Footer";

// const page = () => {
//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative bg-[#063957] mt-28 py-12">
//         <div className="relative z-10 mx-auto  px-6 md:px-20 max-w-4xl text-center">
//           <h1 className="text-2xl md:text-4xl font-heading font-bold text-white mb-6">
//             Contact Us
//           </h1>
//           <p className="text-lg text-white/90 max-w-2xl mx-auto">
//             Need quick and reliable appliance repair service? Contact us for
//             same-day doorstep support anywhere in Delhi NCR.
//           </p>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <ContactSection />
//       {/* Contact Info Boxes */}
//       {/* <section className="bg-slate-50 py-16 md:py-16">
//   <div className="mx-auto px-6 md:px-20 max-w-6xl">
//     <div className="text-center mb-12">
      
//       <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//         We’re available 7 days a week for AC, Washing Machine, Refrigerator,
//         Microwave & LED TV repair services.
//       </p>
//     </div>

//     <div className="grid md:grid-cols-3 gap-8 mb-16">
     
   

     
//     </div>
//   </div>
// </section> */}

//       <Footer />
//     </>
//   );
// };

// export default page;


"use client";
import { useState } from "react";
 import Footer from "../Component/Footer";
 import Navbar from "../Component/Navbar";


export default function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <>
<Navbar/>
    <div className="bg-white mt-24">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 text-white py-20 text-center ">
        <h1 className="text-4xl ">Contact Us</h1>
      </section>

      {/* Legal matters */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl  text-gray-900 mb-4">
            We handle a wide range of legal matters
          </h2>
          <p className="text-gray-600 mb-6">
            We prioritize our clients&apos; needs, understanding that each case is unique.
            Our team of seasoned attorneys is committed to delivering tailored solutions,
            ensuring you receive the attention and representation you deserve.
            Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
          </p>

          <div className="flex gap-6">
            <div className="bg-slate-100 p-4 rounded-lg text-center w-32">
              <p className="text-2xl  text-slate-800">15+</p>
              <p className="text-gray-500 text-sm">Years of experience</p>
            </div>
            <div className="bg-slate-100 p-4 rounded-lg text-center w-32">
              <p className="text-2xl  text-slate-800">84k</p>
              <p className="text-gray-500 text-sm">Clients worldwide</p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="/law-office.avif"
            alt="Law office"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
      </section>

      {/* Customer Support */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl  text-gray-900 mb-4">
            Customer support and assistance
          </h2>
          <p className="text-gray-600">
            We prioritize our clients&apos; needs, understanding that each case is unique.
            Our team of seasoned attorneys is committed to delivering tailored solutions,
            ensuring you receive the attention and representation you deserve.
            Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full name*"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-slate-100 outline-none focus:ring-2 focus:ring-slate-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-slate-100 outline-none focus:ring-2 focus:ring-slate-400"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="contact"
              placeholder="Contact number*"
              value={form.contact}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-slate-100 outline-none focus:ring-2 focus:ring-slate-400"
              required
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-slate-100 outline-none focus:ring-2 focus:ring-slate-400"
              required
            >
              <option value="">Choose service*</option>
              <option value="corporate-law">Corporate Law</option>
              <option value="family-law">Family Law</option>
              <option value="civil-rights">Civil Rights</option>
              <option value="criminal-law">Criminal Law</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-slate-100 outline-none focus:ring-2 focus:ring-slate-400"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-700 transition-all"
          >
            Submit Request
          </button>
        </form>
      </section>
    </div>
    <Footer/>
    </>
  );
}
