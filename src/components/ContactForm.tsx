import React, { useState } from 'react';
import { Send, CheckCircle, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('CRDA Plots');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const agencyPhone = '9154321444';
  const whatsappNumber = '9154321444';

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setSubmitted(true);

    const waText = `Hi MAA Bhoomi Real Estate, I would like to inquire about: "${interest}"
Name: ${name}
Phone: ${phone}
Email: ${email || 'Not shared'}
Message: ${message}`;
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp immediately on submit to bypass browser popup blockers
    window.open(waUrl, '_blank');

    // Reset form after a brief delay so user sees success state
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column: Office Contacts and Info */}
      <div className="lg:col-span-1 bg-brand-navy text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full translate-x-12 -translate-y-12" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-pink/10 rounded-full -translate-x-8 translate-y-8" />

        <div className="relative z-10 flex flex-col gap-6">
          <div>
            <span className="text-brand-pink text-xs font-black uppercase tracking-widest">Connect With Us</span>
            <h3 className="text-2xl font-black mt-1">Get in Touch Today</h3>
            <p className="text-sm text-slate-300 mt-2">Have a question or looking to inspect a site? Our regional experts are here to guide you.</p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                <Phone className="h-5 w-5 text-brand-green" />
              </span>
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Call Directly</p>
                <a href={`tel:+91${agencyPhone}`} className="text-sm sm:text-base font-extrabold hover:text-brand-green transition-colors block mt-0.5">{agencyPhone}</a>
                <a href={`tel:+91${agencyPhone}`} className="text-sm sm:text-base font-extrabold hover:text-brand-green transition-colors block">8500234889 (Backup)</a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0 border border-[#25D366]/20">
                <MessageSquare className="h-5 w-5 text-[#25D366]" />
              </span>
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Chat on WhatsApp</p>
                <a 
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-extrabold hover:text-[#25D366] transition-colors block mt-0.5"
                >
                  +91 91543 21444
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                <Mail className="h-5 w-5 text-brand-pink" />
              </span>
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Email Inquiry</p>
                <a href="mailto:maabhoomirealestate@gmail.com" className="text-sm sm:text-base font-extrabold hover:text-brand-pink transition-colors block mt-0.5">maabhoomirealestate@gmail.com</a>
              </div>
            </div>

            {/* Office Address */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                <MapPin className="h-5 w-5 text-brand-green" />
              </span>
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Office Address</p>
                <address className="text-sm text-slate-300 not-italic leading-relaxed mt-0.5">
                  MAA Bhoomi Real Estate,<br />
                  Opposite ITC, Beside Union Bank,<br />
                  GT Road, Guntur,<br />
                  Andhra Pradesh - 522004
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 relative z-10 text-xs text-slate-400 font-medium">
          Office Hours: Monday - Sunday (9:00 AM - 7:00 PM IST)
        </div>
      </div>

      {/* Right Column: Dynamic Form Box */}
      <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm text-left">
        <h3 className="text-xl sm:text-2xl font-black text-brand-navy mb-2">Request an Inspection or Quote</h3>
        <p className="text-slate-500 text-sm mb-6">Fill in the fields below. Our site verification executive will reach out to you within 24 hours.</p>

        {submitted ? (
          <div className="bg-brand-green/10 border border-brand-green/20 rounded-2xl p-6 text-center flex flex-col items-center gap-3">
            <CheckCircle className="h-12 w-12 text-brand-green" />
            <h4 className="font-extrabold text-brand-navy text-lg">Inquiry Successfully Built!</h4>
            <p className="text-sm text-slate-600 max-w-sm">Connecting you to our WhatsApp chat support to complete your registration and book a free site visit...</p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="sm:col-span-1">
              <label htmlFor="contact-name" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Full Name *</label>
              <input
                type="text"
                id="contact-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Prasad Chowdary"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-green text-brand-navy font-semibold transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="sm:col-span-1">
              <label htmlFor="contact-phone" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">WhatsApp / Phone Number *</label>
              <input
                type="tel"
                id="contact-phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +91 98480 22339"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-green text-brand-navy font-semibold transition-colors"
              />
            </div>

            {/* Email */}
            <div className="sm:col-span-1">
              <label htmlFor="contact-email" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Email Address</label>
              <input
                type="email"
                id="contact-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. prasad@example.com"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-green text-brand-navy font-semibold transition-colors"
              />
            </div>

            {/* Property Interest Dropdown */}
            <div className="sm:col-span-1">
              <label htmlFor="contact-interest" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Interested In</label>
              <select
                id="contact-interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-green text-brand-navy font-semibold bg-white transition-colors cursor-pointer"
              >
                <option value="CRDA Plots">CRDA Plots (Amaravati Region)</option>
                <option value="Farm Lands">Farm Lands (Guntur / Near ORR)</option>
                <option value="Apartments">Apartments (Guntur City)</option>
                <option value="Independent Houses">Independent Houses</option>
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="contact-msg" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Detailed Message / Specific Survey Areas</label>
              <textarea
                id="contact-msg"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write specific details about coordinates, budget, or preferred facing direction..."
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-green text-brand-navy font-semibold resize-none transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white font-extrabold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md shadow-brand-green/10 hover:shadow-lg cursor-pointer"
              >
                <span>Submit Inquiry</span>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
