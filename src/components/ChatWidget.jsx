import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Trash2, Send, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: `👋 Hello! I'm **TeleEMS IntelliAssist**, your emergency medical AI assistant.<br/><br/>
      I can help you with:
      <ul>
        <li>🚑 Book an ambulance</li>
        <li>📍 Track your ambulance</li>
        <li>🩹 First aid guidance</li>
        <li>🏥 Find nearest hospital</li>
        <li>📄 Understand your ePCR report</li>
      </ul>`
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Behavior: Clear chat on close as requested earlier
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        clearChat();
      }, 500); // Wait for exit animation
    }
  }, [isOpen]);

  const clearChat = () => {
    setMessages([
      {
        type: 'bot',
        content: `👋 Hello! I'm **TeleEMS IntelliAssist**, your emergency medical AI assistant...`
      }
    ]);
  };

  const handleSendMessage = (text = input) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const newMsgs = [...messages, { type: 'user', content: messageText }];
    setMessages(newMsgs);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: generateResponse(messageText) 
      }]);
    }, 1500);
  };

  const generateResponse = (msg) => {
    const lower = msg.toLowerCase();
    
    // Ambulance & Booking
    if (lower.includes('ambulance') || lower.includes('book') || lower.includes('call')) {
      return `🚑 **Emergency Booking:**<br/><br/>
      If this is a critical emergency, please call **+91 1800 123 456** immediately.<br/><br/>
      Alternatively, you can use the **"Book Emergency Ambulance"** button in the hero section for rapid dispatch.`;
    }
    
    // RTVS & Vitals
    if (lower.includes('vitals') || lower.includes('rtvs') || lower.includes('live')) {
      return `📊 **Real-Time Vitals (RTVS):**<br/><br/>
      Our platform streams real-time oxygen saturation, heart rate, and ECG directly from the ambulance to the hospital ED. This allows doctors to prepare **before** the patient arrives.`;
    }
    
    // ePCR
    if (lower.includes('epcr') || lower.includes('report') || lower.includes('documentation')) {
      return `📄 **ePCR Technology:**<br/><br/>
      Every emergency generates an automated, tamper-proof electronic Patient Care Report. It captures intervention timelines and vitals automatically, ensuring 100% accurate medical records.`;
    }
    
    // Triage
    if (lower.includes('dispatch') || lower.includes('triage') || lower.includes('ai')) {
      return `🧠 **AI Triage Assistant:**<br/><br/>
      Our AI analyzes symptoms to assign a priority code (Red, Yellow, Green) in under 5 seconds, ensuring the most critical patients get ALS (Advanced Life Support) ambulances first.`;
    }
    
    // Pricing & Demo
    if (lower.includes('cost') || lower.includes('price') || lower.includes('demo') || lower.includes('buy')) {
      return `💰 **Pricing & Demos:**<br/><br/>
      We offer customized solutions for private providers and government departments. You can request a **full product walkthrough** by filling out the form in our **Contact Section**.`;
    }
    
    // First Aid
    if (lower.includes('first aid')) {
      return `🩹 **Cardiac Emergency Instructions:**<br/><br/>
      1. Call 108 immediately.<br/>
      2. Begin CPR if the patient is unresponsive.<br/>
      3. Do not leave the patient alone.<br/>
      4. Clear the path for paramedics.`;
    }

    return "I've received your inquiry! I can specifically help with **Ambulance Booking, RTVS Vitals, ePCR reporting, and AI Triage**. <br/><br/>What would you like to know more about?";
  };

  return (
    <div className="fixed bottom-6 right-6 z-[600]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-emergency-red rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 transition-all relative group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? <X key="x" size={32} /> : <MessageSquare key="msg" size={32} />}
        </AnimatePresence>
        {!isOpen && <span className="absolute -inset-1.5 border-2 border-emergency-red rounded-full animate-pulse-slow" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[400px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[70vh] glass-card flex flex-col shadow-2xl overflow-hidden ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-red p-6 text-white flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                     <Plus className="stroke-[3px]" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">IntelliAssist</div>
                    <div className="text-[10px] opacity-80 uppercase font-bold tracking-widest flex items-center gap-1">
                       <span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> AI Online
                    </div>
                  </div>
               </div>
               <button onClick={clearChat} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white">
                  <Trash2 size={18} />
               </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
               {messages.map((msg, i) => (
                 <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div 
                      className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed ${
                        msg.type === 'user' 
                        ? 'bg-emergency-red text-white rounded-tr-none' 
                        : 'bg-[var(--bg-tertiary)] border border-[var(--border)] text-[var(--text-primary)] rounded-tl-none'
                      }`}
                      dangerouslySetInnerHTML={{ __html: msg.content }}
                    />
                 </div>
               ))}
               {isTyping && (
                 <div className="flex justify-start">
                    <div className="bg-[var(--bg-tertiary)] p-4 rounded-2xl rounded-tl-none flex gap-1">
                       <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                       <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                       <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                 </div>
               )}
               <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-card)]">
               <div className="flex flex-wrap gap-2 mb-4">
                  {['🚑 Book Ambulance', '🩹 First Aid'].map(chip => (
                    <button 
                      key={chip} 
                      onClick={() => handleSendMessage(chip)}
                      className="text-[10px] bg-[var(--bg-tertiary)] hover:bg-tech-blue/20 px-3 py-1.5 rounded-full border border-[var(--border)] text-gray-400 transition-colors"
                    >
                      {chip}
                    </button>
                  ))}
               </div>
               <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Type your emergency query..."
                    className="flex-1 bg-[var(--bg-tertiary)] border border-[var(--border)] text-sm rounded-xl px-4 py-3 focus:border-tech-blue outline-none transition-all"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button 
                    onClick={() => handleSendMessage()}
                    className="w-12 h-12 bg-emergency-red text-white flex items-center justify-center rounded-xl hover:scale-105 transition-transform shadow-lg shadow-emergency-red/20"
                  >
                     <Send size={18} />
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
