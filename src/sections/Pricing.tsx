import React from 'react';
import { PRICING, COMPARISON, getWaUrl, WA_NUM_1 } from '../data';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="batches" className="py-24 px-6 bg-[#020F22] text-white">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold">Choose Your Learning Experience</h2>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
          <p className="text-xl text-slate-300 font-medium">Choose the batch that matches your learning style and level of personal attention.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {PRICING.map((plan, i) => (
            <div 
              key={i} 
              className={`relative bg-[#051833] rounded-3xl p-10 border-2 flex flex-col h-full transition-all duration-300 ${
                plan.highlight 
                  ? 'border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 lg:-translate-y-4' 
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#020F22] font-extrabold px-6 py-2 rounded-full text-sm uppercase tracking-widest shadow-lg">
                  Premium Option
                </div>
              )}
              
              <div className="space-y-2 flex-grow">
                <h3 className="text-3xl font-extrabold text-white">{plan.name}</h3>
                <p className="text-[#D4AF37] font-bold text-lg">{plan.tagline}</p>
                
                <div className="py-8 border-b border-white/10 mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl text-slate-400 font-bold">₹</span>
                    <span className="text-6xl font-extrabold text-white tracking-tight">{plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-5 mb-10">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <CheckCircle2 className="text-[#D4AF37] shrink-0 mt-0.5" size={24} />
                      <span className="text-slate-200 font-medium text-lg leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8">
                <a 
                  href={getWaUrl(WA_NUM_1, plan.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-xl ${
                    plan.highlight 
                      ? 'bg-[#D4AF37] text-[#020F22] hover:bg-[#c39e2e] shadow-[#D4AF37]/20' 
                      : 'bg-white text-[#020F22] hover:bg-slate-100'
                  }`}
                >
                  <MessageCircle size={24} className={plan.highlight ? "text-[#020F22]" : "text-[#25D366]"} />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="pt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-white">Compare Batches</h3>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-[#051833]">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-8 font-bold text-slate-400 border-b border-white/10 text-lg w-1/4">Features</th>
                  <th className="p-8 font-bold border-b border-white/10 border-l border-white/5 w-1/4">
                    <div className="text-2xl text-white">Group</div>
                    <div className="text-[#D4AF37] font-medium mt-1">₹1,999</div>
                  </th>
                  <th className="p-8 font-bold border-b border-white/10 border-l border-white/5 w-1/4">
                    <div className="text-2xl text-white">Pair</div>
                    <div className="text-[#D4AF37] font-medium mt-1">₹5,000 &mdash; 2 Students</div>
                  </th>
                  <th className="p-8 font-bold border-b border-white/10 border-l border-white/5 bg-[#D4AF37]/10 w-1/4">
                    <div className="text-2xl text-[#D4AF37]">Personal</div>
                    <div className="text-white font-medium mt-1">₹10,000 &mdash; 1-to-1</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="p-6 font-bold text-white border-b border-white/5">{row.feature}</td>
                    <td className="p-6 text-slate-300 font-medium border-b border-white/5 border-l border-white/5">{row.group}</td>
                    <td className="p-6 text-slate-300 font-medium border-b border-white/5 border-l border-white/5">{row.pair}</td>
                    <td className="p-6 text-white font-bold border-b border-white/5 border-l border-white/5 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors">{row.personal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
