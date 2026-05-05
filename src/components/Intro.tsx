import React from "react";
import { motion } from "motion/react";
import { LayoutGrid, Puzzle } from "lucide-react";

export const Intro = () => {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2 relative group">
           <div className="absolute -top-6 -left-6 bg-zoho-blue text-white px-3 py-1 font-bold text-xs tracking-widest uppercase">CVX</div>
           <div className="w-full h-[500px] bg-slate-50 flex items-center justify-center rounded-lg shadow-sm border border-gray-100 p-12 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <LayoutGrid size={350} className="text-zoho-blue/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Puzzle size={180} className="text-zoho-blue" />
                </div>
              </motion.div>
           </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-light text-slate-800 mb-10">CloudVandexa Zoho Solutions</h2>
          <div className="space-y-6 text-gray-500 leading-relaxed text-[17px] font-light">
            <p>
              Adding the right technology to a business should create growth, not complexity. <span className="font-medium text-slate-700">CloudVandexa</span> delivers seamless Zoho solutions that simplify operations, improve efficiency, and support long-term success. Our team guides you through the complete journey—from consultation to implementation and optimization.
            </p>
            <p>
              We understand that every business has different goals, processes, and challenges. That is why we do not follow a one-size-fits-all approach. We carefully analyze your requirements and design smart, scalable, and user-friendly Zoho solutions tailored to your needs and budget.
            </p>
            <p>
              Our experts focus on strategic implementation, smooth user adoption, and measurable business outcomes. Whether it is sales automation, finance control, customer support, or project management, we ensure Zoho works as a growth engine for your organization.
            </p>
            <p className="font-medium text-slate-800 pt-4 border-l-4 border-zoho-blue pl-6">
              We value your time, respond quickly, and believe in building lasting partnerships through trust and results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
