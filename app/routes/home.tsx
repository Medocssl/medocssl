import { motion } from "framer-motion";
import { Shield, Truck, HeartPulse, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
        >
          Healthcare <br />
          <span className="text-blue-600">at your doorstep.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-500 max-w-2xl mx-auto mb-10"
        >
          Sri Lanka's most trusted home-based medical service. Premium care,
          professional staff, and rapid response—all in one place.
        </motion.p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Interactive Feature Cards */}
      <section className="bg-gray-50 py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Ground Ambulance", icon: <Truck className="w-6 h-6" />, desc: "Fast, reliable emergency transport." },
            { title: "Nurse Visits", icon: <HeartPulse className="w-6 h-6" />, desc: "Professional nursing care in your bedroom." },
            { title: "Secure Data", icon: <Shield className="w-6 h-6" />, desc: "Your medical records are safe with us." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 mb-6">{item.desc}</p>
              <button className="flex items-center text-blue-600 font-semibold group">
                Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
