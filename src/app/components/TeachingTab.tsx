import { useState } from "react";
import { Search } from "lucide-react";

const GREEN_DARK = "#25671E";
const GREEN_BRIGHT = "#48A111";

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
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
        <h2 className="text-sm text-gray-700">Teaching & Supervision</h2>
        <div className="relative sm:ml-auto">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search author..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded outline-none focus:border-green-500 w-full sm:w-56 transition-colors"
          />
        </div>
      </div>

      {/* Count */}
      <p className="text-xs text-gray-500 mb-4">
        {(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length}
      </p>

      {/* List */}
      <div className="space-y-0">
        {paginated.map((item, idx) => (
          <div
            key={item.id}
            className={`py-4 ${idx < paginated.length - 1 ? "border-b border-gray-100" : ""}`}
          >
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: GREEN_BRIGHT, fontSize: "10px", fontWeight: 600 }}
            >
              {item.type}
            </p>
            <p className="text-xs text-gray-400 mb-1">{item.date}</p>
            <a
              href="#"
              className="text-sm block mb-1 hover:underline transition-colors"
              style={{ color: GREEN_DARK, fontWeight: 500 }}
            >
              {item.title}
            </a>
            <p className="text-xs text-gray-500">{item.supervisor}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center gap-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className="w-8 h-8 text-sm rounded transition-colors"
              style={{
                backgroundColor: page === p ? GREEN_DARK : "transparent",
                color: page === p ? "white" : "#374151",
                border: `1px solid ${page === p ? GREEN_DARK : "#e5e7eb"}`,
              }}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
