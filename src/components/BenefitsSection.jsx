import React from 'react';
import { Users, Building2, Truck, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'For Patients',
      icon: Users,
      color: 'text-success-green',
      bgHover: 'hover:bg-success-green/5',
      points: [
        'Faster ambulance dispatch and arrival',
        'Real-time tracking and precise ETA updates',
        'Continuous life-saving care on wheels',
        'Direct hospital preparation before arrival'
      ]
    },
    {
      title: 'For Hospitals',
      icon: Building2,
      color: 'text-emergency-red',
      bgHover: 'hover:bg-emergency-red/5',
      points: [
        'Pre-alert for incoming emergencies',
        'Live streaming of accurate patient vitals',
        'Better resource and bed preparedness',
        'Digital access to pre-hospital ePCR data'
      ]
    },
    {
      title: 'For Fleet Operators',
      icon: Truck,
      color: 'text-tech-blue',
      bgHover: 'hover:bg-tech-blue/5',
      points: [
        'Maximum ambulance and resource utilization',
        'Real-time monitoring and GPS tracking',
        'Reduced operational costs and fuel use',
        'Compliance tracking and scheduling ease'
      ]
    },
    {
      title: 'For Govt. & Health Systems',
      icon: Landmark,
      color: 'text-warning-yellow',
      bgHover: 'hover:bg-warning-yellow/5',
      points: [
        'Centralized emergency management grid',
        'Powerful data-driven insights and analytics',
        'Seamless integration with ABDM/ABHA',
        'Massive improvement in public health response'
      ]
    }
  ];

  return (
    <section className="py-24" id="benefits">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag">Value Proposition</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6 leading-tight text-[var(--text-primary)]">
            Designed for <span className="gradient-text">Every Stakeholder</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">TeleEMS aligns the entire healthcare system, creating immense value for everyone involved in emergency response.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-6 md:p-8 flex flex-col h-full transition-all duration-300 ${benefit.bgHover} hover:border-[var(--color-tech-blue)] shadow-sm hover:shadow-lg`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-[var(--bg-tertiary)] mb-6 ${benefit.color}`}>
                <benefit.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">{benefit.title}</h3>
              <ul className="space-y-4 mt-auto">
                {benefit.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3 text-[var(--text-secondary)] font-medium">
                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${benefit.color} flex-shrink-0`} />
                    <span className="text-sm md:text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
