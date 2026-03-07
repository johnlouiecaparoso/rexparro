import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const GREEN_DARK = "#25671E";
const GREEN_BRIGHT = "#48A111";

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
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded outline-none focus:border-green-500 transition-colors"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded hover:border-gray-300 transition-colors bg-white min-w-[140px] justify-between"
          >
            <span>{filter}</span>
            <ChevronDown size={14} className="text-gray-400" />
          </button>
          {showFilter && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-10 min-w-[180px]">
              {filterTypes.map((f) => (
                <button
                  key={f}
                  onClick={() => { setFilter(f); setShowFilter(false); }}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                  style={{ color: filter === f ? GREEN_DARK : "#374151" }}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-gray-500 mb-4">
        1–{filtered.length} of {filtered.length}
      </p>

      {/* Publications List */}
      <div className="space-y-0">
        {filtered.map((pub, idx) => (
          <div
            key={pub.id}
            className={`py-4 ${idx < filtered.length - 1 ? "border-b border-gray-100" : ""}`}
          >
            {/* Type badge */}
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: GREEN_BRIGHT, fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em" }}
            >
              {pub.type}
            </p>
            {/* Date */}
            <p className="text-xs text-gray-400 mb-1">{pub.date}</p>
            {/* Title */}
            <a
              href={pub.doi ? `https://doi.org/${pub.doi}` : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline transition-colors block mb-1"
              style={{ color: GREEN_DARK }}
            >
              {pub.title}
            </a>
            {/* Journal */}
            <p className="text-xs text-gray-500 italic mb-1">{pub.journal}</p>
            {/* Authors */}
            <p className="text-xs text-gray-500 mb-1">{pub.authors}</p>
            {/* DOI */}
            {pub.doi && (
              <p className="text-xs text-gray-400">
                DOI:{" "}
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: GREEN_BRIGHT }}
                >
                  {pub.doi}
                </a>
              </p>
            )}
            {/* Identifiers */}
            {pub.identifiers && pub.identifiers.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1">
                {pub.identifiers.map((id, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-500"
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
