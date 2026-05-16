import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id="contact">
      <div className="w-full mx-auto px-12 py-4 bg-zoho-gray text-white font-noto-sans text-[18px] leading-[1.8]">
        <div className="flex lg:flex-row flex-col gap-0 py-8">
          {/* Left Section - Contact Us */}
          <div className="lg:w-1/2 text-center">
            <h3 className="text-[34px] font-medium mb-12 font-montserrat">
              Contact Us
            </h3>
            <div className="mb-12">
              <div className="flex items-center justify-center lg:justify-start gap-6 mb-6">
                <Phone className="text-zoho-blue" size={22.5} />
                <span className=" font-light">+91-9567443377</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <Mail className="text-zoho-blue" size={22.5} />
                <span className=" font-light lowercase">
                  contact@ohosolutions.in
                </span>
              </div>
            </div>
            <Link
              to="/contact-us"
              className="bg-zoho-blue  text-white px-10 py-2.5 rounded-md  text-sm hover:bg-zoho-blue-bright transition-colors "
            >
              Contact Us
            </Link>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-white/20 mx-8"></div>

          {/* Right Section - Feedback */}
          <div className="flex flex-col lg:flex-row items-center gap-4  lg:text-left mt-12 lg:mt-0">
            <div>
              <h3 className="font-medium text-2xl mb-4 text-center font-montserrat">
                FEEDBACK
              </h3>
              <div className="w-full mb-6 ">
                <p className="w-[85%] text-center mx-auto">
                  We Like to hear what your feedbacks.
                </p>
                <Phone className="text-zoho-blue mx-auto mt-6" size={22.5} />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <Link
                to="contact-us"
                className="bg-zoho-blue  text-white px-12 py-3 rounded-lg text-sm hover:bg-zoho-blue-bright transition-colors"
              >
                Submit a ticket
              </Link>
              <Link
                to="contact-us"
                className="bg-zoho-blue  text-white px-12 py-3 rounded-lg text-sm hover:bg-zoho-blue-bright transition-colors"
              >
                Avail Free Trail
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center ">
        <p className="text-black text-xs">
          © {new Date().getFullYear()} CloudVandexa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
