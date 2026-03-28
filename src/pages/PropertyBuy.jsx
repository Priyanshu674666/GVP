import React, { useState } from "react";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    price: "₹ 45.00 Cr",
    title: "Golf Course View | Ultra Luxury | Ready",
    location: "DLF The Camellias, Gurgaon, NCR",
    type: "Apartment",
    status: "Ready",
    sqft: "7,100",
    beds: 4,
    baths: 5,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description:
      "Stunning ultra-luxury apartment with golf course views. A masterclass in luxury living offering exquisite amenities and a high-profile neighborhood in Gurgaon.",
    agent: "GrowVista Property",
    tag: "HOT DEAL",
  },
  {
    id: 2,
    price: "₹ 35.50 Cr",
    title: "City Skyline View | Private Lift | Upgraded",
    location: "Prestige Kingfisher Towers, Bangalore",
    type: "Apartment",
    status: "Ready",
    sqft: "8,321",
    beds: 4,
    baths: 5,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description:
      "Luxurious apartment with spectacular city skyline views. Upgraded with premium finishes and exclusive private elevators right in the business hub of Bangalore.",
    agent: "GrowVista Property",
    tag: "PREMIUM",
  },
  {
    id: 3,
    price: "₹ 15.50 Cr",
    title: "Luxury 3BR | Sea Facing | Signature Residence",
    location: "Lodha World One, Worli, Mumbai",
    type: "Apartment",
    status: "Off Plan",
    sqft: "1,608",
    beds: 3,
    baths: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description:
      "Elegant corner unit with stunning Arabian Sea views in a signature-branded residence. Luxury 3-bedroom apartment offering world-class amenities.",
    agent: "GrowVista Property",
    tag: "OFF PLAN",
  },
  {
    id: 4,
    price: "₹ 12.00 Cr",
    title: "Golf Course Extension | Spanish Villas",
    location: "Emaar Marbella, Gurgaon",
    type: "Villa",
    status: "Ready",
    sqft: "5,600",
    beds: 5,
    baths: 5,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description:
      "Breathtaking Spanish-style villa located in the heart of Gurgaon. Turnkey investment offering premium amenities and lush green surroundings.",
    agent: "GrowVista Property",
    tag: "FURNISHED",
  },
  {
    id: 5,
    price: "₹ 8.50 Cr",
    title: "Lakeside Living | Signature Development",
    location: "Sobha City, Bangalore",
    type: "Apartment",
    status: "Ready",
    sqft: "3,200",
    beds: 4,
    baths: 4,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description:
      "Iconic lakeside apartment with unmatched luxury and stunning spaces. Exquisite 4-bedroom residence designed for the modern lifestyle.",
    agent: "GrowVista Property",
    tag: "EXCLUSIVE",
  },
  {
    id: 6,
    price: "₹ 5.00 Cr",
    title: "Golf Links | Modern Villas | Golf Views",
    location: "Godrej Golf Links, Noida",
    type: "Villa",
    status: "Off Plan",
    sqft: "2,480",
    beds: 3,
    baths: 3,
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description:
      "Smart villa in the heart of Noida with incredible golf course views. Perfect off-plan investment with high rental yield potential.",
    agent: "GrowVista Property",
    tag: "OFF PLAN",
  },
];

const tagColors = {
  "HOT DEAL": "bg-red-500",
  PREMIUM: "bg-purple-600",
  "OFF PLAN": "bg-amber-500",
  FURNISHED: "bg-teal-500",
  EXCLUSIVE: "bg-blue-700",
};

