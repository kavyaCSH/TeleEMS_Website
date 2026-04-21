import React from 'react';
import { Map, Link, MessageSquare, Database, ActivitySquare } from 'lucide-react';
import { motion } from 'framer-motion';

const IntegrationsSection = () => {
  const integrations = [
    { name: 'Mapping Services', desc: 'Google Maps API for pinpoint navigation & routing.', icon: Map, color: 'text-success-green' },
    { name: 'IoT Medical Devices', desc: 'Bluetooth integrations for continuous vitals streaming.', icon: ActivitySquare, color: 'text-emergency-red' },
    { name: 'ABDM / ABHA', desc: 'Secure connection to Government of India health data logs.', icon: Database, color: 'text-tech-blue' },
    { name: 'HMIS Systems', desc: 'Direct secure pushing to standard hospital data systems.', icon: Link, color: 'text-white' },
    { name: 'SMS & Notifications', desc: 'Twilio integration for real-time status and SOS alerts.', icon: MessageSquare, color: 'text-warning-yellow' },
  ];

  return (
    <section className="py-24 bg-[var(--bg-secondary)]" id="integrations">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag">System Integrations</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6 leading-tight">
            Built to <span className="gradient-text">Plugin</span>
          </h2>
          <p className="text-gray-400 text-lg">TeleEMS doesn't act as a silo. It connects deeply with mapping systems, standard medical hardware, and government healthcare grids.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col items-center text-center w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-19.2px)] min-w-[160px]"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-[var(--bg-tertiary)] border border-[var(--border)] mb-4 ${item.color}`}>
                <item.icon size={20} />
              </div>
              <h4 className="font-bold text-white mb-2 text-sm">{item.name}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
