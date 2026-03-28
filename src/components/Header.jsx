import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoImg from "../assets/Grove Vista Properties.png";

const menuData = {
  Buy: {
    title: "Properties for Sale in India",
    path: "/buy",
    sections: [
      {
        heading: "Properties by Type",
        items: ["Apartments", "Penthouses", "Villas", "Bungalows", "Commercial", "See All"],
      },
      {
        heading: "Buyer Resources",
        items: ["Buyer's Guide", "Home Loan Assistance", "Legal Help", "RERA Info"],
      },
    ],
  },
  Rent: {
    title: "Properties for Rent",
    path: "/rent",
    sections: [
      {
        heading: "Popular Rentals",
        items: ["Apartments", "Villas", "Short Term", "Commercial", "Co-living"],
      },
      {
        heading: "Resources",
        items: ["Tenant Guide", "Rental Agreement", "FAQs"],
      },
    ],
  },
  Projects: {
    title: "New Projects in India",
    path: "/projects",
    sections: [
      {
        heading: "By City",
        items: ["Mumbai Projects", "Delhi NCR Projects", "Bangalore Projects", "Pune Projects", "Hyderabad Projects"],
      },
      {
        heading: "By Type",
        items: ["Luxury", "Mid-Range", "Affordable", "Off-Plan / Pre-Launch"],
      },
    ],
  },
  Developers: {
    title: "Top Developers",
    path: "/developers",
    sections: [
      {
        heading: "National Leaders",
        items: ["DLF", "Lodha", "Godrej Properties", "Prestige Group", "Sobha"],
      },
      {
        heading: "Regional Leaders",
        items: ["Hiranandani", "Oberoi Realty", "Rustomjee", "Brigade Group"],
      },
    ],
  },
  Areas: {
    title: "Explore Cities & Areas",
    path: "/areas",
    sections: [
      {
        heading: "Top Cities",
        items: ["Mumbai", "Delhi NCR", "Bangalore", "Pune", "Hyderabad"],
      },
      {
        heading: "Premium Localities",
        items: ["Bandra West", "Worli", "Golf Course Rd", "Koramangala", "Jubilee Hills"],
      },
    ],
  },
  Services: {
    title: "Our Services",
    path: "/services",
    sections: [
      {
        heading: "What We Offer",
        items: ["Home Loan", "Legal Consultation", "Property Management", "NRI Services"],
      },
      {
        heading: "Tools",
        items: ["EMI Calculator", "Market Reports", "Property Valuation"],
      },
    ],
  },
};

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [location]);

  return (
    <header
      className={`h-20 w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
  scrolled
    ? "bg-white/90 shadow-lg border-b border-gray-200"
    : "bg-white border-b border-gray-100"
}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={logoImg} alt="GrowVista Property" className="h-16 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {Object.entries(menuData).map(([menu, data]) => (
            <div
              key={menu}
              className="relative"
              onMouseEnter={() => setActiveMenu(menu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[14px] font-semibold transition-all duration-200 ${
                  activeMenu === menu
                    ? "text-blue-600 bg-blue-50/80"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={() => data.path && navigate(data.path)}
              >
                {menu}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === menu ? "rotate-180 text-blue-500" : "text-gray-400"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeMenu === menu && (
                <div className="absolute left-0 top-full mt-2 w-[500px] bg-white/95 backdrop-blur-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] rounded-2xl border border-white/60 p-6 z-50">
                  {/* Dropdown Header */}
                  <div className="flex items-center gap-2 mb-5 pb-4 border-b border-gray-100">
                    <div className="w-1.5 h-5 bg-blue-600 rounded-full"></div>
                    <h2 className="text-[13px] font-extrabold text-blue-600 uppercase tracking-wider">
                      {data.title}
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {data.sections.map((section, index) => (
                      <div key={index}>
                        <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-3">
                          {section.heading}
                        </p>
                        <div className="flex flex-col gap-1">
                          {section.items.map((item) => (
                            <p
                              key={item}
                              className="text-[14px] font-medium text-gray-700 hover:text-blue-600 hover:translate-x-1 cursor-pointer py-1 transition-all duration-150"
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Phone CTA */}
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 text-[13px] font-bold text-gray-700 hover:text-blue-600 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            +91 99XXXXXX
          </a>

          <div className="w-px h-6 bg-gray-200"></div>

          <button className="px-5 py-2.5 border border-gray-300 rounded-xl text-[14px] font-bold text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200">
            Login
          </button>
          <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[14px] font-bold transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30">
            List Property
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2.5 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-t border-gray-100 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {Object.entries(menuData).map(([menu, data]) => (
              <div key={menu}>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-bold text-gray-800 hover:bg-blue-50/50 hover:text-blue-600 transition-all"
                  onClick={() => setMobileExpanded(mobileExpanded === menu ? null : menu)}
                >
                  <span>{menu}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === menu ? "rotate-180 text-blue-500" : "text-gray-400"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpanded === menu && (
                  <div className="ml-4 mb-2 pl-4 border-l-2 border-blue-100 pt-1">
                    {data.sections.map((section, idx) => (
                      <div key={idx} className="py-2">
                        <p className="text-[10.5px] text-gray-400 uppercase font-extrabold tracking-widest mb-2">
                          {section.heading}
                        </p>
                        {section.items.map((item) => (
                          <p key={item} className="py-1.5 text-[14px] font-medium text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
                            {item}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="border-t border-gray-100 pt-4 mt-3 space-y-3">
              <a href="tel:+919999999999" className="flex items-center justify-center gap-2 w-full border border-gray-200 py-3 rounded-xl text-[14px] font-bold text-gray-700 hover:bg-gray-50">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 99XXXXXX
              </a>
              <button className="w-full border border-gray-300 py-3 rounded-xl text-[14px] font-bold hover:bg-gray-50 transition-colors">
                Login
              </button>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-[14px] font-bold hover:bg-blue-700 transition-colors shadow-md">
                List Your Property
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
