import React from "react";

// New modern color palette
const TEAL_PRIMARY = "#0D9488";
const TEAL_DARK = "#0F766E";
const AMBER_ACCENT = "#F59E0B";

function SectionHeading({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <h2
      className="text-sm uppercase tracking-widest mb-4 pb-2 border-b relative overflow-hidden group"
      style={{ 
        color: TEAL_PRIMARY, 
        borderColor: TEAL_PRIMARY + "30", 
        fontWeight: 600, 
        letterSpacing: "0.08em",
        animation: `fadeInUp 0.6s ease-out forwards`,
        animationDelay: `${delay}ms`,
        opacity: 0,
      }}
    >
      {children}
      {/* Decorative line */}
      <span 
        className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 origin-left"
        style={{ 
          backgroundColor: AMBER_ACCENT,
          width: '30%',
          transform: 'scaleX(0)',
        }}
        onAnimationStart={(e) => {
          (e.target as HTMLElement).style.transform = 'scaleX(1)';
        }}
      />
    </h2>
  );
}

export function AboutTab() {
  return (
    <div className="space-y-10">
      {/* Bio */}
      <section className="animate-fade-in-up">
        <SectionHeading delay={100}>Bio</SectionHeading>
        <div className="enhanced-card p-5 hover-lift">
          <p className="text-base text-gray-700 leading-relaxed" style={{ lineHeight: '1.8' }}>
            Mr. Rex G. Parro is a respected <span style={{ color: TEAL_PRIMARY, fontWeight: 600 }}>Agriculturist</span>, 
            <span style={{ color: TEAL_PRIMARY, fontWeight: 600 }}> Instructor I</span>, and university leader whose work embodies excellence in agricultural education, academic program stewardship, and strategic institutional development. He currently serves as 
            <span style={{ color: TEAL_PRIMARY, fontWeight: 600 }}> Program Coordinator</span> of the Bachelor of Agricultural Technology and 
            <span style={{ color: TEAL_PRIMARY, fontWeight: 600 }}> Director</span> of the Office of Strategic Foresight and Futures Thinking at Caraga State University, where he plays a pivotal role in shaping both academic quality and the university's long-term strategic direction. Through his leadership, he advances initiatives in futures thinking, innovation, and evidence-based planning, while fostering responsive agricultural instruction and transformative higher education governance. His professional engagements reflect a deep commitment to sustainability, institutional resilience, and the cultivation of future-ready academic and development systems.
          </p>
        </div>
      </section>

      {/* University Appointments */}
      <section className="animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
        <SectionHeading delay={200}>University Appointments</SectionHeading>
        <div className="space-y-3">
          <div className="enhanced-card p-4 hover-lift cursor-default">
            <div className="flex gap-3">
              <div
                className="w-2 h-2 rounded-full mt-2 shrink-0 animate-pulse"
                style={{ backgroundColor: TEAL_PRIMARY }}
              ></div>
              <div>
                <p className="text-base font-semibold text-gray-800">Instructor I</p>
                <p className="text-sm text-gray-600">Caraga State University: Butuan City, Agusan del Norte, PH</p>
                <p className="text-sm text-gray-600">Department of Agri-Industries and Economics</p>
                <p className="text-xs text-gray-400 mt-1">2023-02-20 – present</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education and Qualifications */}
      <section className="animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
        <SectionHeading delay={300}>Education and Qualifications</SectionHeading>
        <div className="space-y-3">
          {[
            {
              title: "Doctor in Business Management",
              org: "University of Immaculate Conception: Davao City, PH",
              dept: "Graduate School",
              period: "2024-01-01 – 2026-12-31",
              highlight: true,
            },
            {
              title: "MSc. in Agricultural Science and Resource Management in the Tropics and Subtropics",
              org: "University of Bonn: Bonn, NRW, DE",
              dept: "Department of Molecular Phytomedicine",
              period: "2020-10-01 – 2023-02-01",
              highlight: false,
            },
            {
              title: "Bachelor of Science in Agribusiness Management",
              org: "Mindanao State University: Marawi City, PH",
              dept: "Agribusiness Department",
              period: "2008-06-02 – 2014-04-09",
              highlight: false,
            },
          ].map((pos, i) => (
            <div 
              key={i} 
              className="enhanced-card p-4 hover-lift"
              style={{ 
                borderLeft: pos.highlight ? `3px solid ${AMBER_ACCENT}` : `3px solid transparent`,
                animation: `fadeInUp 0.5s ease-out forwards`,
                animationDelay: `${400 + i * 100}ms`,
                opacity: 0,
              }}
            >
              <div className="flex gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 shrink-0"
                  style={{ backgroundColor: pos.highlight ? AMBER_ACCENT : TEAL_PRIMARY }}
                ></div>
                <div>
                  <p className="text-base font-semibold text-gray-800">{pos.title}</p>
                  <p className="text-sm text-gray-600">{pos.org}</p>
                  <p className="text-sm text-gray-600">{pos.dept}</p>
                  <p className="text-xs text-gray-400 mt-1">{pos.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Activities */}
      <section className="animate-fade-in-up" style={{ animationDelay: '500ms', opacity: 0 }}>
        <SectionHeading delay={500}>Professional Activities (1)</SectionHeading>
        <div className="space-y-3">
          <div className="enhanced-card p-4 hover-lift">
            <div className="flex gap-3">
              <div
                className="w-2 h-2 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: AMBER_ACCENT }}
              ></div>
              <div>
                <p className="text-base font-semibold text-gray-800">DAAD Scholarship Recipient for MSc in Agricultural Sciences and Resource Management in the Tropics and Subtropics</p>
                <p className="text-sm text-gray-600">University of Bonn: Bonn, NRW, DE</p>
                <p className="text-sm text-gray-600">Department of Molecular Phytomedicine</p>
                <p className="text-xs text-gray-400 mt-1">2023-02-01</p>
                <span
                  className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold btn-hover-scale"
                  style={{ backgroundColor: AMBER_ACCENT + "20", color: TEAL_DARK }}
                >
                  ★ Distinction
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Degrees */}
      <section className="animate-fade-in-up" style={{ animationDelay: '600ms', opacity: 0 }}>
        <SectionHeading delay={600}>Degrees</SectionHeading>
        <div className="space-y-3">
          {[
            { degree: "PhD", inst: "Current", note: "(current)", highlight: true },
            { degree: "MSc", inst: "University of Bonn, Bonn, Germany", note: "", highlight: false },
          ].map((d, i) => (
            <div 
              key={i} 
              className="enhanced-card p-4 hover-lift"
              style={{ 
                animation: `fadeInUp 0.5s ease-out forwards`,
                animationDelay: `${700 + i * 100}ms`,
                opacity: 0,
              }}
            >
              <div className="flex gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 shrink-0"
                  style={{ backgroundColor: d.highlight ? AMBER_ACCENT : TEAL_PRIMARY }}
                ></div>
                <div>
                  <p className="text-base font-semibold text-gray-800">
                    {d.degree}
                    {d.note && <span className="ml-2 text-xs font-normal text-gray-400">{d.note}</span>}
                  </p>
                  <p className="text-sm text-gray-500">{d.inst}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tags */}
      <section className="animate-fade-in-up" style={{ animationDelay: '800ms', opacity: 0 }}>
        <SectionHeading delay={800}>Tags</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {[
            "Econometrics",
            "Resource Management",
            "Agribusiness",
            "Pseudomonas",
            "Sustainability",
            "Circular Economy",
            "Life Cycle Analysis",
          ].map((tag, i) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm border btn-hover-scale cursor-default"
              style={{ 
                borderColor: TEAL_PRIMARY + "40", 
                color: TEAL_DARK, 
                backgroundColor: TEAL_PRIMARY + "08",
                animation: `fadeInUp 0.4s ease-out forwards`,
                animationDelay: `${900 + i * 50}ms`,
                opacity: 0,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

