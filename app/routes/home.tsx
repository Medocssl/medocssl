import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, Shield, Clock } from "lucide-react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "MEDOCS | Premium Healthcare Services" },
    { name: "description", content: "Modern healthcare services in Sri Lanka." },
  ];
}

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#2E8B57] font-semibold tracking-wider text-sm uppercase bg-green-50 px-4 py-1.5 rounded-full">
              Trusted Care
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold text-[#1F2937] tracking-tight leading-tight">
              Premium Healthcare, <br />
              <span className="text-[#0A5C8A]">Delivered to You.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Experience world-class medical services with a personalized touch. From emergency response to specialized home care.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link to="/services" className="bg-[#0A5C8A] hover:bg-[#08486b] text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2">
                Explore Services <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 text-[#0A5C8A] rounded-xl flex items-center justify-center mb-6">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Doctors</h3>
              <p className="text-gray-500 leading-relaxed">Access to highly qualified medical professionals across various specialties.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-100 text-[#2E8B57] rounded-xl flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">24/7 Response</h3>
              <p className="text-gray-500 leading-relaxed">Round-the-clock emergency services and ambulance dispatch when you need it most.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 text-[#0A5C8A] rounded-xl flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Premium Care</h3>
              <p className="text-gray-500 leading-relaxed">State-of-the-art medical equipment and palliative care managed with strict standards.</p>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
