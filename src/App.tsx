import React, { useState, useEffect } from 'react';
import { NeuralBackground } from './components/NeuralBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CurrentlyLevelingUp } from './components/CurrentlyLevelingUp';
import { Education } from './components/Education';
import { LearningJourney } from './components/LearningJourney';
import { GitHubStats } from './components/GitHubStats';
import { Experience } from './components/Experience';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved !== null ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#05070e] text-slate-100 dark:bg-[#05070e] dark:text-slate-100 light:bg-slate-50 light:text-slate-900 transition-colors duration-300">
      {/* 60fps Interactive Synaptic Particle Canvas */}
      <NeuralBackground />

      {/* Sticky Top Navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CurrentlyLevelingUp />
        <Education />
        <LearningJourney />
        <GitHubStats />
        <Experience />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default App;
