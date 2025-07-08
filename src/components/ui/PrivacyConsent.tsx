import { useEffect, useState } from "react";

const PrivacyConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accepted = localStorage.getItem('privacyAccepted');
      if (!accepted) {
        const timer = setTimeout(() => setOpen(true), 3000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('privacyAccepted', 'true');
    setOpen(false);
  };
  const handleReject = () => {
    localStorage.setItem('privacyAccepted', 'rejected');
    setOpen(false);
  };
  const handlePreferences = () => {
    // Placeholder for preferences modal or logic
    alert('Preferences coming soon!');
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[9999] flex justify-center px-2 pointer-events-none">
      <div className="w-full max-w-3xl bg-white rounded-t-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-gray-200 animate-fade-in pointer-events-auto">
        <div className="flex-1 text-sm text-gray-800 leading-relaxed text-center md:text-left" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
          We use cookies and similar technologies to recognize visitors, remember preferences, analyze traffic, and improve our marketing.{' '}
          <a href="/PrivacyPolicy" className="text-[#7BB9E8] underline hover:text-black transition-colors duration-200" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-3 justify-center md:justify-end">
          <button
            onClick={handlePreferences}
            className="px-5 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 font-medium hover:bg-gray-100 transition-all duration-150"
            style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
            aria-label="Cookie Preferences"
          >
            Preferences
          </button>
          <button
            onClick={handleReject}
            className="px-5 py-2 rounded-lg bg-[#1a1a1a] text-white font-medium hover:bg-gray-800 transition-all duration-150"
            style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
            aria-label="Reject cookies"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 rounded-lg bg-[#7BB9E8] text-black font-semibold shadow hover:bg-[#5fa6d6] transition-all duration-150"
            style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
            aria-label="Accept cookies"
          >
            Accept
          </button>
        </div>
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
};

export default PrivacyConsent; 