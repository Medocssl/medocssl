import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Truck, 
  UserPlus, 
  Stethoscope, 
  Activity, 
  ArrowRight, 
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="bg-white selection:bg-blue-100">
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="bg-[#1d1d1f] text-white py-2.5 text-center text-sm font-medium tracking-tight">
        Now providing 24/7 ICU Ground Ambulance Services in Colombo
      </div>

      {/* 2. HERO SECTION (Apple Style) */}
      <section className="relative px-6 pt-20 pb-32 overflow-hidden text-center md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-[100px] font-bold tracking-tighter leading-[0.9] mb-8">
            MEDOCS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-800">
              Care at Home.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-500 font-medium mb-10 leading-relaxed">
            Sri Lanka’s premium healthcare initiative by Dr. Prageeth Witharana.
            Professional medical services delivered with absolute precision.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link to="/contact" className="px-10 py-5 text-lg font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 shadow-xl shadow-blue-200">
              Emergency Request
            </Link>
            <button className="flex items-center gap-2 text-lg font-semibold text-slate-900 group">
              View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* 3. FLOATING DASHBOARD PREVIEW (Like Jumpshare Video) */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="max-w-6xl mx-auto mt-20 border shadow-2xl rounded-3xl overflow-hidden bg-slate-50 border-slate-200 aspect-[16/9] relative group"
        >
           <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000" 
            alt="Healthcare Excellence" 
            className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-[2s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </section>

      {/* 4. SERVICES GRID (Glassmorphism Cards) */}
      <section className="px-6 py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">Comprehensive Home Care</h2>
              <p className="text-lg text-slate-500">Everything you need for recovery and emergency, handled by specialists.</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: "Ground Ambulance", 
                icon: <Truck />, 
                desc: "Equipped for basic and advanced life support transport.",
                color: "blue"
              },
              { 
                title: "Nurse Home Visits", 
                icon: <UserPlus />, 
                desc: "Certified nursing officers for wound care, injections, and monitoring.",
                color: "indigo"
              },
              { 
                title: "Doctor Home Visits", 
                icon: <Stethoscope />, 
                desc: "Expert consultations in the comfort and privacy of your home.",
                color: "blue"
              },
              { 
                title: "Medical Equipment", 
                icon: <Activity />, 
                desc: "Rental of hospital beds, oxygen concentrators, and ventilators.",
                color: "slate"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-10 bg-white border border-slate-200 rounded-[40px] shadow-sm hover:shadow-2xl transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${service.color}-50 text-${service.color}-600 flex items-center justify-center mb-8`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-bold text-blue-600 hover:gap-2 transition-all">
                  EXPLORE DETAILS <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE "WHY US" SECTION (Apple Product Detail Style) */}
      <section className="px-6 py-32 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-20">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold tracking-tight">Designed for <br/> <span className="text-slate-400 font-medium italic">Peace of Mind.</span></h2>
          <ul className="space-y-6">
            {[
              "Verified Professional Staff",
              "24/7 Emergency Availability",
              "Apple-Standard Service Quality",
              "Transparent Pricing Models"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-xl font-medium text-slate-700">
                <CheckCircle2 className="text-blue-500 w-6 h-6" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-100 rounded-[60px] aspect-square overflow-hidden border border-slate-200">
             <img 
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200" 
            alt="Medical Professional" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>
    </div>
  );
}
