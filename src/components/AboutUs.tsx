import React from "react";

export const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-light text-slate-800 mb-8">About CloudVandexa</h2>
            <div className="space-y-6 text-gray-500 text-lg font-light leading-relaxed">
              <p>
                At CloudVandexa, we are passionate about helping businesses leverage the full power of Zoho to streamline their operations and drive growth. As a premium Zoho Partner, we bring years of expertise in consulting, implementation, and customization.
              </p>
              <p>
                Our mission is to provide elegant, cost-effective solutions that fit your unique business needs perfectly. We don't believe in one-size-fits-all; we believe in results.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="p-8 bg-slate-50 rounded-2xl text-center">
                <div className="text-4xl font-bold text-zoho-blue mb-2">500+</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest font-medium">Clients</div>
             </div>
             <div className="p-8 bg-slate-50 rounded-2xl text-center">
                <div className="text-4xl font-bold text-zoho-blue mb-2">10+</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest font-medium">Years Exp</div>
             </div>
             <div className="p-8 bg-slate-50 rounded-2xl text-center">
                <div className="text-4xl font-bold text-zoho-blue mb-2">50+</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest font-medium">Products</div>
             </div>
             <div className="p-8 bg-slate-50 rounded-2xl text-center">
                <div className="text-4xl font-bold text-zoho-blue mb-2">24/7</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest font-medium">Support</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
