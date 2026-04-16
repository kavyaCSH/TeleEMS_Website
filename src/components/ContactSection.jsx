import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-[var(--bg-primary)]" id="contact">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="section-tag">Get in Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6 leading-tight text-[var(--text-primary)]">
              Ready to <span className="gradient-text">Modernize Your EMS?</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-10">
              Whether you are a private ambulance provider, a multi-specialty hospital, or a government health department — we have the tools to help you save lives faster.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-emergency-red/10 flex items-center justify-center text-emergency-red shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-[var(--text-primary)]">Emergency Booking</h4>
                  <p className="text-[var(--text-secondary)]">24/7 Dispatch Command Center</p>
                  <a href="tel:+911800123456" className="text-xl font-bold text-[var(--text-primary)] hover:text-emergency-red transition-colors">+91 1800 123 456</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-tech-blue/10 flex items-center justify-center text-tech-blue shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-[var(--text-primary)]">General Inquiries</h4>
                  <p className="text-[var(--text-secondary)]">Business partnership & demos</p>
                  <a href="mailto:contact@teleems.in" className="text-xl font-bold text-[var(--text-primary)] hover:text-tech-blue transition-colors">contact@teleems.in</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-success-green/10 flex items-center justify-center text-success-green shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-[var(--text-primary)]">Headquarters</h4>
                  <p className="text-[var(--text-secondary)]">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h3 className="text-2xl font-bold mb-8 text-[var(--text-primary)]">Request a Product Demo</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-[var(--text-secondary)] tracking-widest pl-1">Full Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:border-tech-blue outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-[var(--text-secondary)] tracking-widest pl-1">Organization</label>
                        <input required type="text" placeholder="City Hospital" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:border-tech-blue outline-none transition-all" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-[var(--text-secondary)] tracking-widest pl-1">Email Address</label>
                      <input required type="email" placeholder="john@hospital.com" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:border-tech-blue outline-none transition-all" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-[var(--text-secondary)] tracking-widest pl-1">Select Service</label>
                      <select className="w-full bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:border-tech-blue outline-none transition-all appearance-none cursor-pointer">
                        <option>Full EMS Platform (5 Apps)</option>
                        <option>RTVS Vitals Streaming Only</option>
                        <option>TeleLink Consultation Module</option>
                        <option>Fleet Management System</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-[var(--text-secondary)] tracking-widest pl-1">Message</label>
                      <textarea rows="4" placeholder="How can we help you?" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:border-tech-blue outline-none transition-all resize-none"></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={loading}
                      className={`w-full btn-primary flex items-center justify-center gap-3 py-4 text-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {loading ? (
                        <div className="flex gap-1.5 Items-center">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0s]" />
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]" />
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      ) : (
                        <><Send size={20} /> Send Request</>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-success-green/20 rounded-full flex items-center justify-center text-success-green mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">Request Sent!</h3>
                  <p className="text-[var(--text-secondary)] max-w-xs mx-auto leading-relaxed">
                    Thank you for your interest in TeleEMS. Our team will contact you within 24 hours to schedule your demo.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-bold text-tech-blue-light hover:underline"
                  >
                    Send another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
