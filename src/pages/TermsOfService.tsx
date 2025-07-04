import React from "react";

const TermsOfService: React.FC = () => (
  <div className="min-h-screen bg-white text-[#181c22] py-16 px-4 md:px-0 flex flex-col items-center">
    <div className="w-full max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-center" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>Terms of Service</h1>
      <p className="mb-6 text-base md:text-lg text-[#222]">Last updated: [Date]</p>
      <h2 className="text-xl font-bold mt-8 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
      <h2 className="text-xl font-bold mt-8 mb-2">2. Changes to Terms</h2>
      <p className="mb-4">We reserve the right to modify these terms at any time. You should check this page regularly. Your continued use of the website will signify your acceptance of any adjustment to these terms.</p>
      <h2 className="text-xl font-bold mt-8 mb-2">3. Use of Site</h2>
      <p className="mb-4">You agree to use the site for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the site.</p>
      <h2 className="text-xl font-bold mt-8 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, hyperlinks, private information, designs, and agreements, are the property of or licensed to [Your Company Name].</p>
      <h2 className="text-xl font-bold mt-8 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">We are not liable for any damages arising in contract, tort or otherwise from the use of or inability to use this site or any material contained in it, or from any action or decision taken as a result of using the site.</p>
      <h2 className="text-xl font-bold mt-8 mb-2">6. Contact</h2>
      <p className="mb-4">If you have any questions about these Terms, please contact us at [Your Contact Email].</p>
    </div>
  </div>
);

export default TermsOfService; 