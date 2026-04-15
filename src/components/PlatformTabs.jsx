import React, { useState } from 'react';
import { Smartphone, Activity, Navigation, Building2, Truck, CheckCircle2, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PlatformTabs = () => {
  const [activeTab, setActiveTab] = useState('caller');

  const tabs = [
    { id: 'caller', label: 'Caller App', icon: Smartphone, color: 'text-emergency-red' },
    { id: 'emt', label: 'EMT App', icon: Activity, color: 'text-success-green' },
    { id: 'pilot', label: 'Pilot App', icon: Navigation, color: 'text-tech-blue' },
    { id: 'hospital', label: 'Hospital', icon: Building2, color: 'text-emergency-red' },
    { id: 'fleet', label: 'Fleet Ops', icon: Truck, color: 'text-tech-blue' },
  ];

  const content = {
    caller: {
      title: 'Caller App — Public SOS',
      desc: 'Empower citizens with one-tap SOS. Track ambulances in real-time. Get AI-powered first aid guidance while help is on the way.',
      features: [
        'One-tap SOS booking with auto-location',
        'Live ambulance tracking on Google Maps',
        'Real-time ETA updates with notifications',
        'AI-powered first-aid instruction cards',
        'ABHA Health ID linking for instant records',
      ],
      mockup: 'caller'
    },
    emt: {
      title: 'EMT App — Clinical Intelligence',
      desc: 'Built for paramedics in the field. Document patient care with the 3C Framework, stream vitals to hospitals, and consult specialists.',
      features: [
        '3C Framework: Condition, Care, Criticality',
        'Bluetooth vitals: SpO2, HR, BP, ECG, Temp',
        'RTVS — Real-Time Vitals Streaming to hospital',
        'TeleLink: Encrypted video with hospital doctor',
        'Works fully offline — syncs on reconnect',
      ],
      mockup: 'emt'
    },
    pilot: {
      title: 'Pilot App — Navigation active',
      desc: 'Optimized for drivers. Accept trips with one tap, get turn-by-turn navigation with live traffic, and trigger crew SOS.',
      features: [
        'Trip accept/reject with navigation',
        'Google Maps + live traffic routing',
        'Crew SOS panic button',
        'Breakdown and incident reporting',
        'Trip history and performance tracking',
      ],
      mockup: 'pilot'
    },
    hospital: {
      title: 'Hospital — Emergency Monitor',
      desc: 'Pre-alert your emergency department before the ambulance arrives. View streaming vitals, accept TeleLink calls.',
      features: [
        'Live incoming patient pre-alert board',
        'RTVS vitals panel per incoming patient',
        'TeleLink: Accept emergency video calls',
        'Bed availability status management',
        'Analytics and outcome tracking',
      ],
      mockup: 'hospital'
    },
    fleet: {
      title: 'Fleet Ops — Command Center',
      desc: 'Command center for fleet managers. Track every ambulance in real-time, manage crew schedules, and monitor compliance.',
      features: [
        'Real-time fleet map with GPS telemetry',
        'Vehicle documents & compliance tracker',
        'Crew scheduling and attendance',
        'Inventory management with expiry alerts',
        'Performance analytics and KPI reports',
      ],
      mockup: 'fleet'
    }
  };

  return (
    <section className="py-24 bg-[var(--bg-secondary)]" id="platform">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag">Core Platform</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6 leading-tight">
            5 Integrated Apps. <span className="gradient-text">One Lifesaving Platform.</span>
          </h2>
          <p className="text-gray-400 text-lg">Every stakeholder in the emergency care chain — from the caller to the hospital — connected through intelligent, real-time technology.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === tab.id 
                ? 'bg-emergency-red text-white shadow-xl shadow-emergency-red/20' 
                : 'bg-[var(--bg-card)] text-gray-400 hover:text-white border border-[var(--border)]'
              }`}
            >
              <tab.icon size={20} />
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-[var(--bg-tertiary)] border border-[var(--border)] mb-8 ${tabs.find(t => t.id === activeTab).color}`}>
                  {React.createElement(tabs.find(t => t.id === activeTab).icon, { size: 32 })}
                </div>
                <h3 className="text-3xl font-bold font-heading mb-6">{content[activeTab].title}</h3>
                <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">{content[activeTab].desc}</p>
                <div className="grid sm:grid-cols-1 gap-4">
                  {content[activeTab].features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-[var(--text-primary)]">
                      <CheckCircle2 size={18} className="text-success-green flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                     </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-[310px] aspect-[9/18.5] bg-[#0f172a] rounded-[3rem] border-[10px] border-gray-900 p-1.5 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/10">
                  {/* Notch / Dynamic Island */}
                  <div className="absolute inset-x-0 top-0 h-9 flex justify-center items-start pt-2.5 z-30">
                    <div className="w-24 h-5 bg-black rounded-full flex items-center justify-end px-3 gap-1.5">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
                    </div>
                  </div>
                  
                  <div className="h-full w-full bg-[#0a0f1c] rounded-[2.5rem] overflow-hidden flex flex-col relative">
                    {/* App Status Bar */}
                    <div className="px-6 pt-9 pb-3 flex items-center justify-between text-[10px] text-gray-400 font-bold z-20">
                       <span>9:41</span>
                       <div className="flex gap-1.5 items-center">
                          <Activity size={10} className="text-success-green animate-pulse" />
                          <div className="w-3 h-1.5 rounded-xs bg-gray-600/50 relative overflow-hidden">
                             <div className="absolute inset-0 bg-gray-300 w-3/4" />
                          </div>
                       </div>
                    </div>

                    <div className="flex-1 overflow-hidden relative">
                       <AnimatePresence mode="wait">
                         {activeTab === 'caller' && (
                           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} key="caller" className="h-full flex flex-col p-5">
                              <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-tech-blue" />
                                  </pattern>
                                  <rect width="100" height="100" fill="url(#grid)" />
                                </svg>
                              </div>

                              <div className="relative z-10 flex-1 flex flex-col">
                                <span className="text-tech-blue-light text-[9px] font-black uppercase tracking-[0.2em] mb-1.5">TeleEMS Mobile</span>
                                <h4 className="text-lg font-bold text-white mb-6">SOS Emergency</h4>
                                
                                <div className="flex-1 flex flex-col items-center justify-center gap-10">
                                   <motion.button 
                                     whileHover={{ scale: 1.05 }}
                                     whileTap={{ scale: 0.95 }}
                                     className="w-36 h-36 rounded-full bg-emergency-red flex flex-col items-center justify-center text-white shadow-[0_0_60px_rgba(230,57,70,0.5)] border-[8px] border-white/5 relative"
                                   >
                                      <div className="absolute inset-0 rounded-full animate-ping bg-emergency-red opacity-30" />
                                      <div className="absolute -inset-5 rounded-full border border-emergency-red/20 animate-pulse-slow" />
                                      <Smartphone size={44} className="mb-1" />
                                      <span className="font-black text-2xl tracking-tighter">SOS</span>
                                   </motion.button>
                                   
                                   <div className="text-center bg-white/5 backdrop-blur-xl rounded-[1.5rem] p-4 border border-white/10 w-full shadow-xl">
                                      <div className="flex items-center justify-center gap-2 mb-2">
                                         <div className="w-1.5 h-1.5 rounded-full bg-success-green animate-pulse" />
                                         <div className="text-[10px] font-bold text-white">Ambulance assigned</div>
                                      </div>
                                      <div className="text-[9px] text-gray-400 mb-3">DL-01-AMB-4022 • Dr. Arjun</div>
                                      <div className="flex justify-between items-end mb-1.5">
                                         <span className="text-[10px] text-tech-blue-light font-black uppercase">ETA 4 MIN</span>
                                         <span className="text-[9px] text-gray-500 font-bold">650M</span>
                                      </div>
                                      <div className="h-1.5 bg-gray-800/50 rounded-full overflow-hidden p-0.5">
                                         <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-tech-blue rounded-full shadow-[0_0_10px_rgba(69,123,157,0.5)]" />
                                      </div>
                                   </div>
                                </div>
                              </div>
                           </motion.div>
                         )}

                         {activeTab === 'emt' && (
                           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} key="emt" className="h-full flex flex-col p-5">
                              <div className="flex items-center justify-between mb-6">
                                <div>
                                   <span className="text-success-green text-[9px] font-black uppercase tracking-widest mb-1 block">Live Monitoring</span>
                                   <h4 className="text-lg font-bold text-white">Patient #9283</h4>
                                </div>
                                <div className="px-2 py-0.5 bg-emergency-red/20 text-emergency-red border border-emergency-red/30 rounded-full text-[8px] font-black italic">CRITICAL</div>
                              </div>

                              <div className="grid grid-cols-2 gap-3 mb-5">
                                 <div className="bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-md">
                                    <div className="text-[8px] text-gray-500 uppercase font-black mb-1.5">SpO2</div>
                                    <div className="text-2xl font-black text-tech-blue-light">98<span className="text-[10px] ml-0.5 font-bold">%</span></div>
                                    <div className="mt-2 flex gap-0.5">
                                       {[1,2,3,4,5].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i < 5 ? 'bg-tech-blue' : 'bg-gray-800'}`} />)}
                                    </div>
                                 </div>
                                 <div className="bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-md">
                                    <div className="text-[8px] text-gray-500 uppercase font-black mb-1.5">Heart Rate</div>
                                    <div className="text-2xl font-black text-emergency-red">84<span className="text-[10px] ml-0.5 font-bold">BPM</span></div>
                                    <Activity size={12} className="text-emergency-red/40 mt-2" />
                                 </div>
                              </div>

                              <div className="flex-1 bg-black/60 rounded-[1.5rem] border border-white/5 p-4 flex flex-col mb-5 relative overflow-hidden">
                                 <div className="flex justify-between items-center mb-4 relative z-10">
                                    <div className="text-[9px] text-gray-500 font-mono tracking-tighter">LEAD II • REAL-TIME</div>
                                    <div className="flex gap-1">
                                       <div className="w-1 h-1 rounded-full bg-red-500 animate-ping" />
                                       <span className="text-[7px] text-red-500 font-bold uppercase">Rec</span>
                                    </div>
                                 </div>
                                 <div className="flex-1 flex items-center justify-center">
                                     <svg viewBox="0 0 200 80" className="w-full h-full">
                                        <motion.path 
                                          initial={{ pathLength: 0 }}
                                          animate={{ pathLength: 1 }}
                                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                          d="M0,40 L20,40 L25,10 L30,70 L35,40 L55,40 L60,10 L65,70 L70,40 L100,40 L105,20 L110,60 L115,40 L140,40 L145,10 L150,70 L155,40 L180,40" 
                                          fill="none" 
                                          stroke="#2DC653" 
                                          strokeWidth="2.5" 
                                          strokeLinecap="round"
                                        />
                                     </svg>
                                 </div>
                              </div>

                              <div className="grid gap-2">
                                <button className="w-full py-3.5 bg-tech-blue text-white rounded-xl text-[10px] font-black uppercase tracking-[0.15em] flex items-center justify-center gap-2 shadow-xl shadow-tech-blue/30 overflow-hidden relative group">
                                   <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                                   <Activity size={14} /> Start TeleLink
                                </button>
                                <button className="w-full py-3 bg-white/5 text-gray-400 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest">
                                   Patient History
                                </button>
                              </div>
                           </motion.div>
                         )}

                         {activeTab === 'pilot' && (
                           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} key="pilot" className="h-full relative">
                              <div className="absolute inset-0 bg-[#0f172a]">
                                 <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-1/4 left-0 w-full h-1 bg-gray-600 -rotate-12" />
                                    <div className="absolute top-0 left-1/3 w-1 h-full bg-gray-600" />
                                    <div className="absolute top-2/3 left-0 w-full h-1 bg-gray-600 rotate-6" />
                                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-600" />
                                 </div>
                                 
                                 <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                    <path d="M20,85 L40,65 L40,35 L75,25" fill="none" stroke="#457B9D" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 3" />
                                    <circle cx="20" cy="85" r="5" fill="#E63946" />
                                    <motion.circle 
                                      animate={{ cx: [20, 40, 40, 75], cy: [85, 65, 35, 25] }} 
                                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                      r="4" fill="white" 
                                      className="shadow-xl"
                                    />
                                    <circle cx="75" cy="25" r="6" fill="#2DC653" />
                                 </svg>
                              </div>

                              <div className="absolute top-10 left-5 right-5 bg-black/90 backdrop-blur-2xl p-4 rounded-2xl border border-white/10 shadow-2xl">
                                 <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-tech-blue flex items-center justify-center shadow-lg shadow-tech-blue/40">
                                       <Navigation className="text-white rotate-45" size={20} />
                                    </div>
                                    <div>
                                       <div className="text-[9px] text-tech-blue-light font-black uppercase tracking-widest mb-0.5">200 meters</div>
                                       <div className="text-sm font-black text-white leading-tight">Exit Right into Apollo Dr.</div>
                                    </div>
                                 </div>
                              </div>

                              <div className="absolute bottom-10 left-5 right-5 space-y-3">
                                 <div className="bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/5 flex justify-between items-center text-white shadow-2xl">
                                    <div>
                                       <div className="text-[8px] text-gray-500 uppercase font-black mb-0.5">Speed</div>
                                       <div className="text-xl font-black">64 <span className="text-[10px] font-normal text-gray-500 uppercase">km/h</span></div>
                                    </div>
                                    <div className="w-px h-6 bg-white/10" />
                                    <div className="text-right">
                                       <div className="text-[8px] text-gray-500 uppercase font-black mb-0.5">Target</div>
                                       <div className="text-xl font-black text-tech-blue-light">1.2 <span className="text-[10px] font-normal text-gray-500 uppercase">km</span></div>
                                    </div>
                                 </div>
                                 <button className="w-full py-4 bg-emergency-red text-white flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl shadow-[0_15px_30px_rgba(230,57,70,0.4)]">
                                    Arrived at Hospital
                                 </button>
                              </div>
                           </motion.div>
                         )}

                         {activeTab === 'hospital' && (
                           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} key="hospital" className="h-full flex flex-col p-5">
                              <div className="flex justify-between items-center mb-6">
                                 <h4 className="text-lg font-black text-white uppercase tracking-tighter">ER Dashboard</h4>
                                 <div className="flex gap-1 Items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-success-green shadow-[0_0_6px_rgba(45,198,83,0.5)]" />
                                    <span className="text-[9px] text-gray-500 font-black uppercase">Live</span>
                                 </div>
                              </div>

                              <div className="space-y-3 flex-1">
                                 {[
                                    { id: 'AMB-42', status: 'CRITICAL', time: '2 MIN', type: 'CARDIAC', color: 'bg-emergency-red' },
                                    { id: 'AMB-18', status: 'STABLE', time: '14 MIN', type: 'TRAUMA', color: 'bg-tech-blue' },
                                    { id: 'AMB-05', status: 'INCOMING', time: '22 MIN', type: 'MEDICAL', color: 'bg-gray-600' }
                                 ].map((item, i) => (
                                    <div key={item.id} className={`p-4 rounded-[1.5rem] border transition-all ${item.status === 'CRITICAL' ? 'bg-emergency-red/10 border-emergency-red/20 shadow-lg shadow-emergency-red/5' : 'bg-white/5 border-white/10'}`}>
                                       <div className="flex justify-between items-start mb-2">
                                          <div>
                                             <div className="text-[10px] font-black text-white mb-0.5">{item.id}</div>
                                             <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">{item.type}</div>
                                          </div>
                                          <div className={`px-2 py-0.5 rounded-full text-[8px] font-black ${item.status === 'CRITICAL' ? 'bg-emergency-red text-white' : 'bg-gray-800 text-gray-400'}`}>
                                             {item.status}
                                          </div>
                                       </div>
                                       <div className="flex justify-between items-center pt-1.5">
                                          <div className="flex -space-x-1.5">
                                             {[1, 2, 3].map(j => <div key={j} className="w-4 h-4 rounded-full border-2 border-[#0a0f1c] bg-gray-700 overflow-hidden" />)}
                                          </div>
                                          <div className="text-[10px] font-black text-tech-blue-light tracking-tight">{item.time}</div>
                                       </div>
                                    </div>
                                 ))}
                              </div>

                              <div className="bg-white/5 rounded-[1.5rem] p-4 border border-white/5 mt-5 shadow-xl">
                                 <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-3">ER Bed occupancy</div>
                                 <div className="flex items-end gap-2 h-12">
                                    {[60, 45, 90, 35, 75, 55, 40].map((h, i) => (
                                       <div key={i} className="flex-1 bg-gray-800/50 rounded-full relative overflow-hidden h-full">
                                          <motion.div 
                                            initial={{ height: 0 }} 
                                            animate={{ height: `${h}%` }} 
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className={`absolute bottom-0 w-full rounded-full ${h > 80 ? 'bg-emergency-red' : 'bg-tech-blue'}`} 
                                          />
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </motion.div>
                         )}

                         {activeTab === 'fleet' && (
                           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} key="fleet" className="h-full flex flex-col p-5">
                              <div className="flex justify-between items-end mb-8">
                                 <div>
                                    <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1 block">Active Network</span>
                                    <div className="text-3xl font-black text-white tracking-tighter">124</div>
                                 </div>
                                 <div className="text-right">
                                    <div className="text-xl font-black text-success-green tracking-tight">98%</div>
                                    <span className="text-[8px] text-gray-500 font-black uppercase tracking-widest">Uptime</span>
                                 </div>
                              </div>

                              <div className="grid grid-cols-2 gap-3 mb-6">
                                 <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center shadow-lg">
                                    <div className="text-xl font-black text-white">42</div>
                                    <div className="text-[8px] text-gray-500 font-black uppercase mt-1 tracking-widest">On Duty</div>
                                 </div>
                                 <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center shadow-lg">
                                    <div className="text-xl font-black text-warning-yellow">12</div>
                                    <div className="text-[8px] text-gray-500 font-black uppercase mt-1 tracking-widest">In Repair</div>
                                 </div>
                              </div>

                              <div className="flex-1 bg-white/[0.03] rounded-[1.8rem] border border-white/5 p-4 relative overflow-hidden shadow-xl">
                                 <div className="text-[9px] font-black text-gray-500 mb-4 flex justify-between items-center tracking-widest">
                                    <span>NETWORK MAP</span>
                                    <Activity size={10} className="text-tech-blue animate-pulse" />
                                 </div>
                                 
                                 <div className="absolute inset-0 opacity-40">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                       <motion.div 
                                          key={i}
                                          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }}
                                          transition={{ duration: 2 + i % 4, repeat: Infinity }}
                                          className="absolute w-1.5 h-1.5 rounded-full bg-emergency-red shadow-[0_0_8px_rgba(230,57,70,0.5)]"
                                          style={{ top: `${15 + i * 9}%`, left: `${20 + (i * 17) % 65}%` }}
                                       />
                                    ))}
                                 </div>

                                 <div className="absolute bottom-5 left-4 right-4 bg-black/80 backdrop-blur-2xl p-3 rounded-xl border border-white/5 text-[9px] shadow-xl">
                                    <div className="flex justify-between mb-1.5">
                                       <span className="text-gray-400 font-bold">Avg. Response Time</span>
                                       <span className="text-white font-black tracking-tight">8.4 MIN</span>
                                    </div>
                                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                                       <motion.div initial={{ width: 0 }} animate={{ width: '84%' }} transition={{ duration: 2 }} className="h-full bg-success-green rounded-full" />
                                    </div>
                                 </div>
                              </div>

                              <button className="w-full py-4 mt-6 bg-white/5 border border-white/10 rounded-2xl text-[9px] font-black uppercase tracking-[0.3em] text-white hover:bg-white/10 transition-all">
                                 System Logs
                              </button>
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </div>

                    {/* Home Indicator */}
                    <div className="h-10 flex justify-center items-center relative z-20">
                       <div className="w-24 h-1 bg-gray-800/80 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PlatformTabs;
