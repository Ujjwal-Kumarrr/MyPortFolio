import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle, Copy, Check } from 'lucide-react';
import { contactData, socialLinks } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
      const mailtoUrl = `mailto:${contactData.email}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
      window.open(mailtoUrl, '_blank');
      setFormData({ name: '', email: '', message: '' });
    }, 900);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="cyber-pill mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-tech font-bold uppercase tracking-wider">Direct Inquiries</span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Let's Build Something Together
          </h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 rounded-full mt-4 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
          
          <p className="mt-4 font-sans text-base sm:text-lg text-slate-300 max-w-xl">
            Whether you're interested in collaboration, internships, projects, or simply want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-2xl space-y-6 shadow-2xl">
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Get in Touch</h3>
                <p className="font-sans text-sm text-slate-400 leading-relaxed">
                  I typically respond within 24 hours. Always open to discussing machine learning architectures, web software, or open-source collaboration.
                </p>
              </div>

              {/* Direct email card with copy */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:border-cyan-500/40 transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-slate-400 block">Primary Email</span>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="text-sm sm:text-base font-tech font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30">
                  <MapPin className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-slate-400 block">Location</span>
                  <span className="text-sm font-tech font-bold text-white">
                    {contactData.location}
                  </span>
                </div>
              </div>

              {/* Social profiles */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-tech font-bold text-slate-400 block mb-3 uppercase tracking-widest">
                  Professional Profiles:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-tech font-bold uppercase tracking-wider text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-tech font-bold uppercase tracking-wider text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-2xl shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-tech font-bold text-slate-300 uppercase tracking-widest mb-2.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all font-sans text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-tech font-bold text-slate-300 uppercase tracking-widest mb-2.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all font-sans text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-tech font-bold text-slate-300 uppercase tracking-widest mb-2.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, internship opportunity, or project collaboration..."
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all font-sans text-sm resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-tech font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Please complete all fields before sending.</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-tech font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Message received! Your email client has also been opened to confirm delivery.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white font-tech font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Transmitting...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
