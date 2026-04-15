import React, { useEffect, useRef, useState } from 'react';
import { Phone, Play, Shield, Activity, Zap, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const canvasRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, particles;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      const count = Math.min(Math.floor((width * height) / 15000), 80);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.4 + 0.1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const color = isDark ? '69, 123, 157' : '29, 53, 87';

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();
      });

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${color}, ${0.1 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-gradient-hero)]" id="hero">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[var(--hero-radial-mask)] z-1" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-emergency-red/10 border border-emergency-red/20 px-4 py-2 rounded-full text-emergency-red-light text-sm font-semibold mb-10"
        >
          <span className="w-2 h-2 bg-emergency-red rounded-full animate-pulse-slow" />
          Live Platform — Active Across India
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold font-heading text-[var(--text-primary)] leading-tight mb-8 tracking-tight"
        >
          AI-Powered Emergency Dispatch.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emergency-red via-tech-blue to-emergency-red-light">
            Real-Time Vitals.
          </span><br />
          Life-Saving Speed.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          CureSelect Healthcare's intelligent EMS platform connects patients, paramedics, 
          and hospitals in under 2 seconds — powered by AI dispatch, real-time vitals streaming,
          and encrypted teleconsultation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <a href="#contact" className="btn-primary flex items-center gap-3 text-lg py-4">
            <Phone size={22} />
            Book Emergency Ambulance
          </a>
          <button 
            onClick={() => setShowVideo(true)}
            className="btn-secondary flex items-center gap-3 text-lg py-4"
          >
            <Play size={22} fill="currentColor" />
            Watch Demo
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {[
            { label: 'Deployed', val: '12,847+' },
            { label: 'Patients', val: '284,562+' },
            { label: 'Hospitals', val: '1,250+' },
            { label: 'Avg Response', val: '< 8 min' },
          ].map(stat => (
            <div key={stat.label} className="glass-card p-4 md:p-6 text-center hover:border-tech-blue/50 transition-colors group">
              <div className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)] group-hover:text-emergency-red transition-colors">{stat.val}</div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-16 opacity-60"
        >
          <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]"><Shield size={16} className="text-success-green" /> HIPAA Compliant</div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]"><Activity size={16} className="text-tech-blue" /> ABDM Integrated</div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]"><Zap size={16} className="text-warning-yellow" /> 99.9% Uptime</div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
          >
             <button 
               onClick={() => setShowVideo(false)}
               className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
             >
                <X size={32} />
             </button>
             <motion.div 
               initial={{ scale: 0.9, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.9, y: 20 }}
               className="w-full max-w-5xl aspect-video bg-black rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
             >
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="TeleEMS Product Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
