import React from 'react';
import { CURRICULUM, WHY_VEDANTIQ } from '../data';
import { CheckCircle2, Star } from 'lucide-react';

export function CurriculumSection() {
  return (
    <>
      <section id="programs" className="py-24 px-6 bg-[#FCF9F2]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#020F22]">What You'll Learn at VedantIQ</h2>
            <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
            <p className="text-xl text-slate-600 font-medium">A comprehensive program designed to bridge the gap between human expression and artificial intelligence.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CURRICULUM.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-[#020F22]/5 shadow-sm hover:shadow-2xl hover:shadow-[#020F22]/5 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#FCF9F2] rounded-2xl flex items-center justify-center text-[#020F22] mb-8 group-hover:bg-[#020F22] group-hover:text-[#D4AF37] transition-colors border border-[#020F22]/10">
                  <span className="font-extrabold text-xl">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#020F22] mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="py-24 px-6 bg-white border-y border-[#020F22]/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#020F22]">Why Learn With VedantIQ?</h2>
            <div className="w-24 h-1.5 bg-[#020F22] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_VEDANTIQ.map((item, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl bg-[#FCF9F2] border border-[#020F22]/5 hover:border-[#D4AF37]/50 transition-colors">
                <div className="shrink-0 mt-1">
                  <Star className="text-[#D4AF37] fill-[#D4AF37]/20" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#020F22] mb-2">{item.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
