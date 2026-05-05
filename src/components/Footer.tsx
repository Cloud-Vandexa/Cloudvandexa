import React from "react";
import { Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white pt-24 pb-4">
      <div className="max-w-7xl mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-24 pb-20">
            <div>
               <h3 className="text-5xl font-bold mb-16">Contact Us</h3>
               <div className="space-y-12">
                  <div className="flex items-center gap-8 group">
                     <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-zoho-blue transition-colors">
                        <Phone className="text-zoho-blue" size={28} />
                     </div>
                     <span className="text-3xl font-light tracking-tight">+91-9567443377</span>
                  </div>
                  <div className="flex items-center gap-8 group">
                     <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-zoho-blue transition-colors">
                        <Mail className="text-zoho-blue" size={24} />
                     </div>
                     <span className="text-3xl font-light tracking-tight lowercase">contact@ohosolutions.in</span>
                  </div>
               </div>
            </div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
               <h3 className="text-4xl font-bold mb-6 tracking-widest uppercase">FEEDBACK</h3>
               <p className="text-gray-400 text-2xl font-light mb-12 max-w-md">
                  We Like to hear what your feedbacks.
               </p>
               <button className="bg-zoho-blue text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-[0_0_40px_rgba(34,109,180,0.5)] transition-all uppercase tracking-widest">Submit a ticket</button>
            </div>
         </div>

         <div className="pt-12 mt-12 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} CloudVandexa. All rights reserved.</p>
            <div className="text-gray-500 uppercase tracking-[0.3em] font-bold text-[10px]">
               Unlimited Potential. Simplified Business.
            </div>
         </div>
      </div>
    </footer>
  );
};
