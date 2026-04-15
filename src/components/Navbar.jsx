import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Plus } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'RTVS', href: '#rtvs' },
    { name: 'TeleLink', href: '#telelink' },
    { name: 'ePCR', href: '#epcr' },
    { name: 'Dispatch', href: '#dispatch' },
    { name: 'Security', href: '#security' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--border)] shadow-lg h-16' : 'bg-transparent h-20'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emergency-red rounded-xl flex items-center justify-center shadow-lg shadow-emergency-red/30">
             <Plus className="text-white w-6 h-6 stroke-[3px]" />
          </div>
          <span className="font-heading font-extrabold text-2xl tracking-tight">
            Tele<span className="text-emergency-red">EMS</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] rounded-lg transition-colors">
              {link.name}
            </a>
          ))}
          <button className="theme-toggle ml-4 p-2.5 rounded-xl hover:bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="ml-4 bg-gradient-to-br from-emergency-red to-emergency-red-light px-6 py-2.5 rounded-xl text-white text-sm font-bold shadow-lg shadow-emergency-red/20 hover:shadow-emergency-red/30 transition-shadow">
            Request Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button className="p-2 rounded-xl bg-[var(--bg-card)]" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2 text-[var(--text-primary)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[var(--nav-bg)] backdrop-blur-2xl border-b border-[var(--border)] py-6 px-6 flex flex-col gap-2 transition-all animate-fade-in">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="py-3 text-lg font-semibold text-[var(--text-secondary)] border-b border-[var(--border-light)]" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="mt-4 bg-emergency-red py-4 rounded-xl text-white text-center font-bold" onClick={() => setMobileMenuOpen(false)}>
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
