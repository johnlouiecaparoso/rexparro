const GREEN_DARK = "#25671E";
const GREEN_BRIGHT = "#48A111";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-sm uppercase tracking-widest mb-3 pb-1 border-b"
      style={{ color: GREEN_BRIGHT, borderColor: GREEN_BRIGHT + "44", fontWeight: 600, letterSpacing: "0.08em" }}
    >
      {children}
    </h2>
  );
}

export function AboutTab() {
  return (
    <div className="space-y-8">
      {/* Bio */}
      <section>
        <SectionHeading>Bio</SectionHeading>
        <p className="text-sm text-gray-700 leading-relaxed">
          Mr. Rex G. Parro is a respected Agriculturist, Instructor I, and university leader whose work embodies excellence in agricultural education, academic program stewardship, and strategic institutional development. He currently serves as Program Coordinator of the Bachelor of Agricultural Technology and Director of the Office of Strategic Foresight and Futures Thinking at Caraga State University, where he plays a pivotal role in shaping both academic quality and the university’s long-term strategic direction. Through his leadership, he advances initiatives in futures thinking, innovation, and evidence-based planning, while fostering responsive agricultural instruction and transformative higher education governance. His professional engagements reflect a deep commitment to sustainability, institutional resilience, and the cultivation of future-ready academic and development systems.
        </p>
      </section>

      {/* University Appointments */}
      <section>
        <SectionHeading>University Appointments</SectionHeading>
        <div className="space-y-2">
          <div className="flex gap-3">
            <div
              className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
              style={{ backgroundColor: GREEN_DARK }}
            ></div>
            <div>
              <p className="text-sm font-medium text-gray-800">Instructor I</p>
              <p className="text-xs text-gray-600">Caraga State University: Butuan City, Agusan del Norte, PH</p>
              <p className="text-xs text-gray-600">Department of Agri-Industries and Economics</p>
              <p className="text-xs text-gray-400">2023-02-20 – present</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education and Qualifications */}
      <section>
        <SectionHeading>Education and Qualifications</SectionHeading>
        <div className="space-y-4">
          {[
            {
              title: "Doctor in Business Management",
              org: "University of Immaculate Conception: Davao City, PH",
              dept: "Graduate School",
              period: "2024-01-01 – 2026-12-31",
            },
            {
              title: "MSc. in Agricultural Science and Resource Management in the Tropics and Subtropics",
              org: "University of Bonn: Bonn, NRW, DE",
              dept: "Department of Molecular Phytomedicine",
              period: "2020-10-01 – 2023-02-01",
            },
            {
              title: "Bachelor of Science in Agribusiness Management",
              org: "Mindanao State University: Marawi City, PH",
              dept: "Agribusiness Department",
              period: "2008-06-02 – 2014-04-09",
            },
          ].map((pos, i) => (
            <div key={i} className="flex gap-3">
              <div
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: GREEN_DARK }}
              ></div>
              <div>
                <p className="text-sm font-medium text-gray-800">{pos.title}</p>
                <p className="text-xs text-gray-600">{pos.org}</p>
                <p className="text-xs text-gray-600">{pos.dept}</p>
                <p className="text-xs text-gray-400">{pos.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Activities */}
      <section>
        <SectionHeading>Professional Activities (1)</SectionHeading>
        <div className="space-y-2">
          <div className="flex gap-3">
            <div
              className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
              style={{ backgroundColor: GREEN_DARK }}
            ></div>
            <div>
              <p className="text-sm font-medium text-gray-800">DAAD Scholarship Recipient for MSc in Agricultural Sciences and Resource Management in the Tropics and Subtropics</p>
              <p className="text-xs text-gray-600">University of Bonn: Bonn, NRW, DE</p>
              <p className="text-xs text-gray-600">Department of Molecular Phytomedicine</p>
              <p className="text-xs text-gray-400">2023-02-01</p>
              <span
                className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium"
                style={{ backgroundColor: GREEN_BRIGHT + "1A", color: GREEN_BRIGHT }}
              >
                Distinction
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Degrees */}
      <section>
        <SectionHeading>Degrees</SectionHeading>
        <div className="space-y-3">
          {[
            { degree: "PhD", inst: "Current", note: "(current)" },
            { degree: "MSc", inst: "University of Bonn, Bonn, Germany", note: "" },
          ].map((d, i) => (
            <div key={i} className="flex gap-3">
              <div
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: GREEN_DARK }}
              ></div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {d.degree}
                  {d.note && <span className="ml-1 text-xs font-normal text-gray-400">{d.note}</span>}
                </p>
                <p className="text-xs text-gray-500">{d.inst}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tags */}
      <section>
        <SectionHeading>Tags</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {[
            "Econometrics",
            "Resource Management",
            "Agribusiness",
            "Pseudomonas",
            "Sustainability",
            "Circular Economy",
            "Life Cycle Analysis",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs border"
              style={{ borderColor: GREEN_DARK + "55", color: GREEN_DARK, backgroundColor: GREEN_DARK + "0D" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
