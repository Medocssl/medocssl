import { motion } from "framer-motion";

export function meta() {
  return [{ title: "About Us | MEDOCS" }];
}

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About MEDOCS</h1>
          <p className="text-xl text-[#0A5C8A] font-medium">Setting the standard for premium healthcare in Sri Lanka.</p>
        </motion.div>

        <div className="prose prose-lg prose-blue mx-auto text-gray-600 leading-relaxed space-y-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            MEDOCS Health Services (Pvt) Ltd was founded with a singular vision: to bridge the gap between world-class medical standards and accessible home healthcare. We believe that recovery and management of health are most effective in environments where patients feel most comfortable.
          </motion.p>
          
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 my-10">
            <h3 className="text-2xl font-bold text-[#0A5C8A] mb-4 mt-0">Our Mission</h3>
            <p className="m-0 text-gray-700">
              To deliver compassionate, high-quality, and reliable medical services directly to our community, ensuring peace of mind for patients and their families through professional excellence.
            </p>
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Our team consists of highly vetted, registered medical professionals, from emergency responders to palliative care specialists. With state-of-the-art equipment and a strict adherence to international healthcare protocols, we don't just provide medical services—we provide comprehensive care partnerships.
          </motion.p>
        </div>

      </div>
    </div>
  );
}
