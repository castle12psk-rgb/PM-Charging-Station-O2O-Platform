import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { IntroSection } from './components/IntroSection';
import { OverviewSection } from './components/OverviewSection';
import { TechnologySection } from './components/TechnologySection';
import { CollaborationSection } from './components/CollaborationSection';
import { BusinessSection } from './components/BusinessSection';
import { PolicySection } from './components/PolicySection';
import { VisionSection } from './components/VisionSection';
import { menuItems } from './constants';
import { SectionID } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionID>('intro');

  const renderSection = () => {
    switch (activeSection) {
      case 'intro':
        return <IntroSection setActiveSection={setActiveSection} />;
      case 'overview':
        return <OverviewSection />;
      case 'tech':
        return <TechnologySection />;
      case 'collaboration':
        return <CollaborationSection />;
      case 'business':
        return <BusinessSection />;
      case 'policy':
        return <PolicySection />;
      case 'vision':
        return <VisionSection />;
      default:
        return <IntroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-brand-bg min-h-screen font-kr text-brand-slate flex">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 ml-64 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default App;
