import React from 'react';
import { Video, Mic, User, Share2, ShieldCheck, Lock, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

const TeleLink = () => {
  return (
    <section className="py-24 bg-[var(--bg-secondary)]" id="telelink">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag">Teleconsultation</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6 leading-tight">
            TeleLink — <span className="gradient-text">Doctor at the Scene, Virtually</span>
          </h2>
          <p className="text-gray-400 text-lg">Encrypted HD video consultation between EMTs and hospital doctors — with shared vitals panel and specialist escalation.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12 bg-gray-900/40 p-1 bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden">
           {/* EMT Side */}
           <div className="flex-1 p-8 lg:p-12 relative">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-2.5 h-2.5 bg-success-green rounded-full animate-pulse" />
                 <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Paramedic Priya ● AMB-042</span>
              </div>
              <div className="aspect-video bg-black/40 rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center group">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 <User size={80} className="text-gray-800" />
                 <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold border border-white/10">RTVS DATA: SpO₂ 94% ⚡</span>
                    <span className="bg-emergency-red/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold border border-emergency-red/20 text-emergency-red uppercase">ALS Unit Active</span>
                 </div>
                 <div className="absolute bottom-6 right-6 flex gap-2">
                    <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all"><Mic size={20} /></button>
                    <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all"><Radio size={20} /></button>
                 </div>
              </div>
           </div>

           {/* Connector */}
           <div className="hidden lg:flex flex-col items-center justify-center gap-6 py-12">
              <div className="h-24 w-px bg-gradient-to-b from-transparent via-tech-blue/40 to-transparent" />
              <div className="flex flex-col items-center gap-2">
                 <Lock size={20} className="text-tech-blue-light" />
                 <span className="text-[10px] uppercase font-bold text-tech-blue-light tracking-tighter [writing-mode:vertical-lr] rotate-180">E2E AES-256</span>
              </div>
              <div className="h-24 w-px bg-gradient-to-b from-transparent via-tech-blue/40 to-transparent" />
           </div>

           {/* Hospital Side */}
           <div className="flex-1 p-8 lg:p-12 relative bg-white/5">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-2.5 h-2.5 bg-tech-blue rounded-full animate-pulse" />
                 <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Dr. Arun Mehta ● City Hospital</span>
              </div>
              <div className="aspect-video bg-black/40 rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center group">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 <User size={80} className="text-gray-800" />
                 <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                    <span className="bg-tech-blue/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold border border-tech-blue/20 text-tech-blue-light">Consulting Specialist: Cardiologist</span>
                 </div>
                 <div className="absolute bottom-6 right-6 flex gap-2">
                    <button className="p-3 bg-emergency-red/80 hover:bg-emergency-red rounded-xl transition-all"><Video size={20} /></button>
                    <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all"><Share2 size={20} /></button>
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { icon: Box, label: 'Shared RTVS Panel' },
             { icon: Users, label: 'Multi-Party Calls' },
             { icon: ShieldCheck, label: 'HIPAA Compliant' },
             { icon: Smartphone, label: '2G Optimization' },
           ].map((item, i) => (
             <div key={i} className="flex flex-col items-center text-center gap-4">
                {/* Simplified icons for demo portability */}
                <div className="text-tech-blue-light"><item.icon size={28} /></div>
                <div className="text-sm font-bold text-gray-400">{item.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

// Simplified icon component helper since lucide-react was already imported
const Box = (props) => <Radio {...props} />;
const Users = (props) => <User {...props} />;
const Smartphone = (props) => <Radio {...props} />;

export default TeleLink;
