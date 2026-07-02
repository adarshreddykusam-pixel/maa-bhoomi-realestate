import React from 'react';
import type { Property } from '../data/properties';
import { Landmark, MapPin, Minimize, Compass } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  // Styling color matching target type
  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'plot':
        return 'bg-brand-pink/10 text-brand-pink border-brand-pink/20';
      case 'farmland':
        return 'bg-brand-purple/10 text-brand-purple border-brand-purple/20';
      case 'apartment':
        return 'bg-brand-green/10 text-brand-green border-brand-green/20';
      case 'house':
        return 'bg-brand-navy/10 text-brand-navy border-brand-navy/20';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all-300 flex flex-col group h-full cursor-pointer"
      onClick={() => onViewDetails(property)}
    >
      {/* Property Image Section */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Type Badge */}
        <span className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-extrabold border ${getTypeStyles(property.type)}`}>
          {property.typeLabel}
        </span>

        {/* Video Tour Indicator overlay */}
        {property.video && (
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
            <span className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="h-5 w-5 fill-current ml-0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-sm text-white text-[10px] font-black px-2 py-0.5 rounded tracking-wider uppercase flex items-center gap-1 border border-white/10">
              <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
              </svg>
              Video Tour
            </span>
          </div>
        )}

        {/* Bank Loan Callout Badge */}
        {property.bankLoanAvailable && !property.video && (
          <span className="absolute top-4 right-4 z-10 bg-brand-navy text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-md flex items-center gap-1 border border-white/10 uppercase tracking-wider">
            <Landmark className="h-3 w-3 text-brand-green" />
            Bank Loan Approved
          </span>
        )}
      </div>

      {/* Property Details Section */}
      <div className="p-5 flex flex-col flex-grow text-left">
        {/* Price & Title */}
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-xl sm:text-2xl font-black text-brand-green">{property.price}</span>
        </div>
        <h3 className="font-extrabold text-base sm:text-lg text-brand-navy line-clamp-2 leading-snug group-hover:text-brand-green transition-colors mb-3">
          {property.title}
        </h3>

        {/* Location Row */}
        <div className="flex items-start gap-1 text-slate-500 text-sm mb-4">
          <MapPin className="h-4.5 w-4.5 shrink-0 text-brand-pink mt-0.5" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        {/* Dimensions Summary */}
        <div className="grid grid-cols-2 gap-2 py-3 px-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs font-semibold text-slate-600 mb-5 mt-auto">
          <div className="flex items-center gap-1.5">
            <Minimize className="h-4 w-4 text-slate-400" />
            <span>{property.size}</span>
          </div>
          <div className="flex items-center gap-1.5 justify-end">
            <Compass className="h-4 w-4 text-slate-400" />
            <span>{property.facing} Facing</span>
          </div>
        </div>

        {/* View Details CTA */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(property);
          }}
          className="w-full text-center bg-slate-50 border border-slate-200 text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy font-bold py-2.5 px-4 rounded-xl text-sm transition-all duration-300"
        >
          View Full Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
