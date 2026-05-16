import { motion } from 'motion/react';
import puzzle from '../assets/puzzle_mascott.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative px-12 bg-zoho-blue text-white overflow-hidden flex flex-col justify-center">
      {/* Background Texture/Image (Abstract like the board) */}
      <div className="absolute inset-0 grayscale opacity-20 bg-[url('https://images.unsplash.com/photo-1520106347313-4ac36130210b?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full flex flex-col items-start pt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-sansation leading-[1.4]  mb-4 text-white">
            Smart Zoho Solutions. <br />
            Real Business Growth.
          </h1>
          <p className="text-[26px] font-light font-roboto opacity-90 mb-12 max-w-xl">
            Empowering Businesses to <br />
            <span> Scale Faster with CloudVandexa</span>
          </p>
        </div>

        {/* Welcome Section with Puzzle instead of Skateboard */}
        <div className="relative flex flex-col items-center">
          <Link
            to="/contact-us"
            className="bg-slate-50 mt-auto text-slate-800 px-10 py-3 rounded-full font-medium text-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-6"
          >
            Get CloudVandexa Solution
          </Link>
          <span className="text-4xl md:text-5xl font-extralight tracking-widest text-white/40 mb-6 select-none">
            Welcome
          </span>
          <div className="relative">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <img src={puzzle} alt="Puzzle" className="w-32 h-32" />
            </motion.div>
            {/* Shadow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-2 bg-black/10 blur-xl rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Large Decorative Pattern */}
      <div className="absolute right-0 top-0 h-125 w-125  translate-y-10  pointer-events-none opacity-25 ">
        <img src={puzzle} alt="puzzle" />
      </div>
    </section>
  );
};
