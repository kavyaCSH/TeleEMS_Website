import React, { useState, useEffect, useRef } from 'react';
import { Activity, Zap, HeartPulse, Thermometer, Droplets, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const RTVSSection = () => {
  const [vitals, setVitals] = useState({
    spo2: 97,
    hr: 82,
    bp: '120/80',
    temp: 36.0,
    rbs: 110,
    hct: 42,
  });

  const canvasRef = useRef({});

  useEffect(() => {
    const data = {
      spo2: { values: Array(50).fill(97), color: '#457B9D' },
      hr: { values: Array(50).fill(82), color: '#E63946' },
      bp: { values: Array(50).fill(120), color: '#5A9DBF' },
      temp: { values: Array(50).fill(36.0), color: '#F7B32B' },
      rbs: { values: Array(50).fill(110), color: '#2DC653' },
      hct: { values: Array(50).fill(42), color: '#FF6B6B' },
      ecg: { values: Array(200).fill(0), color: '#2DC653' }
    };

    let ecgIndex = 0;
    const interval = setInterval(() => {
      // Update data
      Object.keys(data).forEach(key => {
        if (key === 'ecg') {
          data[key].values.shift();
          data[key].values.push(generateECG(ecgIndex++));
        } else {
          data[key].values.shift();
          const last = data[key].values[data[key].values.length - 1];
          const variance = key === 'temp' ? 0.05 : 2;
          let next = last + (Math.random() - 0.5) * variance;
          
          // Clamp values to realistic ranges
          if (key === 'spo2') next = Math.min(100, Math.max(85, next));
          if (key === 'hct') next = Math.min(60, Math.max(30, next));
          if (key === 'temp') next = Math.min(39, Math.max(35, next));
          
          data[key].values.push(next);
        }
      });

      // Draw each
      Object.keys(data).forEach(key => {
        const canvas = canvasRef.current[key];
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        const vals = data[key].values;
        
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        const min = Math.min(...vals);
        const max = Math.max(...vals);
        const range = max - min || 1;

        vals.forEach((v, i) => {
          const x = (i / (vals.length - 1)) * w;
          const y = h - ((v - min) / range) * (h * 0.8) - (h * 0.1);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });

        ctx.strokeStyle = data[key].color;
        ctx.lineWidth = key === 'ecg' ? 1.5 : 2;
        ctx.stroke();

        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.fillStyle = data[key].color + '15';
        ctx.fill();

        // Update display state
        if (key !== 'ecg' && Math.random() > 0.8) {
           setVitals(prev => {
             const val = data[key].values[data[key].values.length - 1];
             let display = Math.round(val);
             if (key === 'bp') display = `${Math.round(val)}/${Math.round(val * 0.67)}`;
             if (key === 'temp') display = val.toFixed(1);
             return { ...prev, [key]: display };
           });
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const generateECG = (t) => {
    const cycle = t % 60;
    if (cycle >= 10 && cycle <= 12) return Math.sin((cycle - 10) * Math.PI / 2) * 0.15;
    if (cycle >= 18 && cycle <= 19) return -0.2;
    if (cycle >= 19 && cycle <= 21) return 0.9 * Math.sin((cycle - 19) * Math.PI / 2);
    if (cycle >= 21 && cycle <= 23) return -0.15;
    if (cycle >= 30 && cycle <= 36) return Math.sin((cycle - 30) * Math.PI / 6) * 0.2;
    return (Math.random() - 0.5) * 0.02;
  };

  const cards = [
    { id: 'spo2', label: 'SpO₂', unit: '%', icon: Droplets, color: 'text-tech-blue' },
    { id: 'hr', label: 'Heart Rate', unit: 'bpm', icon: HeartPulse, color: 'text-emergency-red' },
    { id: 'bp', label: 'Blood Pressure', unit: 'mmHg', icon: Zap, color: 'text-tech-blue-light' },
    { id: 'temp', label: 'Temperature', unit: '°C', icon: Thermometer, color: 'text-warning-yellow' },
    { id: 'rbs', label: 'Blood Sugar', unit: 'mg/dL', icon: LineChart, color: 'text-success-green' },
    { id: 'hct', label: 'Hematocrit', unit: '%', icon: Activity, color: 'text-emergency-red-light' },
  ];

  return (
    <section className="py-24" id="rtvs">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag">Real-Time Vitals</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6 leading-tight">
            RTVS — <span className="gradient-text">See Metrics Before Arrival</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">Stream live patient vitals from the ambulance to the hospital emergency department — enabling critical pre-arrival preparation.</p>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="bg-[var(--bg-tertiary)] px-8 py-6 border-b border-[var(--border)] flex flex-wrap justify-between items-center gap-4">
             <div>
               <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Patient Assessment</div>
               <div className="text-xl font-bold font-heading">Rajesh Kumar, 54M • <span className="text-tech-blue-light">B+ Positive</span> • <span className="text-emergency-red">En Route (6 min)</span></div>
             </div>
             <div className="flex items-center gap-3 bg-emergency-red/10 px-4 py-2 rounded-full border border-emergency-red/20 shadow-glow-red animate-pulse">
                <div className="w-2.5 h-2.5 bg-emergency-red rounded-full" />
                <span className="text-emergency-red font-bold text-sm tracking-wide">STREAMING LIVE</span>
             </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-[var(--border)]">
             {cards.map(card => (
               <div key={card.id} className="bg-[var(--bg-card)] p-8 group hover:bg-[var(--bg-tertiary)] transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-tight">{card.label}</div>
                      <div className={`text-4xl font-extrabold font-heading ${card.color}`}>
                        {vitals[card.id]}<span className="text-sm ml-1 text-gray-600 dark:text-gray-500">{card.unit}</span>
                      </div>
                    </div>
                    <card.icon size={24} className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <canvas 
                    ref={el => canvasRef.current[card.id] = el} 
                    width={300} 
                    height={80} 
                    className="w-full h-16 block"
                  />
               </div>
             ))}
             <div className="bg-[var(--bg-card)] p-8 lg:col-span-3 border-t border-[var(--border)]">
                <div className="flex justify-between items-center mb-6">
                   <div className="text-sm font-bold uppercase tracking-widest text-success-green flex items-center gap-2">
                      <Activity size={20} /> ECG — Lead II
                   </div>
                   <div className="text-xs text-gray-500 font-mono">25.0 mm/s | 10.0 mm/mV</div>
                </div>
                <canvas 
                  ref={el => canvasRef.current.ecg = el} 
                  width={1000} 
                  height={120} 
                  className="w-full h-24 block"
                />
             </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-12 text-gray-500">
           <div className="flex items-center gap-3"><Zap size={20} className="text-warning-yellow" /> &lt; 500ms Global Latency</div>
           <div className="flex items-center gap-3"><Activity size={20} className="text-success-green" /> MQTT Based Sync</div>
           <div className="flex items-center gap-3"><HeartPulse size={20} className="text-emergency-red" /> ABDM Compliant Data</div>
        </div>
      </div>
    </section>
  );
};

export default RTVSSection;
