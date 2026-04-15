import React from 'react';
import { Plus, Code, Globe, Users, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emergency-red rounded-lg flex items-center justify-center shadow-lg shadow-emergency-red/30">
                <Plus className="text-white w-5 h-5 stroke-[3px]" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight">
                Tele<span className="text-emergency-red">EMS</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Intelligent Emergency Medical Services platform. Connect patients, paramedics, and hospitals in seconds.
            </p>
            <div className="flex gap-4">
               {[Globe, Users, Code, Mail].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-gray-500 hover:text-white hover:border-tech-blue transition-all">
                    <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>

          <div>
             <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Platform</h4>
             <ul className="space-y-4">
                {['Caller App', 'EMT App', 'Hospital Dashboard', 'Fleet Manager', 'Dispatch Engine'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-emergency-red transition-colors text-sm font-medium">{link}</a>
                  </li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Technology</h4>
             <ul className="space-y-4">
                {['RTVS Streaming', 'TeleLink Video', 'AI Dispatch AI', 'ABDM Integration', 'ePCR Systems'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-tech-blue transition-colors text-sm font-medium">{link}</a>
                  </li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Contact</h4>
             <div className="space-y-4">
                <div className="text-gray-500 text-sm leading-relaxed">
                   CureSelect Healthcare LLP<br />
                   No:69,Kamdar Nagar, 2nd Street,Nungambakkam,Chennai-600034
                   Tamil Nadu, India
                </div>
                <div className="pt-2">
                   <a href="mailto:contact@teleems.in" className="text-sm font-bold text-gray-300 hover:text-tech-blue transition-colors">contact@teleems.in</a>
                </div>
                <div className="text-sm font-bold text-tech-blue-light animate-pulse">1800-XXX-XXXX (Toll Free)</div>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-[var(--border-light)] flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-xs text-gray-550 font-medium">© 2026 CureSelect Healthcare LLP. Managed in ap-south-1.</div>
           <div className="flex flex-wrap justify-center gap-6">
              {['🛡️ HIPAA', '🇮🇳 ABDM', '🏅 ISO 27001', '🔒 256-bit AES'].map(badge => (
                <span key={badge} className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 border border-white/5 bg-white/2 p-2 rounded-md">{badge}</span>
              ))}
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
