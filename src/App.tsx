import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import Features from './components/Features';
import LLMSection from './components/LLMSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import CookieProvider from './components/cookie/CookieProvider';
import AnalyticsProvider from './components/analytics/AnalyticsProvider';

function MainLayout() {
  const llmSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen relative">
      <Background llmSectionRef={llmSectionRef} />
      <div className="relative z-10">
        <Header />
        <Hero />
        <TeamSection />
        <Features />
        <div ref={llmSectionRef}>
          <LLMSection />
        </div>
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AnalyticsProvider>
        <CookieProvider>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </CookieProvider>
      </AnalyticsProvider>
    </Router>
  );
}

export default App;