import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export function meta() {
  return [{ title: "Contact Us | MEDOCS" }];
}

export default function Contact() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">We are here for you 24/7. Reach out to us for emergencies, inquiries, or to book a service.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Contact Information */}
          <div className="bg-[#0A5C8A] p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-300 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-1">24/7 Hotline</p>
                    <p className="text-blue-100">+94 76 440 0400</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-300 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-1">Email</p>
                    <p className="text-blue-100">info@medocs.lk</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-300 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-1">Location</p>
                    <p className="text-blue-100 leading-relaxed">Colombo<br/>Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (UI Only) */}
          <div className="p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0A5C8A] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0A5C8A] focus:border-transparent outline-none transition-all" placeholder="+94 7X XXX XXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0A5C8A] focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-[#2E8B57] hover:bg-[#257348] text-white font-bold py-3.5 rounded-xl transition-all shadow-md">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
