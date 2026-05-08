import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { ZohoLogo } from './ZohoLogo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-white transition-all z-50 duration-300 ${isScrolled ? 'fixed top-0 shadow-md' : 'relative'}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-28">
        <div className="flex items-center gap-8">
          {/* Logo Structure from Image */}
          <div className="flex items-center h-16">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5 h-14">
                <div className="w-14 h-14 border-[7px] border-zoho-blue rounded-sm"></div>
                <div className="w-14 h-14 border-[7px] border-zoho-blue rounded-sm"></div>
              </div>
              <div className="flex flex-col justify-center select-none">
                <span className="text-3xl font-light tracking-widest text-slate-700 leading-none">
                  CLOUD
                </span>
                <span className="text-3xl font-bold tracking-widest text-slate-800 leading-none">
                  VANDEXA
                </span>
              </div>
            </div>
          </div>

          <div className="h-12 w-0.5 bg-slate-800"></div>

          {/* Zoho Premium Partner Badge (Deeper Match) */}
          <div className="hidden sm:flex items-center border border-slate-100 rounded-lg bg-slate-50 overflow-hidden shadow-sm h-11">
            <div className="px-3 bg-white flex items-center justify-center">
              <ZohoLogo className="h-6" />
            </div>
            <div className="bg-zoho-blue text-white px-3 py-2 flex flex-col justify-center h-full text-[10px] font-thin leading-[0.9] ">
              <span className="text-[11px] font-light">Zoho</span>
              <span>
                <span className="font-extralight">P</span>
                <span>remium</span>
              </span>
              <span>
                <span className="font-extralight">P</span>
                <span>artner </span>
              </span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-12 font-normal text-slate-500 text-[17px]">
          <a href="#" className="text-zoho-blue-bright ">
            Home
          </a>
          <a
            href="#"
            className="hover:text-zoho-blue-bright  transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-zoho-blue-bright  transition-colors"
          >
            Clients
          </a>
          {/* <a
            href="#"
            className="hover:text-zoho-blue-bright  transition-colors"
          >
            Case Studies
          </a> */}
          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-zoho-blue transition-colors">
            More <ChevronDown size={14} />
            <div className="absolute top-full right-0 bg-white shadow-2xl py-4 flex flex-col w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-lg border border-slate-50 mt-2">
              <a
                href="#contact"
                className="px-6 py-3 hover:bg-slate-50 text-slate-600 transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="px-6 py-3 hover:bg-slate-50 text-slate-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="px-6 py-3 hover:bg-slate-50 text-slate-600 transition-colors"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
