import React, { useState, useEffect } from 'react';
import type { Property } from '../data/properties';
import { X, Landmark, Compass, Minimize, MapPin, Phone, MessageCircle, Send } from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, isOpen, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mediaType, setMediaType] = useState<'photo' | 'video'>('photo');

  // Reset media type state when property changes
  useEffect(() => {
    if (property) {
      setMediaType(property.video ? 'video' : 'photo');
      setActiveImageIndex(0);
    }
  }, [property]);
  
  // Enquiry Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('I am interested in this property. Please share layout details, survey numbers and pricing terms.');
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!isOpen || !property) return null;

  // Contact details
  const whatsappNumber = '9154321444';
  const agencyPhone = '9154321444';

  // Build pre-filled WhatsApp message for lead redirection
  const getWhatsAppMessageUrl = () => {
    const text = `Hi MAA Bhoomi Real Estate, I am interested in: "${property.title}"
Location: ${property.location}
Price: ${property.price}
My Name: ${name || 'Interested Buyer'}
My Phone: ${phone || 'Not Shared'}
Notes: ${message}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    // Simulate submission and trigger success modal state
    setFormSubmitted(true);
    
    // Open WhatsApp immediately to bypass browser popup blockers
    window.open(getWhatsAppMessageUrl(), '_blank');
    
    // Reset form after a brief delay
    setTimeout(() => {
      setFormSubmitted(false);
      setName('');
      setPhone('');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div 
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col text-left transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon / Title Row */}
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold uppercase bg-brand-green/10 text-brand-green px-2.5 py-1 rounded-md">
              {property.typeLabel}
            </span>
            {property.bankLoanAvailable && (
              <span className="text-[10px] font-black uppercase bg-brand-navy text-white px-2 py-0.5 rounded flex items-center gap-1">
                <Landmark className="h-3 w-3 text-brand-green" /> Bank Loan Approved
              </span>
            )}
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600 focus:outline-none"
            aria-label="Close details"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Modal Core Contents */}
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-y-auto">
          
          {/* Left Column: Image/Video Gallery & Description */}
          <div className="flex flex-col gap-5">
            {/* Video/Photo Tab Switcher */}
            {property.video && (
              <div className="flex bg-slate-100 p-1 rounded-xl self-start gap-1">
                <button
                  type="button"
                  onClick={() => setMediaType('video')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                    mediaType === 'video' 
                      ? 'bg-brand-navy text-white shadow-sm' 
                      : 'text-slate-600 hover:text-brand-navy'
                  }`}
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                  Video Tour
                </button>
                <button
                  type="button"
                  onClick={() => setMediaType('photo')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                    mediaType === 'photo' 
                      ? 'bg-brand-navy text-white shadow-sm' 
                      : 'text-slate-600 hover:text-brand-navy'
                  }`}
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                  Photos ({property.images.length})
                </button>
              </div>
            )}

            {/* Active Display Media */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-100 shadow-sm flex items-center justify-center">
              {property.video && mediaType === 'video' ? (
                <video 
                  src={property.video} 
                  controls 
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <img 
                  src={property.images[activeImageIndex]} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Thumbnail selector */}
            {mediaType === 'photo' && property.images.length > 1 && (
              <div className="flex gap-2">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-brand-green scale-95 shadow-md' : 'border-slate-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Price & Title */}
            <div>
              <span className="text-2xl font-black text-brand-green">{property.price}</span>
              <h2 className="text-xl sm:text-2xl font-black text-brand-navy leading-tight mt-1 mb-3">
                {property.title}
              </h2>
              <div className="flex items-start gap-1 text-slate-500 text-sm">
                <MapPin className="h-4.5 w-4.5 shrink-0 text-brand-pink mt-0.5" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-black uppercase text-slate-400 tracking-wider mb-2">Description</h4>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {property.description}
              </p>
            </div>
            
            {/* Specific Specs */}
            {property.specifications && (
              <div>
                <h4 className="text-sm font-black uppercase text-slate-400 tracking-wider mb-3">Technical Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(property.specifications).map(([key, val]) => (
                    <div key={key} className="flex justify-between border-b border-slate-100 py-1.5 text-xs sm:text-sm">
                      <span className="text-slate-500 font-medium">{key}</span>
                      <span className="text-brand-navy font-bold text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Amenities & Enquiry Form */}
          <div className="flex flex-col gap-6">
            
            {/* Dimensions Overview Panel */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-sm font-bold text-slate-700">
              <div className="flex flex-col gap-1 p-2 bg-white rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">Plot/Built Size</span>
                <span className="flex items-center gap-1 text-brand-navy text-xs sm:text-sm">
                  <Minimize className="h-4.5 w-4.5 text-brand-green" />
                  {property.size}
                </span>
              </div>
              <div className="flex flex-col gap-1 p-2 bg-white rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">Facing Direction</span>
                <span className="flex items-center gap-1 text-brand-navy text-xs sm:text-sm">
                  <Compass className="h-4.5 w-4.5 text-brand-pink" />
                  {property.facing}
                </span>
              </div>
            </div>

            {/* Amenities Checklist */}
            <div>
              <h4 className="text-sm font-black uppercase text-slate-400 tracking-wider mb-3">Amenities & Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {property.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold">
                    <span className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-brand-green fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact buttons */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-3 text-center">Instant Mobile Inquiry</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:+91${agencyPhone}`}
                  className="flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy/95 text-white font-extrabold py-3 px-4 rounded-xl text-sm transition-all"
                >
                  <Phone className="h-4 w-4 text-brand-green" />
                  <span>Call Agent</span>
                </a>
                
                <a
                  href={getWhatsAppMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold py-3 px-4 rounded-xl text-sm transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="border border-slate-100 rounded-2xl p-5 md:p-6 bg-white shadow-sm">
              <h4 className="font-extrabold text-brand-navy text-base mb-4">Request Callback & Document Pack</h4>
              
              {formSubmitted ? (
                <div className="bg-brand-green/10 border border-brand-green/20 rounded-xl p-4 text-center">
                  <p className="text-brand-green font-bold text-sm">✓ Thank you for your inquiry!</p>
                  <p className="text-xs text-slate-600 mt-1">Connecting you to WhatsApp for direct agent assistance...</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
                  <div>
                    <label htmlFor="modal-name" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Your Name *</label>
                    <input 
                      type="text" 
                      id="modal-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Prasad Rao"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-brand-navy focus:outline-none focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-phone" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp/Phone Number *</label>
                    <input 
                      type="tel" 
                      id="modal-phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98480 22338"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-brand-navy focus:outline-none focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-msg" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Message / Requirements</label>
                    <textarea 
                      id="modal-msg"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-brand-navy focus:outline-none focus:border-brand-green resize-none"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white font-extrabold py-3 px-4 rounded-xl text-sm transition-all shadow-md shadow-brand-green/10 mt-1 cursor-pointer"
                  >
                    <span>Send Inquiry</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetailModal;
