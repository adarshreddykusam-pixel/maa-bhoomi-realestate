import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import PropertiesSection from './components/PropertiesSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BankLoanRibbon from './components/BankLoanRibbon';
import PropertyDetailModal from './components/PropertyDetailModal';
import PropertyCard from './components/PropertyCard';
import LoanEstimatorSection from './components/LoanEstimatorSection';
import { properties } from './data/properties';
import type { Property } from './data/properties';
import { Compass, MapPin, LandmarkIcon } from 'lucide-react';
import './App.css';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Handle routing based on window location hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentHash(hash);
      
      // Parse query parameters for filters (e.g. #properties?type=plot)
      if (hash.includes('?')) {
        const [route, queryStr] = hash.split('?');
        const params = new URLSearchParams(queryStr);
        const type = params.get('type') || 'all';
        setTypeFilter(type);
        
        // Scroll to the properties section if we navigated to properties
        if (route === '#properties') {
          setTimeout(() => {
            const el = document.getElementById('properties-view');
            el?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        setTypeFilter('all');
      }

      // Scroll back to top on page change (unless it's just a query scroll trigger)
      if (!hash.startsWith('#properties?')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger once on initial load
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamic SEO Metadata and Document Title Manager
  useEffect(() => {
    const route = currentHash.split('?')[0];
    let title = 'MAA Bhoomi Real Estate | CRDA Plots & Farm Land Amaravati-Guntur';
    let metaDesc = 'MAA Bhoomi Real Estate offers verified CRDA approved plots, agricultural farm lands, independent houses, and flats near Amaravati Outer Ring Road (ORR), Guntur. Bank loans available.';

    switch (route) {
      case '#home':
        title = 'MAA Bhoomi Real Estate | CRDA Plots & Farm Land Amaravati-Guntur';
        break;
      case '#properties':
        title = 'Properties for Sale in Guntur & Amaravati | MAA Bhoomi Real Estate';
        metaDesc = 'Explore filterable property listings including residential plots, farmland, and apartments near Mangalagiri, Tenali road, and Amaravati. HDFC & SBI loan approved.';
        break;
      case '#services':
        title = 'CRDA Plots, Farmland, & Housing Services | MAA Bhoomi Real Estate';
        metaDesc = 'Our services: verified CRDA layouts, sandalwood farmlands, luxury apartments, and independent houses in AP capital region with bank loan support.';
        break;
      case '#about':
        title = 'About MAA Bhoomi Real Estate | Trustworthy Property Advisors Guntur';
        metaDesc = 'Learn about MAA Bhoomi Real Estate story, values, clear title guarantee, and years of experience serving Guntur and Amaravati regional buyers.';
        break;
      case '#contact':
        title = 'Contact MAA Bhoomi Real Estate | Book Site Inspection Guntur';
        metaDesc = 'Get in touch with MAA Bhoomi Real Estate advisors. Click to call 9154321444, chat on WhatsApp, or visit our office at GT Road, Guntur.';
        break;
    }

    document.title = title;
    
    // Update description meta tag dynamically
    const metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (metaDescriptionEl) {
      metaDescriptionEl.setAttribute('content', metaDesc);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metaDesc;
      document.head.appendChild(meta);
    }
  }, [currentHash]);

  const handleOpenDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailModalOpen(false);
    setSelectedProperty(null);
  };

  // Extract featured listings for Homepage display
  const featuredListings = properties.filter(p => p.featured);

  // Render the current view based on routing hash
  const renderView = () => {
    const route = currentHash.split('?')[0];

    switch (route) {
      case '#properties':
        return (
          <div id="properties-view">
            <PropertiesSection 
              onViewDetails={handleOpenDetails} 
              initialTypeFilter={typeFilter} 
            />
          </div>
        );
      case '#services':
        return <ServicesSection />;
      case '#about':
        return <AboutSection />;
      case '#contact':
        return (
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ContactForm />
              
              {/* Embedded Google Map Placeholder */}
              <div className="mt-16 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <h4 className="font-extrabold text-brand-navy text-lg mb-4 text-left">Our Office Location</h4>
                <div className="w-full h-96 rounded-2xl bg-slate-100 overflow-hidden relative border border-slate-200">
                  <iframe 
                    title="MAA Bhoomi Real Estate Office Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.176465609349!2d80.42871431481358!3d16.30252568910079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75be48995a9b%3A0x7d022b7a95079a49!2sITC%20Limited!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      case '#home':
      default:
        return (
          <div>
            {/* 1. Hero Landing Block */}
            <Hero />

            {/* 2. Bank Loan Available Highlight Banner */}
            <section className="bg-brand-navy text-white py-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full translate-x-12 -translate-y-12" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-brand-pink text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md mb-3 border border-white/10">
                    <LandmarkIcon className="h-3.5 w-3.5 text-brand-green" /> BANK LOANS APPROVED • LP NO: 4/2025
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black mb-1">
                    Bank Loan Available on All CRDA Approved Layouts & Flats
                  </h3>
                  <h4 className="text-lg font-bold text-brand-green mb-3 text-telugu">
                    బ్యాంక్ లోన్ సదుపాయం అందుబాటులో ఉంది (1168/GNT/DPMS)
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Our plots and projects are fully scrutinized and approved by India's top lending institutions (SBI, HDFC Bank, ICICI, LIC HFL). We assist with compiling documents, verification tracking, and securing easy interest rate EMIs.
                  </p>
                </div>
                
                <a
                  href="#contact"
                  className="bg-brand-green hover:bg-brand-green/90 text-white font-extrabold px-8 py-4 rounded-xl text-base shadow-xl transition-all-300 hover:scale-105 whitespace-nowrap"
                >
                  Apply For Loan Support
                </a>
              </div>
            </section>

            {/* 3. Featured Property Listings */}
            <section className="py-16 md:py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 text-left gap-4">
                  <div>
                    <span className="text-brand-green text-xs font-black uppercase tracking-widest">Selected Portfolios</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-brand-navy mt-1">Featured Properties</h3>
                  </div>
                  <a
                    href="#properties"
                    className="text-brand-navy hover:text-brand-green text-sm font-extrabold flex items-center gap-1.5 border-b border-brand-navy hover:border-brand-green pb-1"
                  >
                    View All Listings
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredListings.map((property) => (
                    <div key={property.id} className="h-full">
                      <PropertyCard property={property} onViewDetails={handleOpenDetails} />
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* 4. Bank Loan Estimator calculator */}
            <LoanEstimatorSection />

            {/* 5. Why Choose Us (Trust pillars) & Testimonials */}
            <Testimonials />

            {/* 5. Map & Regional Corridor Highlight */}
            <section className="py-16 bg-slate-50 border-t border-slate-100 text-left">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Text corridor context */}
                  <div className="lg:col-span-6 flex flex-col gap-5">
                    <span className="text-brand-pink text-xs font-black uppercase tracking-widest">Regional Advantage</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-brand-navy">
                      Strategic Amaravati Outer Ring Road (ORR) Zone
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Andhra Pradesh's capital development zone is expanding rapidly along the proposed 180-feet wide Outer Ring Road (ORR). Pinned next to massive infrastructure projects like the AIIMS Hospital, SRM and VIT Universities, and IT parks in Mangalagiri, this region promises maximum return on investment.
                    </p>

                    <div className="flex flex-col gap-3 font-semibold text-slate-700 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4.5 w-4.5 text-brand-green" />
                        <span>Mangalagiri Bypass — 5 minutes drive</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4.5 w-4.5 text-brand-pink" />
                        <span>AP Secretariat & Assembly corridor — 12 minutes drive</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4.5 w-4.5 text-brand-purple" />
                        <span>Vijayawada highway connectivity — 10 minutes drive</span>
                      </div>
                    </div>

                    <div className="mt-2">
                      <a
                        href="#properties"
                        className="bg-brand-navy hover:bg-brand-navy/95 text-white font-extrabold py-3 px-6 rounded-xl text-sm transition-all shadow-md inline-block"
                      >
                        Explore Plots in ORR Zone
                      </a>
                    </div>
                  </div>

                  {/* Interactive card showing region advantages */}
                  <div className="lg:col-span-6">
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg relative overflow-hidden flex flex-col gap-4">
                      {/* Map graphics overlay representation */}
                      <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center p-6 text-center relative">
                        {/* Styled SVG diagram representing land layout corridor */}
                        <svg className="w-full h-full text-brand-green opacity-20 absolute inset-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3" fill="none" />
                          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" />
                          <path d="M 10 10 Q 50 60 90 90" stroke="currentColor" strokeWidth="2" fill="none" />
                          <path d="M 90 10 Q 50 60 10 90" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        </svg>

                        <Compass className="h-10 w-10 text-brand-green animate-spin-slow mb-2" />
                        <h4 className="font-extrabold text-brand-navy text-sm sm:text-base">Amaravati Capital Corridor Layout Map</h4>
                        <p className="text-slate-500 text-xs mt-1 max-w-xs">Connecting Vijayawada, Guntur, and Mangalagiri Bypass roads in a single high-growth triangle.</p>
                        
                        <span className="mt-4 bg-brand-green text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full border border-white/20">
                          High Growth Zone R1
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-xs font-bold text-slate-500 py-1">
                        <span>✓ CRDA Approved Zone</span>
                        <span>✓ Clear Boundaries Plotted</span>
                        <span>✓ Land Registration Ready</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans antialiased text-brand-navy selection:bg-brand-green/20 selection:text-brand-navy">
      {/* Pinned overlay widgets */}
      <BankLoanRibbon />
      <WhatsAppButton />

      {/* Header element */}
      <Header currentHash={currentHash} />

      {/* Dynamic View container */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Footer element */}
      <Footer />

      {/* Property Details Modal */}
      <PropertyDetailModal 
        property={selectedProperty} 
        isOpen={isDetailModalOpen} 
        onClose={handleCloseDetails} 
      />
    </div>
  );
}

export default App;
