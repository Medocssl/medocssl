import { NavLink } from "react-router";
import { Phone } from "lucide-react";

export default function Navbar() {
  // 🔁 CHANGE THIS: Replace with your actual hotline number
  const hotline = "+94 76 440 0400";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0A5C8A] rounded-lg flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <span className="font-bold text-xl text-[#0A5C8A] tracking-tight">
              MEDOCS
            </span>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className="text-gray-600 hover:text-[#0A5C8A] transition-colors font-medium">Home</NavLink>
            <NavLink to="/services" className="text-gray-600 hover:text-[#0A5C8A] transition-colors font-medium">Services</NavLink>
            <NavLink to="/about" className="text-gray-600 hover:text-[#0A5C8A] transition-colors font-medium">About</NavLink>
            <NavLink to="/contact" className="text-gray-600 hover:text-[#0A5C8A] transition-colors font-medium">Contact</NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href={`tel:${hotline.replace(/\s/g, '')}`} className="flex items-center gap-2 bg-[#2E8B57] hover:bg-[#257348] text-white px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md font-medium">
              <Phone size={18} />
              <span>{hotline}</span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
