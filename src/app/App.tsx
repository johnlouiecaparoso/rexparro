import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { AboutTab } from "./components/AboutTab";
import { ResearchOutputsTab } from "./components/ResearchOutputsTab";
import { FundedResearchTab } from "./components/FundedResearchTab";
import { TeachingTab } from "./components/TeachingTab";

// New modern color palette
const TEAL_PRIMARY = "#0D9488";
const TEAL_DARK = "#0F766E";
const AMBER_ACCENT = "#F59E0B";

type Tab = "About" | "Research Outputs" | "Funded Research" | "Teaching & Supervision";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("About");
  const [isTabChanging, setIsTabChanging] = useState(false);

  const handleTabChange = (tab: Tab) => {
    if (tab !== activeTab) {
      setIsTabChanging(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsTabChanging(false);
      }, 150);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return <AboutTab />;
      case "Research Outputs":
        return <ResearchOutputsTab />;
      case "Funded Research":
        return <FundedResearchTab />;
      case "Teaching & Supervision":
        return <TeachingTab />;
      default:
        return <AboutTab />;
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex flex-col">

      {/* Main layout */}
      <div className="flex-1 w-full flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:self-stretch">
          <Sidebar activeTab={activeTab} onTabChange={(tab) => handleTabChange(tab as Tab)} />
        </div>

        {/* Main Content */}
        <main className="flex-1 bg-white/80 backdrop-blur-sm overflow-hidden">
          {/* Tab navigation (desktop top bar) */}
          <div className="hidden md:flex border-b border-gray-100 px-6 pt-4 gap-1">
            {(["About", "Research Outputs", "Funded Research", "Teaching & Supervision"] as Tab[]).map((tab, index) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className="px-4 py-3 text-xs uppercase tracking-wider transition-all duration-300 border-b-2 -mb-px relative group"
                style={{
                  color: activeTab === tab ? TEAL_PRIMARY : "#6B7280",
                  borderBottomColor: activeTab === tab ? TEAL_PRIMARY : "transparent",
                  fontWeight: activeTab === tab ? 600 : 400,
                  letterSpacing: "0.06em",
                  fontSize: "11px",
                }}
              >
                {tab}
                {/* Animated underline */}
                <span 
                  className="absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 origin-left"
                  style={{ 
                    backgroundColor: activeTab === tab ? TEAL_PRIMARY : 'transparent',
                    transform: activeTab === tab ? 'scaleX(1)' : 'scaleX(0)'
                  }}
                />
                {/* Hover effect */}
                <span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400/50 transition-transform duration-300 origin-left"
                  style={{ transform: 'scaleX(0)' }}
                />
              </button>
            ))}
          </div>

          {/* Content area with animation */}
          <div className="p-6 sm:p-8">
            <div 
              className={`transition-all duration-300 ease-out ${isTabChanging ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
              key={activeTab}
            >
              {renderContent()}
            </div>
          </div>
        </main>
      </div>


    </div>
  );
}
