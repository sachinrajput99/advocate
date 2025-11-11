import Image from "next/image";
import { FaBuilding, FaHandshake } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f9fafb] py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2 items-center">
        {/* Left Content */}
        <div>
          <span className="text-blue-600 text-center sm:text-left font-medium block mb-2 sm:mb-3 text-sm sm:text-base">
            Why choose us
          </span>
          <h2 className="text-2xl sm:text-3xl text-center sm:text-left md:text-4xl font-bold mb-6 sm:mb-8 leading-snug text-gray-900">
            With over 25 years experience, our technicians are highly experienced in
            repairing Home Appliances
          </h2>

          {/* Expert Technicians */}
          <div className="flex items-start mb-4 sm:mb-6">
            <div className="bg-blue-600 text-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full flex-shrink-0">
              <FaBuilding className="text-xl sm:text-2xl" />
            </div>
            <div className="ml-3 sm:ml-5">
              <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Expert Technicians</h4>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                Our team consists of experienced and certified technicians who are
                well-versed in repairing a wide range of home appliances, from
                refrigerators and washing machines to microwaves and air conditioners.
              </p>
            </div>
          </div>

          {/* Prompt Service */}
          <div className="flex items-start">
            <div className="bg-[#1cb9c8] text-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full flex-shrink-0">
              <FaHandshake className="text-xl sm:text-2xl" />
            </div>
            <div className="ml-3 sm:ml-5">
              <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Prompt Service</h4>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                We value your time, and our prompt service ensures that we address your
                appliance issues swiftly. Our technicians are equipped to provide
                on-the-spot diagnostics and solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full sm:w-4/5 md:w-[85%] max-w-sm sm:max-w-md">
            <div className="rounded-full overflow-hidden border-[6px] sm:border-[10px] border-blue-600">
              <Image
                src="/choose-2.jpg"
                alt="Technician repairing AC"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-4 sm:bottom-6 right-[-20px] sm:right-[-30px] bg-blue-600 text-white rounded-full w-28 h-28 sm:w-40 sm:h-40 flex flex-col items-center justify-center shadow-lg text-center">
              <h3 className="text-2xl sm:text-3xl font-bold">100%</h3>
              <span className="text-xs sm:text-sm mt-1">Service warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
