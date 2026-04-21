import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Radio, Video, FileText, Building2, BarChart3 } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    { 
      title: 'Smart Dispatch Engine', 
      desc: 'Multi-factor nearest-unit algorithm using real-time Haversine distance, vehicle type (ALS/BLS preference by severity), crew qualification, and live status. Auto-dispatches in under 2 seconds for fleets up to 500 vehicles. Manual override window of 60 seconds with multi-patient simultaneous dispatch.', 
      icon: Zap, 
      color: 'text-emergency-red',
      bgClass: 'bg-emergency-red/10',
      tag: 'Haversine + Redis' 
    },
    { 
      title: 'RTVS — Real-Time Vitals Stream', 
      desc: 'Bluetooth LE medical devices paired via EMT App stream SpO2, HR, BP, Temperature, RBS, HCT, ECG, and EtCO2 — live — to the hospital ERCP console and ED Monitor. Data stored at 1-second resolution. Threshold alerting auto-triggers SOS TeleLink when vitals breach critical limits.', 
      icon: Radio, 
      color: 'text-tech-blue',
      bgClass: 'bg-tech-blue/10',
      tag: 'MQTT · AWS IoT Core' 
    },
    { 
      title: 'TeleLink Teleconsultation', 
      desc: 'HIPAA-compliant WebRTC end-to-end encrypted video connecting EMT to hospital ERCP (Emergency Response Consult Physician). Multi-party: EMT + ERCP + ED Specialist simultaneously. RTVS vitals panel visible to all parties. SOS auto-queues with critical flag. Call setup under 5 seconds at 720p.', 
      icon: Video, 
      color: 'text-purple-500',
      bgClass: 'bg-purple-500/10',
      tag: 'WebRTC · Agora.io' 
    },
    { 
      title: 'ePCR — Electronic Patient Care Report', 
      desc: '17-section structured clinical document assembled automatically at handoff: incident details, patient demographics, full vitals timeline (RTVS data), 3C data (Condition/Care/Criticality), medications administered, inventory consumed, TeleLink summaries, and dual digital signatures (EMT + receiving clinician). Server-side PDF generation with thermal print support.', 
      icon: FileText, 
      color: 'text-warning-yellow',
      bgClass: 'bg-warning-yellow/10',
      tag: 'PDFKit · Bluetooth ESC/POS' 
    },
    { 
      title: 'Hospital ED Integration', 
      desc: 'Real-time incoming patient board for ED teams: ambulance registration, ETA, triage code, chief complaint, live RTVS vitals, and active TeleLink indicator. HL7 FHIR R4 integration with hospital HMIS for MRN lookup, bed status, and patient record linkage. Emergency code activation (Code Blue / Red / Trauma) from dashboard.', 
      icon: Building2, 
      color: 'text-trust-navy',
      bgClass: 'bg-trust-navy/10',
      tag: 'HL7 FHIR R4' 
    },
    { 
      title: 'Analytics & Reporting Engine', 
      desc: 'Role-scoped KPI dashboards for Admin, Hospital, Fleet, and EMT. Custom report builder with incident heat maps on Google Maps. Scheduled daily/weekly/monthly delivery via email. SLA compliance tracking, response time analytics, TeleLink utilisation, fleet performance metrics. Export to Excel, PDF, and CSV.', 
      icon: BarChart3, 
      color: 'text-success-green',
      bgClass: 'bg-success-green/10',
      tag: 'Python FastAPI · OpenSearch' 
    },
  ];

  return (
    <section className="py-24 bg-[var(--bg-primary)]" id="features">
      <div className="section-container">
        
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-start justify-between">
          <div className="max-w-xl">
            <span className="section-tag mb-4">Core Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight text-[var(--text-primary)]">
              Everything an Intelligent<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-emergency-red">EMS Platform Needs</span>
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Six mission-critical modules working together in a single, real-time, role-specific digital ecosystem — built on microservices with 99.9% uptime SLA.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top border hover effect */}
              <div className={`absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-current ${feature.color}`} />
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative`}>
                <div className={`absolute inset-0 rounded-xl ${feature.bgClass} opacity-50 block`}></div>
                <feature.icon size={26} className={`relative z-10 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{feature.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-medium">
                {feature.desc}
              </p>
              
              <div className="mt-auto">
                <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider ${feature.bgClass} ${feature.color} border border-current/20`}>
                  {feature.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
