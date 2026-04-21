import React from 'react';
import { Smartphone, Cpu, Truck, Activity, Video, Stethoscope, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkflowSection = () => {
  const steps = [
    { title: 'Emergency Request', desc: 'Patient requests ambulance via App or Call.', icon: Smartphone, color: 'text-emergency-red', glow: 'shadow-emergency-red/20' },
    { title: 'AI Dispatch', desc: 'System auto-assigns the nearest suitable vehicle.', icon: Cpu, color: 'text-tech-blue', glow: 'shadow-tech-blue/20' },
    { title: 'Ambulance Dispatched', desc: 'Pilot navigates via real-time GPS routing.', icon: Truck, color: 'text-warning-yellow', glow: 'shadow-warning-yellow/20' },
    { title: 'Patient Onboarding', desc: 'EMT collects patient data & 3C assessment.', icon: Stethoscope, color: 'text-success-green', glow: 'shadow-success-green/20' },
    { title: 'Live Vitals Streaming', desc: 'IoT streams real-time ECG, SpO2, and BP to hospital.', icon: Activity, color: 'text-emergency-red', glow: 'shadow-emergency-red/20' },
    { title: 'TeleLink Connect', desc: 'Doctor connects via secure video for guidance.', icon: Video, color: 'text-tech-blue', glow: 'shadow-tech-blue/20' },
    { title: 'Hospital Handover', desc: 'Patient arrives at pre-alerted hospital.', icon: CheckCircle2, color: 'text-success-green', glow: 'shadow-success-green/20' },
    { title: 'ePCR Generated', desc: 'Care report is generated, signed, and shared.', icon: FileCheck, color: 'text-gray-400', glow: 'shadow-white/10' },
  ];

  return (
    <section className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden" id="workflow">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tech-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag">Ecosystem Workflow</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6 leading-tight text-[var(--text-primary)]">
            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue-light to-success-green">Emergency lifecycle</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">Seamless coordination between patients, paramedics, and hospitals, dramatically reducing response times and improving clinical outcomes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border)] rounded-[2rem] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-tech-blue/50"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative`}>
                <div className={`absolute inset-0 rounded-2xl bg-current opacity-20 blur-md group-hover:opacity-40 transition-opacity ${step.color}`} />
                <step.icon size={24} className={`relative z-10 ${step.color}`} />
              </div>

              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)] tracking-tight">{step.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed relative z-10">{step.desc}</p>

              {/* Floating connector arrow (hidden on last item, shows direction to next) */}
              {index !== steps.length - 1 && (
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-[var(--text-primary)] opacity-0 group-hover:opacity-20 hidden lg:block transition-opacity group-hover:translate-x-4 duration-500 pointer-events-none">
                  <ArrowRight size={32} />
                </div>
              )}

              {/* Bottom pulse line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-transparent via-current to-transparent group-hover:w-full transition-all duration-700 ease-out opacity-50" style={{ color: 'var(--color)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
