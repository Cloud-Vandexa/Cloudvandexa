import React from "react";
import { motion } from "motion/react";
import { Puzzle } from "lucide-react";

export const Challenges = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row-reverse gap-20 items-center">
         <div className="lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right">
            <h2 className="text-5xl font-extralight text-gray-700 mb-8">Share your challenges with Us</h2>
            <div className="space-y-2 mb-12">
               <p className="text-3xl font-extralight text-gray-400">Infinite Possibilities &</p>
               <p className="text-3xl font-light text-slate-800 italic">Easy business</p>
            </div>
            <button className="bg-zoho-blue text-white px-12 py-4 rounded-full text-lg shadow-lg hover:brightness-110 transition-all uppercase tracking-widest font-bold">
              Contact Us
            </button>
         </div>
         <div className="lg:w-1/2 flex justify-center">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
               <Puzzle size={400} className="text-zoho-blue/5" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-1 w-[400px] bg-zoho-blue/10 rounded-full blur-xl absolute bottom-0"></div>
                  <Puzzle size={240} className="text-zoho-blue" />
               </div>
            </motion.div>
         </div>
      </div>
    </section>
  );
};
