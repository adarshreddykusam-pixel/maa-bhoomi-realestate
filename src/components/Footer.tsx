import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Landmark, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavClick?: (hash: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const handleNav = (hash: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavClick) {
      onNavClick(hash);
    } else {
      window.location.hash = hash;
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-slate-800 text-left relative overflow-hidden">
      {/* Background overlay details */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Company Profile */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Logo variant="full" theme="dark" className="h-14" />
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              MAA Bhoomi Real Estate is a premier property marketing and consultancy firm based in Guntur, serving investors seeking approved plots and lands in the Amaravati Outer Ring Road corridor.
            </p>
            <div className="border-l-2 border-brand-green pl-3.5 italic text-xs text-brand-green font-bold text-telugu leading-normal">
              "రేపటి మీ భవిష్యత్తు కోసం ఈరోజే భూమిపై పెట్టుబడి పెట్టండి"
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-extrabold text-white text-base mb-4 tracking-wider uppercase">Useful Links</h4>
            <ul className="flex flex-col gap-2.5 text-slate-300 text-sm font-semibold">
              <li>
                <a href="#home" onClick={(e) => handleNav('#home', e)} className="hover:text-brand-green transition-colors">Home Page</a>
              </li>
              <li>
                <a href="#properties" onClick={(e) => handleNav('#properties', e)} className="hover:text-brand-green transition-colors">Properties Portfolio</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNav('#services', e)} className="hover:text-brand-green transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNav('#about', e)} className="hover:text-brand-green transition-colors">About Agency</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNav('#contact', e)} className="hover:text-brand-green transition-colors">Contact Support</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-extrabold text-white text-base mb-2 tracking-wider uppercase">Office Contact Details</h4>
            
            <div className="flex flex-col gap-3 text-slate-300 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-xs sm:text-sm">
                  MAA Bhoomi Real Estate,<br />
                  Opposite ITC, Beside Union Bank,<br />
                  GT Road, Guntur, AP - 522004
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-brand-pink shrink-0" />
                <div className="font-extrabold text-xs sm:text-sm flex flex-col">
                  <a href="tel:+919154321444" className="hover:text-brand-green transition-colors">9154321444</a>
                  <a href="tel:+919154321444" className="hover:text-brand-green transition-colors">8500234889 (Backup)</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-brand-pink shrink-0" />
                <a href="mailto:maabhoomirealestate@gmail.com" className="hover:text-brand-green transition-colors font-extrabold text-xs sm:text-sm">
                  maabhoomirealestate@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="bg-brand-pink/20 text-brand-pink text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-brand-pink/20">
                CRDA Specialist
              </span>
              <span className="bg-brand-green/20 text-brand-green text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-brand-green/20 flex items-center gap-1">
                <Landmark className="h-3 w-3" /> Loans Approved
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brand-green flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                aria-label="Facebook Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/maa_bhoomi_developers/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brand-green flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© 2026 MAA Bhoomi Real Estate. All rights reserved. Designed for trustworthy investments.</p>
          <div className="flex items-center gap-6">
            <a href="#about" onClick={(e) => handleNav('#about', e)} className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#contact" onClick={(e) => handleNav('#contact', e)} className="hover:text-white transition-colors">Privacy Policy</a>
            
            {/* Back to top button */}
            <button 
              onClick={handleScrollTop}
              className="bg-brand-green/20 hover:bg-brand-green text-brand-green hover:text-white p-2.5 rounded-full shadow transition-all duration-300 focus:outline-none cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
