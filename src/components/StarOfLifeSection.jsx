import React from 'react';
import { motion } from 'framer-motion';
import { Search, PhoneCall, Navigation, Stethoscope, Activity, Building2 } from 'lucide-react';

const StarOfLifeSection = () => {
  const arms = [
    { title: 'Early Detection', desc: 'Caller App symptom triage and incident severity classification — patients and bystanders identify and categorise emergencies instantly.', icon: Search, color: 'text-emergency-red', bg: 'bg-emergency-red/10', border: 'border-emergency-red/20' },
    { title: 'Early Reporting', desc: 'OTP-verified one-tap call initiation, call-centre console routing, and automated nearest-unit dispatch with sub-2-second calculation.', icon: PhoneCall, color: 'text-warning-yellow', bg: 'bg-warning-yellow/10', border: 'border-warning-yellow/20' },
    { title: 'Early Response', desc: 'Pilot App with GPS navigation, continuously updated ETA pushed to caller and hospital, and nearest specialist hospital suggestion.', icon: Navigation, color: 'text-tech-blue', bg: 'bg-tech-blue/10', border: 'border-tech-blue/20' },
    { title: 'On-Scene Care', desc: 'EMT App primary triage, scene photo capture, MLC documentation, patient profile creation, and PHR (Personal Health Record) pull via MRN.', icon: Stethoscope, color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
    { title: 'Care in Transit', desc: 'RTVS live vitals streaming, TeleLink ERCP encrypted video consultation, 3C data capture (Condition · Care · Criticality), and SOS auto-escalation.', icon: Activity, color: 'text-tech-blue-light', bg: 'bg-tech-blue-light/10', border: 'border-tech-blue-light/20' },
    { title: 'Definitive Care Transfer', desc: 'ePCR PDF generation, dual digital signatures, ED pre-alert with triage code + ETA, hospital HMIS integration, and thermal printer handoff.', icon: Building2, color: 'text-success-green', bg: 'bg-success-green/10', border: 'border-success-green/20' }
  ];

  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag mb-4">Platform Coverage</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight text-white">
            Every Arm of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-success-green to-tech-blue">Star of Life</span> — Covered
          </h2>
          <p className="text-gray-400 text-lg">TeleEMS maps directly to the internationally recognised Star of Life framework, ensuring comprehensive emergency medical care from first detection to definitive hospital treatment.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arms.map((arm, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border)] overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:border-white/20"
            >
              {/* Background Arm Number water mark */}
              <div className="absolute -bottom-6 -right-2 text-[120px] font-black text-white/[0.02] font-heading select-none group-hover:text-white/[0.05] transition-colors duration-500">
                {index + 1}
              </div>
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative`}>
                <div className={`absolute inset-0 rounded-2xl ${arm.bg} ${arm.border} border`} />
                <arm.icon size={24} className={`relative z-10 ${arm.color}`} />
              </div>
              
              <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Arm {index + 1}</div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{arm.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10 font-medium">
                {arm.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarOfLifeSection;
