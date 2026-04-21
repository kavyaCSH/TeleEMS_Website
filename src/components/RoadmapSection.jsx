import React from 'react';
import { motion } from 'framer-motion';

const RoadmapSection = () => {
  const roadmap = [
    { phase: '0', title: 'Foundation', time: 'Weeks 1–3', desc: 'Terraform IaC for VPC/EKS/RDS/Redis/SQS, CI/CD pipeline, API Gateway config, Auth Service, database schema migrations v1, API contract finalization.', tags: ['Terraform', 'Auth Service', 'DB Schema v1'] },
    { phase: '1', title: 'MVP Core', time: 'Weeks 4–12', desc: 'Dispatch Engine, Caller App, Pilot App, EMT App Basic, Hospital Dashboard, Fleet Operator Dashboard, Notification Service (FCM + SMS).', tags: ['Dispatch Engine', 'Caller App', 'EMT App Basic'] },
    { phase: '2', title: 'Clinical Intelligence', time: 'Weeks 13–20', desc: 'RTVS Service, IoT BLE device integration, TeleLink Service, ePCR Service (PDF + digital signature), ED Monitor Dashboard, triage auto-assignment.', tags: ['RTVS', 'TeleLink', 'ePCR PDF'] },
    { phase: '3', title: 'Fleet Intelligence', time: 'Weeks 21–28', desc: 'Full Letstrack telematics integration, Inventory Management, Crew Scheduling + Attendance module, driver behaviour scoring, and analytics dashboards.', tags: ['Letstrack Full', 'Inventory', 'Crew Scheduling'] },
    { phase: '4', title: 'Compliance & Scale', time: 'Weeks 29–36', desc: 'HIPAA/DPDP consent flows, ABDM ABHA integration, GVK EMRI 108 webhook, VAPT remediation, load testing (100K incidents), immutable audit S3 WORM.', tags: ['HIPAA/DPDP', 'ABDM ABHA', 'VAPT'] },
    { phase: '5', title: 'AI & Enhancements', time: 'Weeks 37–48', desc: 'On-device voice-to-text EMT notes, AI triage assist (NLP), predictive dispatch ML model, Bed Management, Billing module, WhatsApp bot booking.', tags: ['AI Triage', 'Voice-to-Text', 'Billing'] },
  ];

  return (
    <section className="py-24 bg-[#050B14]" id="roadmap">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag mb-4">Implementation Roadmap</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight text-[var(--text-primary)]">
            From Foundation to AI —<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-warning-yellow to-emergency-red">48 Weeks to Full Platform</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">A phased delivery plan across six milestones, with gate criteria at each phase to ensure clinical safety and technical quality.</p>
        </div>

        <div className="max-w-4xl mx-auto relative mt-16">
          {/* Vertical Track */}
          <div className="hidden md:block absolute left-[150px] top-4 bottom-4 w-1 bg-[var(--border)] rounded-full" />

          <div className="space-y-12">
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-start relative group"
              >
                {/* Phase Info */}
                <div className="w-full md:w-[130px] md:text-right pr-6 md:pt-1 shrink-0 mb-4 md:mb-0">
                  <div className="font-heading font-bold text-[var(--text-primary)] tracking-tight">Phase {item.phase}</div>
                  <div className="text-xs font-semibold text-emergency-red mt-1">{item.time}</div>
                </div>

                {/* Node */}
                <div className="hidden md:flex absolute left-[150px] -translate-x-1/2 mt-1 w-4 h-4 rounded-full border-2 border-[var(--text-primary)] bg-[var(--bg-primary)] z-10 group-hover:scale-150 group-hover:border-emergency-red transition-all duration-300 shadow-md group-hover:shadow-[0_0_15px_rgba(224,43,43,0.5)]" />

                {/* Content */}
                <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 md:ml-12 flex-1 group-hover:border-emergency-red/40 transition-all hover:-translate-y-1">
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{item.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
