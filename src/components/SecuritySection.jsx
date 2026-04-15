import React from 'react';
import { Shield, Lock, FileCheck, Globe, Server, UserCheck, Search, Award } from 'lucide-react';

const SecuritySection = () => {
  const cards = [
    { icon: Shield, title: 'HIPAA Technical Safeguards', desc: 'Full implementation of access controls, audit controls, and transmission security.' },
    { icon: Globe, title: 'DPDP Act 2023', desc: 'All patient data stored securely in AWS Mumbai (ap-south-1).' },
    { icon: Lock, title: 'AES-256 + TLS 1.3', desc: 'Encryption at rest and in transit using bank-grade security protocols.' },
    { icon: Server, title: 'Zero-Trust Architecture', desc: 'mTLS + JWT RS256 token-based authentication for every microservice.' },
    { icon: FileCheck, title: 'Immutable Audit Logs', desc: 'WORM-policy audit trail for every action. Tamper-proof logs for 7 years.' },
    { icon: Search, title: 'Quarterly VAPT', desc: 'CERT-empanelled vendor vulnerability assessment & penetration testing.' },
    { icon: UserCheck, title: 'ABHA Consent Framework', desc: 'Patient-controlled data sharing integrated with ABDM framework.' },
    { icon: Award, title: 'ISO 27001 Certified', desc: 'Information security management system audited and certified annually.' },
  ];

  return (
    <section className="py-24" id="security">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag">Security</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6 leading-tight">
            Enterprise-Grade <span className="gradient-text">Security & Compliance</span>
          </h2>
          <p className="text-gray-400 text-lg">Patient data protection is non-negotiable. We implement the highest standards of healthcare data security.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {cards.map((card, i) => (
             <div key={i} className="glass-card p-8 group hover:border-tech-blue/40 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center mb-6 text-tech-blue-light group-hover:text-emergency-red transition-colors">
                   <card.icon size={24} />
                </div>
                <h4 className="font-bold text-lg mb-3 tracking-tight">{card.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{card.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
