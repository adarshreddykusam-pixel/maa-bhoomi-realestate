import React from 'react';
import { testimonials } from '../data/testimonials';
import { ShieldCheck, Scale, Landmark, Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  
  const trustBadges = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-green" />,
      title: 'Verified CRDA Layouts',
      description: 'Every layout plot listed goes through thorough physical survey checks and APCRDA approval verification before we market it.'
    },
    {
      icon: <Scale className="h-6 w-6 text-brand-pink" />,
      title: 'Legal Vetting Support',
      description: 'Full assistance with registration, including legal verification of link documents, EC logs, and boundary demarcations.'
    },
    {
      icon: <Landmark className="h-6 w-6 text-brand-purple" />,
      title: 'Bank Loan Assistance',
      description: 'Our standout key selling point. We help you secure easy EMI loans from State Bank of India, HDFC, and LIC Housing Finance.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-green text-xs font-black uppercase tracking-widest">Built On Trust</span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mt-1 mb-4">Why Families Choose MAA Bhoomi</h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            We are dedicated to providing secured property deals with clear title assurance in Guntur and the Amaravati capital territory.
          </p>
        </div>

        {/* Section 1: Trust Indicators Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-left">
          {trustBadges.map((badge, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-4 items-start hover:-translate-y-1 transition-all duration-300"
            >
              <span className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-md">
                {badge.icon}
              </span>
              <div>
                <h3 className="font-extrabold text-brand-navy text-lg mb-1">{badge.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-100 my-16" />

        {/* Section 2: Real Client Testimonials Grid */}
        <div>
          <div className="text-center mb-12">
            <span className="text-brand-pink text-xs font-black uppercase tracking-widest">Client Testimonials</span>
            <h3 className="text-2xl sm:text-3xl font-black text-brand-navy mt-1">What Our Buyers Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {testimonials.map((test) => (
              <div 
                key={test.id}
                className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden flex flex-col justify-between"
              >
                {/* Quote watermark icon */}
                <Quote className="absolute right-6 top-6 h-12 w-12 text-brand-navy/5 shrink-0" />
                
                <div className="relative z-10 flex flex-col gap-4">
                  {/* Star rating */}
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Review Content */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
                    "{test.content}"
                  </p>
                </div>

                {/* Reviewer details */}
                <div className="mt-6 pt-6 border-t border-slate-200/50 flex items-center gap-3 relative z-10">
                  {/* Default avatar circle representing initial */}
                  <span className="w-10 h-10 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-black text-sm">
                    {test.name.charAt(0)}
                  </span>
                  <div>
                    <h4 className="font-extrabold text-brand-navy text-sm leading-snug">{test.name}</h4>
                    <p className="text-slate-500 text-xs mt-0.5">{test.role} • <span className="font-semibold text-brand-green">{test.location}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
