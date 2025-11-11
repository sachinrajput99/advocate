"use client";
import React from "react";
import Navbar from "../Component/Navbar";
import ContactSection from "../Component/ContactSection";
import Footer from "../Component/Footer";

const page = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#063957] mt-28 py-12">
        <div className="relative z-10 mx-auto  px-6 md:px-20 max-w-4xl text-center">
          <h1 className="text-2xl md:text-4xl font-heading font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Need quick and reliable appliance repair service? Contact us for
            same-day doorstep support anywhere in Delhi NCR.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
{/* Contact Info Boxes */}
{/* <section className="bg-slate-50 py-16 md:py-16">
  <div className="mx-auto px-6 md:px-20 max-w-6xl">
    <div className="text-center mb-12">
      
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        We’re available 7 days a week for AC, Washing Machine, Refrigerator,
        Microwave & LED TV repair services.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-16">
     
   

     
    </div>
  </div>
</section> */}

      <Footer />
    </>
  );
};

export default page;
