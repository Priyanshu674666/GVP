import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    id: 1,
    price: "₹ 45.00 Cr",
    title: "Golf Course View | Ultra Luxury | Ready",
    location: "DLF The Camellias, Gurgaon, NCR",
    type: "Apartment",
    beds: 4,
    baths: 5,
    sqft: "7,100",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    id: 2,
    price: "₹ 35.50 Cr",
    title: "City Skyline View | Private Lift | Upgraded",
    location: "Prestige Kingfisher Towers, Bangalore",
    type: "Apartment",
    beds: 4,
    baths: 5,
    sqft: "8,321",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    id: 3,
    price: "₹ 15.50 Cr",
    title: "Luxury 3BR | Sea Facing | Signature Residence",
    location: "Lodha World One, Worli, Mumbai",
    type: "Apartment",
    beds: 3,
    baths: 3,
    sqft: "1,608",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Connect with a Specialist",
    description: "Access our team of expert agents ready to assist you with finding your dream property in India.",
    color: "text-blue-600 bg-blue-50/80",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "List Your Property",
    description: "Get the best value with expert marketing strategies and access to thousands of buyers.",
    color: "text-orange-600 bg-orange-50/80",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Download Report",
    description: "Get the latest Indian real estate market reports with actionable insights and trends.",
    color: "text-emerald-600 bg-emerald-50/80",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Explore Projects",
    description: "Browse our curated portfolio of new developments and off-plan investment opportunities.",
    color: "text-purple-600 bg-purple-50/80",
  },
];

const testimonials = [
  {
    name: "Mukesh Sharma",
    initials: "MS",
    color: "bg-blue-500",
    time: "3 months ago",
    title: "An Honest Approach to Real Estate",
    desc: "I worked with Aditya to find a property in Bangalore, it was an exceptional experience. He combines deep market knowledge with genuine care for his clients. He guided me through every step and made the process smooth and stress-free.",
  },
  {
    name: "Anadi Mishra",
    initials: "AM",
    color: "bg-purple-500",
    time: "3 months ago",
    title: "Expert Guidance and Value-Driven Solutions",
    desc: "I have worked with Mr. Rajesh for buying a luxury property in Gurgaon. He is an exceptional individual and highly astute property professional. His dedication and insights made a huge difference.",
  },
  {
    name: "Vikram Lee",
    initials: "VL",
    color: "bg-emerald-500",
    time: "5 months ago",
    title: "A Supportive and Professional Experience",
    desc: "Working with the team was a great experience. Finding the right apartment in Mumbai wasn't always easy, but they stayed patient and professional. They ensured I got the best deal possible.",
  },
];


