import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal, Send, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Level Up', href: '#level-up' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070e]/85 dark:bg-[#05070e]/90 light:bg-white/90 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-xl shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-emerald-500/20 border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
            <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 ring-2 ring-[#05070e]"></span>
            </span>
          </div>
          <div>
            <span className="font-display font-black text-lg sm:text-xl tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 transition-all uppercase">
              {personalData.name}
            </span>
            <div className="text-[11px] text-cyan-400/90 font-tech font-semibold flex items-center gap-1.5 tracking-wider uppercase mt-0.5">
              <span>B.Tech CSE</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400">AI / ML Engineer</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links with Tech Styling */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100/90 border border-white/10 hover:border-cyan-500/30 backdrop-blur-md shadow-inner transition-all">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs xl:text-sm font-tech font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-cyan-500/30 to-violet-500/30 border border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.3)] font-semibold scale-105'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-white/5 hover:scale-105'
                }`}
              >
                {isActive ? (
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>{link.name}</span>
                  </span>
                ) : (
                  link.name
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl text-slate-400 hover:text-cyan-400 bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300 animate-spin-slow" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Let's Connect Prominent Animated Button */}
          <a
            href="#contact"
            className="relative group inline-flex items-center gap-2 px-5 py-2.5 text-xs xl:text-sm font-tech font-bold tracking-wider text-white rounded-xl overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.55)] hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 animate-shimmer bg-[length:200%_auto]"></div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 uppercase">Let's Connect</span>
            <Send className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg text-slate-400 bg-slate-900/60 border border-white/10"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/80 border border-white/10 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#0c101c]/95 dark:bg-[#0c101c]/95 light:bg-white/95 backdrop-blur-2xl border-b border-cyan-500/20 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1 font-tech">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-500/15 border-l-4 border-cyan-400 pl-3'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-tech font-bold uppercase tracking-wider text-white rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 shadow-lg shadow-cyan-500/30"
              >
                <span>Let's Connect</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
