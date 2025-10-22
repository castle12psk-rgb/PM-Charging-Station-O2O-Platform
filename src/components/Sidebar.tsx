
import React from 'react';
import { SectionID } from '../types';
import { menuItems } from '../constants';
import { SoundWaveIcon } from './icons';

interface SidebarProps {
  activeSection: SectionID;
  setActiveSection: (section: SectionID) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-brand-deep-blue border-r border-brand-slate-dark/20 p-8 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-12">
            <SoundWaveIcon className="w-8 h-8 text-brand-green" />
            <div>
              <h1 className="text-white font-bold text-lg leading-tight font-sans">PM O2O Platform</h1>
              <p className="text-brand-slate-light text-xs">Project Showcase</p>
            </div>
        </div>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={item.id} className="mb-1">
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-md transition-colors duration-200 group ${
                    activeSection === item.id
                      ? 'bg-brand-green/10 text-brand-green'
                      : 'text-brand-slate hover:bg-white/5 hover:text-brand-slate-lightest'
                  }`}
                >
                  <span className="flex items-center">
                    <span className={`text-xs font-mono mr-3 ${activeSection === item.id ? 'text-brand-green' : 'text-brand-slate'}`}>
                      0{index + 1}.
                    </span>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm tracking-wide">{item.title}</span>
                      <span className="text-xs text-brand-slate group-hover:text-brand-slate-light transition-colors">{item.subtitle}</span>
                    </div>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <footer className="text-center text-xs text-brand-slate-dark">
        <p>㈜오상테크놀로지 × ㈜포인테크</p>
        <p>2025 Collaboration Project</p>
      </footer>
    </aside>
  );
};