function HomePage() {
  const [activeFilter, setActiveFilter] = useState("For Sale");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filters = ["For Sale", "For Rent", "Off Plan"];

  const toggleText = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/buy");
  };

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section
        className="min-h-[90vh] w-full bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/036/725/233/small_2x/ai-generated-real-estate-advertisment-background-with-copy-space-free-photo.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Find Your Dream
            <span className="block text-blue-300 drop-shadow-lg">Property in India</span>
          </h1>
          <p className="text-gray-100 text-lg mb-12 max-w-2xl mx-auto font-medium drop-shadow-md">
            Explore thousands of verified listings with exclusive deals and expert guidance across India.
          </p>

          {/* Search Box - Glassmorphism */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-3 max-w-3xl mx-auto">
            <div className="flex gap-2 mb-3 px-2 pt-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeFilter === f ? "bg-blue-600 text-white shadow-md" : "text-gray-200 hover:bg-white/20"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <form onSubmit={handleSearch} className="flex gap-3">
              <div className="flex-1 flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl px-5 shadow-inner">
                <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by city (e.g., Mumbai, Bangalore, Gurgaon)..."
                  className="w-full py-4 text-[15px] font-medium text-gray-800 bg-transparent focus:outline-none placeholder-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-[15px] transition-colors shadow-lg border border-blue-400/50"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/80 py-24 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5">Pan-India Real Estate Solutions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
              Focused around exceptional customer service and proven expertise across the entire Indian market.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border border-white/60 p-8 rounded-3xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-white/40 backdrop-blur-xl shadow-sm"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-[17px] group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPLORE PROPERTIES SECTION ===== */}
      <section className="bg-gradient-to-bl from-emerald-50 via-gray-50 to-sky-50 py-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Featured Listings</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Explore Property Across India</h2>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex gap-2 bg-white/50 backdrop-blur-md p-1.5 rounded-xl border border-white">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2.5 rounded-lg text-[14px] font-bold transition-all ${
                      activeFilter === filter
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-600 hover:bg-white/60"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <button
                onClick={() => navigate("/buy")}
                className="bg-[#e4642c] hover:bg-[#d05724] text-white px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all shadow-lg hover:shadow-xl"
              >
                View all properties &rarr;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden p-3 pb-0 rounded-t-3xl">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-3 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl pointer-events-none" />
                  <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-blue-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {activeFilter}
                  </span>
                  <button className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-2 rounded-full hover:bg-white transition-colors shadow-sm">
                    <svg className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{property.price}</h3>
                  <p className="text-[15px] text-gray-700 font-bold mb-3 line-clamp-1">{property.title}</p>

                  <div className="flex items-center gap-2 mb-5">
                    <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-[13px] text-gray-500 font-medium truncate">{property.location}</p>
                  </div>

                  <div className="flex items-center justify-between text-[13px] text-gray-600 mb-6 font-semibold bg-white/50 p-3 rounded-xl border border-white">
                    <div className="flex items-center gap-1.5"><span className="text-lg">🛏️</span> {property.beds}</div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center gap-1.5"><span className="text-lg">🛁</span> {property.baths}</div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center gap-1.5"><span className="text-lg">📐</span> {property.sqft} sqft</div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-auto">
                    <button className="flex items-center justify-center py-2.5 rounded-xl bg-white hover:bg-blue-50 hover:text-blue-700 text-[13px] font-bold text-gray-700 transition-all border border-gray-200 shadow-sm">
                      Email
                    </button>
                    <button className="flex items-center justify-center py-2.5 rounded-xl bg-white hover:bg-blue-50 hover:text-blue-700 text-[13px] font-bold text-gray-700 transition-all border border-gray-200 shadow-sm">
                      Call
                    </button>
                    <button className="flex items-center justify-center py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-[13px] font-bold text-white transition-all shadow-md shadow-green-500/20">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="bg-gradient-to-tr from-amber-50/50 via-white to-orange-50/50 py-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">Client Reviews</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Why Our Clients Trust Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => {
              const isExpanded = expandedIndex === index;
              const shortText = item.desc.slice(0, 110) + "...";
              return (
                <div
                  key={index}
                  className="border border-white/60 bg-white/40 backdrop-blur-xl rounded-3xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 relative"
                >
                  <div className="absolute top-0 right-8 -mt-5 text-6xl text-gray-200 opacity-50 font-serif">"</div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                      {item.initials}
                    </div>
                    <div>
                      <p className="font-extrabold text-[15px] text-gray-900">{item.name}</p>
                      <p className="text-gray-500 text-[12px] font-medium">{item.time}</p>
                    </div>
                  </div>
                  <div className="text-amber-400 mb-4 text-xl tracking-widest">★★★★★</div>
                  <h3 className="font-bold mb-3 text-[16px] text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-[14.5px] leading-relaxed font-medium">
                    {isExpanded ? item.desc : shortText}
                    <button
                      onClick={() => toggleText(index)}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer ml-1 font-bold"
                    >
                      {isExpanded ? "less" : "more"}
                    </button>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Speak with our Property Specialists Today
            </h2>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed font-medium">
              Get in touch for tailored guidance from our expert team. We're committed to assisting you through every step of your journey in the highly dynamic Indian real estate market.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: "💬",
                  bg: "bg-green-100/80 border border-green-200/50",
                  label: "WhatsApp",
                  value: "Click to WhatsApp",
                  href: "https://wa.me/919999999999",
                },
                {
                  icon: "📞",
                  bg: "bg-blue-100/80 border border-blue-200/50",
                  label: "Phone",
                  value: "+91 99XXXXXXXX",
                  href: "tel:+919999999999",
                },
                {
                  icon: "✉️",
                  bg: "bg-orange-100/80 border border-orange-200/50",
                  label: "Email",
                  value: "info@growvista.com",
                  href: "mailto:info@growvista.com",
                },
              ].map((contact, i) => (
                <div key={i} className="flex items-center gap-5 p-2 rounded-2xl hover:bg-white/40 transition-colors">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 backdrop-blur-md ${contact.bg}`}>
                    {contact.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-[15px]">{contact.label}</p>
                    <a href={contact.href} className="text-blue-600 hover:text-blue-800 text-[14px] font-bold">
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-2xl p-10 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/80">
            <h3 className="font-extrabold text-2xl text-gray-900 mb-8">Send us a message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-2">First Name</label>
                  <input type="text" placeholder="John" className="w-full border border-white bg-white/50 p-3.5 rounded-xl text-[14.5px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm placeholder-gray-400" />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full border border-white bg-white/50 p-3.5 rounded-xl text-[14.5px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm placeholder-gray-400" />
                </div>
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full border border-white bg-white/50 p-3.5 rounded-xl text-[14.5px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm placeholder-gray-400" />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Phone Number</label>
                <input type="text" placeholder="+91 98XXXXXXXX" className="w-full border border-white bg-white/50 p-3.5 rounded-xl text-[14.5px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm placeholder-gray-400" />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Message</label>
                <textarea rows="4" placeholder="Tell us about your property requirements across India..." className="w-full border border-white bg-white/50 p-3.5 rounded-xl text-[14.5px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm placeholder-gray-400 resize-none" />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-[15px] transition-colors shadow-lg shadow-blue-500/30 mt-2">
                Submit Details
              </button>
              <p className="text-[11.5px] text-gray-500 text-center font-medium pt-2">
                By submitting, you agree to our{" "}
                <a href="#" className="text-blue-600 font-bold hover:underline">Terms & Conditions</a> and{" "}
                <a href="#" className="text-blue-600 font-bold hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        {/* Dark Glass Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">India's Premier Property Marketplace</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              We combine deep market expertise with cutting-edge technology to deliver exceptional results across the country.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Exclusive Access to Prime Properties",
                desc: "Gain priority access to exclusive listings and upcoming developments across top markets in India before they go public.",
              },
              {
                icon: "📊",
                title: "Proven Track Record of Success",
                desc: "With thousands of satisfied clients, our expertise consistently delivers results for investors, buyers and sellers nationwide.",
              },
              {
                icon: "🎯",
                title: "Expert Guidance in Current Market",
                desc: "Make informed, profitable decisions with our strategic insights and comprehensive data on the dynamic Indian real estate market.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="border border-white/5 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10">{feature.icon}</div>
                <h3 className="font-extrabold text-white mb-4 text-[18px]">{feature.title}</h3>
                <p className="text-gray-400 text-[14.5px] leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
