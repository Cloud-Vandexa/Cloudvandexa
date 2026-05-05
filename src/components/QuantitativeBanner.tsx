import React from "react";

export const QuantitativeBanner = () => {
  return (
    <section className="py-24 bg-zoho-blue text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 relative z-10">
         <div>
            <h3 className="text-5xl font-bold mb-3">Smart Decisions Backed by Data</h3>
            <h3 className="text-3xl font-light opacity-80">Grow with Zoho Corporation</h3>
         </div>
         <div className="md:text-right">
            <p className="text-4xl font-bold mb-2">Unlimited Potential.</p>
            <p className="text-4xl font-light opacity-90 italic leading-snug">Simplified Business.</p>
         </div>
      </div>
      {/* Decorative slant */}
      <div className="absolute top-0 right-0 h-full w-1/4 bg-white/5 skew-x-12 translate-x-10 pointer-events-none"></div>
    </section>
  );
};
