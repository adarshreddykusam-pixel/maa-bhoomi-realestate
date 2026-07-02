import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  currentHash: string;
}

export const Header: React.FC<HeaderProps> = ({ currentHash }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to add glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', hash: '#home' },
    { label: 'Properties', hash: '#properties' },
    { label: 'Services', hash: '#services' },
    { label: 'About Us', hash: '#about' },
    { label: 'Contact Us', hash: '#contact' },
  ];

  const handleLinkClick = (hash: string) => {
    setIsMenuOpen(false);
    // Let the standard hash change trigger page state update
    window.location.hash = hash;
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-slate-100' 
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" onClick={() => handleLinkClick('#home')} className="flex-shrink-0">
            <Logo variant="full" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4 items-center">
            {navLinks.map((link) => {
              const isActive = currentHash === link.hash || (currentHash === '' && link.hash === '#home');
              return (
                <a
                  key={link.hash}
                  href={link.hash}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.hash);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-semibold tracking-wide transition-all duration-200 ${
                    isActive 
                      ? 'text-brand-green bg-brand-green/10 border-b-2 border-brand-green rounded-b-none' 
                      : 'text-brand-navy hover:text-brand-green hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Header Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919154321444"
              className="flex items-center gap-2 bg-brand-navy hover:bg-brand-navy/90 text-white font-bold px-4 py-2.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              <span>9154321444</span>
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:+919154321444"
              className="bg-brand-green text-white p-2 rounded-full shadow-md flex items-center justify-center hover:bg-brand-green/90 transition-colors"
              aria-label="Call MAA Bhoomi Real Estate"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-navy p-2 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-1 bg-white">
          {navLinks.map((link) => {
            const isActive = currentHash === link.hash || (currentHash === '' && link.hash === '#home');
            return (
              <a
                key={link.hash}
                href={link.hash}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.hash);
                }}
                className={`block px-4 py-3 rounded-lg text-base font-bold tracking-wide transition-all ${
                  isActive 
                    ? 'text-brand-green bg-brand-green/10 border-l-4 border-brand-green' 
                    : 'text-brand-navy hover:bg-slate-50 hover:text-brand-green'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-4 px-4 flex flex-col gap-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Need Assistance?</p>
            <a
              href="tel:+919154321444"
              className="flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy/95 text-white font-bold py-3 px-4 rounded-xl shadow-md text-base transition-all"
            >
              <Phone className="h-5 w-5" />
              <span>Call: 9154321444</span>
            </a>
            <a
              href="tel:+919154321444"
              className="flex items-center justify-center gap-2 border-2 border-brand-navy/20 text-brand-navy font-bold py-3 px-4 rounded-xl hover:bg-slate-50 text-base transition-all"
            >
              <Phone className="h-5 w-5" />
              <span>Call: 8500234889 (Backup)</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
