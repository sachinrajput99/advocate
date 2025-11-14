"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* Animation Variants */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function AttorneysSection() {
  const attorneys = [
    { name: "Divya Saini", role: "Founder", img: "/attorneys/theresa.avif", url: "/attorneys/theresa" },
    { name: "Guy Hawkins", role: "Lawyer", img: "/attorneys/guy.avif", url: "/attorneys/guy-hawkins" },
    { name: "Brook Seims", role: "Lawyer", img: "/attorneys/brook.avif", url: "/attorneys/brook-seims" },
    { name: "Arlene McCoy", role: "Lawyer", img: "/attorneys/arlene.avif", url: "/attorneys/arlene-mccoy" },
    { name: "Traice Dantini", role: "Lawyer", img: "/attorneys/traice.avif", url: "/attorneys/traice-dantini" },
    { name: "Kira Zayn", role: "Lawyer", img: "/attorneys/kira.avif", url: "/attorneys/kira-zayn" },
  ];

  return (
    <section id="attorney" className="py-24">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        
        /* 🔥 MOBILE = FLEX-COL-REVERSE | DESKTOP = GRID NORMAL */
        className="
          max-w-7xl mx-auto px-6 lg:px-12 
          flex flex-col-reverse 
          lg:grid lg:grid-cols-2 
          gap-16
        "
      >
        {/* LEFT CONTENT (Desktop: left | Mobile: second) */}
        <motion.div variants={fadeUp}>
          <h2 className="text-4xl font-semibold text-[#213753] leading-tight">
            Lawyers specializing in diverse areas
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            We prioritize our clients' needs, understanding that each case is
            unique. Our team of seasoned attorneys is committed to delivering
            tailored solutions.
          </p>

          {/* Quote */}
          <div className="border-l-4 pl-6 mt-10 border-[#213753]">
            <h6 className="text-lg font-medium text-[#213753]">
              "Our attorneys are accessible, responsive, and will keep you
              updated on the progress of your case"
            </h6>
            <p className="text-gray-600 mt-3">
              Divya Saini, The Founder 
            </p>
          </div>

        
        </motion.div>

        {/* RIGHT – ATTORNEY GRID (Desktop: right | Mobile: first) */}
        <motion.div
          variants={staggerParent}
          className="grid grid-cols-2 md:grid-cols-3 gap-10"
        >
          {attorneys.map((attorney, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <Link href={attorney.url}>
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto overflow-hidden rounded-full shadow-md">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={attorney.img}
                      alt={attorney.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </div>

                <h6 className="text-lg text-[#213753] font-medium mt-4">
                  {attorney.name}
                </h6>

                <p className="text-gray-600 text-sm">{attorney.role}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
