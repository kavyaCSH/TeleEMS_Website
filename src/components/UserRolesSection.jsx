import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Building, Truck, Stethoscope, Smartphone, Headset, Car, UserRoundCheck } from 'lucide-react';

const UserRolesSection = () => {
  const roles = [
    { title: 'Admin', desc: 'Master control of the entire platform. Onboards operators, hospitals, and fleet organisations. Manages global master data and compliance.', icon: ShieldCheck, color: 'text-emergency-red', items: ['Aggregator & hospital onboarding', 'Global symptom & incident masters', 'Feature flags per operator', 'Immutable audit trail & PHI logs', 'Platform-wide KPI dashboards'] },
    { title: 'Hospital', desc: 'Admin, Coordinator, and ED Doctor interfaces. Manages bookings, pre-alerts, TeleLink consultations, and ePCR receipt.', icon: Building, color: 'text-tech-blue', items: ['Ambulance booking & IFT management', 'Live fleet map (colour-coded status)', 'ED pre-alert & incoming patient board', 'ERCP TeleLink console (SOS priority)', 'ePCR receipt & HMIS auto-link'] },
    { title: 'Fleet Operator', desc: 'Full lifecycle management of vehicles, staff, inventory, scheduling, and GPS telematics.', icon: Truck, color: 'text-warning-yellow', items: ['Vehicle registration & document alerts', 'Staff (Driver/EMT/Doctor) management', 'Crew scheduling & shift handover', 'Inventory GRN, expiry & stock alerts', 'Letstrack GPS telematics & geofencing'] },
    { title: 'EMT / Paramedic', desc: 'Clinical staff in the ambulance. Full patient care episode from dispatch through RTVS, TeleLink, 3C data to ePCR handoff.', icon: Stethoscope, color: 'text-success-green', items: ['Dispatch notification & navigation', 'Primary triage & patient profile creation', 'Bluetooth Intelli Device pairing (RTVS)', '3C data: Condition, Care, Criticality', 'Hospital handoff & ePCR digital signature'] },
    { title: 'Caller (Public)', desc: 'One-tap ambulance booking app designed for high-stress, low-literacy use. Available in 5 languages. Guest flow supported.', icon: Smartphone, color: 'text-purple-400', items: ['6-step guided booking flow', 'Symptom-triggered first aid tips', 'Live ambulance tracking + ETA', 'Emergency contacts auto-notified', 'SOS home-screen quick-launch widget'] },
    { title: 'Call Centre (CCE)', desc: 'Call Centre Executive receives eyewitness and 108 calls, enters incidents, and dispatches vehicles with full fleet visibility.', icon: Headset, color: 'text-gray-300', items: ['Incident entry console (same as Caller)', 'Auto-dispatch or manual vehicle override', 'Real-time fleet map for all zones', 'SLA timer monitoring & escalation', '108 / GVK EMRI webhook integration'] },
    { title: 'Ambulance Pilot', desc: 'Driver-focused mobile app with turn-by-turn navigation, trip lifecycle management, and breakdown reporting.', icon: Car, color: 'text-success-green', items: ['Push notification with incident details', 'Accept/reject with auto-navigation', 'Status taps: EN ROUTE → AT SCENE → HANDOFF', 'Geo-tagged timestamps at each step', 'Breakdown SOS with backup vehicle request'] },
    { title: 'ERCP Doctor', desc: 'Emergency Response Consult Physician dedicated TeleLink console integrated with real-time RTVS vitals panel.', icon: UserRoundCheck, color: 'text-emergency-red', items: ['TeleLink queue with triage priority', 'SOS cases jump to top of queue', 'RTVS vitals panel alongside video feed', 'One-touch EDP/SP specialist escalation', 'Clinical notes & ePCR review'] },
  ];

  return (
    <section className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden" id="roles">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emergency-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tech-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag mb-4">Role-Based Workflows</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight text-[var(--text-primary)]">
            Purpose-Built Interface<br /><span className="gradient-text">for Every Role</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">From the public to clinical staff and administrators — each stakeholder gets a dedicated, permission-scoped interface perfectly tuned to their exact workflow.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl p-7 flex flex-col h-[340px] overflow-hidden transition-all duration-500 hover:border-emergency-red/40 hover:shadow-2xl hover:-translate-y-2 cursor-default"
            >
              {/* Subtle hover gradient behind icon */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${role.color.replace('text-', 'bg-')}`} />

              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border)] shadow-sm flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${role.color}`}>
                  <role.icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight leading-tight">{role.title}</h3>
              </div>

              {/* Crossfade Display Area */}
              <div className="relative flex-1 mt-2">

                {/* Default State: Description */}
                <div className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-0 group-hover:-translate-y-8 flex flex-col">
                  <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">{role.desc}</p>
                </div>

                {/* Hover State: List Items */}
                <div className="absolute inset-0 opacity-0 translate-y-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100 group-hover:translate-y-0">
                  <ul className="space-y-3">
                    {role.items.map((item, j) => (
                      <li key={j} className="text-[13px] text-[var(--text-primary)] flex items-start gap-2.5 font-medium">
                        <span className={`opacity-80 mt-[2px] flex-shrink-0 ${role.color}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-current mt-1"></div>
                        </span>
                        <span className="leading-snug opacity-90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserRolesSection;
