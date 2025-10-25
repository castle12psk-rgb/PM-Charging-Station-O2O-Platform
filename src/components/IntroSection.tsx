import React from 'react';
import { introContent } from '../constants';
import { SectionID } from '../types';
import { generateSpeech } from '../services/geminiService';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { SoundWaveIcon } from './icons';

interface IntroSectionProps {
  setActiveSection: (section: SectionID) => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ setActiveSection }) => {
  const { playAudio, isPlaying, isLoading } = useAudioPlayer();

  const handlePlayNarration = async () => {
    if (isLoading || isPlaying) return;

    const base64Audio = await generateSpeech(introContent.narrationText);
    if (base64Audio) {
      playAudio(base64Audio);
    }
  };

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

        <div className="flex items-start gap-4 max-w-2xl mb-12">
          <div className="flex-grow bg-brand-deep-blue/50 backdrop-blur-sm border border-brand-slate-dark/30 rounded-lg p-6">
            <p className="text-brand-slate-lightest italic">
              "{introContent.narrationText}"
            </p>
          </div>
          <button
            onClick={handlePlayNarration}
            disabled={isLoading || isPlaying}
            className="flex-shrink-0 mt-2 p-3 bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-full text-brand-green hover:bg-brand-green/10 hover:border-brand-green/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="내레이션 듣기"
          >
            {isLoading ? (
              <svg className="w-6 h-6 animate-spin text-brand-slate-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <SoundWaveIcon className={`w-6 h-6 transition-colors ${isPlaying ? 'text-brand-green animate-pulse-glow' : 'text-brand-slate-light'}`} />
            )}
          </button>
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
