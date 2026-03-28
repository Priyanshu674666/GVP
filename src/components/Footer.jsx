import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/Grove Vista Properties.png";

const footerLinks = {
  SERVICES: ["Leasing", "Mortgages", "Snagging & Inspection", "Holiday Homes"],
  ABOUT: ["About Us", "Careers", "Our Awards", "Blog", "Contact"],
};

const socialLinks = [
  {
    name: "Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073C24 5.404 18.627 0 12 0 5.373 0 0 5.404 0 12.073c0 6.03 4.388 11.025 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.098 24 18.103 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Newsletter Signup (Left Column, Span 5) */}
          <div className="md:col-span-5 pr-4 lg:pr-10">
            <h3 className="text-[20px] font-bold tracking-tight mb-2">Stay in the loop</h3>
            <p className="text-gray-300 text-[13px] mb-8 font-medium">Sign up to our weekly newsletter for market updates</p>
            
            <div className="flex items-center gap-4 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Email Address*" 
                className="flex-1 bg-white text-black px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-sm"
              />
              <button 
                className="w-11 h-11 shrink-0 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:border-white shadow-sm"
                aria-label="Subscribe"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Grid (Right Columns, Span 6) */}
          <div className="md:col-span-6 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-[15px] font-bold tracking-tight mb-5">{category}</h3>
                <ul className="space-y-3.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors text-[13px] font-medium tracking-wide">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Direct Contact Info */}
            <div>
              <h3 className="text-[15px] font-bold tracking-tight mb-5 uppercase">Contact Us</h3>
              <ul className="space-y-4">
                <li className="text-gray-300 text-[13px] font-medium tracking-wide flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919999999999" className="hover:text-white transition-colors">+91 99XXXXXXXX</a>
                </li>
                <li className="text-gray-300 text-[13px] font-medium tracking-wide flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@grovevista.com" className="hover:text-white transition-colors">info@grovevista.com</a>
                </li>
                <li className="text-gray-300 text-[13px] font-medium tracking-wide flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="leading-relaxed">Business Tower, Andheri East<br/>Mumbai – 400069</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start lg:items-end gap-10">
          
          {/* Left: Logo & Legal */}
          <div className="max-w-3xl border-t border-gray-800 pt-8 mt-4 md:mt-0 w-full md:border-t-0 md:pt-0">
            {/* Logo */}
            <div className="mb-6 flex items-center gap-3">
              
<span className="text-[20px] font-bold tracking-tight text-white uppercase">
  Grove Vista Properties
</span>        </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-[6px] text-white text-[13px] mb-1 font-semibold tracking-wide">
              
              
              <a href="#" className="hover:underline">Terms & Conditions</a>
              <span className="text-gray-500">|</span>
              <a href="#" className="hover:underline">Privacy & Cookies</a>
            </div>
            
            <p className="text-white text-[13px] mb-7 font-semibold tracking-wide">
              Copyright © Grove Vista Properties
            </p>
            
            <p className="text-gray-500 text-[11.5px] leading-relaxed max-w-[800px] font-medium">
Grove Vista Properties Real Estate Broker is a company registered in Mumbai, Maharashtra, India (Registration No. XXXXXXXX), 36th Floors, Business Tower, Andheri East, Mumbai – 400069. We are regulated under the Real Estate (Regulation and Development) Act (RERA) with registration number XXXXXXXX.            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-6 md:pb-6">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href="#"
                aria-label={s.name}
                className="text-white hover:text-gray-400 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;