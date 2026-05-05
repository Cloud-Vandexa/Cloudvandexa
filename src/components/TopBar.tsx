import React from "react";
import { Mail, Phone, Linkedin, Instagram, Facebook, Youtube, MessageSquare } from "lucide-react";

export const TopBar = () => (
  <div className="bg-zoho-blue text-white py-3 lg:block hidden">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[13px]">
      <div className="flex items-center space-x-8">
        <a href="mailto:contact@cloudvandexa.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Mail size={14} className="fill-white/20" /> contact@cloudvandexa.com
        </a>
        <a href="tel:+919567443377" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Phone size={14} className="fill-white/20" /> 9567443377
        </a>
      </div>
      <div className="flex items-center space-x-5">
        <Linkedin size={14} className="cursor-pointer hover:opacity-70 transition-opacity" />
        <Instagram size={14} className="cursor-pointer hover:opacity-70 transition-opacity" />
        <Facebook size={14} className="cursor-pointer hover:opacity-70 transition-opacity" />
        <Youtube size={14} className="cursor-pointer hover:opacity-70 transition-opacity" />
        <MessageSquare size={14} className="cursor-pointer hover:opacity-70 transition-opacity" />
      </div>
    </div>
  </div>
);
