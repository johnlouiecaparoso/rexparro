const GREEN_DARK = "#25671E";

const contactLinks = [
  "Research Centres and Institutes",
  "Apply for PhD or Research degree",
  "Indigenous Research at Griffith",
  "Griffith Graduate Research School",
  "Office for Research",
  "Griffith Enterprise",
  "Research and Innovation at Griffith",
  "Research with Impact",
  "Volunteer for Research Projects",
  "Donate for Research",
];

const usefulLinks = [
  "About Griffith",
  "Phone Book",
  "International",
  "Engage",
  "Alumni and Giving",
  "Library Services",
  "Disclaimer",
  "Privacy Plan",
  "Copyright matters",
  "CRICOS Provider – 00233E",
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Us */}
        <div>
          <h3
            className="text-sm uppercase tracking-widest mb-4 pb-2 border-b"
            style={{ color: "#48A111", borderColor: "#48A11144", letterSpacing: "0.1em" }}
          >
            Contact Us
          </h3>
          {/* Logo placeholder */}
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-8 h-8 rounded flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: GREEN_DARK }}
            >
              U
            </div>
            <div>
              <p className="text-xs font-semibold text-white">UNIVERSITY</p>
              <p className="text-xs text-gray-400">50 Years</p>
            </div>
          </div>
          <address className="not-italic text-xs text-gray-400 leading-6 mb-4">
            170 Kessels Road<br />
            Brisbane, Queensland<br />
            Australia<br />
            +61 7 3735 7111
          </address>
          <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors underline">
            Cookie settings
          </a>
        </div>

        {/* Research at University */}
        <div>
          <h3
            className="text-sm uppercase tracking-widest mb-4 pb-2 border-b"
            style={{ color: "#48A111", borderColor: "#48A11144", letterSpacing: "0.1em" }}
          >
            Research at University
          </h3>
          <ul className="space-y-1.5">
            {contactLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span className="text-green-500">›</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3
            className="text-sm uppercase tracking-widest mb-4 pb-2 border-b"
            style={{ color: "#48A111", borderColor: "#48A11144", letterSpacing: "0.1em" }}
          >
            Useful Links
          </h3>
          <ul className="space-y-1.5">
            {usefulLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span className="text-green-500">›</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 px-6 text-center">
        <p className="text-xs text-gray-500">
          Powered by <span className="text-gray-400">Symplectic</span>
        </p>
      </div>
    </footer>
  );
}
