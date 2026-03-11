import React from "react";
import { ChevronLeft } from "lucide-react";

// New modern color palette
const TEAL_DARK = "#0F766E";
const TEAL_PRIMARY = "#0D9488";

export function Header() {
  return (
    <header
      className="w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-transform hover:scale-105"
            style={{ backgroundColor: TEAL_DARK }}
          >
            <span className="text-white text-xs font-bold tracking-wide">CSU</span>
            <div className="w-px h-4 bg-white/30"></div>
            <span className="text-white text-xs">Research</span>
          </div>
        </div>

        {/* Nav Links - Enhanced */}
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Research Outputs", "Partner Finder", "Teaching & Supervision"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-gray-600 hover:text-teal-600 transition-all duration-300 uppercase tracking-wide relative group"
              style={{ fontSize: "11px", letterSpacing: "0.05em" }}
            >
              {item}
              {/* Underline effect */}
              <span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
            </a>
          ))}
        </nav>

        {/* Back link - Enhanced */}
        <a
          href="#"
          className="flex items-center gap-1 text-xs text-gray-500 hover:text-teal-600 transition-colors group"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>all experts</span>
        </a>
      </div>
    </header>
  );
}

