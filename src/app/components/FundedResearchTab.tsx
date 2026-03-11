import React, { useState } from "react";
import { Search, DollarSign, Briefcase } from "lucide-react";

// New modern color palette
const TEAL_PRIMARY = "#0D9488";
const TEAL_DARK = "#0F766E";
const AMBER_ACCENT = "#F59E0B";

const projects = [
  {
    id: 1,
    title: "Blue Carbon Coastal Wetland Ecosystem Accounting – Sunshine Coast",
    funder: "Australian Government Department of Energy, Climate and the Environment",
    amount: "$245,000",
    period: "Jan 2021 – Dec 2022",
    role: "Chief Investigator",
    type: "GOVERNMENT GRANT",
  },
  {
    id: 2,
    title: "Ocean Accounting, Disclosures and Social Capital in the Blue Economy",
    funder: "Blue Economy CRC",
    amount: "$180,000",
    period: "Feb 2022 – Jan 2025",
    role: "Chief Investigator",
    type: "INDUSTRY GRANT",
  },
  {
    id: 3,
    title: "Murray–Darling Basin Water for Environment: Birdwatcher Visitation Study",
    funder: "Murray–Darling Basin Authority",
    amount: "$95,000",
    period: "Mar 2019 – Oct 2020",
    role: "Chief Investigator",
    type: "GOVERNMENT GRANT",
  },
  {
    id: 4,
    title: "Tropical Water Quality Hub – Environmental Economic Accounting",
    funder: "National Environmental Science Program",
    amount: "$320,000",
    period: "Jul 2018 – Jun 2022",
    role: "Associate Investigator",
    type: "GOVERNMENT GRANT",
  },
  {
    id: 5,
    title: "Northern Australia Environmental Resources Hub",
    funder: "National Environmental Science Program",
    amount: "$210,000",
    period: "Jul 2018 – Jun 2022",
    role: "Associate Investigator",
    type: "GOVERNMENT GRANT",
  },
  {
    id: 6,
    title: "Healthy Land & Water – Ecosystem Services Valuation",
    funder: "Healthy Land & Water Ltd",
    amount: "$75,000",
    period: "Jan 2017 – Dec 2018",
    role: "Chief Investigator",
    type: "INDUSTRY GRANT",
  },
  {
    id: 7,
    title: "South-East Queensland Council of Mayors – Water Ecosystem Services",
    funder: "SEQ Council of Mayors",
    amount: "$60,000",
    period: "Jun 2016 – May 2017",
    role: "Chief Investigator",
    type: "LOCAL GOVERNMENT",
  },
  {
    id: 8,
    title: "Seqwater Biodiversity Offset Assessment",
    funder: "Seqwater",
    amount: "$42,000",
    period: "Sep 2015 – Feb 2016",
    role: "Chief Investigator",
    type: "INDUSTRY GRANT",
  },
];

export function FundedResearchTab() {
  const [search, setSearch] = useState("");

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.funder.toLowerCase().includes(search.toLowerCase())
  );

  const totalFunding = filtered.reduce((sum, p) => {
    const amt = parseInt(p.amount.replace(/[$,]/g, ""));
    return sum + amt;
  }, 0);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all"
        />
      </div>

      {/* Stats - Enhanced Cards */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div
          className="enhanced-card p-5 hover-lift animate-fade-in-up"
          style={{ 
            borderLeft: `4px solid ${TEAL_PRIMARY}`,
            animationDelay: '0ms',
            opacity: 0,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: TEAL_PRIMARY + '15' }}
            >
              <Briefcase size={16} style={{ color: TEAL_PRIMARY }} />
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Total Projects</p>
          </div>
          <p className="text-3xl" style={{ color: TEAL_DARK, fontWeight: 700 }}>{filtered.length}</p>
        </div>
        <div
          className="enhanced-card p-5 hover-lift animate-fade-in-up"
          style={{ 
            borderLeft: `4px solid ${AMBER_ACCENT}`,
            animationDelay: '100ms',
            opacity: 0,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: AMBER_ACCENT + '15' }}
            >
              <DollarSign size={16} style={{ color: AMBER_ACCENT }} />
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Total Funding</p>
          </div>
          <p className="text-3xl" style={{ color: TEAL_DARK, fontWeight: 700 }}>
            ${(totalFunding / 1000000).toFixed(2)}M
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filtered.map((project, idx) => (
          <div
            key={project.id}
            className="enhanced-card p-5 hover-lift animate-fade-in-up"
            style={{ 
              animationDelay: `${200 + idx * 100}ms`,
              opacity: 0,
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <span
                className="text-xs uppercase tracking-widest px-3 py-1 rounded-full font-semibold"
                style={{ 
                  color: project.type.includes('GOVERNMENT') ? TEAL_PRIMARY : AMBER_ACCENT, 
                  backgroundColor: project.type.includes('GOVERNMENT') ? TEAL_PRIMARY + '12' : AMBER_ACCENT + '12',
                  fontSize: "10px", 
                  fontWeight: 600 
                }}
              >
                {project.type}
              </span>
              <span className="text-xs text-gray-400">{project.period}</span>
            </div>
            
            <a
              href="#"
              className="text-base font-semibold block mb-2 hover:underline transition-colors group"
              style={{ color: TEAL_DARK }}
            >
              {project.title}
            </a>
            
            <p className="text-sm text-gray-500 mb-3">{project.funder}</p>
            
            <div className="flex items-center gap-4">
              <span
                className="text-xs px-3 py-1.5 rounded-lg font-medium"
                style={{ 
                  backgroundColor: TEAL_PRIMARY + '12', 
                  color: TEAL_DARK 
                }}
              >
                {project.role}
              </span>
              <span className="text-sm font-bold" style={{ color: TEAL_PRIMARY }}>
                {project.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

