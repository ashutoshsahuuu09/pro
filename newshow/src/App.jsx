import { motion } from 'framer-motion';
import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      {/* Header Section */}
      <header className="w-full flex justify-between items-center py-4 px-8 bg-gray-800 shadow-md fixed top-0 left-0 right-0">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-6">
            {['Home', 'About', 'Contact Us'].map((item, index) => (
              <li key={index} className="hover:text-blue-400 cursor-pointer">{item}</li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg text-gray-300 mb-6">Experience the modern UI with smooth animations.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Get Started
        </motion.button>
      </motion.div>
      
      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {['Fast', 'Responsive', 'Modern'].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-xl text-center shadow-xl"
          >
            <h2 className="text-2xl font-semibold">{feature}</h2>
            <p className="text-gray-400 mt-2">Enhance your web experience.</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}