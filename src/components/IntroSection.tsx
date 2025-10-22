import React from 'react';
import { introContent } from '../constants';
import { SectionID } from '../types';

interface IntroSectionProps {
  setActiveSection: (section: SectionID) => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ setActiveSection }) => {

  return (
    <section id="intro" className="relative min-h-[calc(100vh-6rem)] flex flex-col pt-10 pb-20">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25" 
        style={{backgroundImage: "url('https://postfiles.pstatic.net/MjAyNTAzMDdfOTYg/MDAxNzQxMjkwODU5NDEz.Vzcxy_69lzk9JCvL0zEq6elUvvec_IRBWG-b0Qj6rn4g.ilciIYOliKEAkl3APCjqOPXBxosrTL_LVahV43TGBHAg.JPEG/image.JPEG?type=w966')"}}
      ></div>
      <div className="relative">
        <h3 className="text-lg text-brand-green font-mono mb-4">
          퍼스널 모빌리티(PM) 충전스테이션 및 O2O 통합플랫폼
        </h3>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight font-kr tracking-tighter">
          {introContent.slogan.map((line, index) => (
            <span key={index} className="block">{line}</span>
          ))}
        </h1>
        <p className="text-xl text-brand-slate-light max-w-3xl mb-12">
          {introContent.subCopy}
        </p>

        <div className="bg-brand-deep-blue/50 backdrop-blur-sm border border-brand-slate-dark/30 rounded-lg p-6 max-w-2xl mb-12">
          <p className="text-brand-slate-lightest italic">
            "{introContent.narrationText}"
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setActiveSection('overview')}
            className="px-6 py-3 bg-brand-green text-brand-deep-blue font-bold rounded-md hover:bg-opacity-80 transition-transform hover:scale-105">
            사업개요 보기
          </button>
          <button 
            onClick={() => setActiveSection('tech')}
            className="px-6 py-3 bg-transparent border border-brand-green text-brand-green font-bold rounded-md hover:bg-brand-green/10 transition-colors">
            기술소개
          </button>
          <button 
            onClick={() => setActiveSection('collaboration')}
            className="px-6 py-3 bg-transparent border border-brand-slate text-brand-slate font-bold rounded-md hover:bg-brand-slate/10 transition-colors">
            협업효과
          </button>
        </div>
      </div>
    </section>
  );
};
