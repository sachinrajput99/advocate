import React from "react";
import Navbar from "../Component/Navbar";
import OurStorySection from "../Component/OurStorySection";
import MissionVisionSection from "../Component/MissionVisionSection ";
import CoreValuesSection from "../Component/CoreValuesSection";
import Footer from "../Component/Footer";

// import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />

      <section className="relative bg-[#063957] mt-28   py-12">
        {/* Background image if needed */}
        {/* <Image 
        src={bgImage} 
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
        className="z-0 opacity-10"
      /> */}

        <div className="relative z-10 mx-auto px-6 md:px-20 max-w-4xl text-center">
        <h1 className="text-2xl md:text-4xl font-heading font-bold text-white mb-6">
  About ATF Service Center
</h1>
<p className="text-lg text-white/90 max-w-2xl mx-auto">
  Trusted Home Appliance Repair & Customer Support Service Provider with 25+ Years of Experience.
</p>
        </div>
      </section>

      <OurStorySection />
      <MissionVisionSection />
      <CoreValuesSection />
   
      <Footer />
    </>
  );
};

export default page;