function PropertyBuy() {
  const [savedProperties, setSavedProperties] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [activeFilter, setActiveFilter] = useState("Any");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState("Any Price");
  const [propertyType, setPropertyType] = useState("Any Type");

  const toggleSave = (propertyId) => {
    setSavedProperties((prev) =>
      prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]
    );
  };

  const toggleDescription = (propertyId) => {
    setExpandedDescriptions((prev) => ({ ...prev, [propertyId]: !prev[propertyId] }));
  };

  const statusFilters = ["Any", "Ready", "Off Plan"];
  const sortOptions = ["Most Recent", "Price: Low to High", "Price: High to Low", "Most Popular"];

  const filteredProperties = properties.filter((p) => {
    if (activeFilter !== "Any" && p.status !== activeFilter) return false;
    if (propertyType !== "Any Type" && p.type !== propertyType) return false;
    if (searchText && !p.title.toLowerCase().includes(searchText.toLowerCase()) && !p.location.toLowerCase().includes(searchText.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/70 min-h-screen relative">
      
      {/* Background Decorative Blobs - Fixed to background to avoid breaking scroll and sticky elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      {/* ===== SEARCH BAR ===== */}
      <div className="bg-white/70 backdrop-blur-xl border-b border-white/60 sticky top-20 z-40 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex-1 min-w-[220px] flex items-center gap-2 border border-white bg-white/50 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-sm focus-within:border-blue-400 focus-within:bg-white transition-all">
              <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="City, area (e.g. Mumbai, Bangalore)..."
                className="w-full bg-transparent text-[14px] font-medium focus:outline-none text-gray-800 placeholder-gray-500"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            <select
              className="border border-white bg-white/50 backdrop-blur-md px-3 py-[11px] rounded-xl text-[14px] font-medium focus:outline-none focus:border-blue-400 text-gray-800 shadow-sm"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="Any Type">Any Type</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Studio">Studio</option>
            </select>

            <select
              className="border border-white bg-white/50 backdrop-blur-md px-3 py-[11px] rounded-xl text-[14px] font-medium focus:outline-none focus:border-blue-400 text-gray-800 shadow-sm"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="Any Price">Any Price</option>
              <option>Under ₹2 Cr</option>
              <option>₹2 Cr – ₹5 Cr</option>
              <option>₹5 Cr – ₹10 Cr</option>
              <option>Above ₹10 Cr</option>
            </select>

            <select className="border border-white bg-white/50 backdrop-blur-md px-3 py-[11px] rounded-xl text-[14px] font-medium focus:outline-none focus:border-blue-400 text-gray-800 shadow-sm">
              <option>Any Beds</option>
              <option>Studio</option>
              <option>1 Bed</option>
              <option>2 Beds</option>
              <option>3 Beds</option>
              <option>4+ Beds</option>
            </select>

            <button className="flex items-center gap-2 border border-white bg-white/50 backdrop-blur-md shadow-sm px-5 py-[11px] rounded-xl text-[14px] font-bold hover:border-blue-400 hover:text-blue-700 transition-all text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586A1 1 0 0120.707 8l-4.293 4.293a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L7.293 8A1 1 0 017 7.414V4z" />
              </svg>
              Filters
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-[11px] rounded-xl text-[14px] font-bold transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)]">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ===== BREADCRUMB ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-800">Properties for Sale in India</span>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 mt-2">
        {/* Title + Controls */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Properties for Sale in India
              </h1>
              <p className="text-gray-600 text-[15px] mt-1.5 font-medium">
                <span className="font-bold text-blue-600">{filteredProperties.length}</span> premium listings found
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Status Filter Tabs */}
              <div className="flex gap-1 bg-white/40 backdrop-blur-md p-1.5 rounded-xl border border-white/60 shadow-sm">
                {statusFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-1.5 rounded-[10px] text-[13px] font-bold transition-all ${
                      activeFilter === filter
                        ? "bg-white text-blue-700 shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-white bg-white/60 backdrop-blur-md px-4 py-[9px] rounded-xl text-[13px] font-bold focus:outline-none focus:border-blue-400 text-gray-700 shadow-sm transition-all cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              {/* View Toggle */}
              <div className="hidden sm:flex gap-1 bg-white/40 backdrop-blur-md p-1.5 rounded-xl border border-white/60 shadow-sm">
                <button className="p-1.5 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-white/50 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </button>
                <button className="p-1.5 rounded-lg bg-white shadow-sm text-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-32 bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 shadow-lg">
            <svg className="w-20 h-20 mx-auto mb-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <p className="text-2xl font-bold text-gray-800 mb-2">No properties align with your search</p>
            <p className="text-gray-500 font-medium">Try adjusting your filters, location, or budget constraints.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => {
              const isSaved = savedProperties.includes(property.id);
              const isExpanded = expandedDescriptions[property.id];
              const shortDesc = property.description.slice(0, 90) + "...";

              return (
                <div
                  key={property.id}
                  className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[2rem] overflow-hidden hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 flex flex-col group"
                >
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden bg-gray-100 p-3 pb-0 rounded-t-[2rem]">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-3 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl pointer-events-none" />

                    {property.tag && (
                      <span className={`absolute top-6 left-6 ${tagColors[property.tag] || "bg-blue-600"} text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full tracking-wider uppercase shadow-md`}>
                        {property.tag}
                      </span>
                    )}

                    <button
                      onClick={() => toggleSave(property.id)}
                      className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
                        isSaved ? "bg-red-500 text-white hover:bg-red-600" : "bg-white/90 backdrop-blur-md text-gray-500 hover:bg-white hover:text-red-500"
                      }`}
                    >
                      <svg
                        className="w-5 h-5 transition-transform hover:scale-110"
                        fill={isSaved ? "currentColor" : "none"}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>

                    {/* Status badge */}
                    <span className={`absolute bottom-4 right-6 text-[11.5px] font-bold px-3 py-1.5 rounded-full shadow-md ${
                      property.status === "Ready" ? "bg-emerald-500 text-white" : "bg-amber-500 text-white"
                    }`}>
                      {property.status}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Price */}
                    <h2 className="text-[24px] font-extrabold text-gray-900 mb-1 tracking-tight">{property.price}</h2>

                    {/* Title */}
                    <h3 className="text-[14.5px] font-bold text-gray-800 mb-3 line-clamp-2 leading-snug">
                      {property.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-500 text-[13px] mb-5 font-medium">
                      <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="truncate">{property.location}</span>
                    </div>

                    {/* Specs Container - Glass Style */}
                    <div className="flex items-center justify-between text-[13px] text-gray-700 mb-5 font-bold bg-white/40 p-3 rounded-xl border border-white/60 shadow-sm">
                      {property.beds > 0 ? (
                        <span className="flex items-center gap-1.5">
                          <span className="text-lg">🛏️</span> {property.beds}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5"><span className="text-lg">🛏️</span> Studio</span>
                      )}
                      <div className="w-px h-4 bg-gray-300"></div>
                      <span className="flex items-center gap-1.5">
                        <span className="text-lg">🛁</span> {property.baths}
                      </span>
                      <div className="w-px h-4 bg-gray-300"></div>
                      <span className="flex items-center gap-1.5">
                        <span className="text-lg">📐</span> {property.sqft} sqft
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-[13px] leading-relaxed mb-6 flex-1 font-medium">
                      {isExpanded ? property.description : shortDesc}
                      <button
                        onClick={() => toggleDescription(property.id)}
                        className="text-blue-600 hover:text-blue-800 ml-1 font-bold transition-colors"
                      >
                        {isExpanded ? "less" : "more"}
                      </button>
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-[13px] font-bold transition-all shadow-md shadow-blue-500/20">
                        Book Viewing
                      </button>
                      <button className="flex items-center justify-center border border-gray-200 px-4 py-3 rounded-xl text-[13px] font-bold bg-white hover:border-gray-300 hover:bg-gray-50 transition-all text-gray-700 shadow-sm">
                        Call
                      </button>
                      <button className="flex items-center justify-center bg-green-500 hover:bg-green-600 px-4 py-3 rounded-xl text-white transition-all shadow-md shadow-green-500/20">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-14">
            <button className="bg-white/70 backdrop-blur-md border border-white hover:border-blue-400 hover:text-blue-700 text-gray-800 px-10 py-4 rounded-xl text-[14px] font-extrabold transition-all shadow-lg hover:shadow-xl">
              Load More Properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PropertyBuy;
