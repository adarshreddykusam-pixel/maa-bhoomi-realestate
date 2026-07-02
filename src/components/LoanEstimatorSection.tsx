import React, { useState } from 'react';
import { Coins, Percent, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export const LoanEstimatorSection: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState(30); // in Lakhs
  const [downPaymentPercent, setDownPaymentPercent] = useState(30); // 30% default
  const [tenureYears, setTenureYears] = useState(15); // 15 years default

  const interestRateYearly = 8.5; // 8.5% p.a.

  // Calculations
  const downPaymentAmount = Math.round(propertyValue * (downPaymentPercent / 100) * 10) / 10;
  const loanAmount = Math.round((propertyValue - downPaymentAmount) * 10) / 10;

  // Monthly interest rate
  const r = interestRateYearly / 12 / 100;
  // Total months
  const n = tenureYears * 12;

  // EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const calculateEmi = () => {
    if (loanAmount <= 0) return 0;
    const loanInRupees = loanAmount * 100000;
    const emi = (loanInRupees * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const estimatedEmi = calculateEmi();

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-pink text-xs font-black uppercase tracking-widest bg-brand-pink/10 px-3 py-1.5 rounded-full border border-brand-pink/10">
            Financial Planning
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mt-4 mb-3">
            Bank Loan Eligibility & EMI Estimator
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            All our plots, farm lands, and projects are pre-approved by leading national banks. Use our calculator to budget your dream investment.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Left Column: Calculator Controls */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-6">
            
            {/* Control 1: Property Value */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Coins className="h-4 w-4 text-brand-green" /> PROPERTY VALUE</span>
                <span className="text-brand-navy text-base font-black font-mono">₹{propertyValue} Lakhs</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                step="5"
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400">
                <span>₹10 LAKHS</span>
                <span>₹1 CRORE</span>
              </div>
            </div>

            {/* Control 2: Down Payment */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Percent className="h-4 w-4 text-brand-pink" /> DOWN PAYMENT ({downPaymentPercent}%)</span>
                <span className="text-brand-navy text-base font-black font-mono">₹{downPaymentAmount} Lakhs</span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="50" 
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-pink"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400">
                <span>20% MIN</span>
                <span>50% MAX</span>
              </div>
            </div>

            {/* Control 3: Tenure Years */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-brand-purple" /> LOAN TENURE</span>
                <span className="text-brand-navy text-base font-black font-mono">{tenureYears} Years</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="20" 
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-purple"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400">
                <span>5 YEARS</span>
                <span>20 YEARS</span>
              </div>
            </div>

            {/* Outputs display card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Loan Amount Needed</span>
                <span className="block text-2xl font-black text-brand-navy mt-1 font-mono">
                  ₹{loanAmount} Lakhs
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">({100 - downPaymentPercent}% of property value)</span>
              </div>

              <div className="bg-brand-navy text-white p-4 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-green/10 rounded-full translate-x-4 -translate-y-4" />
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">Estimated EMI</span>
                <span className="block text-2xl font-black text-brand-green mt-1 font-mono">
                  ₹{estimatedEmi.toLocaleString('en-IN')}/mo
                </span>
                <span className="text-[10px] text-slate-300 block mt-1">Estimated at 8.5% interest rate</span>
              </div>
            </div>

          </div>

          {/* Right Column: Pre-Approved Bank info */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-between">
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-extrabold text-brand-navy">Why Choose Our Bank-Approved Properties?</h3>
              
              <ul className="space-y-4">
                {[
                  { title: 'Pre-Scrutinized Clear Titles', desc: 'Lending institutions only approve loans after rigorous legal verification of all link documents, assuring you safe investments.' },
                  { title: 'Compounded Support assistance', desc: 'Our dedicated executives compile all document chains, coordinate legal verification, and track loan dispatch on your behalf.' },
                  { title: 'Flexible Repayment Options', desc: 'Enjoy lower interest rates from SBI, HDFC, and LIC HFL with multiple tenure plans suited to your family budget.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="w-5 h-5 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <h4 className="font-extrabold text-brand-navy text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approved Partners list */}
            <div className="border-t border-slate-100 pt-6 mt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-3">Associated Banking Partners</span>
              <div className="flex flex-wrap gap-2 text-[10px] font-black text-slate-500">
                <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/50">SBI</span>
                <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/50">HDFC BANK</span>
                <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/50">LIC HFL</span>
                <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/50">ICICI BANK</span>
                <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/50">AXIS BANK</span>
              </div>
            </div>

            <a
              href="#contact"
              onClick={handleApplyClick}
              className="w-full flex items-center justify-center gap-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-extrabold py-4 rounded-xl text-sm transition-all shadow-md shadow-brand-pink/10 hover:shadow-lg hover:scale-[1.01] mt-4"
            >
              <span>Get Loan Assistance & Site Visit</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LoanEstimatorSection;
