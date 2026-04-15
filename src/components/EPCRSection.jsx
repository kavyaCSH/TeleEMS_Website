import React from 'react';
import { FileText, Edit3, Printer, Database, Share, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const EPCRSection = () => {
  return (
    <section className="py-24" id="epcr">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag">Electronic Patient Care Report</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6 leading-tight">
            ePCR — <span className="gradient-text">Auto-Assembled. Tamper-Proof.</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">Every emergency generates a complete, digitally signed report — auto-assembled at patient handoff with 7-year secure retention.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
           <div className="flex-1 max-w-2xl">
              <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl relative">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                    <FileText size={120} />
                 </div>
                 <div className="flex justify-between items-center mb-8 border-b pb-4 border-gray-100">
                    <div className="text-emergency-red font-black text-xl italic uppercase">TeleEMS</div>
                    <div className="text-xs font-mono text-gray-500 uppercase font-bold tracking-widest">ePCR #TLE-2026-0482</div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                       <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Patient</div>
                       <div className="font-bold text-sm">Rajesh Kumar, 54M</div>
                    </div>
                    <div>
                       <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">ABHA ID</div>
                       <div className="font-bold text-sm">91-XXXX-XXXX-3847</div>
                    </div>
                 </div>

                 <div className="mb-8 p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="text-[10px] text-red-400 font-bold uppercase mb-1">Critical Assessment</div>
                    <div className="text-red-900 font-bold text-sm">Chest Pain — Suspected STEMI. Patient diaphoretic, radiating pain L-arm.</div>
                 </div>

                 <div className="space-y-6 mb-8">
                    <div>
                       <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Vitals (Average)</div>
                       <div className="text-xs font-semibold text-gray-700">HR: 112 | BP: 90/60 | SpO₂: 94% | RBS: 156</div>
                    </div>
                    <div>
                       <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Interventions</div>
                       <div className="text-xs font-semibold text-gray-700">O₂ 4L/min NC, IV access R-AC 18G, Aspirin 325mg PO</div>
                    </div>
                 </div>

                 <div className="flex justify-between items-end border-t border-gray-100 pt-6 mt-8">
                    <div className="text-[10px] text-gray-400 font-mono">HASH: 4a7d…c92f</div>
                    <div className="text-right">
                       <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Digitally Signed</div>
                       <div className="font-bold text-xs italic">EMT Priya Sharma</div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: CheckCircle2, title: 'Auto-Assembled', desc: 'Generated from trip data & vitals' },
                { icon: Edit3, title: 'Digital Signature', desc: 'Tamper-proof compliance' },
                { icon: Printer, title: 'Thermal Print', desc: 'Print summary in ambulance' },
                { icon: Database, title: '7-Year Storage', desc: 'Secure cloud retention' },
                { icon: Share, title: 'FHIR Export', desc: 'HL7 Interoperable export' },
                { icon: FileText, title: 'PDF Download', desc: 'Complete formatted records' },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 flex items-start gap-4 group hover:border-tech-blue/40 transition-all">
                  <div className="text-tech-blue-light group-hover:text-emergency-red transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default EPCRSection;
