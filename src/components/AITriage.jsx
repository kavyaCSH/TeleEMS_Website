import React, { useState } from 'react';
import { Brain, Send, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AITriage = () => {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const runTriage = () => {
    if (!symptoms.trim()) return;
    setIsAnalyzing(true);
    setResult(null);

    // Simulate AI Triage analysis
    setTimeout(() => {
      const lower = symptoms.toLowerCase();
      let triageData = {
        color: 'green',
        label: 'GREEN — Stable / Non-Urgent',
        ambulance: 'BLS (Basic Life Support)',
        assessment: 'Symptoms appear stable. Patient may consider visiting an emergency department independently or await routine transport.',
        actions: 'Keep patient comfortable. Monitor for breathing difficulty or chest pain. Upgrade call if symptoms worsen.'
      };

      if (lower.includes('chest pain') || lower.includes('breathing') || lower.includes('unconscious') || lower.includes('bleeding')) {
        triageData = {
          color: 'red',
          label: 'RED — Critical / Immediate',
          ambulance: 'ALS (Advanced Life Support) + Doctor',
          assessment: 'High suspicion of life-threatening condition (Potential Cardiac or Respiratory distress). Immediate intervention required.',
          actions: 'Call 108. Do not move patient. Prepare for CPR if breathing stops. Maintain airway.'
        };
      } else if (lower.includes('fever') || lower.includes('pain') || lower.includes('fall')) {
        triageData = {
          color: 'yellow',
          label: 'YELLOW — Urgent',
          ambulance: 'BLS (Basic Life Support)',
          assessment: 'Patient requires prompt evaluation. Condition is not immediately life-threatening but needs clinical assessment within 30-60m.',
          actions: 'Monitor vital signs every 15 minutes. Keep patient warm. Do not give any medication without guidance.'
        };
      }

      setResult(triageData);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-[var(--bg-secondary)]" id="dispatch">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag">AI Intelligence</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6 leading-tight">
            AI Triage Assistant — <span className="gradient-text">Instant Assessment</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">Enter symptoms and our model returns a priority code with recommended resources — optimized for 108 dispatch.</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
           <div className="flex flex-col h-full">
              <label className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-4">Describe the symptoms</label>
              <div className="glass-card p-2 flex flex-col h-full ring-1 ring-white/5 focus-within:ring-tech-blue/50 transition-all">
                 <textarea 
                   className="flex-1 bg-transparent border-none focus:ring-0 p-6 text-lg resize-none placeholder:text-gray-600"
                   placeholder="e.g. 54-year-old male, severe chest pain radiating to left arm, sweating..."
                   value={symptoms}
                   onChange={(e) => setSymptoms(e.target.value)}
                 />
                 <div className="p-4 border-t border-[var(--border)] flex justify-between items-center">
                    <span className="text-[10px] text-gray-500 font-bold uppercase flex items-center gap-1">
                       <Info size={12} /> For clinical guidance only
                    </span>
                    <button 
                      onClick={runTriage}
                      disabled={isAnalyzing || !symptoms.trim()}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                        isAnalyzing ? 'bg-gray-700 text-gray-500' : 'bg-tech-blue text-white hover:bg-tech-blue-light'
                      }`}
                    >
                       {isAnalyzing ? (
                         <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                         </div>
                       ) : (
                         <><Brain size={18} /> Analyze</>
                       )}
                    </button>
                 </div>
              </div>
           </div>

           <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Analysis Result</label>
              <div className="glass-card p-10 flex flex-col items-center justify-center min-h-[340px] relative overflow-hidden">
                 <AnimatePresence mode="wait">
                    {!result && !isAnalyzing && (
                       <motion.div 
                         initial={{ opacity: 0 }} 
                         animate={{ opacity: 1 }} 
                         exit={{ opacity: 0 }}
                         className="text-center"
                       >
                          <Brain size={64} className="mx-auto text-gray-800 mb-6" />
                          <p className="text-[var(--text-secondary)] text-sm max-w-[200px] mx-auto">Analyze symptoms to receive clinical triage priority</p>
                       </motion.div>
                    )}
                    
                    {isAnalyzing && (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="text-center"
                      >
                         <div className="mb-4 text-tech-blue animate-pulse-slow">
                            <Brain size={48} className="mx-auto" />
                         </div>
                         <p className="text-tech-blue-light font-bold text-sm">Processing clinical markers...</p>
                      </motion.div>
                    )}

                    {result && (
                       <motion.div 
                         initial={{ opacity: 0, scale: 0.9 }} 
                         animate={{ opacity: 1, scale: 1 }}
                         className="w-full"
                       >
                          <div className={`p-6 rounded-2xl mb-6 text-center border-l-8 ${
                            result.color === 'red' ? 'bg-red-500/10 border-red-500 text-red-500' : 
                            result.color === 'yellow' ? 'bg-yellow-500/10 border-yellow-500 text-yellow-500' : 
                            'bg-green-500/10 border-green-500 text-green-500'
                          }`}>
                             <div className="text-[10px] uppercase font-black tracking-[0.2em] mb-1 opacity-70">Triage Priority</div>
                             <div className="text-2xl font-black font-heading tracking-wide uppercase">{result.label}</div>
                          </div>

                          <div className="space-y-4">
                             <div className="flex gap-3">
                                <CheckCircle2 size={18} className="text-tech-blue flex-shrink-0" />
                                <div className="text-sm"><strong>Recommended:</strong> <span className="text-[var(--text-secondary)]">{result.ambulance}</span></div>
                             </div>
                             <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-[13px] leading-relaxed text-[var(--text-secondary)]">
                                {result.assessment}
                             </div>
                             <div className="flex gap-3 items-start">
                                <AlertTriangle size={18} className="text-warning-yellow flex-shrink-0" />
                                <div className="text-[12px] text-[var(--text-secondary)] leading-tight"><strong>Protocol:</strong> {result.actions}</div>
                             </div>
                          </div>
                       </motion.div>
                    )}
                 </AnimatePresence>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AITriage;
