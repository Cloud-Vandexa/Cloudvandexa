import React from "react";
import { motion } from "motion/react";
import { Puzzle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-[700px] bg-zoho-blue text-white overflow-hidden flex flex-col justify-center">
      {/* Background Texture/Image (Abstract like the board) */}
      <div className="absolute inset-0 grayscale opacity-20 bg-[url('https://images.unsplash.com/photo-1520106347313-4ac36130210b?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full flex flex-col items-start pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-white">
            Smart Zoho Solutions. <br />
            Real Business Growth.
          </h1>
          <p className="text-2xl md:text-3xl font-light opacity-90 mb-12 max-w-xl">
            Empowering Businesses to Scale Faster with <br />
            <span className="font-medium">CloudVandexa</span>
          </p>
          
          <button className="bg-slate-50 text-slate-800 px-12 py-4 rounded-full font-medium text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Get CloudVandexa Solution
          </button>
        </div>

        {/* Welcome Section with Puzzle instead of Skateboard */}
        <div className="mt-28 relative flex flex-col items-center">
           <span className="text-4xl md:text-5xl font-extralight tracking-widest text-white/40 mb-6 select-none">Welcome</span>
           <div className="relative">
              <motion.div 
                animate={{ rotate: [10, -10, 10], y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Puzzle size={100} className="text-white/30" />
              </motion.div>
              {/* Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-2 bg-black/10 blur-xl rounded-full"></div>
           </div>
        </div>
      </div>
      
      {/* Large Decorative Pattern */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none opacity-5">
         <Puzzle size={800} className="stroke-white stroke-[0.5] rotate-12" />
      </div>
    </section>
  );
};
