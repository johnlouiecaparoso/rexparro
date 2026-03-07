import { useState } from "react";
import { Search } from "lucide-react";

const GREEN_DARK = "#25671E";
const GREEN_BRIGHT = "#48A111";

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
      <div className="relative mb-4">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded outline-none focus:border-green-500 transition-colors"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          className="p-4 rounded border"
          style={{ borderColor: GREEN_DARK + "33", backgroundColor: GREEN_DARK + "08" }}
        >
          <p className="text-xs text-gray-500 mb-1">Total Projects</p>
          <p className="text-2xl" style={{ color: GREEN_DARK, fontWeight: 700 }}>{filtered.length}</p>
        </div>
        <div
          className="p-4 rounded border"
          style={{ borderColor: GREEN_BRIGHT + "33", backgroundColor: GREEN_BRIGHT + "08" }}
        >
          <p className="text-xs text-gray-500 mb-1">Total Funding</p>
          <p className="text-2xl" style={{ color: GREEN_DARK, fontWeight: 700 }}>
            ${(totalFunding / 1000000).toFixed(2)}M
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-0">
        {filtered.map((project, idx) => (
          <div
            key={project.id}
            className={`py-5 ${idx < filtered.length - 1 ? "border-b border-gray-100" : ""}`}
          >
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: GREEN_BRIGHT, fontSize: "10px", fontWeight: 600 }}
            >
              {project.type}
            </p>
            <p className="text-xs text-gray-400 mb-1">{project.period}</p>
            <a
              href="#"
              className="text-sm block mb-1 hover:underline"
              style={{ color: GREEN_DARK, fontWeight: 500 }}
            >
              {project.title}
            </a>
            <p className="text-xs text-gray-500 mb-1">{project.funder}</p>
            <div className="flex items-center gap-4 mt-2">
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{ backgroundColor: GREEN_DARK + "14", color: GREEN_DARK }}
              >
                {project.role}
              </span>
              <span className="text-xs text-gray-600 font-medium">{project.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
