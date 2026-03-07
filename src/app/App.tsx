import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { AboutTab } from "./components/AboutTab";
import { ResearchOutputsTab } from "./components/ResearchOutputsTab";
import { FundedResearchTab } from "./components/FundedResearchTab";
import { TeachingTab } from "./components/TeachingTab";

const GREEN_BRIGHT = "#48A111";

type Tab = "About" | "Research Outputs" | "Funded Research" | "Teaching & Supervision";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("About");

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
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Main layout */}
      <div className="flex-1 w-full flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:self-stretch">
          <Sidebar activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab as Tab)} />
        </div>

        {/* Main Content */}
        <main className="flex-1 bg-white overflow-hidden">
          {/* Tab navigation (desktop top bar) */}
          <div className="hidden md:flex border-b border-gray-100 px-6 pt-4 gap-1">
            {(["About", "Research Outputs", "Funded Research", "Teaching & Supervision"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 text-xs uppercase tracking-wider transition-colors border-b-2 -mb-px"
                style={{
                  color: activeTab === tab ? GREEN_BRIGHT : "#6B7280",
                  borderBottomColor: activeTab === tab ? GREEN_BRIGHT : "transparent",
                  fontWeight: activeTab === tab ? 600 : 400,
                  letterSpacing: "0.06em",
                  fontSize: "11px",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="p-6 sm:p-8">
            {renderContent()}
          </div>
        </main>
      </div>


    </div>
  );
}
