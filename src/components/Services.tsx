// components/CtaSection.tsx
"use client"; // This is required for Framer Motion and event handlers.

import Link from "next/link";
import { Phone, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// --- EDITABLE CARD DATA (No changes here, still easy to edit) ---
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

// --- FRAMER MOTION VARIANTS FOR ANIMATION ---

// Staggered animation for the grid container
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child card will animate 0.2s after the previous one
    },
  },
};

// Animation for each individual card
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const CtaSection = () => {
  return (
    // --- UPDATED: Background changed to a classy dark gradient ---
    <section className="bg-gradient-to-b from-blue-900 via-slate-900 to-black text-white py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 text-center">
        {/* --- HEADING with SCROLL animation --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Let's transform your vision into reality. Our team of experts is
            ready to help with all your home improvement needs.
          </p>
        </motion.div>

        {/* --- CONTACT CARDS GRID with SCROLL animation --- */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show" // Triggers the animation when the grid is in view
          viewport={{ once: true, amount: 0.2 }} // Animation runs once, when 20% is visible
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {contactOptions.map((option) => (
            // --- UPDATED: Each card is now a motion.div for individual animations ---
            <motion.div
              key={option.title}
              variants={cardVariants}
              whileHover={{
                // Animation on hover
                y: -10,
                scale: 1.03,
                boxShadow: "0px 15px 30px rgba(0, 100, 255, 0.2)",
                transition: { type: "spring", stiffness: 300 },
              }}
              // --- UPDATED: Card styling for a "glassmorphism" effect ---
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-xl shadow-lg flex flex-col items-center"
            >
              <div className={`p-4 rounded-full ${option.iconBg}`}>
                <option.Icon
                  className={
                    option.iconBg === "bg-white"
                      ? "text-blue-600 w-8 h-8"
                      : "text-white w-8 h-8"
                  }
                />
              </div>
              <h3 className="text-2xl font-bold mt-6">{option.title}</h3>
              <p className="text-blue-200 mt-2 h-16">{option.description}</p>
              <Link
                href={option.href}
                className="mt-6 flex items-center gap-2 font-semibold text-blue-300 hover:text-white transition-colors duration-300 group"
              >
                {option.linkText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* --- BROWSE PRODUCTS BUTTON with SCROLL animation --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.5 }} // Delay to animate after cards
          className="mt-16"
        >
          <Link href="/products">
            <button
              className="bg-white text-blue-900 font-bold px-8 py-3 rounded-lg shadow-md
                               hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Browse Products
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
