import React from "react";

export const Testimonial = () => {
  return (
    <section className="py-24 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
         <h2 className="text-5xl font-extralight text-gray-600">Client Testimonial</h2>
         <div className="w-12 h-1 bg-slate-300 mx-auto mt-6"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4">
         <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 rounded-full bg-slate-200 flex-shrink-0 animate-pulse overflow-hidden">
               <div className="w-full h-full bg-zoho-blue/5"></div>
            </div>
            <div>
               <h4 className="text-3xl font-bold text-slate-700 mb-6 uppercase tracking-wider">Bridgeway Motors</h4>
               <p className="text-gray-500 text-xl font-light italic mb-8 leading-relaxed">
                 "We recently had the pleasure of working with CloudVandexa solutions set up our CRM and data management systems, and the experience has been nothing short of exceptional."
               </p>
               <div>
                  <span className="font-bold text-slate-800">Sakkeer</span>
                  <span className="text-gray-400"> | Lead Marketing | Mercedes-Benz Bridgeway Motors</span>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};
