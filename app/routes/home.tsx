import { motion } from "framer-motion";
import { ArrowRight, Activity, Shield, Clock } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <motion.div {...fadeIn}>
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-slate-100 rounded-full text-slate-500">
            Medocs Health Services
          </span>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            Healthcare. <br />
            <span className="text-slate-400">Refined for your home.</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-8 text-lg text-slate-500 md:text-xl">
            Premium medical care delivered with precision. Experience the next 
            evolution of home-based health services in Sri Lanka.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
            <button className="px-8 py-4 text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 font-medium">
              Book a Service
            </button>
            <button className="flex items-center gap-2 px-8 py-4 font-medium transition-colors group text-slate-600 hover:text-blue-600">
              Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Hero Image Mockup Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="w-full max-w-5xl mt-20 overflow-hidden border shadow-2xl rounded-2xl bg-slate-50 border-slate-100 aspect-video"
        >
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Healthcare" 
            className="object-cover w-full h-full opacity-90"
          />
        </motion.div>
      </section>

      {/* Glassmorphic Features Section */}
      <section className="px-6 py-24 bg-slate-50">
        <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
          {[
            { icon: <Activity />, title: "Ambulance", desc: "Rapid response ground medical transport." },
            { icon: <Shield />, title: "Qualified Staff", desc: "Licensed professionals at your doorstep." },
            { icon: <Clock />, title: "24/7 Care", desc: "Reliable support whenever you need us." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 transition-all bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-6 text-blue-600 rounded-2xl bg-blue-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
