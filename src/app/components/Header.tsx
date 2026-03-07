import { ChevronLeft } from "lucide-react";

const GREEN_DARK = "#25671E";

export function Header() {
  return (
    <header
      className="w-full border-b border-gray-200 bg-white sticky top-0 z-50"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded"
            style={{ backgroundColor: GREEN_DARK }}
          >
            <span className="text-white text-xs font-bold tracking-wide">UNIVERSITY</span>
            <div className="w-px h-4 bg-white/30"></div>
            <span className="text-white text-xs">50</span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {["About", "Research Outputs", "Partner Finder", "Teaching & Supervision"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-gray-600 hover:text-gray-900 transition-colors uppercase tracking-wide"
              style={{ fontSize: "11px", letterSpacing: "0.05em" }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Back link */}
        <a
          href="#"
          className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ChevronLeft size={13} />
          <span>all experts</span>
        </a>
      </div>
    </header>
  );
}
