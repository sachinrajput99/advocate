export default function MissionVisionSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto px-6 md:px-20 max-w-6xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-heading font-bold mb-4 text-primary">
            Our Mission & Vision
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-heading font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to provide reliable, efficient, and affordable appliance repair 
              and customer support services, ensuring that every household can enjoy 
              comfortable and hassle-free living. We aim to deliver quick doorstep service, 
              professional workmanship, and complete transparency — every time.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-heading font-semibold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our vision is to become India’s most trusted home service and customer care 
              provider — known for quality, integrity, and customer satisfaction. We aim to 
              simplify service requests with technology, expand our reach across cities, and 
              build long-lasting relationships with every customer we serve.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
