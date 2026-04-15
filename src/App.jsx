import React, { useState, useEffect } from 'react';
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
    <div className="min-height-screen overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <PlatformTabs />
        <RTVSSection />
        <TeleLink />
        <EPCRSection />
        <AITriage />
        <SecuritySection />
        <ContactSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
