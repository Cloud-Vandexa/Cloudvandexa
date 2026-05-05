import React from "react";

export const ConsultantWidget = () => {
  return (
    <div className="fixed bottom-0 right-8 bg-[#111111] text-white px-5 py-2.5 rounded-t-xl flex items-center gap-3 border-x border-t border-white/10 z-[100] shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] cursor-pointer group">
       <div className="w-8 h-8 bg-zoho-blue flex items-center justify-center rounded font-bold text-[8px] group-hover:scale-110 transition-transform">CVX</div>
       <span className="text-sm font-bold tracking-tight">OHO Consultant</span>
    </div>
  );
};
