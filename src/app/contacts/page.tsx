// components/ContactPage.tsx
"use client"; // This component needs to be a client component for the FAQ state.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

// --- EDITABLE FAQ DATA ---
// To add, remove, or change questions, just edit this array.
const faqData = [
  {
    question: "What are your store hours?",
    answer:
      "Our store is open Monday through Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays.",
  },
  {
    question: "Do you offer delivery services?",
    answer:
      "Yes, we offer delivery services for orders above ₹1000 within Pushkar. For other areas, delivery charges may apply.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is placed, you will receive an order confirmation with tracking details via SMS and email.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 7 days of purchase for unused products in their original packaging. Please contact us for more information.",
  },
];

const ContactPage = () => {
  // State to manage which FAQ item is currently open
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-300 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 space-y-16">
        {/* --- MAIN HEADING --- */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help! Reach out to
            us using any of the methods below.
          </p>
        </div>

        {/* --- CONTACT INFO & FORM GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-100">
          {/* Left Column: Get In Touch */}
          <div>
            <div className="bg-blue-600 text-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
              <p className="text-blue-100">
                We'd love to hear from you. Feel free to reach out anytime for
                queries, support, or feedback.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800">Our Location</h3>
                  <p className="text-gray-600">
                    Main Market Road, Pushkar, Rajasthan
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800">Phone Number</h3>
                  <p className="text-gray-600">9876543200</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Email Address
                  </h3>
                  <p className="text-gray-600">laxmipushkar@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Business Hours
                  </h3>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us a Message Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="johndoe@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number{" "}
                    <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your phone number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    placeholder="What's this about?"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Please describe your query in detail..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* --- OUR LOCATION (MAP) --- */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Our Location
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            {/* HOW TO UPDATE THE MAP:
              1. Go to Google Maps and search for your business address.
              2. Click the "Share" button.
              3. Go to the "Embed a map" tab.
              4. Click "COPY HTML".
              5. Replace the entire `<iframe>` tag below with the one you copied.
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14286.82250917618!2d74.6190829871582!3d26.48123280000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c421005a83aszx%3A0x853906665893347a!2sPushkar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1678886543210!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* --- FREQUENTLY ASKED QUESTIONS (FAQ) --- */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="font-semibold text-slate-700">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pl-8 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
