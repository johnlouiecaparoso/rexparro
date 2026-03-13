import React from "react";
import { Phone, Mail } from "lucide-react";

// Enhanced green palette
const TEAL_PRIMARY = "#16A34A";
const TEAL_DARK = "#166534";
const TEAL_LIGHT = "#22C55E";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const tabs = ["About", "Research Outputs", "Funded Research", "Teaching & Supervision"];

  return (
    <aside
      className="w-full md:w-80 shrink-0 flex flex-col h-full"
      style={{ 
        background: `linear-gradient(180deg, ${TEAL_DARK} 0%, ${TEAL_PRIMARY} 50%, ${TEAL_LIGHT} 100%)`
      }}
    >
      {/* Profile Section */}
      <div className="p-5 text-white">
        {/* Avatar with glow effect */}
        <div className="mb-4 flex justify-center">
          <div className="relative">
            <div 
              className="w-28 h-28 rounded-full overflow-hidden border-3 border-white/30 shadow-lg"
              style={{ boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)' }}
            >
              <img
                src="/image/img.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div 
              className="absolute -inset-2 rounded-full border-2 border-white/20 animate-pulse"
            />
          </div>
        </div>

        {/* Role */}
        <p className="text-xs text-white/80 uppercase tracking-widest text-center mb-1 font-medium">Instructor I</p>

        {/* Name - Enhanced */}
        <h1 className="text-white text-center mb-2" style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.3, textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          Rex Parro
        </h1>

        {/* ORCID - Enhanced with hover */}
        <a
          href="https://orcid.org/0000-0002-7962-278X"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-all duration-300 mb-4 hover:scale-105"
          style={{ fontSize: "11px" }}
        >
          <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" alt="ORCID" className="w-4 h-4" />
          <span className="link-underline">0000-0002-7962-278X</span>
        </a>

        {/* Divider */}
        <hr className="border-white/20 mb-4" />

        {/* Title & Dept - Enhanced */}
        <div className="mb-4">
          <div className="flex items-start gap-3 mb-2 p-2.5 rounded-lg bg-white/10 backdrop-blur-sm">
            <div className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 animate-pulse" style={{ backgroundColor: "#F59E0B" }}></div>
            <div>
              <p className="text-white text-sm font-semibold">Instructor I</p>
              <p className="text-white/70 text-xs">ESC – Environmental Sustainability and Management</p>
            </div>
          </div>
        </div>

        {/* Contact Info - Enhanced */}
        <div className="space-y-2.5 mb-4">
          <a 
            href="tel:+639561881044" 
            className="flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 text-sm p-2 rounded-lg hover:bg-white/10"
          >
            <Phone size={16} className="shrink-0" />
            <span>+63 956 188 1044</span>
          </a>
          <a 
            href="mailto:osfft@carsu.edu.ph" 
            className="flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 text-sm p-2 rounded-lg hover:bg-white/10"
          >
            <Mail size={16} className="shrink-0" />
            <span>osfft@carsu.edu.ph</span>
          </a>
        </div>

      </div>

      {/* Navigation Tabs - Enhanced */}
      <nav className="mt-1 flex-1 pb-2">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`w-full text-left px-5 py-3 text-sm transition-all duration-300 border-l-4 group relative overflow-hidden ${
              activeTab === tab
                ? "border-white bg-white/20 text-white font-semibold"
                : "border-transparent text-white/70 hover:text-white hover:bg-white/10"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Background slide effect */}
            <span 
              className={`absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 transition-transform duration-300 origin-left ${
                activeTab === tab ? 'translate-x-0' : '-translate-x-full'
              }`}
            />
            <span className="relative flex items-center gap-2">
              {tab}
              {/* Arrow indicator */}
              <span 
                className={`ml-auto transition-all duration-300 ${activeTab === tab ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
              >
                →
              </span>
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

