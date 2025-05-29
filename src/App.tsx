import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HamburgerMenu from './components/ui/HamburgerMenu';
import React from "react";

const queryClient = new QueryClient();

const RedirectToAbout = () => {
  React.useEffect(() => {
    window.location.href = '/#about';
  }, []);
  return null;
};

const RedirectToServices = () => {
  React.useEffect(() => {
    window.location.href = '/#services';
  }, []);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HamburgerMenu />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<RedirectToAbout />} />
          <Route path="/services" element={<RedirectToServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
