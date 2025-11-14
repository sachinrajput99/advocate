"use client"
import { useState } from "react";
import SplashScreen from "./Component/SplashScreen";
import HeroSection from "./Component/Hero";

import SpecialisationsSection from "./Component/SpecialisationsSection";
import AttorneysSection from "./Component/AttorneysSection";

import RightsMatterSection from "./Component/RightsMatterSection";

import WorkExperience from "./Component/WorkExperience";
import TrustSection from "./Component/TrustSection"
import Services from "./Component/Services"
import WhyChooseUs from "./Component/WhyChooseUs";
// import RequestQuote from "./Component/RequestQuote";

import FAQSection from "./Component/FAQSection";
import ContactSection from "./Component/ContactSection";
import AboutUsSection from "./Component/AboutUsSection";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import WhatsappButton from "./Component/WhatsappButton";
import Head from "next/head";


// export default function Home() {
//   return (
   
//   );
// }





export default function Home() {
  const [done, setDone] = useState(false);

  return (
    <>
      {!done ? (
        <SplashScreen onFinish={() => setDone(true)} />
      ) : (
        <main >
       
         <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        {/* favicon.ico ko public folder me rakho */}
      </Head>
      <Navbar />
      <HeroSection />


<AboutUsSection/>
      <TrustSection />
<SpecialisationsSection/>
<RightsMatterSection/>
<AttorneysSection/>
     
   
      <ContactSection />
{/* <WorkExperience/> */}
   
      {/* <WhyChooseUs/> */}
    
      {/* <ContactSection1 /> */}
      <Footer />
      <WhatsappButton />
    </>
        </main>
      )}
    </>
  );
}