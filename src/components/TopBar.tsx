import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  MessageSquare
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const TopBar = () => {
  const { pathname } = useLocation();

  // Set background based on route
  const bgColor = pathname === '/' ? 'bg-zoho-blue' : 'bg-zoho-blue-light';
  const textColor = pathname === '/' ? 'text-white' : 'text-black';

  return (
    <div className={`${bgColor} ${textColor} py-3 hidden lg:block`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[13px]">
        <div className="flex items-center font-noto-sans">
          <a
            href="mailto:info@cloudvandexa.com"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity border-dotted border-r-2 pr-6"
          >
            <Mail size={13} className="fill-white/20" /> info@cloudvandexa.com
          </a>
          <a
            href="tel:+919217757952"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity pl-6"
          >
            <Phone size={13} className="fill-white/20" /> 9217757952
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="https://in.linkedin.com/company/cloudvandex"
            className="cursor-pointer hover:opacity-70 transition-opacity"
          >
            <Linkedin size={14} />
          </Link>
          {/* <Instagram
            size={14}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          />
          <Facebook
            size={14}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          />
          <Youtube
            size={14}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          />
          <MessageSquare
            size={14}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          /> */}
        </div>
      </div>
    </div>
  );
};
