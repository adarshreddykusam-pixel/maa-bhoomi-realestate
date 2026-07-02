import React from 'react';
import { Landmark, Trees, Building2, Home, LandmarkIcon, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onEnquireClick?: (category: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquireClick }) => {
  
  const handleEnquire = (category: string) => {
    if (onEnquireClick) {
      onEnquireClick(category);
    } else {
      window.location.hash = `#contact?interest=${encodeURIComponent(category)}`;
    }
  };

  const services = [
    {
      id: 'srv-1',
      title: 'CRDA Plots',
      icon: <Landmark className="h-8 w-8" />,
      colorClass: 'bg-brand-pink/10 text-brand-pink border-brand-pink/20',
      badgeColor: 'bg-brand-pink text-white',
      accentColor: '#E85C6B',
      tagline: 'Secured Capital City Layouts',
      description: 'Fully approved residential layout plots within the Andhra Pradesh Capital Region Development Authority (APCRDA) masterplan. Featuring fully completed infrastructure such as wide blacktop roads, underground cabling, water pipelines, streetlights, and gated archways.',
      points: [
        '100% legal title clear check',
        'Immediate layout registration',
        'High-appreciation zones near highways',
        'Pre-approved bank loan options available'
      ]
    },
    {
      id: 'srv-2',
      title: 'Farm Lands',
      icon: <Trees className="h-8 w-8" />,
      colorClass: 'bg-brand-purple/10 text-brand-purple border-brand-purple/20',
      badgeColor: 'bg-brand-purple text-white',
      accentColor: '#6C5FC7',
      tagline: 'Fertile Agro-Investment Plots',
      description: 'Own beautiful, high-yield agricultural lands and managed mini-farm plots around Guntur and the Outer Ring Road corridor. Ideal for building weekend farmhouses, organic cultivation, or secure capital asset growth.',
      points: [
        'Red soil / clay fertile terrains',
        '24/7 borewell water accessibility',
        'Sandalwood, mango & teak plantations',
        'Secure boundary fencing & farm maintenance'
      ]
    },
    {
      id: 'srv-3',
      title: 'Apartments',
      icon: <Building2 className="h-8 w-8" />,
      colorClass: 'bg-brand-navy/10 text-brand-navy border-brand-navy/20',
      badgeColor: 'bg-brand-navy text-white',
      accentColor: '#1A2B5C',
      tagline: 'Modern Urban Living Flats',
      description: 'Reputed builder apartments featuring 2 BHK and 3 BHK configurations. Located in premium residential hotspots of Guntur city like Gorantla, Arundalpet, and Amaravati bypass roads. Excellent ventilation and top-tier amenities.',
      points: [
        'Gated community security systems',
        '100% Vastu compliance designs',
        'Dedicated backup generators & elevators',
        'Municipal Krishna water connectivity'
      ]
    },
    {
      id: 'srv-4',
      title: 'Independent Houses',
      icon: <Home className="h-8 w-8" />,
      colorClass: 'bg-brand-green/10 text-brand-green border-brand-green/20',
      badgeColor: 'bg-brand-green text-white',
      accentColor: '#6FBE44',
      tagline: 'Stand-alone Villas & Homes',
      description: 'Exclusive independent bungalows and duplex villas built on premium plots. Enjoy privacy, private garden spaces, overhead water tanks, and top-class teakwood finishing in highly residential layouts.',
      points: [
        'Private compound walls & borewells',
        'Double-storey configuration options',
        'Strategic location close to NH-16 bypass',
        'Modular kitchens & semi-furnished setups'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-green text-xs font-black uppercase tracking-widest">Our Core Competencies</span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mt-1 mb-4">Professional Real Estate Services</h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            We focus exclusively on Guntur and the Amaravati capital region, bringing verified land deals directly to your family.
          </p>
        </div>

        {/* Services List Details */}
        <div className="flex flex-col gap-12">
          {services.map((srv, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={srv.id}
                className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Visual block */}
                <div className={`lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl border text-center ${srv.colorClass} ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <span className="p-4 bg-white rounded-full shadow-md text-brand-navy">
                    {srv.icon}
                  </span>
                  <h3 className="text-2xl font-black text-brand-navy mt-4 mb-1">{srv.title}</h3>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-70 mb-3">{srv.tagline}</span>
                  
                  {srv.title === 'CRDA Plots' && (
                    <div className="mt-2 inline-flex items-center gap-1 bg-brand-navy text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                      <LandmarkIcon className="h-3 w-3 text-brand-green" /> Bank Loan Pinned
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className={`lg:col-span-8 text-left flex flex-col gap-4 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <h4 className="text-xl font-bold text-brand-navy">Detailed Description</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                    {srv.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold">
                        <CheckCircle2 className="h-4 w-4 text-brand-green shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleEnquire(srv.title)}
                      className="bg-brand-navy hover:bg-brand-navy/95 text-white font-extrabold py-3 px-6 rounded-xl text-sm transition-all"
                    >
                      Enquire About {srv.title}
                    </button>
                    <a
                      href="tel:+919154321444"
                      className="flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-300 text-brand-navy font-bold py-3 px-6 rounded-xl text-sm hover:bg-slate-50 transition-all"
                    >
                      Call Advisor
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
