import {
  Cloud,
  Trophy,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import cloudvandexaLogo from '../assets/cloud_vandexa_logo.png';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#071426] text-white">
      <div className="max-w-330 mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="flex items-center gap-4">
                {/* <img
                  src={cloudvandexaLogo}
                  alt="CloudVandexa Logo"
                  className="h-32 w-64 object-contain"
                /> */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zoho-blue/10 text-zoho-blue">
                  <Cloud size={22} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-zoho-blue/80 font-semibold">
                    CLOUDVANDEXA
                  </p>
                  <p className="text-xs font-medium text-slate-300">
                    From Cloud to Code We’ve Got You Covered
                  </p>
                </div>
              </div>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <Trophy size={16} />
                Zoho Reseller Partner
              </Link>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              CloudVandexa is your trusted Zoho Reseller Partner for
              implementation, customization, and reselling across all industries
              in India.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
                aria-label="X"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a> */}
              <a
                href="https://wa.me/918796390450"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-6 text-xl font-semibold font-montserrat">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Zoho Implementation
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Customization
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Integration Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Zoho Reselling
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Data Migration
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  AMC & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Zoho Products Column */}
          <div>
            <h3 className="mb-6 text-xl font-semibold font-montserrat">
              Zoho Products
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="transition hover:text-white">Zoho One</li>
              <li className="transition hover:text-white">Zoho CRM</li>
              <li className="transition hover:text-white">Zoho Books</li>
              <li className="transition hover:text-white">Zoho Creator</li>
              <li className="transition hover:text-white">Zoho People</li>
              <li className="transition hover:text-white">All 45+ Products</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-6 text-xl font-semibold font-montserrat">
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li>
                  <a
                    href="tel:+918796390450"
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <Phone className="text-zoho-blue" size={18} />
                    <span>+91 8796 390450</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@cloudvandexa.com"
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <Mail className="text-zoho-blue" size={18} />
                    <span>info@cloudvandexa.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/918796390450"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <MessageCircle className="text-zoho-blue" size={18} />
                    <span>WhatsApp Chat</span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="text-zoho-blue" size={18} />
                  <span>India</span>
                </li>
              </ul>
            </div>
            <Link
              to="/contact-us"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-zoho-blue px-8 py-3 text-sm font-medium text-white shadow-lg shadow-zoho-blue/20 transition hover:bg-zoho-blue-bright"
            >
              Free Consultation →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#06111f] py-6">
        <div className="mx-auto flex max-w-330 flex-col gap-4 px-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} CloudVandexa. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/about" className="transition hover:text-white">
              About
            </Link>
            <Link to="/services" className="transition hover:text-white">
              Services
            </Link>
            <Link to="/contact-us" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
