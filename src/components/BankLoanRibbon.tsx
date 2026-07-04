import React from 'react';
import { Landmark, CheckCircle } from 'lucide-react';

interface BankLoanRibbonProps {
  onContactClick?: () => void;
}

export const BankLoanRibbon: React.FC<BankLoanRibbonProps> = ({ onContactClick }) => {
  const handleClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="fixed left-0 top-[35%] z-45 group cursor-pointer flex items-center transition-all duration-300"
      aria-label="Bank Loan Available Info"
    >
      {/* Icon portion (Always visible) */}
      <div className="bg-brand-pink text-white p-3 rounded-r-lg shadow-lg flex items-center justify-center border-y border-r border-white/20 hover:bg-rose-600 transition-colors">
        <Landmark className="h-6 w-6 animate-pulse" />
      </div>
      
      {/* Expandable text portion (Slides out on hover) */}
      <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out bg-brand-navy text-white shadow-lg rounded-r-lg flex flex-col justify-center border-y border-r border-white/10 text-left">
        <div className="w-60 p-3.5 flex flex-col gap-1.5 font-sans">
          <span className="text-brand-pink text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
            <CheckCircle className="h-3.5 w-3.5 text-brand-green fill-white" /> BANK LOANS APPROVED
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-black text-white">Bank Loan Available</span>
            <span className="text-[11px] text-brand-green font-bold text-telugu leading-normal">బ్యాంక్ లోన్ సదుపాయం అందుబాటులో ఉంది</span>
          </div>
          <div className="text-[10px] text-slate-300 flex flex-col gap-0.5 pt-1.5 border-t border-white/15">
            <span className="font-semibold">L.P. NO: <span className="text-white font-extrabold">4/2025</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankLoanRibbon;
