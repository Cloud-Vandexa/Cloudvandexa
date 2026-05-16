import React from 'react';
import { motion } from 'motion/react';
import puzzle_vector from '../assets/puzzle_vector.png';
import { Link } from 'react-router-dom';

export const Challenges = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse gap-20 items-center">
        <div className="lg:w-1/2 flex flex-col items-center text-center lg:text-right">
          <h2 className="text-3xl font-extralight  text-gray-700 font-poppins mb-8">
            Share your challenges with Us
          </h2>
          <div className="space-y-2 mb-12 text-center  text-xl font-light">
            <p>Infinite Possibilities &</p>
            <p>Easy business</p>
          </div>
          <Link
            to="/contact-us"
            className="bg-zoho-gray text-sm text-white px-10 py-3 rounded-full shadow-lg hover:brightness-110 transition-all uppercase tracking-widest font-noto-sans"
          >
            Contact Us
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="relative"
          >
            <img src={puzzle_vector} alt="puzzle" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
