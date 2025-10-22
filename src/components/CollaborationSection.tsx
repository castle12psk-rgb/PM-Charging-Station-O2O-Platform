import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { CheckIcon } from './icons';
import { OsangLogo } from './OsangLogo';

// --- Local Icons for Synergy Infographics ---
const HardwareIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l-1.5-1.5M12 12l1.5-1.5M12 12v-3" />
    </svg>
);
const SoftwareIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.99A5.5 5.5 0 0012 5a5.5 5.5 0 00-5.2 3.9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a2.5 2.5 0 01-2.5-2.5 2.5 2.5 0 015 0 2.5 2.5 0 01-2.5 2.5z" />
    </svg>
);
const ShieldIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 22a12.02 12.02 0 009-1.056c.343-.344.665-.72.944-1.122A12.02 12.02 0 0021 8.944c0-2.493-1.01-4.763-2.618-6.44z" />
    </svg>
);
const DataFusionIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.343A5.657 5.657 0 0117.657 12 5.657 5.657 0 0112 17.657 5.657 5.657 0 016.343 12 5.657 5.657 0 0112 6.343z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12H2m10-8V2m8 10h2m-8 8v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464l-1.06 1.06M9.525 14.475l-1.06 1.06" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.464 8.464l1.06 1.06M14.475 14.475l1.06 1.06" />
    </svg>
);


// --- New Icons for Infographic ---
const BrainIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-12 w-12 text-cyan-300"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8.5 8.5 0 008.5-8.5c0-4.41-3.056-8.08-7.25-8.43M12 21a8.5 8.5 0 01-8.5-8.5c0-4.41 3.056-8.08 7.25-8.43M12 21v-3.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.07c-1.396 1.344-2.25 3.23-2.25 5.43 0 2.48 1.13 4.69-2.92 6.13" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.07c1.396 1.344 2.25 3.23 2.25 5.43 0 2.48-1.13 4.69-2.92 6.13" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.92 15.63A4.5 4.5 0 0016.75 12.5a4.5 4.5 0 00-4.5-4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.08 15.63A4.5 4.5 0 017.25 12.5a4.5 4.5 0 014.5-4.5" />
    </svg>
);
const BodyIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-12 w-12 text-green-300"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <circle cx="7" cy="18" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="18" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 18H5.5A2.5 2.5 0 0 1 3 15.5V12h3l2 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 18h-5l-2-4h3.5A2.5 2.5 0 0 1 16 11.5V9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 9H13V7h3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l-2-3" />
    </svg>
);
const PlusIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-10 w-10 text-brand-slate-light"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);
const EqualsIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-8 w-8 text-brand-slate-light"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m-15-4h15" />
    </svg>
);

// --- Icons for Governance Diagram ---
const JtcIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const WorkingGroupIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const KpiDashboardIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2M4 4h16v16H4V4z" />
    </svg>
);

