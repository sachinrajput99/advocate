export default function OurStorySection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto px-6 md:px-20 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 0">
              Our Story
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {/* <span className="text-red-700 font-semibold">ATF</span>  */}
              ATF Servicecenter India was established with a commitment 
              to provide professional, reliable, and fast customer support and appliance repair services. 
              Our goal has always been to make service requests simple, transparent, and stress-free for every customer.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Today, we offer doorstep repair and support services for Air Conditioners, Washing
              Machines, Refrigerators, Microwave Ovens, and LED Televisions — backed by trained
              technicians, authentic spare parts, and a service process you can trust.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              We continue to grow with a customer-first approach, ensuring timely service, quality
              workmanship, and complete satisfaction — every single time.
            </p>
          </div>

          {/* Stats Box */}
          <div className="relative">
            <div className="bg-blue-50 rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-6 text-center">

                <div>
                  <div className="text-3xl md:text-4xl font-bold   mb-2">
                    50K+
                  </div>
                  <div className="text-slate-600">Repairs Completed</div>
                </div>

                <div>
                  <div className="text-3xl md:text-4xl font-bold   mb-2">
                    120+
                  </div>
                  <div className="text-slate-600">Cities Served</div>
                </div>

                <div>
                  <div className="text-3xl md:text-4xl font-bold   mb-2">
                    25K+
                  </div>
                  <div className="text-slate-600">Happy Customers</div>
                </div>

                <div>
                  <div className="text-3xl md:text-4xl font-bold   mb-2">
                    8+ Years
                  </div>
                  <div className="text-slate-600">Industry Experience</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
