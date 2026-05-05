import React from "react";
import { ZohoLogo } from "./ZohoLogo";

export const ZohoCorp = () => {
  return (
    <section className="py-32 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-20 items-center">
         <div className="lg:w-1/2 flex justify-center">
            <div className="relative group p-10 bg-slate-50/50 rounded-3xl border border-slate-100">
               <ZohoLogo className="h-48 md:h-64" />
            </div>
         </div>
         <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold text-slate-800 mb-4 tracking-tight">Zoho Corporation</h2>
            <div className="w-12 h-1 bg-zoho-blue mb-10"></div>
            <div className="space-y-8 text-gray-500 text-xl font-light leading-relaxed">
               <p>
                 Open your door to the world of work with Zoho. The cloud-based company offers a suite of online business tools accessible from anywhere, on any device, even without an internet connection. Zoho makes it easy and simple for everyone from entrepreneurs and freelancers to large businesses. 
               </p>
               <p>
                 Zoho Corporation is a multinational technology firm established in India that creates web-based business solutions. It is most well-known for its online office suite.
               </p>
               <div className="pt-8 border-t border-slate-100">
                  <h4 className="text-2xl font-bold text-slate-800 mb-4">Zoho Creator Specialist</h4>
                  <p className="text-lg italic opacity-80 mb-8">
                     Create customised application for your unique challenges and utilize them across various platforms to maximise productivity.
                  </p>
                  <button className="bg-slate-800 text-white px-10 py-4 rounded-md text-lg font-bold hover:bg-slate-900 transition-colors uppercase tracking-widest">
                    Know More
                  </button>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};
