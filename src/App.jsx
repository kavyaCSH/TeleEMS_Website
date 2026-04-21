import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlatformTabs from './components/PlatformTabs';
import RTVSSection from './components/RTVSSection';
import TeleLink from './components/TeleLink';
import EPCRSection from './components/EPCRSection';
import AITriage from './components/AITriage';
import SecuritySection from './components/SecuritySection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ContactSection from './components/ContactSection';
import WorkflowSection from './components/WorkflowSection';
import BenefitsSection from './components/BenefitsSection';
import IntegrationsSection from './components/IntegrationsSection';
import StarOfLifeSection from './components/StarOfLifeSection';
import UserRolesSection from './components/UserRolesSection';
import FeaturesSection from './components/FeaturesSection';
import RoadmapSection from './components/RoadmapSection';
import WhyChooseUs from './pages/WhyChooseUs';

function Home() {
  return (
    <main>
      <Hero />
      <StarOfLifeSection />
      <WorkflowSection />
      <UserRolesSection />
      <FeaturesSection />
      <BenefitsSection />
      <PlatformTabs />
      <RTVSSection />
      <TeleLink />
      <EPCRSection />
      <AITriage />
      <IntegrationsSection />
      <SecuritySection />
      <RoadmapSection />
      <ContactSection />
    </main>
  );
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('teleems-theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.className = theme; // For Tailwind dark:
    localStorage.setItem('teleems-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <div className="min-height-screen overflow-x-hidden flex flex-col">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
          </Routes>
        </div>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
