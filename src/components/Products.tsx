import React from "react";

export const Products = () => {
  return (
    <section className="bg-white">
      <div className="bg-zoho-blue py-32 text-center text-white">
         <h2 className="text-5xl font-bold mb-8">Zoho Products</h2>
         <p className="max-w-4xl mx-auto px-4 text-2xl font-light opacity-90 leading-relaxed">
           The Zoho family is growing – with over 50+ products, we've got everything you need for your business and team.
         </p>
      </div>

      {/* Zoho One Row */}
      <div className="py-24 border-b border-gray-50">
         <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
               <h3 className="text-5xl font-bold text-slate-800 mb-8">Zoho One</h3>
               <p className="text-gray-500 text-xl font-light leading-relaxed mb-12">
                 Zoho One integration provides access to a variety of business applications from a single, easy-to-use control panel. Zoho One offers a comprehensive suite of enterprise-grade apps for Solopreneurs, Start-ups, and SMBs, all of which can be customized to fit your business needs.
               </p>
            </div>
            <div className="lg:w-1/2">
               <h3 className="text-5xl font-bold text-slate-800 mb-8">Zoho CRM+</h3>
               <p className="text-gray-500 text-xl font-light leading-relaxed mb-12">
                 Zoho CRM, will help you in managing and preventing the loss of leads, prospects, and loyal customers. It gives you varied ways of interacting with customers. Your employees will have better access to all the data, so that interactions with your customers become more efficient.
               </p>
            </div>
         </div>
      </div>

      {/* Creator & Mail Row */}
      <div className="py-24 bg-slate-50/30">
         <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
               <h3 className="text-5xl font-bold text-slate-800 mb-8">Zoho Creator</h3>
               <p className="text-gray-500 text-xl font-light leading-relaxed mb-12">
                 Using Zoho CRM Plus, businesses can unify customer information, provide a unified environment for all customer touchpoints, and offer excellent customer experiences across the entire customer lifecycle.
               </p>
            </div>
            <div className="lg:w-1/2">
               <h3 className="text-5xl font-bold text-slate-800 mb-8">Zoho Mail</h3>
               <p className="text-gray-500 text-xl font-light leading-relaxed mb-12">
                 Zoho Mail is the complete solution for the entire business communication needs. The Zoho Mail template provides a simple yet professional way to easily design, personalise and send business mails. Create a lasting impression on your recipients even before they read it.
               </p>
            </div>
         </div>
      </div>

      <div className="py-24 text-center">
         <h2 className="text-3xl font-light text-gray-400 mb-8 uppercase tracking-[0.2em]">To know more</h2>
         <button className="bg-zoho-blue text-white px-12 py-4 rounded-md font-bold text-lg hover:shadow-xl transition-all uppercase tracking-widest">MORE PRODUCTS</button>
      </div>
    </section>
  );
};
