import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { getWaUrl, WA_NUM_1 } from '../data';

export function HeroSection() {
  const defaultWa = getWaUrl(WA_NUM_1, "Hello VedantIQ, I am interested in your Spoken English + AI Prompt Engineering course. Please share the batch details.");

  return (
    <>
      <section id="home" className="relative pt-24 pb-32 px-6 overflow-hidden bg-[#FCF9F2]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#020F22]/5 px-5 py-2.5 rounded-full text-[#020F22] font-bold text-sm mb-10 border border-[#020F22]/10 uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            Spoken English + AI Prompt Engineering
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-[#020F22] tracking-tight leading-[1.1] max-w-5xl"
          >
            Master Communication.<br/>
            Master AI.<br/>
            <span className="text-[#D4AF37] relative inline-block mt-2">
              Master Your Future.
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-[#D4AF37]/30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00017 6.84039C56.6668 2.00706 138.667 -1.15961 198.667 6.84039" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mt-8 leading-relaxed font-medium"
          >
            VedantIQ combines Spoken English, Communication Skills and AI Prompt Engineering to help students and professionals become confident, capable and future-ready.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 mt-12 w-full sm:w-auto"
          >
            <a 
              href="#batches"
              className="flex items-center justify-center gap-2 bg-[#020F22] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#0a1f3f] transition-transform hover:-translate-y-1 shadow-xl shadow-[#020F22]/20"
            >
              Join VedantIQ
              <ArrowRight size={20} />
            </a>
            <a 
              href={defaultWa}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-[#020F22] px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all border-2 border-[#020F22]/10 hover:border-[#020F22]/20 hover:-translate-y-1 shadow-lg shadow-black/5"
            >
              <MessageCircle size={24} className="text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <HowItWorks />
    </>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", title: "Choose Your Batch", desc: "Select Group, Pair or Personal learning." },
    { num: "02", title: "Connect With Us", desc: "Contact VedantIQ directly through WhatsApp." },
    { num: "03", title: "Start Learning", desc: "Begin your Communication Skills + AI journey." }
  ];

  return (
    <section className="py-20 px-6 bg-white border-y border-[#020F22]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020F22]">How It Works</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#020F22]/10 to-transparent -translate-y-1/2"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative bg-[#FCF9F2] p-8 rounded-3xl border border-[#020F22]/5 text-center shadow-sm hover:shadow-xl hover:shadow-[#020F22]/5 transition-all duration-300 hover:-translate-y-1 z-10">
              <div className="w-16 h-16 bg-[#020F22] text-[#D4AF37] text-2xl font-extrabold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#020F22]/20">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-[#020F22] mb-3">{step.title}</h3>
              <p className="text-slate-600 font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href={getWaUrl(WA_NUM_1, "Hello VedantIQ, I am interested in your Spoken English + AI Prompt Engineering course. Please share the batch details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#020F22] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c39e2e] transition-transform hover:scale-105 shadow-xl shadow-[#D4AF37]/20"
          >
            <MessageCircle size={20} />
            Connect Now
          </a>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-[#020F22] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Ready to Become <span className="text-[#D4AF37]">Future-Ready?</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
          Improve your communication. Learn AI. Build confidence. Upgrade yourself with VedantIQ.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
          <a 
            href="#batches"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#020F22] px-10 py-5 rounded-full font-bold text-xl hover:bg-[#c39e2e] transition-transform hover:-translate-y-1 shadow-2xl shadow-[#D4AF37]/20"
          >
            Join VedantIQ
            <ArrowRight size={24} />
          </a>
          <a 
            href={getWaUrl(WA_NUM_1, "Hello VedantIQ, I am interested in your Spoken English + AI Prompt Engineering course. Please share the batch details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white/10 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all border border-white/20 hover:-translate-y-1 backdrop-blur-sm"
          >
            <MessageCircle size={24} className="text-[#25D366]" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
