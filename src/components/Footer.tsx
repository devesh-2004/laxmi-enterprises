// components/Footer.tsx
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

// --- EDITABLE DATA ---
// You can easily change the links by modifying these arrays.

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const topCategories = [
  { href: "/products/asian-paints", label: "Asian Paints" },
  { href: "/products/bath-fittings", label: "Bath Fittings" },
  { href: "/products/cpvc-pipe", label: "CPVC Pipe & Fittings" },
  { href: "/products/sanitary-items", label: "Sanitary Items" },
];

const Footer = () => {
  return (
    // The main footer container with a dark background color.
    <footer className="bg-[#111827] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        {/* Main grid for the footer content. It's responsive:
            - 1 column on mobile.
            - 2 columns on tablets (md).
            - 4 columns on desktops (lg). */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* --- Column 1: Brand/About --- */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-500">Paint</span> & Emporium
            </h2>
            <p className="text-gray-400 max-w-sm">
              Your one-stop shop for all painting and plumbing needs. Quality
              products and professional services for every project.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-600 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-600 rounded-full hover:bg-sky-500 hover:border-sky-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-600 rounded-full hover:bg-pink-600 hover:border-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* --- Column 2: Quick Links --- */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 3: Top Categories --- */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Top Categories
            </h3>
            <ul className="space-y-3">
              {topCategories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 4: Contact Us --- */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
                <span>123 Paint Street, Plumber's Lane, Your City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:info@paintplumb.com"
                  className="hover:text-white transition-colors"
                >
                  info@paintplumb.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar with Copyright --- */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Made by Devesh & Manoj | All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
