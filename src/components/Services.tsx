// components/CtaSection.tsx
import Link from "next/link";
import { Phone, MessageSquare, Calendar, ArrowRight } from "lucide-react";

// --- EDITABLE CARD DATA ---
// To change the content of the three cards, just edit this array.
// - title: The main heading of the card.
// - description: The text below the title.
// - linkText: The text for the link/button.
// - href: The destination URL (e.g., a phone number link, WhatsApp link, or page link).
// - Icon: The icon component from lucide-react.
// - iconBg: Tailwind CSS classes for the icon's background color.
const contactOptions = [
  {
    title: "Call Us",
    description:
      "Speak directly with our experts about your project requirements.",
    linkText: "+91 987-654-3210",
    href: "tel:+919876543210", // Standard telephone link
    Icon: Phone,
    iconBg: "bg-blue-500",
  },
  {
    title: "WhatsApp Order",
    description:
      "Place your order directly through WhatsApp for quick service.",
    linkText: "Order via WhatsApp",
    // Replace with your actual WhatsApp link
    href: "https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20place%20an%20order.",
    Icon: MessageSquare,
    iconBg: "bg-green-500",
  },
  {
    title: "Schedule Visit",
    description:
      "Book a time for our experts to visit and assess your requirements.",
    linkText: "Book Appointment",
    href: "/contact#appointment", // Link to a contact page section
    Icon: Calendar,
    iconBg: "bg-white",
  },
];

const CtaSection = () => {
  return (
    // Main section container with a deep blue background.
    // Padding is responsive for different screen sizes.
    <section className="bg-blue-900 text-white py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 text-center">
        {/* --- HEADING --- */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-blue-200 text-lg max-w-3xl mx-auto">
          Let's transform your vision into reality. Our team of experts is ready
          to help with all your home improvement needs.
        </p>

        {/* --- CONTACT CARDS GRID --- */}
        {/* This grid is responsive: it stacks vertically on small screens
            and becomes a 3-column grid on larger screens (lg). */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactOptions.map((option) => (
            // Each card has a hover animation for a better user experience.
            <div
              key={option.title}
              className="bg-blue-800/50 p-8 rounded-xl shadow-lg flex flex-col items-center
                         transition-all duration-300 ease-in-out hover:bg-blue-800 hover:-translate-y-2"
            >
              {/* Icon with its unique background color */}
              <div className={`p-4 rounded-full ${option.iconBg}`}>
                <option.Icon
                  className={
                    option.iconBg === "bg-white"
                      ? "text-blue-600 w-8 h-8"
                      : "text-white w-8 h-8"
                  }
                />
              </div>

              {/* Card Title */}
              <h3 className="text-2xl font-bold mt-6">{option.title}</h3>

              {/* Card Description */}
              <p className="text-blue-200 mt-2 h-16">{option.description}</p>

              {/* Card Link */}
              <Link
                href={option.href}
                className="mt-6 flex items-center gap-2 font-semibold text-blue-300
                           hover:text-white transition-colors duration-300 group"
              >
                {option.linkText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* --- BROWSE PRODUCTS BUTTON --- */}
        <div className="mt-16">
          <Link href="/products">
            <button
              className="bg-white text-blue-900 font-bold px-8 py-3 rounded-lg shadow-md
                               hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Browse Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
