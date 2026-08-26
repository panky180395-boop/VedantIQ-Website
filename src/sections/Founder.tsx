import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, Quote } from 'lucide-react';

export function FounderSection() {
  return (
    <>
      <section id="founder" className="py-24 px-6 bg-[#FCF9F2] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-[#020F22]/5 border border-[#020F22]/5 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Image Side */}
            <div className="lg:w-2/5 relative min-h-[500px] bg-[#020F22]">
              <img 
                src="/founder.jpg" 
                alt="Pankaj Sharma, Founder of VedantIQ" 
                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020F22] via-[#020F22]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-10 z-10">
                <h3 className="text-4xl font-extrabold text-white mb-2">Pankaj Sharma</h3>
                <p className="text-[#D4AF37] font-bold text-xl uppercase tracking-wider">Founder, VedantIQ</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-3/5 p-12 lg:p-20 flex flex-col justify-center relative">
              <Quote className="absolute top-12 left-12 text-[#020F22]/5" size={120} />
              
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl font-extrabold text-[#020F22]">Meet the Founder</h2>
                <div className="w-16 h-1.5 bg-[#D4AF37] rounded-full"></div>
                
                <div className="space-y-6 text-xl text-slate-700 font-medium leading-relaxed">
                  <p className="text-[#020F22] font-bold text-2xl italic">
                    "VedantIQ was created with a simple vision — to bridge the gap between effective human communication and the rapidly evolving world of artificial intelligence."
                  </p>
                  <p>
                    With over 8 years of experience in teaching English and as a former Master Trainer at Chandigarh University, I've seen firsthand that in today's fast-paced landscape, technical skills alone are not enough. True success requires the ability to articulate ideas clearly, present yourself professionally, and leverage modern tools to multiply your impact.
                  </p>
                  <p>
                    At VedantIQ, we focus intensely on practical communication, building unshakable confidence, professional skills, and vital AI literacy. We empower our students not just to participate in the future, but to lead it.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 px-6 bg-[#FCF9F2]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#020F22]">Frequently Asked Questions</h2>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className={`border border-[#020F22]/10 rounded-2xl overflow-hidden bg-white transition-all duration-300 ${openIndex === i ? 'shadow-xl shadow-[#020F22]/5 ring-1 ring-[#D4AF37]/50' : 'hover:border-[#D4AF37]/30'}`}
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-xl font-bold text-[#020F22] pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`shrink-0 text-[#D4AF37] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-6 pt-0 text-lg text-slate-600 font-medium leading-relaxed border-t border-slate-100 mt-2 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