export const CollaborationSection: React.FC = () => {
  return (
    <SectionWrapper title="기술융합형 협업체계: 시너지 극대화 전략" subtitle="Strategic Alliance for Market Leadership">
      <p className="text-xl text-brand-slate-light mb-12 leading-relaxed italic border-l-4 border-brand-green pl-6">
        “본 컨소시엄은 각 분야 최고 전문성을 갖춘 기업들의 전략적 제휴입니다. 하드웨어의 안정성과 소프트웨어의 지능이 결합하여, 개별 기업이 홀로 달성할 수 없는 완전한 End-to-End 솔루션을 구축하고 시장의 표준을 재정의합니다.”
      </p>

      <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative rounded-lg overflow-hidden group shadow-lg border border-brand-slate-dark/30">
          <img src="https://sumstation.com/img/stationimg.png" alt="견고한 하드웨어 충전 스테이션" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <h4 className="text-lg font-bold text-white mb-1">견고하고 안정적인 하드웨어</h4>
            <p className="text-sm text-brand-slate-lightest">KC 인증을 받은 신뢰성 높은 충전 인프라.</p>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden group shadow-lg border border-brand-slate-dark/30">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="지능형 소프트웨어 대시보드" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <h4 className="text-lg font-bold text-white mb-1">지능형 데이터 기반 소프트웨어</h4>
            <p className="text-sm text-brand-slate-lightest">AI를 통한 실시간 관제 및 예측 분석 플랫폼.</p>
          </div>
        </div>
      </div>

      {/* --- Synergy Infographic --- */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-6 text-center">
            {/* Company A */}
            <div className="bg-brand-deep-blue/50 border border-cyan-500/30 rounded-lg p-6 flex flex-col items-center h-full">
                <OsangLogo />
                <h3 className="text-lg font-bold text-white">㈜오상테크놀로지</h3>
                <div className="flex items-center gap-2 my-2">
                    <BrainIcon className="h-8 w-8 text-cyan-300"/>
                    <p className="font-semibold text-cyan-300">The Brain</p>
                </div>
                <p className="text-sm text-brand-slate-light">플랫폼 & AI</p>
                <ul className="text-left list-disc list-inside mt-4 text-brand-slate text-sm space-y-1">
                    <li>O2O 통합 플랫폼</li>
                    <li>AI 기반 예측/분석 엔진</li>
                    <li>클라우드 네이티브 아키텍처</li>
                    <li>개방형 API 게이트웨이</li>
                </ul>
            </div>

            <div className="flex justify-center items-center"><PlusIcon /></div>

            {/* Company B */}
            <div className="bg-brand-deep-blue/50 border border-green-500/30 rounded-lg p-6 flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-full mb-4 border-2 border-red-400 bg-red-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xl font-sans tracking-wider">SU:M</span>
                </div>
                <h3 className="text-lg font-bold text-white">㈜포인테크</h3>
                 <div className="flex items-center gap-2 my-2">
                    <BodyIcon className="h-8 w-8 text-green-300"/>
                    <p className="font-semibold text-green-300">The Body</p>
                </div>
                <p className="text-sm text-brand-slate-light">하드웨어 & 인프라</p>
                <ul className="text-left list-disc list-inside mt-4 text-brand-slate text-sm space-y-1">
                    <li>SU:M Station H/W 양산</li>
                    <li>KC 통합 인증 및 품질관리</li>
                    <li>IoT 엣지 디바이스 설계</li>
                    <li>실증 인프라 구축/운영</li>
                </ul>
            </div>

            <div className="flex justify-center items-center"><EqualsIcon /></div>

            {/* Result */}
            <div className="bg-brand-green/10 border border-brand-green/50 rounded-lg p-6 flex flex-col items-center justify-center h-full animate-pulse-glow">
                 <h3 className="text-lg font-bold text-brand-green">End-to-End 통합 플랫폼</h3>
                 <p className="text-sm text-brand-slate-lightest mt-2 mb-4">시장을 선도하는<br/>완전한 솔루션</p>
                 <ul className="text-left text-brand-slate-lightest text-sm space-y-1">
                    <li className="flex items-center"><CheckIcon className="w-4 h-4 mr-2 text-brand-green"/>공동 IP 자산화</li>
                    <li className="flex items-center"><CheckIcon className="w-4 h-4 mr-2 text-brand-green"/>수익/성과 공유</li>
                    <li className="flex items-center"><CheckIcon className="w-4 h-4 mr-2 text-brand-green"/>독점적 시장 지위</li>
                 </ul>
            </div>
        </div>
      </div>

      {/* --- Core Synergy Strategy --- */}
      <div className="my-16">
        <h3 className="text-3xl font-bold text-brand-slate-lightest mb-8 text-center">3대 핵심 시너지 전략</h3>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Strategy 1: HW-SW Integration */}
            <div className="bg-brand-deep-blue/50 border-t-4 border-brand-green/70 rounded-lg p-6 shadow-lg h-full flex flex-col">
                <h4 className="text-xl font-bold text-brand-slate-lightest mb-4">
                    <span className="text-brand-green font-mono mr-2">01</span>완벽한 HW-SW 통합
                </h4>
                <div className="flex-grow flex flex-col justify-between text-center">
                    <div className="flex justify-around items-center">
                        <div className="w-2/5">
                            <HardwareIcon />
                            <h5 className="font-bold text-brand-slate-light mt-2">Hardware (Edge)</h5>
                            <p className="text-xs text-brand-slate">센서 데이터 수집</p>
                        </div>
                        <div className="w-1/5 text-brand-slate-dark text-2xl font-mono">&lt;--&gt;</div>
                        <div className="w-2/5">
                            <SoftwareIcon />
                            <h5 className="font-bold text-brand-slate-light mt-2">Software (Cloud)</h5>
                            <p className="text-xs text-brand-slate">AI 분석 및 원격제어</p>
                        </div>
                    </div>
                    <div className="relative my-4 h-12">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M 10 10 C 30 0, 70 0, 90 10" stroke="#495670" strokeWidth="1.5" fill="none" className="animate-dash-flow" />
                            <text x="50" y="5" textAnchor="middle" fill="#a8b2d1" fontSize="4">Sensor Data</text>
                            <path d="M 90 12 C 70 22, 30 22, 10 12" stroke="#495670" strokeWidth="1.5" fill="none" className="animate-dash-flow" style={{animationDirection: 'reverse'}} />
                            <text x="50" y="19" textAnchor="middle" fill="#a8b2d1" fontSize="4">Control Signal</text>
                        </svg>
                    </div>
                    <div className="bg-brand-deep-blue/70 border border-brand-slate-dark/50 rounded-md p-3">
                         <h5 className="font-semibold text-brand-green text-sm mb-1">핵심 기능 구현</h5>
                         <p className="text-xs text-brand-slate-light">예지보전 (PdM) & 원격 펌웨어 업데이트 (FOTA)</p>
                    </div>
                </div>
            </div>

            {/* Strategy 2: Data Value Chain */}
            <div className="bg-brand-deep-blue/50 border-t-4 border-brand-green/70 rounded-lg p-6 shadow-lg h-full flex flex-col">
                <h4 className="text-xl font-bold text-brand-slate-lightest mb-4">
                    <span className="text-brand-green font-mono mr-2">02</span>데이터 가치사슬 증폭
                </h4>
                <div className="flex-grow flex flex-col items-center justify-between text-center">
                   <div className="flex w-full justify-around text-xs">
                        <div className="bg-brand-slate/10 p-2 rounded w-2/5">
                            <p className="font-bold text-brand-slate-light">컨소시엄 데이터</p>
                            <p className="text-brand-slate">PM 충전/배터리 정보</p>
                        </div>
                        <div className="self-center font-bold text-2xl text-brand-slate-dark">+</div>
                        <div className="bg-brand-slate/10 p-2 rounded w-2/5">
                            <p className="font-bold text-brand-slate-light">공공 데이터</p>
                            <p className="text-brand-slate">교통, 유동인구, 날씨</p>
                        </div>
                   </div>
                   <div className="text-brand-slate-dark text-3xl my-2">↓</div>
                   <div className="flex flex-col items-center bg-brand-green/10 p-3 rounded-lg animate-pulse-glow w-full">
                       <DataFusionIcon />
                       <h5 className="font-bold text-brand-green mt-1">AI Fusion Engine</h5>
                   </div>
                   <div className="text-brand-slate-dark text-3xl mt-2">↓</div>
                   <div className="w-full bg-brand-deep-blue/70 border border-brand-slate-dark/50 rounded-md p-3 text-left text-xs">
                       <h5 className="font-semibold text-brand-green text-sm mb-2 text-center">고부가가치 창출</h5>
                       <p className="text-brand-slate-light"><strong className="text-white">Enhanced AI:</strong> 예측 정확도 95% 이상</p>
                       <p className="text-brand-slate-light"><strong className="text-white">New Business:</strong> O2O 연계 서비스, 광고</p>
                       <p className="text-brand-slate-light"><strong className="text-white">Smart City:</strong> 최적 입지선정, 교통정책 연계</p>
                   </div>
                </div>
            </div>
            
            {/* Strategy 3: IP Ecosystem */}
             <div className="bg-brand-deep-blue/50 border-t-4 border-brand-green/70 rounded-lg p-6 shadow-lg h-full flex flex-col">
                <h4 className="text-xl font-bold text-brand-slate-lightest mb-4">
                    <span className="text-brand-green font-mono mr-2">03</span>지속가능한 IP 생태계
                </h4>
                <div className="flex-grow flex flex-col items-center justify-between text-center">
                    <p className="text-brand-slate text-sm mb-4">공동 특허, 표준 인증, 독점 데이터로 구축한<br/><strong className="text-brand-slate-light">강력한 기술적 해자 (Technological Moat)</strong></p>
                    
                    <div className="flex justify-between items-center w-full my-4 px-2 sm:px-4">
                        <div className="relative flex flex-col items-center justify-center h-20 w-24 group">
                            <span className="font-semibold text-red-400 text-base z-10 bg-brand-deep-blue/60 px-1 rounded transition-all group-hover:scale-110">경쟁사</span>
                            <svg className="w-16 h-16 absolute text-red-500/50 z-0 transition-all group-hover:text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.35 4.537a.75.75 0 0 1 1.3 0l6.25 10.5a.75.75 0 0 1-.65 1.113H6.525a.75.75 0 0 1-.65-1.113L12.125 4.5a.75.75 0 0 1 1.3 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4l16 16"/></svg>
                        </div>
                        <div className="relative">
                            <ShieldIcon />
                            <div className="absolute inset-0 border-2 border-brand-green rounded-full animate-ping opacity-75"></div>
                        </div>
                        <div className="relative flex flex-col items-center justify-center h-20 w-24 group">
                            <span className="font-semibold text-red-400 text-base z-10 bg-brand-deep-blue/60 px-1 rounded transition-all group-hover:scale-110">후발주자</span>
                             <svg className="w-16 h-16 absolute text-red-500/50 z-0 transition-all group-hover:text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.35 4.537a.75.75 0 0 1 1.3 0l6.25 10.5a.75.75 0 0 1-.65 1.113H6.525a.75.75 0 0 1-.65-1.113L12.125 4.5a.75.75 0 0 1 1.3 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4l16 16"/></svg>
                        </div>
                    </div>
                    
                    <div className="bg-brand-deep-blue/70 border border-brand-slate-dark/50 rounded-md p-3 text-xs w-full">
                         <h5 className="font-semibold text-brand-green text-sm mb-1">핵심 IP 자산</h5>
                         <p className="text-brand-slate-light">▲ 공동 기술 특허 ▲ KC 표준 인증 주도 ▲ 독점적 실증 데이터</p>
                    </div>
                    <div className="bg-brand-green/10 p-3 rounded-lg w-full mt-4">
                        <h5 className="font-bold text-brand-green">결과: 장기적 시장 지배력 & 라이선스 수익</h5>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* --- Governance (REVISED) --- */}
      <div>
        <h3 className="text-3xl font-bold text-brand-slate-lightest mb-8 text-center">투명하고 민첩한 협업 거버넌스</h3>
        <div className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center gap-4">
                
                {/* 1. Strategic Layer */}
                <div className="relative bg-brand-deep-blue/70 border border-brand-slate-dark/50 rounded-lg p-4 w-full md:w-3/4">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-deep-blue p-2 rounded-full border border-brand-slate-dark/50">
                        <JtcIcon />
                    </div>
                    <h4 className="font-bold text-brand-green text-lg mt-8 mb-1">공동 기술위원회 (JTC)</h4>
                    <p className="text-xs text-brand-slate-light mb-3">월 1회 | 양사 CTO 참여</p>
                    <p className="text-sm text-brand-slate-lightest bg-black/20 p-2 rounded-md">전략적 R&D 방향성 및 핵심 의사결정</p>
                </div>
                
                <svg className="w-8 h-8 text-brand-slate-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                
                {/* 2. Tactical Layer */}
                <div className="relative bg-brand-deep-blue/70 border border-brand-slate-dark/50 rounded-lg p-4 w-full md:w-3/4">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-deep-blue p-2 rounded-full border border-brand-slate-dark/50">
                        <WorkingGroupIcon />
                    </div>
                    <h4 className="font-bold text-brand-green text-lg mt-8 mb-1">실무 워킹그룹</h4>
                    <p className="text-xs text-brand-slate-light mb-3">상시 운영 | 파트별 담당자</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        <p className="text-brand-slate-lightest bg-black/20 p-2 rounded-md">데이터 표준화</p>
                        <p className="text-brand-slate-lightest bg-black/20 p-2 rounded-md">API 프로토콜</p>
                        <p className="text-brand-slate-lightest bg-black/20 p-2 rounded-md">보안 정책</p>
                    </div>
                </div>
                
                <svg className="w-8 h-8 text-brand-slate-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                </svg>
                
                {/* 3. Performance Layer */}
                <div className="relative bg-brand-deep-blue/70 border border-brand-slate-dark/50 rounded-lg p-4 w-full md:w-3/4">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-deep-blue p-2 rounded-full border border-brand-slate-dark/50">
                        <KpiDashboardIcon />
                    </div>
                    <h4 className="font-bold text-brand-green text-lg mt-8 mb-1">공동 성과관리 (Shared KPI)</h4>
                    <p className="text-xs text-brand-slate-light mb-3">실시간 대시보드 | 전원 공유</p>
                    <p className="text-sm text-brand-slate-lightest bg-black/20 p-2 rounded-md">핵심 지표(가동률, 매출 등) 기반 투명한 성과 공유 및 피드백</p>
                </div>
            </div>
            <p className="text-center text-brand-slate text-sm mt-6 italic">
                전략(JTC) → 실행(워킹그룹) → 성과측정(KPI) → 피드백으로 이어지는 유기적이고 민첩한 거버넌스 체계
            </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
