import React, { useState, useEffect } from 'react';
import { ZohoLogo } from './ZohoLogo';
import cloud_vandexa_logo from '../assets/cloud_vandexa_logo.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Linkedin, Mail, Menu, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const menuVariants: any = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.15, ease: 'easeInOut' }
    },
    open: {
      height: '240px',
      opacity: 1,
      transition: { duration: 0.15, ease: 'easeInOut' }
    }
  };

  return (
    <nav
      className={`w-full bg-white transition-all z-50 duration-300 ${isScrolled ? 'fixed top-0 shadow-md' : 'relative'}`}
    >
      <div className="max-w-4xl md:max-w-7xl mx-auto px-1 md:px-4 flex flex-col lg:flex-row justify-between items-center h-auto lg:h-28 py-3 lg:py-0">
        <div className="flex w-full lg:w-auto items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="flex items-center h-16">
              <img
                src={cloud_vandexa_logo}
                alt="CloudVandexa Logo"
                className="w-30 sm:w-36 md:w-52 lg:w-72 object-contain"
              />
            </div>
            <div className="h-10 border-r-2 border-zoho-blue"></div>

            <div className="flex items-center border border-slate-100 rounded-xl bg-slate-50 overflow-hidden shadow-sm md:ml-8 h-11 scale-[0.7] md:scale-100">
              <div className="px-1.5 md:px-3 bg-white flex items-center justify-center">
                <ZohoLogo className="h-4 md:h-6" />
              </div>
              <div className="bg-zoho-blue text-white px-1.5 md:px-3 py-2 flex flex-col justify-center h-full text-[8px] md:text-[10px] font-thin leading-[0.9] ">
                <span className="text-[9px] md:text-[11px] font-light">
                  Zoho
                </span>
                <span>
                  <span className="font-light">Re</span>
                  <span>seller</span>
                </span>
                <span>
                  <span className="font-extralight">P</span>
                  <span>artner </span>
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden flex flex-col items-center justify-center h-11 w-11 rounded-xl "
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            {/* {!menuOpen ?
              <Menu
                size={20}
                className="absolute text-zoho-blue hover:text-zoho-blue-bright"
              />
            : <X
                size={20}
                className="absolute text-zoho-blue hover:text-zoho-blue-bright"
              />
            } */}

            <span
              className={`border-t-3 border-zoho-blue mb-3 block w-6 sm:w-8 ${menuOpen ? 'rotate-45 translate-y-1.75' : ''} transition-all duration-150 ease-in-out`}
            ></span>
            <span
              className={`border-t-3 border-zoho-blue block w-6 sm:w-8 ${menuOpen ? '-rotate-45 -translate-y-1.75' : ''}  transition-all duration-150 ease-in-out`}
            ></span>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-black font-noto-sans text-[15px]">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition-colors px-3 ${isActive ? 'text-zoho-blue-bright' : 'text-black hover:text-zoho-blue-bright'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors px-3 ${isActive ? 'text-zoho-blue-bright' : 'text-black hover:text-zoho-blue-bright'}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `transition-colors px-3 ${isActive ? 'text-zoho-blue-bright' : 'text-black hover:text-zoho-blue-bright'}`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/privacy-policy"
            className={({ isActive }) =>
              `transition-colors px-3 ${isActive ? 'text-zoho-blue-bright' : 'text-black hover:text-zoho-blue-bright'}`
            }
          >
            Privacy Policy
          </NavLink>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={`z-40 border-t-4 border-zoho-blue bg-white absolute w-full lg:hidden shadow-lg overflow-hidden`}
          >
            <div className=" mx-auto flex h-full max-w-4xl flex-col px-6 py-5">
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex gap-8 flex-col pb-1 mb-2">
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      `text-sm font-noto-sans transition ${isActive ? 'text-zoho-blue-bright' : 'text-slate-900 hover:text-zoho-blue-bright'}`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-sm font-noto-sans transition ${isActive ? 'text-zoho-blue-bright' : 'text-slate-900 hover:text-zoho-blue-bright'}`
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `text-sm font-noto-sans transition ${isActive ? 'text-zoho-blue-bright' : 'text-slate-900 hover:text-zoho-blue-bright'}`
                    }
                  >
                    Services
                  </NavLink>

                  <NavLink
                    to="/privacy-policy"
                    className={({ isActive }) =>
                      `text-sm font-noto-sans transition ${isActive ? 'text-zoho-blue-bright' : 'text-slate-900 hover:text-zoho-blue-bright'}`
                    }
                  >
                    Privacy Policy
                  </NavLink>
                </div>
                <div className="border-t border-zoho-black w-screen -ml-6"></div>
                <div className="flex flex-row-reverse pt-2  justify-between items-center text-[13px]">
                  <div className="flex gap-2 items-center font-noto-sans">
                    <a
                      href="mailto:info@cloudvandexa.com"
                      className="flex items-center gap-2 hover:opacity-80 transition-opacity border-dotted border-r-2 pr-2"
                    >
                      <Mail size={13} className="fill-white/20" />
                    </a>
                    <a
                      href="tel:+918796390450"
                      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                      <Phone size={13} className="fill-white/20" />
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      to="https://in.linkedin.com/company/cloudvandex"
                      className="cursor-pointer hover:opacity-70 transition-opacity"
                    >
                      <Linkedin size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
