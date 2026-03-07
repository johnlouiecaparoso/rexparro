import { Phone, Mail, MapPin, Globe, Users } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const tabs = ["About", "Research Outputs", "Funded Research", "Teaching & Supervision"];

  return (
    <aside
      className="w-full md:w-64 shrink-0 flex flex-col h-full"
      style={{ backgroundColor: "#25671E" }}
    >
      {/* Profile Section */}
      <div className="p-5 text-white">
        {/* Avatar */}
        <div className="mb-4 flex justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/30">
            <img
              src="src/image/img.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Role */}
        <p className="text-xs text-white/70 uppercase tracking-wide text-center mb-1">Instructor I</p>

        {/* Name */}
        <h1 className="text-white text-center mb-1" style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.3 }}>
          Rex Parro
        </h1>

        {/* ORCID */}
        <a
          href="https://orcid.org/0000-0002-7962-278X"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-white/70 hover:text-white transition-colors mb-4"
          style={{ fontSize: "11px" }}
        >
          <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" alt="ORCID" className="w-3.5 h-3.5" />
          <span>0000-0002-7962-278X</span>
        </a>

        {/* Divider */}
        <hr className="border-white/20 mb-4" />

        {/* Title & Dept */}
        <div className="mb-4">
          <div className="flex items-start gap-2 mb-2">
            <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#48A111" }}></div>
            <div>
              <p className="text-white text-sm">Instructor I</p>
              <p className="text-white/70 text-xs">ESC – Environmental Sustainability and Management</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4">
          <a href="tel:+61000000000" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs">
            <Phone size={13} className="shrink-0" />
            <span>+63 956 188 1044</span>
          </a>
          <a href="mailto:alex@university.edu" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs">
            <Mail size={13} className="shrink-0" />
            <span>osfft@carsu.edu.ph</span>
          </a>
          <div className="flex items-center gap-2 text-white/80 text-xs">
            <MapPin size={13} className="shrink-0" />
            <span>N78 4.13, Nathan Campus</span>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-2 mb-4">
          <a href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs">
            <Users size={13} className="shrink-0" />
            <span className="underline">Collaboration Network</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs">
            <Globe size={13} className="shrink-0" />
            <span className="underline">Australian Rivers Institute ↗</span>
          </a>
        </div>

      </div>

      {/* Navigation Tabs (mobile-friendly horizontal, desktop vertical) */}
      <nav className="mt-2 flex-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`w-full text-left px-5 py-3 text-sm transition-colors border-l-4 ${activeTab === tab
              ? "border-white bg-white/10 text-white font-medium"
              : "border-transparent text-white/70 hover:text-white hover:bg-white/5"
              }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </aside>
  );
}
