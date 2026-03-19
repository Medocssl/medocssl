import { motion } from "framer-motion";
import { Ambulance, Stethoscope, HeartHandshake, Syringe, Activity, Crosshair } from "lucide-react";

export function meta() {
  return [{ title: "Our Services | MEDOCS" }];
}

export default function Services() {
  const services = [
    { title: "Ambulance Services", icon: Ambulance, desc: "24/7 emergency and non-emergency patient transport." },
    { title: "Doctor on Call", icon: Stethoscope, desc: "Expert physicians available for home visits and consultations." },
    { title: "Nursing Care", icon: Syringe, desc: "Professional nursing care from the comfort of your home." },
    { title: "Palliative Care", icon: HeartHandshake, desc: "Compassionate, specialized care for severe illnesses." },
    { title: "Medical Equipment", icon: Activity, desc: "Rental and sales of premium hospital beds, oxygen, and more." },
    { title: "Emergency Response", icon: Crosshair, desc: "Rapid response teams for critical medical situations." }
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive healthcare solutions tailored to your needs, delivered by industry experts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-50 text-[#0A5C8A] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0A5C8A] group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>
                {/* Future link to individual service pages */}
                <span className="text-[#2E8B57] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                  Learn more &rarr;
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
