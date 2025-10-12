// components/ProfessionalServices.tsx
"use client"; // This component uses state for the tabs, so it must be a client component.

import { useState } from "react";
import { Paintbrush, Wrench, Star, Phone, User } from "lucide-react";

// --- EDITABLE DATA FOR PROFESSIONALS ---
// To change the list of painters, just edit this array.
const painterData = [
  {
    id: 1,
    name: "Ramesh Kumar",
    specialty: "Interior Painting",
    experience: "12 years experience",
    rank: 1,
  },
  {
    id: 2,
    name: "Suresh Verma",
    specialty: "Exterior & Texture",
    experience: "15 years experience",
    rank: 2,
  },
];

// To change the list of plumbers, just edit this array.
const plumberData = [
  {
    id: 1,
    name: "Sunil Sharma",
    specialty: "General Plumbing",
    experience: "9 years experience",
    rank: 1,
  },
  {
    id: 2,
    name: "Deepak Joshi",
    specialty: "Bath Fittings Expert",
    experience: "14 years experience",
    rank: 2,
  },
];

const ProfessionalServices = () => {
  // State to manage which tab is active ('painters' or 'plumbers')
  const [activeTab, setActiveTab] = useState("painters");

  return (
    // Main section container with a light gray background
    <section className="bg-gray-50 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 space-y-16">
        {/* --- 1. TOP HEADING SECTION --- */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-gray-600">
            Connect with our network of skilled painters and plumbers to help
            with your home improvement projects. All professionals are vetted
            for quality workmanship and reliability.
          </p>
          {/* Service Tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 font-medium">
              Trusted Professionals
            </span>
            <span className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 font-medium">
              Quality Workmanship
            </span>
            <span className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 font-medium">
              Timely Service
            </span>
          </div>
        </div>

        {/* --- 2. FIND PAINTERS / PLUMBERS CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Find Painters Card */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <Paintbrush className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Find Painters
            </h3>
            <p className="text-gray-600 mb-6">
              Connect with skilled professional painters in your area for your
              painting needs.
            </p>
            <button className="bg-slate-800 text-white font-semibold px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors">
              Request Find Painters
            </button>
          </div>
          {/* Find Plumbers Card */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <Wrench className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Find Plumbers
            </h3>
            <p className="text-gray-600 mb-6">
              Get reliable plumbing services from certified plumbers for all
              your plumbing requirements.
            </p>
            <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors">
              Request Find Plumbers
            </button>
          </div>
        </div>

        {/* --- 3. AVAILABLE PROFESSIONALS (TABS) --- */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center sm:text-left">
            Available Professionals
          </h3>
          {/* Tab Buttons */}
          <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
            <button
              onClick={() => setActiveTab("painters")}
              className={`w-1/2 py-2 rounded-md text-sm font-semibold transition-colors ${
                activeTab === "painters"
                  ? "bg-slate-800 text-white shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Painters
            </button>
            <button
              onClick={() => setActiveTab("plumbers")}
              className={`w-1/2 py-2 rounded-md text-sm font-semibold transition-colors ${
                activeTab === "plumbers"
                  ? "bg-slate-800 text-white shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Plumbers
            </button>
          </div>

          {/* Tab Content */}
          <div className="space-y-4">
            {activeTab === "painters" &&
              painterData.map((p) => (
                <div
                  key={p.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-800">{p.name}</h4>
                      <p className="text-sm text-gray-500">
                        {p.specialty} • {p.experience}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none bg-slate-800 text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" /> Call
                    </button>
                    <button className="flex-1 sm:flex-none border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}

            {activeTab === "plumbers" &&
              plumberData.map((p) => (
                <div
                  key={p.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-800">{p.name}</h4>
                      <p className="text-sm text-gray-500">
                        {p.specialty} • {p.experience}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none bg-slate-800 text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" /> Call
                    </button>
                    <button className="flex-1 sm:flex-none border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* --- 4. REQUEST A PAINTER FORM --- */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            Request a Professional
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address*
              </label>
              <input
                type="text"
                id="address"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="requirements"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Requirements
              </label>
              <textarea
                id="requirements"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-slate-800 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalServices;
