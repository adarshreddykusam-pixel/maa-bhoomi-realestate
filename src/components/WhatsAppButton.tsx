import React from 'react';

export const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '9154321444';
  const defaultMessage = encodeURIComponent(
    "Hello MAA Bhoomi Real Estate, I visited your website and would like to inquire about your plots and properties in the Amaravati region."
  );
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 cursor-pointer"
      aria-label="Contact MAA Bhoomi on WhatsApp"
    >
      {/* Tooltip bubble */}
      <span className="hidden md:inline-block bg-white text-slate-800 font-semibold px-4 py-2 rounded-full shadow-lg text-sm max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 border border-slate-100 whitespace-nowrap opacity-0 group-hover:opacity-100">
        WhatsApp Us
      </span>
      
      {/* WhatsApp bubble icon */}
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 flex items-center justify-center border border-white/20">
        <svg 
          className="h-7 w-7 fill-current" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.53 1.978 14.063.953 11.998.953c-5.444 0-9.87 4.373-9.874 9.8.001 2.01.536 3.97 1.55 5.706l-1.018 3.714 3.992-1.019zm13.14-8.069c-.3-.15-1.774-.875-2.049-.976-.275-.1-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.488-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.889 6.21 9.24 4.637 8.97 3.98c-.262-.634-.528-.546-.723-.556-.188-.01-.403-.011-.617-.011-.215 0-.564.081-.86.403-.296.322-1.13 1.102-1.13 2.688 0 1.587 1.155 3.118 1.316 3.334.16.215 2.274 3.472 5.509 4.872.77.333 1.37.532 1.839.68.773.245 1.478.211 2.035.127.62-.093 1.775-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;
