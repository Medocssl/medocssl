import { Link } from "react-router";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">MEDOCS</Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link to="/services" className="hover:text-black transition-colors">Services</Link>
          <Link to="/about" className="hover:text-black transition-colors">About</Link>
          <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
        </div>

        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
}
