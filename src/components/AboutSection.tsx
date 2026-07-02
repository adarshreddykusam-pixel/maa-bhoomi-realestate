import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Users, Award, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import office1 from '../assets/office_interior_1.png';
import office2 from '../assets/office_interior_2.png';
import office3 from '../assets/office_interior_3.png';
import founderPhoto from '../assets/founder.jpg';

export const AboutSection: React.FC = () => {
  const officePhotos = [office1, office2, office3];
  const [photoIndex, setPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % officePhotos.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + officePhotos.length) % officePhotos.length);
  };

  const stats = [
    { icon: <Award className="h-6 w-6 text-brand-green" />, count: '10+', label: 'Years of Experience' },
    { icon: <Users className="h-6 w-6 text-brand-pink" />, count: '850+', label: 'Happy Customers' },
    { icon: <ShieldCheck className="h-6 w-6 text-brand-purple" />, count: '100%', label: 'Clear Title Guarantee' },
    { icon: <Calendar className="h-6 w-6 text-brand-green" />, count: '24/7', label: 'Site Visits Arranged' }
  ];

  const values = [
    { title: 'CRDA Approvals Only', desc: 'We pre-verify all layout plans to ensure they strictly comply with AP CRDA standards, shielding you from any regulatory issues.' },
    { title: 'Legal Documentation Support', desc: 'Our in-house legal experts assist with link document checking, EC verification, and clean deed writing for registration.' },
    { title: 'Hassle-Free Bank Loans', desc: 'With our primary selling point being bank loan availability, we coordinates end-to-end with SBI, HDFC, and LIC Housing Finance.' },
    { title: 'Local Expertise', desc: 'Deep regional experience in Guntur city, Mangalagiri, and the proposed Amaravati Outer Ring Road (ORR) corridor.' }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 text-left">
            <span className="text-brand-green text-xs font-black uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy leading-tight mt-1 mb-6">
              Empowering Families to Invest in <span className="text-brand-green">Secured Land</span> Since 2016
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Founded in the heart of Guntur, **MAA Bhoomi Real Estate** started with a simple vision: to make real estate investments transparent, secure, and accessible for everyday families. We believe that investing in land is investing in your family's future health and wealth.
              </p>
              <p>
                Our core specialty lies in identifying premium residential plots, agricultural lands, and apartments in the rapidly growing **Amaravati Capital Region**—specifically along the proposed Outer Ring Road corridor. 
              </p>
              <p>
                We do not just sell properties; we handhold our buyers through the entire journey—from free site inspection transport, strict survey verification, bank loan approvals, legal vetting, to final registration at the Sub-Registrar office.
              </p>
            </div>

            {/* Telugu Tagline Quote */}
            <div className="border-l-4 border-brand-green bg-slate-50 p-4 rounded-r-xl mt-6 italic font-semibold text-brand-navy">
              <p className="text-telugu text-lg leading-normal">
                "రేపటి మీ భవిష్యత్తు కోసం ఈరోజే భూమిపై పెట్టుబడి పెట్టండి"
              </p>
              <p className="text-xs text-slate-500 mt-1 not-italic font-bold">— MAA Bhoomi Real Estate Creed</p>
            </div>
          </div>

          {/* Image & Stats grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-[16/10] rounded-3xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm relative group">
              <img 
                src={officePhotos[photoIndex]} 
                alt={`MAA Bhoomi Office Photo ${photoIndex + 1}`} 
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
              
              {/* Navigation buttons */}
              <button 
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors text-brand-navy cursor-pointer z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button 
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors text-brand-navy cursor-pointer z-10"
                aria-label="Next photo"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Dots indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {officePhotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPhotoIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                      photoIndex === i ? 'bg-brand-green w-3' : 'bg-white/60'
                    }`}
                    aria-label={`Go to photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center gap-1">
                {stat.icon}
                <span className="text-xl sm:text-2xl font-black text-brand-navy mt-1">{stat.count}</span>
                <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Founder's Story Section */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-16 mb-20 text-left">
          <div className="md:col-span-4 shrink-0 rounded-2xl overflow-hidden border-4 border-white shadow-md max-w-sm mx-auto">
            <img 
              src={founderPhoto} 
              alt="Founder of MAA Bhoomi Real Estate" 
              className="w-full h-full object-cover aspect-[4/5] object-top"
            />
          </div>
          <div className="md:col-span-8 flex flex-col gap-4">
            <div>
              <span className="text-brand-pink text-xs font-black uppercase tracking-widest">Leadership</span>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-navy mt-1">Meet Our Founder</h3>
              <p className="text-sm font-extrabold text-brand-green uppercase tracking-wider mt-1">Visionary & Regional Expert</p>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Starting his journey in real estate back in <strong>2010</strong>, our founder has a deep connection to the land. Coming from a humble village background, he brought with him a simple yet powerful conviction: to make land investment safe and transparent for everyday families.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Under his visionary leadership, MAA Bhoomi has successfully delivered over <strong>500+ verified plots and properties</strong>, securing bank loan assistances and clear title verification for families across Guntur and the Amaravati capital region. His hands-on experience and root-level understanding of land development have established MAA Bhoomi as a symbol of trust.
            </p>
            
            <div className="grid grid-cols-3 gap-4 border-t border-slate-200/60 pt-6 mt-2">
              <div>
                <span className="block text-2xl font-black text-brand-navy">500+</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Plots Delivered</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-brand-navy">2010</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Established Career</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-brand-navy">100%</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Clear Titles</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-slate-100 my-16" />

        {/* Company Core Values */}
        <div className="text-center">
          <span className="text-brand-pink text-xs font-black uppercase tracking-widest">Our Guiding Pillars</span>
          <h3 className="text-2xl sm:text-3xl font-black text-brand-navy mt-1 mb-12">Why Hundreds Trust MAA Bhoomi</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
              >
                <span className="w-10 h-10 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center shrink-0 mb-4">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <h4 className="font-extrabold text-brand-navy text-lg mb-2">{val.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mt-auto">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
