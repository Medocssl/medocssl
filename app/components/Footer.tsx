export default function Footer() {
  return (
    <footer className="bg-[#0A5C8A] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">MEDOCS Health Services</h3>
          <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
            Premium healthcare, delivered with compassion and excellence. Your health is our priority.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-blue-100">
            <li><a href="/services" className="hover:text-white transition">Our Services</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-blue-100">
            {/* 🔁 CHANGE THIS: Update with your real details */}
            <li>Colombo, Sri Lanka</li>
            <li>hotline@medocs.lk</li>
            <li>+94 76 440 0400</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-blue-800 text-sm text-center text-blue-200">
        © {new Date().getFullYear()} MEDOCS Health Services (Pvt) Ltd. All rights reserved.
      </div>
    </footer>
  );
}
