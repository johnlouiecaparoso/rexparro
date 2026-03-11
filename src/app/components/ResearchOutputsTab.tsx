import React, { useState } from "react";
import { Search, ChevronDown, BookOpen, ExternalLink } from "lucide-react";

// New modern color palette
const TEAL_PRIMARY = "#0D9488";
const TEAL_DARK = "#0F766E";
const AMBER_ACCENT = "#F59E0B";

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  date: string;
  type: string;
  doi?: string;
  identifiers?: string[];
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Principal Component Analysis and Machine Learning for Classification of Coffee Yield",
    authors: "Pitogo, V.A.; Abalorio, C.C.; Daguil, R.C.; Cuarez, R.O.; Solis, S.T.; Parro, R.G.",
    journal: "Proceedings of Tenth International Congress on Information and Communication Technology: ICICT. Lecture Notes in Networks and Systems (1412)",
    date: "2025",
    type: "Journal article",
    doi: "10.1007/978-981-96-6429-0_44",
    identifiers: ["WOSUID: INSPEC:27495804"],
  },
  {
    id: 2,
    title: "Post-Processing Constraints on Converting Calamansi Wastes into Marketable Products in the Philippines",
    authors: "Christian Anthony C. Agutaya; Rex G. Parro; Randy A. Joco; Noelyn P. Roxas",
    journal: "Asian Journal of Agricultural Extension, Economics & Sociology",
    date: "2025-12-12",
    type: "Journal article",
    doi: "10.9734/ajaees/2025/v43i122863",
  },
  {
    id: 3,
    title: "Sustainable Rice Systems in Rural Communities: Integrating Demographic, Agricultural, Consumption, and Waste Management Insights",
    authors: "Rex G. Parro; Michelle V. Japitana; Stephanie Mae S. Albores; Lorie Cris S. Asube",
    journal: "Proceedings of International Exchange and Innovation Conference on Engineering & Sciences (IEICES)",
    date: "2025-10-30",
    type: "Journal article",
    doi: "10.5109/7395736",
    identifiers: ["ISSN: 2434-1436"],
  },
  {
    id: 4,
    title: "Synergistic Paradigms: Developing R&D and Extension Framework for Sustainable Agrifood Systems",
    authors: "Michelle V. Japitana; Rex G. Parro; Stephanie Mae S. Albores; Lorie Cris S. Asube",
    journal: "Proceedings of International Exchange and Innovation Conference on Engineering & Sciences (IEICES)",
    date: "2024",
    type: "Journal article",
    doi: "10.5109/7323327",
    identifiers: ["WOSUID: RC:149119024_S24"],
  },
];

const filterTypes = ["All Types", "Journal Article", "Conference Paper", "Book Chapter", "Grant Doctoral Supervisory"];

export function ResearchOutputsTab() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Types");
  const [showFilter, setShowFilter] = useState(false);

  const filtered = publications.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.authors.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "All Types" ||
      p.type.toLowerCase().includes(filter.toLowerCase());
    return matchSearch && matchFilter;
  });

  return (
    <div>
      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 px-4 py-3 text-sm border border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-all bg-white min-w-[160px] justify-between"
          >
            <span className="text-gray-600">{filter}</span>
            <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${showFilter ? 'rotate-180' : ''}`} />
          </button>
          {showFilter && (
            <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-10 min-w-[200px] overflow-hidden">
              {filterTypes.map((f) => (
                <button
                  key={f}
                  onClick={() => { setFilter(f); setShowFilter(false); }}
                  className={`block w-full text-left px-4 py-3 text-sm hover:bg-teal-50 transition-colors ${filter === f ? 'bg-teal-50 text-teal-700 font-medium' : 'text-gray-600'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-5 flex items-center gap-2">
        <BookOpen size={14} />
        <span>Showing <span className="font-semibold text-teal-600">{filtered.length}</span> publication{filtered.length !== 1 ? 's' : ''}</span>
      </p>

      {/* Publications List */}
      <div className="space-y-4">
        {filtered.map((pub, idx) => (
          <div
            key={pub.id}
            className={`enhanced-card p-5 hover-lift animate-fade-in-up`}
            style={{ 
              animationDelay: `${idx * 100}ms`,
              opacity: 0,
            }}
          >
            {/* Type badge */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs uppercase tracking-widest px-2 py-1 rounded font-semibold"
                style={{ 
                  color: TEAL_PRIMARY, 
                  backgroundColor: TEAL_PRIMARY + '15',
                  fontSize: "10px", 
                  fontWeight: 600, 
                  letterSpacing: "0.08em" 
                }}
              >
                {pub.type}
              </span>
              {/* Date */}
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <span>•</span> {pub.date}
              </span>
            </div>
            
            {/* Title */}
            <a
              href={pub.doi ? `https://doi.org/${pub.doi}` : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold hover:underline transition-colors block mb-2 group"
              style={{ color: TEAL_DARK }}
            >
              {pub.title}
              <ExternalLink size={14} className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity -mt-1" />
            </a>
            
            {/* Journal */}
            <p className="text-sm text-gray-500 italic mb-2">{pub.journal}</p>
            
            {/* Authors */}
            <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
            
            {/* DOI */}
            {pub.doi && (
              <p className="text-xs text-gray-400">
                <span className="font-medium">DOI:</span>{" "}
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors"
                  style={{ color: TEAL_PRIMARY }}
                >
                  {pub.doi}
                </a>
              </p>
            )}
            
            {/* Identifiers */}
            {pub.identifiers && pub.identifiers.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {pub.identifiers.map((id, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-500 hover:bg-teal-50 hover:text-teal-600 transition-colors cursor-default"
                  >
                    {id}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

