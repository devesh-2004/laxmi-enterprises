// components/AccountAccessModal.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";

// --- ICONS ---
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 12.12C34.553 8.243 29.621 6 24 6C12.955 6 4 14.955 4 26s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    ></path>
    <path
      fill="#FF3D00"
      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l6.538-6.538C34.553 8.243 29.621 6 24 6C16.312 6 9.613 9.923 6.306 14.691z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24 46c5.645 0 10.597-2.319 14.156-6.064l-6.522-5.025C29.535 37.361 26.911 38 24 38c-5.223 0-9.605-3.373-11.303-8H6.393c3.279 8.441 11.272 14 20.007 14z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.522 5.025C40.574 35.943 44 31.286 44 26c0-1.341-.138-2.65-.389-3.917z"
    ></path>
  </svg>
);
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path>
  </svg>
);

// --- PROP TYPES ---
interface AccountAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- ANIMATION VARIANTS ---
// These are simpler and more reliable than the 3D flip.
const formVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const AccountAccessModal = ({ isOpen, onClose }: AccountAccessModalProps) => {
  const [formType, setFormType] = useState<"login" | "signup">("login");

  // Accessibility: Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Reset to login form when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setFormType("login"), 300); // Delay to match exit animation
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X />
            </button>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-800">
                Account Access
              </h2>
              <p className="text-gray-500 mt-1">
                Login or create an account to continue
              </p>
            </div>

            {/* Social Logins */}
            <div className="mt-6 space-y-3">
              <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-lg hover:bg-gray-50/80 transition-colors">
                <GoogleIcon />{" "}
                <span className="font-semibold text-slate-700">
                  Continue with Google
                </span>
              </button>
              <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-lg hover:bg-gray-50/80 transition-colors">
                <FacebookIcon />{" "}
                <span className="font-semibold text-slate-700">
                  Continue with Facebook
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-t border-gray-200" />
              <span className="mx-4 text-xs font-semibold text-gray-400 uppercase">
                Or
              </span>
              <hr className="flex-grow border-t border-gray-200" />
            </div>

            {/* Tabs */}
            <div className="bg-gray-100 p-1 rounded-lg flex mb-6">
              <button
                onClick={() => setFormType("login")}
                className={`w-1/2 py-2 rounded-md font-semibold transition-all ${
                  formType === "login"
                    ? "bg-white text-blue-600 shadow"
                    : "text-gray-500 hover:bg-gray-200"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setFormType("signup")}
                className={`w-1/2 py-2 rounded-md font-semibold transition-all ${
                  formType === "signup"
                    ? "bg-white text-blue-600 shadow"
                    : "text-gray-500 hover:bg-gray-200"
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Form Area with smooth transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={formType} // This key tells AnimatePresence to animate when the form changes
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {formType === "login" ? (
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <a
                          href="#"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-slate-800 text-white font-bold py-3 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      Login
                    </button>
                  </form>
                ) : (
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Create a strong password"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-slate-800 text-white font-bold py-3 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      Create Account
                    </button>
                  </form>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccountAccessModal;