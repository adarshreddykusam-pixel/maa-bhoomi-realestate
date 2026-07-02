import React, { useState, useEffect } from 'react';
import { properties } from '../data/properties';
import type { Property } from '../data/properties';
import { PropertyCard } from './PropertyCard';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface PropertiesSectionProps {
  onViewDetails: (property: Property) => void;
  initialTypeFilter?: string;
}

export const PropertiesSection: React.FC<PropertiesSectionProps> = ({ 
  onViewDetails, 
  initialTypeFilter = 'all' 
}) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchLocation, setSearchLocation] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<number>(200); // Max budget in Lakhs

  // Initialize filter if query param changes
  useEffect(() => {
    if (initialTypeFilter) {
      setSelectedType(initialTypeFilter);
    }
  }, [initialTypeFilter]);

  const typePills = [
    { label: 'All Listings', value: 'all' },
    { label: 'CRDA Plots', value: 'plot' },
    { label: 'Farm Lands', value: 'farmland' },
    { label: 'Apartments', value: 'apartment' },
    { label: 'Houses / Villas', value: 'house' }
  ];

  // Filtering Logic
  const filteredProperties = properties.filter((prop) => {
    // Type Filter
    const matchesType = selectedType === 'all' || prop.type === selectedType;
    
    // Search Location Filter
    const matchesLocation = prop.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
                            prop.title.toLowerCase().includes(searchLocation.toLowerCase()) ||
                            prop.subRegion.toLowerCase().includes(searchLocation.toLowerCase());
    
    // Price Filter (Converting crore values to Lakhs for mathematical filtering)
    // e.g. priceNumeric is already in Lakhs (e.g. 1.2 Crores = 120 Lakhs)
    const matchesPrice = prop.priceNumeric <= priceRange;

    return matchesType && matchesLocation && matchesPrice;
  });

  // Sorting Logic
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === 'price-asc') {
      return a.priceNumeric - b.priceNumeric;
    }
    if (sortBy === 'price-desc') {
      return b.priceNumeric - a.priceNumeric;
    }
    // Default: Featured first, then by ID
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.id.localeCompare(b.id);
  });

  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-pink text-xs font-black uppercase tracking-widest">Available Listings</span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mt-1 mb-4">Find Your Perfect Investment</h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Browse through our verified portfolio of residential plots, farm fields, and properties in Guntur/Amaravati. All with bank loan assistance.
          </p>
        </div>

        {/* Filter & Search Bar Panel */}
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-6 mb-8 text-left">
          
          {/* Row 1: Search Inputs & Sort */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by location (e.g. Mangalagiri, Rayapudi, Guntur ORR)..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-green font-semibold text-brand-navy placeholder:text-slate-400 placeholder:font-normal transition-colors"
              />
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-3 relative">
              <ArrowUpDown className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-green font-bold text-slate-700 bg-white transition-colors cursor-pointer appearance-none"
              >
                <option value="featured">Sort: Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            {/* Price Budget Slider */}
            <div className="md:col-span-3 flex flex-col gap-1.5 px-1">
              <div className="flex justify-between text-xs font-bold text-slate-500 uppercase">
                <span>Max Budget</span>
                <span className="text-brand-green font-extrabold font-sans">
                  {priceRange >= 200 ? 'No Limit' : `₹${priceRange} Lakhs`}
                </span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="200" 
                step="5"
                value={priceRange} 
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-brand-green h-1.5 bg-slate-100 rounded-lg cursor-pointer"
              />
            </div>

          </div>

          {/* Row 2: Type Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {typePills.map((pill) => (
              <button
                key={pill.value}
                onClick={() => setSelectedType(pill.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold tracking-wide transition-all duration-200 cursor-pointer ${
                  selectedType === pill.value
                    ? 'bg-brand-green text-white shadow-md shadow-brand-green/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-brand-navy border border-slate-200/50'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

        </div>

        {/* Listings Grid */}
        {sortedProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProperties.map((property) => (
              <div key={property.id} className="h-full">
                <PropertyCard property={property} onViewDetails={onViewDetails} />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-100 p-12 text-center max-w-lg mx-auto shadow-sm">
            <SlidersHorizontal className="h-10 w-10 text-slate-300 mx-auto mb-3" />
            <h3 className="font-extrabold text-brand-navy text-lg mb-1">No Matching Properties Found</h3>
            <p className="text-slate-500 text-sm mb-4">Try clearing your filters or location keywords to view all our Guntur and Amaravati listings.</p>
            <button
              onClick={() => {
                setSelectedType('all');
                setSearchLocation('');
                setPriceRange(200);
              }}
              className="bg-brand-navy text-white hover:bg-brand-navy/90 text-xs font-black px-4 py-2.5 rounded-lg transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default PropertiesSection;
