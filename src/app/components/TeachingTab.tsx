import React, { useState } from "react";
import { Search, Users, GraduationCap } from "lucide-react";

// New modern color palette
const TEAL_PRIMARY = "#0D9488";
const TEAL_DARK = "#0F766E";
const AMBER_ACCENT = "#F59E0B";

const teachingItems = [
  {
    id: 1,
    title: "The effect of Macro-Herbivores on ecosystem service delivery to Rocky Shores",
    supervisor: "Associate Supervisor",
    date: "1 Apr 2022",
    type: "GRANT DOCTORAL SUPERVISORY",
  },
  {
    id: 2,
    title: "Fad or sense-making? Is a green Blue Economy development and expansion in Australia really possible?",
    supervisor: "Principal Supervisor",
    date: "15 Mar 2022",
    type: "CURRENT GRANT DOCTORAL SUPERVISORY",
  },
  {
    id: 3,
    title: "An ecosystem-based blue economy on Sea Country",
    supervisor: "Associate Supervisor",
    date: "4 Apr 2021",
    type: "CURRENT GRANT DOCTORAL SUPERVISORY",
  },
  {
    id: 4,
    title: "An Analysis of Policy, Institutions and Practices for Encouraging Climate-Resilient Adaptations in Coastal Agriculture in Bangladesh",
    supervisor: "Associate Supervisor",
    date: "Aug 2021 – 14 Aug 2023",
    type: "GRANT DOCTORAL SUPERVISORY",
  },
  {
    id: 5,
    title: "Sustainable groundwater management in Australia using economic incentives and policy instruments",
    supervisor: "Associate Supervisor",
    date: "10 Jun 2021",
    type: "CURRENT GRANT DOCTORAL SUPERVISORY",
  },
  {
    id: 6,
    title: "Valuing Indigenous cultural and its role in the decision-making practice for natural resource schemes",
    supervisor: "Principal Supervisor",
    date: "22 Oct 2021",
    type: "GRANT DOCTORAL SUPERVISORY",
  },
  {
    id: 7,
    title: "A socio-economic study on the potential impacts of red tail ornaments on the Pacific Islands",
    supervisor: "Associate Supervisor",
    date: "9 Aug 2020",
    type: "GRANT DOCTORAL SUPERVISORY",
  },
  {
    id: 8,
    title: "Exploring the nexus between cultural ecosystem services and marine ecosystem sustainability",
    supervisor: "Associate Supervisor",
    date: "14 Sep 2020",
    type: "GRANT DOCTORAL SUPERVISORY",
  },
  {
    id: 9,
    title: "Aboriginal water rights in Blue River: Socio-legal implications of water governance reform for self-determination",
    supervisor: "Principal Supervisor",
    date: "23 Jun 2019 – 28 Jun 2028",
    type: "GRANT DOCTORAL SUPERVISORY",
  },
  {
    id: 10,
    title: "Going On Up with Oil Country",
    supervisor: "Associate Supervisor",
    date: "23 Jan 2019",
    type: "GRANT DOCTORAL SUPERVISORY",
  },
];

const ITEMS_PER_PAGE = 6;

export function TeachingTab() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = teachingItems.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.supervisor.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <GraduationCap size={20} style={{ color: TEAL_PRIMARY }} />
          Teaching & Supervision
        </h2>
        <div className="relative sm:ml-auto">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 w-full sm:w-56 transition-all"
          />
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-gray-500 mb-5 flex items-center gap-2">
        <Users size={14} />
        <span>Showing <span className="font-semibold text-teal-600">{(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, filtered.length)}</span> of {filtered.length}</span>
      </p>

      {/* List */}
      <div className="space-y-4">
        {paginated.map((item, idx) => (
          <div
            key={item.id}
            className="enhanced-card p-5 hover-lift animate-fade-in-up"
            style={{ 
              animationDelay: `${idx * 100}ms`,
              opacity: 0,
            }}
          >
            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
              <span
                className="text-xs uppercase tracking-widest px-3 py-1 rounded-full font-semibold"
                style={{ 
                  color: item.type.includes('CURRENT') ? AMBER_ACCENT : TEAL_PRIMARY, 
                  backgroundColor: item.type.includes('CURRENT') ? AMBER_ACCENT + '12' : TEAL_PRIMARY + '12',
                  fontSize: "10px", 
                  fontWeight: 600 
                }}
              >
                {item.type}
              </span>
              <span className="text-xs text-gray-400">{item.date}</span>
            </div>
            
            <a
              href="#"
              className="text-base font-semibold block mb-2 hover:underline transition-colors group"
              style={{ color: TEAL_DARK }}
            >
              {item.title}
            </a>
            
            <p className="text-sm flex items-center gap-2">
              <span 
                className="text-xs px-2 py-0.5 rounded"
                style={{ 
                  backgroundColor: item.supervisor.includes('Principal') ? AMBER_ACCENT + '15' : TEAL_PRIMARY + '15',
                  color: item.supervisor.includes('Principal') ? TEAL_DARK : TEAL_DARK 
                }}
              >
                {item.supervisor}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Pagination - Enhanced */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="px-3 py-2 text-sm rounded-lg border border-gray-200 hover:border-teal-400 hover:bg-teal-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            ← Prev
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className="w-10 h-10 text-sm rounded-lg transition-all btn-hover-scale"
              style={{
                backgroundColor: page === p ? TEAL_PRIMARY : 'transparent',
                color: page === p ? 'white' : '#374151',
                border: `1px solid ${page === p ? TEAL_PRIMARY : '#e5e7eb'}`,
                boxShadow: page === p ? '0 2px 8px rgba(13, 148, 136, 0.3)' : 'none',
              }}
            >
              {p}
            </button>
          ))}
          
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="px-3 py-2 text-sm rounded-lg border border-gray-200 hover:border-teal-400 hover:bg-teal-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

