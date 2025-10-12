// components/Header.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  // State for the main mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State specifically for the products dropdown on desktop
  const [isProductsOpen, setProductsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  // --- Framer Motion Variants for Animations ---
  // Animation for the dropdown menu
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };
  // Animation for the mobile menu container (sliding in from the left)
  const mobileMenuVariants = {
    hidden: { x: "-100%", transition: { duration: 0.3 } },
    visible: { x: 0, transition: { duration: 0.3, staggerChildren: 0.05 } },
  };
  // Staggered animation for each link in the mobile menu
  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="bg-gray-900/90 backdrop-blur-sm text-gray-50 shadow-md sticky top-0 z-50 shadow-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="text-2xl font-bold text-white">
          <Link href="/">Laxmi Enterprises Pushkar</Link>
        </div>

        {/* --- Desktop Navigation Links --- */}
        <ul className="hidden md:flex items-center space-x-8">
          {/* Standard Link with animated underline */}
          <li className="relative">
            <Link
              href="/"
              className="hover:text-sky-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          {/* Products Dropdown - now controlled by state for reliability and animation */}
          <li
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center hover:text-sky-400 transition-colors duration-300">
              <span>Products</span>
              <motion.div animate={{ rotate: isProductsOpen ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4 ml-1" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute left-0 mt-2 w-48 bg-gray-800/90 backdrop-blur-md text-white rounded-md shadow-lg"
                >
                  <Link
                    href="/products/category1"
                    className="block px-4 py-2 text-sm hover:bg-gray-700"
                  >
                    Category 1
                  </Link>
                  <Link
                    href="/products/category2"
                    className="block px-4 py-2 text-sm hover:bg-gray-700"
                  >
                    Category 2
                  </Link>
                  <Link
                    href="/products/all"
                    className="block px-4 py-2 text-sm hover:bg-gray-700"
                  >
                    All Products
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link
              href="/services"
              className="hover:text-sky-400 transition-colors duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className="hover:text-sky-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* --- Desktop Icons & Login Button --- */}
        <div className="hidden md:flex items-center space-x-5">
          <button className="hover:text-sky-400 transition-colors duration-300">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-sky-400 transition-colors duration-300">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <Link href="/register"> 
            <button className="border border-white rounded-md px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
              Login/Register
            </button>
          </Link>
        </div>

        {/* --- Mobile Menu Button --- */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            // This div now covers the full screen and slides in from the left
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-md z-40"
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              <motion.li variants={mobileLinkVariants}>
                <Link
                  href="/"
                  className="text-2xl hover:text-sky-400"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </motion.li>
              <motion.li variants={mobileLinkVariants}>
                <Link
                  href="/products"
                  className="text-2xl hover:text-sky-400"
                  onClick={toggleMobileMenu}
                >
                  Products
                </Link>
              </motion.li>
              <motion.li variants={mobileLinkVariants}>
                <Link
                  href="/services"
                  className="text-2xl hover:text-sky-400"
                  onClick={toggleMobileMenu}
                >
                  Services
                </Link>
              </motion.li>
              <motion.li variants={mobileLinkVariants}>
                <Link
                  href="/contacts"
                  className="text-2xl hover:text-sky-400"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
              </motion.li>
              <motion.li variants={mobileLinkVariants} className="pt-8">
                <Link href="/register">
                  <button
                    className="border border-white rounded-md px-8 py-3 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
                    onClick={toggleMobileMenu}
                  >
                    Login/Register
                  </button>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
