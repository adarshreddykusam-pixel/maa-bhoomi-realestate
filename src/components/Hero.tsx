import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface HeroProps {
  onViewPropertiesClick?: () => void;
}

const IMAGES = [
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80', // Agriculture/farmlands (sunset field)
  'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1600&q=80', // Villas & houses
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80'  // Apartments complexes
];

export const Hero: React.FC<HeroProps> = ({ onViewPropertiesClick }) => {

  const [bgIndex, setBgIndex] = useState(0);
  const [prevBgIndex, setPrevBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => {
        setPrevBgIndex(prev);
        return (prev + 1) % IMAGES.length;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const whatsappNumber = '9154321444';
  const waMessage = encodeURIComponent(
    "Hello MAA Bhoomi Real Estate, I am interested in inquiring about plots and properties near the Amaravati Outer Ring Road region."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

  const handlePropertiesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onViewPropertiesClick) {
      onViewPropertiesClick();
    } else {
      window.location.hash = '#properties';
    }
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-slate-950 overflow-hidden">
      {/* Background Background Images Slideshow with Crossfade */}
      <div className="absolute inset-0 z-0">
        {IMAGES.map((img, idx) => {
          const isActive = bgIndex === idx;
          const isPrev = prevBgIndex === idx;
          return (
            <div
              key={idx}
              className="absolute inset-0 bg-cover bg-center transition-all ease-in-out animate-kenburns"
              style={{ 
                backgroundImage: `url('${img}')`,
                opacity: isActive || isPrev ? 1 : 0,
                zIndex: isActive ? 2 : isPrev ? 1 : 0,
                transform: isActive ? 'scale(1.05)' : 'scale(1)',
                transition: 'opacity 1200ms ease-in-out, transform 5000ms linear'
              }}
            />
          );
        })}
      </div>
      
      {/* Neutral dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent z-10" />

      {/* Hero Content container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="max-w-3xl text-left">
          {/* Badge Callout */}
          <div className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green border border-brand-green/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-6 backdrop-blur-sm shadow-md shadow-brand-green/10">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
            Capital Amaravati & Greater Guntur Specialist
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 tracking-normal drop-shadow-md">
            Plots &amp; Farmlands in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">Amaravati</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-2xl leading-relaxed font-semibold">
            Discover premium real estate opportunities in the rapidly expanding capital region of Andhra Pradesh. At Maa Bhoomi Real Estate, we specialize in offering a wide range of verified listings designed to suit your investment and residential needs. Whether you are searching for premium CRDA-approved residential plots ready for immediate home construction, fertile agricultural farmland for sustainable agro-investments, or strategic commercial properties positioned along the booming Amaravati Outer Ring Road (ORR) corridor, we have the perfect choice for you. Every listing in our portfolio undergoes a strict legal validation process to guarantee clear titles and absolute peace of mind for you and your family. Additionally, we provide comprehensive bank loan assistance, working hand-in-hand with top financial institutions like SBI, HDFC, and LIC HFL to secure quick approvals and flexible repayment options. With our deep local expertise in the Amaravati and Greater Guntur regions, we help you make informed decisions to grow your capital and secure your future.
          </p>

          {/* Interactive Hero Cards for Quick Filter */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl mb-8">
            {[
              { num: '01', title: 'CRDA Plots', hash: '#properties?type=plot', color: 'border-brand-pink/20 hover:border-brand-pink/60 text-brand-pink bg-brand-pink/10 hover:bg-brand-pink/20 shadow-sm shadow-brand-pink/10' },
              { num: '02', title: 'Farm Lands', hash: '#properties?type=farmland', color: 'border-brand-purple/20 hover:border-brand-purple/60 text-brand-purple bg-brand-purple/10 hover:bg-brand-purple/20 shadow-sm shadow-brand-purple/10' },
              { num: '03', title: 'Apartments', hash: '#properties?type=apartment', color: 'border-brand-green/20 hover:border-brand-green/60 text-brand-green bg-brand-green/10 hover:bg-brand-green/20 shadow-sm shadow-brand-green/10' },
              { num: '04', title: 'Ind. Houses', hash: '#properties?type=house', color: 'border-white/20 hover:border-white/60 text-white bg-white/10 hover:bg-white/20 shadow-sm shadow-white/5' },
            ].map((card) => (
              <a
                key={card.num}
                href={card.hash}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = card.hash;
                }}
                className={`flex flex-col p-3.5 rounded-xl border text-center transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm cursor-pointer ${card.color}`}
              >
                <span className="text-[9px] uppercase font-bold tracking-widest opacity-60">Service {card.num}</span>
                <span className="text-sm font-black whitespace-nowrap mt-1">{card.title}</span>
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#properties"
              onClick={handlePropertiesClick}
              className="flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white font-extrabold px-8 py-4 rounded-xl text-base shadow-xl shadow-brand-green/10 hover:shadow-brand-green/25 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              <span>View Properties</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-4 rounded-xl text-base shadow-md transition-all duration-300 hover:scale-[1.03]"
            >
              {/* WhatsApp Icon */}
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.53 1.978 14.063.953 11.998.953c-5.444 0-9.87 4.373-9.874 9.8.001 2.01.536 3.97 1.55 5.706l-1.018 3.714 3.992-1.019zm13.14-8.069c-.3-.15-1.774-.875-2.049-.976-.275-.1-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.488-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.889 6.21 9.24 4.637 8.97 3.98c-.262-.634-.528-.546-.723-.556-.188-.01-.403-.011-.617-.011-.215 0-.564.081-.86.403-.296.322-1.13 1.102-1.13 2.688 0 1.587 1.155 3.118 1.316 3.334.16.215 2.274 3.472 5.509 4.872.77.333 1.37.532 1.839.68.773.245 1.478.211 2.035.127.62-.093 1.775-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            <a
              href="tel:+919154321444"
              className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/50 text-white font-bold px-6 py-4 rounded-xl text-base backdrop-blur-sm transition-all cursor-pointer"
            >
              <Phone className="h-5 w-5 text-brand-green" />
              <span>Call Agency</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
