import React from "react";

export const ZohoLogo = ({ className = "h-8" }: { className?: string }) => (
  <svg 
    viewBox="0 0 541 210" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Red Square */}
    <rect x="5" y="45" width="135" height="135" rx="15" stroke="#ED1C24" strokeWidth="25" transform="rotate(-5 72.5 112.5)" />
    {/* Green Square */}
    <rect x="135" y="15" width="135" height="135" rx="15" stroke="#00A651" strokeWidth="25" transform="rotate(10 202.5 82.5)" />
    {/* Blue Square */}
    <rect x="275" y="35" width="135" height="135" rx="15" stroke="#226DB4" strokeWidth="25" transform="rotate(-15 342.5 102.5)" />
    {/* Yellow Square */}
    <rect x="395" y="45" width="135" height="135" rx="15" stroke="#FBB03B" strokeWidth="25" transform="rotate(5 462.5 112.5)" />
    
    <text x="270" y="195" textAnchor="middle" fill="black" fontStyle="bold" fontSize="35" fontFamily="sans-serif" letterSpacing="50">ZOHO</text>
  </svg>
);
