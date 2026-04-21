import React, { useEffect } from 'react';
import { ShieldPlus, Activity, HeartPulse, Stethoscope, Baby, Users, Phone, Plane, Ship } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ambulanceTypes = [
    { name: 'Cardiac Care Ambulances', icon: HeartPulse, color: 'text-emergency-red' },
    { name: 'Neuro Care Ambulances', icon: Activity, color: 'text-tech-blue' },
    { name: 'Trauma Care Ambulances (including RTA)', icon: ShieldPlus, color: 'text-warning-yellow' },
    { name: 'ALS Ambulances (Advanced Life Support)', icon: Stethoscope, color: 'text-emergency-red' },
    { name: 'Neonatal Care Ambulances', icon: Baby, color: 'text-tech-blue-light' },
    { name: 'Patient Transport Ambulances', icon: Users, color: 'text-gray-400' },
    { name: 'BLS Ambulances (Basic Life Support)', icon: Phone, color: 'text-success-green' },
    { name: 'Air Ambulances', icon: Plane, color: 'text-white' },
    { name: 'Sea Ambulance', icon: Ship, color: 'text-tech-blue' },
  ];

  return (
    <main className="py-32 bg-[var(--bg-primary)] min-h-screen">
      <div className="section-container max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8">
            Why Choose <span className="gradient-text">Us?</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 md:p-12 mb-16 border-t-4 border-t-emergency-red"
        >
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
            Our approach to emergency care is a <span className="text-[var(--text-primary)] font-bold">paradigm shift</span> from the legacy ambulances that were mere transportation services, to reactive, caregiver and life support vehicles that can start treatment from the incident site, during transit in an ambulance and triaged handover of a patient to the hospital.
          </p>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-medium">
            Emergency care and the Golden Hour door-to-needle time obliterates when y(our) ambulance knocks on the door, as we provide <span className="text-transparent bg-clip-text bg-gradient-to-r from-emergency-red to-tech-blue font-bold">Instantaneous Comprehensive Care</span> to patients. We enable consults and management with remote doctors and specialists with continuous real-time monitoring of multi-vital parameters of the patients. Our telemedicine devices and software enable even speciality Ambulances.
          </p>
        </motion.div>

        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 text-center text-white">Our Fleet Capabilities</h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ambulanceTypes.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + (i * 0.05) }}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 flex flex-col items-center text-center hover:border-white/20 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className={`w-12 h-12 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center mb-4 ${type.color}`}>
                <type.icon size={24} />
              </div>
              <h3 className="text-white font-bold tracking-tight">{type.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WhyChooseUs;
