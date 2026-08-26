import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Upload } from 'lucide-react';
import { WA_NUM_1, WA_NUM_2, getWaUrl } from '../data';
import { saveImage, loadImage } from '../storage';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoImg, setLogoImg] = useState<string>('/logo.png');
  const [logoError, setLogoError] = useState(false);
  const logoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadImage('siteLogo').then((savedLogo) => {
      if (savedLogo) {
        setLogoImg(savedLogo);
        setLogoError(false);
      }
    });
  }, []);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        setLogoImg(base64String);
        setLogoError(false);
        try {
          await saveImage('siteLogo', base64String);
        } catch (err) {
          console.error('Failed to save logo to IndexedDB', err);
          alert('Upload failed. Please try a smaller image.');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerLogoUpload = (e: React.MouseEvent) => {
    e.preventDefault();
    logoInputRef.current?.click();
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Batches', href: '#batches' },
    { name: 'Why VedantIQ', href: '#why' },
    { name: 'Founder', href: '#founder' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const defaultWaUrl = getWaUrl(WA_NUM_1, "Hello VedantIQ, I am interested in your Spoken English + AI Prompt Engineering course. Please share the batch details.");

  return (
    <div className="min-h-screen bg-[#FCF9F2] font-sans text-[#020F22] selection:bg-[#D4AF37] selection:text-[#020F22]">
      {/* Navigation */}
      <div className="fixed top-0 w-full z-50">
        {/* Top utility bar */}
        <div className="bg-[#020F22] text-[#D4AF37] text-xs md:text-sm font-medium py-2 px-6">
          <div className="max-w-7xl mx-auto flex justify-center md:justify-end gap-6">
            <a href={`tel:+91${WA_NUM_1}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} /> +91 {WA_NUM_1}
            </a>
            <a href={`tel:+91${WA_NUM_2}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} /> +91 {WA_NUM_2}
            </a>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="w-full bg-[#FCF9F2]/95 backdrop-blur-md border-b border-[#020F22]/10 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className="relative group/logo cursor-pointer bg-slate-100 rounded-full border-2 border-dashed border-[#D4AF37] flex items-center justify-center h-12 w-12 overflow-hidden" onClick={triggerLogoUpload}>
                  <img 
                    src={logoImg} 
                    alt="VedantIQ Logo" 
                    className={`h-full w-full object-cover transition-all ${logoError ? 'hidden' : 'block'}`}
                    onError={() => setLogoError(true)}
                    onLoad={() => setLogoError(false)}
                  />
                  {logoError && <Upload size={16} className="text-slate-400" />}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/logo:opacity-100 flex items-center justify-center transition-opacity">
                    <Upload size={16} className="text-white" />
                  </div>
                </div>
                <input 
                  type="file" 
                  ref={logoInputRef} 
                  onChange={handleLogoUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
              <a href="#home" className="flex flex-col group">
                <span className="text-2xl font-extrabold tracking-tight text-[#020F22]">Vedant<span className="text-[#D4AF37]">IQ</span></span>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex gap-6">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-sm font-bold text-[#020F22]/80 hover:text-[#D4AF37] transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
              <a 
                href={defaultWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#D4AF37] text-[#020F22] px-6 py-2.5 rounded-full font-bold hover:bg-[#c39e2e] transition-all transform hover:scale-105 shadow-md shadow-[#D4AF37]/20"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden p-2 text-[#020F22]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-[#FCF9F2] border-b border-[#020F22]/10 shadow-xl py-6 px-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-[#020F22] py-2 border-b border-[#020F22]/5"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={defaultWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#020F22] px-6 py-4 rounded-xl font-bold mt-4"
              >
                <MessageCircle size={20} />
                WhatsApp Us Now
              </a>
            </div>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <main className="pt-[116px]">
        {children}
      </main>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-[#020F22] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="relative group/footer-logo cursor-pointer bg-slate-100 rounded-full border-2 border-dashed border-[#D4AF37] flex items-center justify-center h-16 w-16 overflow-hidden" onClick={triggerLogoUpload}>
                  <img 
                    src={logoImg} 
                    alt="VedantIQ Logo" 
                    className={`h-full w-full object-cover transition-all ${logoError ? 'hidden' : 'block'}`}
                    onError={() => setLogoError(true)}
                    onLoad={() => setLogoError(false)}
                  />
                  {logoError && <Upload size={20} className="text-slate-400" />}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/footer-logo:opacity-100 flex items-center justify-center transition-opacity">
                    <Upload size={20} className="text-white" />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-white">Vedant<span className="text-[#D4AF37]">IQ</span></span>
                <p className="text-[#D4AF37] font-bold tracking-widest text-xs uppercase mt-1">Speak. Express. Succeed.</p>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
              Bridging the gap between effective human communication and the rapidly evolving world of artificial intelligence.
            </p>
          </div>

          <div className="bg-[#051833] p-8 rounded-3xl border border-white/10 space-y-8">
            <h3 className="text-2xl font-bold text-white mb-2">Contact VedantIQ</h3>
            <p className="text-slate-400 font-medium pb-2">Chat with VedantIQ on WhatsApp</p>
            <div className="space-y-4">
              <a href={getWaUrl(WA_NUM_1, "Hello VedantIQ, I am interested in your Spoken English + AI Prompt Engineering course. Please share the batch details.")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <span className="text-xl font-bold text-white">{WA_NUM_1}</span>
                </div>
                <span className="text-sm font-bold text-[#D4AF37]">Chat</span>
              </a>
              <a href={getWaUrl(WA_NUM_2, "Hello VedantIQ, I am interested in your Spoken English + AI Prompt Engineering course. Please share the batch details.")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <span className="text-xl font-bold text-white">{WA_NUM_2}</span>
                </div>
                <span className="text-sm font-bold text-[#D4AF37]">Chat</span>
              </a>
            </div>
            <div className="pt-6 border-t border-white/10 flex gap-4">
              <a href={`tel:+91${WA_NUM_1}`} className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors">
                <Phone size={20} /> Call Primary
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4 text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} VedantIQ. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={defaultWaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-[#020F22] text-white text-sm font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
