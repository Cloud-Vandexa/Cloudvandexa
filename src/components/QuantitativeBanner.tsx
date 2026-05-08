import React from 'react';

export const QuantitativeBanner = () => {
  return (
    <section className="py-12 bg-zoho-gray px-16 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2 relative z-10">
        <div className="text-[40px] font-thin leading-[1.8]">
          <p>Unlimited Potential.</p>
          <p>Simplified Business.</p>
        </div>
        <div className="md:text-right text-xl">
          <p className="font-semibold">Smart Decisions Backed by Data</p>
          <p>Grow with Zoho Corporation</p>
        </div>
      </div>
      {/* Decorative slant */}
      <div className="absolute top-0 right-0 h-full w-1/4 bg-white/5 skew-x-12 translate-x-10 pointer-events-none"></div>
    </section>
  );
};
