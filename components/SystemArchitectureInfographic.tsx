import React, { useState, useEffect } from 'react';

// Icons
const CodeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
);
const ApiIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M14 2v2"/><path d="M14 20v2"/></svg>
);
const CloudIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.99A5.5 5.5 0 0012 5a5.5 5.5 0 00-5.2 3.9" /></svg>
);
const ServerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
);
const ChargingStationIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-3"/><path d="M15 19H9"/><path d="M3.5 19H8"/><path d="M16 19h4.5"/><path d="M12 15l3-3 3 3"/><path d="M12 15V6.5a2.5 2.5 0 0 1 5 0V7"/><path d="M5 15V6.5a2.5 2.5 0 0 1 5 0V7"/><rect x="2" y="2" width="20" height="17" rx="2"/></svg>
);
const BatteryIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line></svg>
);
const IotIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.48 0H5a5 5 0 0 0-1 9.9M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
);
const WifiIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
);
const AiMonitoringIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3.5" className="text-brand-green" fill="currentColor" />
        <path d="M12 9V6.5" />
        <path d="M12 15v2.5" />
        <path d="M15 12h2.5" />
        <path d="M9 12H6.5" />
        <path d="M14.121 9.879l1.768-1.768" />
        <path d="M8.111 15.889l-1.768 1.768" />
        <path d="M9.879 9.879l-1.768-1.768" />
        <path d="M15.889 15.889l-1.768-1.768" />
        <circle cx="12" cy="12" r="10">
            <animate attributeName="r" from="9" to="11" dur="2s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="1" to="0.5" dur="2s" begin="0s" repeatCount="indefinite" />
        </circle>
    </svg>
);


const InfographicBlock: React.FC<{title: string; subtitle: string; className?: string; children: React.ReactNode}> = ({ title, subtitle, className, children }) => (
  <div className={`relative rounded-xl shadow-2xl p-3 w-40 h-40 md:w-56 md:h-56 flex flex-col ${className}`}>
    <div className="text-center border-b border-white/20 pb-2 mb-2">
      <h3 className="font-bold text-xs md:text-sm">{title}</h3>
      <p className="text-xs opacity-80">{subtitle}</p>
    </div>
    <div className="flex-grow relative">{children}</div>
  </div>
);

const IconWrapper: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = '' }) => (
  <div className={`absolute bg-white/10 backdrop-blur-sm rounded-full p-1.5 md:p-2 ${className}`}>
    {children}
  </div>
);

export const SystemArchitectureInfographic: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const barHeights = ['40%', '60%', '50%', '75%', '90%'];

    return (
        <div className="relative w-full h-full bg-brand-deep-blue/50 p-2 sm:p-4 rounded-lg flex flex-col items-center justify-between font-kr text-xs text-white overflow-hidden">
            <div className="relative w-full flex-grow flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-x-2">
                <InfographicBlock title="(주)오상테크놀로지" subtitle="Platform & API" className="bg-gradient-to-br from-blue-500 to-blue-800">
                    <IconWrapper className="top-0 left-0"><CloudIcon /></IconWrapper>
                    <IconWrapper className="top-0 right-0"><ServerIcon /></IconWrapper>
                    <IconWrapper className="bottom-0 left-0"><CodeIcon /></IconWrapper>
                    <IconWrapper className="bottom-0 right-0"><ApiIcon /></IconWrapper>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <AiMonitoringIcon className="w-8 h-8 md:w-12 md:h-12 text-brand-green animate-pulse-glow" />
                        <p className="text-xs font-bold mt-1 text-brand-green bg-black/30 px-2 py-0.5 rounded">실시간 AI 관제</p>
                    </div>
                </InfographicBlock>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-100 text-brand-deep-blue rounded-2xl shadow-2xl p-4 text-center w-36 h-24 md:w-48 md:h-32 flex flex-col justify-center">
                    <h3 className="font-bold text-sm md:text-base">PM 충전스테이션</h3>
                    <h3 className="font-bold text-sm md:text-base">O2O 통합플랫폼</h3>
                    <p className="text-xs opacity-80 mt-1">(최종제품)</p>
                </div>
                
                <InfographicBlock title="(주)포인테크" subtitle="SU:M Station H/W" className="bg-gradient-to-br from-green-400 to-teal-600">
                    <IconWrapper className="top-0 left-0"><ChargingStationIcon /></IconWrapper>
                    <IconWrapper className="top-0 right-0"><BatteryIcon /></IconWrapper>
                    <IconWrapper className="bottom-0 left-0"><IotIcon /></IconWrapper>
                    <IconWrapper className="bottom-0 right-0"><WifiIcon /></IconWrapper>
                </InfographicBlock>
            </div>
            
            <div className="w-full flex justify-between items-end px-4 md:px-16 lg:px-24 xl:px-32">
                 <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-32 md:w-20 md:h-40 bg-slate-800 border-2 md:border-4 border-slate-600 rounded-2xl md:rounded-3xl p-1.5 flex flex-col">
                        <div className="bg-blue-200 flex-grow rounded-xl md:rounded-2xl flex flex-col justify-between p-2">
                            <div className="w-6 h-1.5 md:w-8 md:h-2 bg-slate-800 rounded-full mx-auto"></div>
                            <div className="space-y-1">
                                <div className="h-1.5 md:h-2 bg-blue-400 rounded-full"></div>
                                <div className="h-1.5 md:h-2 bg-blue-400 rounded-full w-4/5"></div>
                            </div>
                        </div>
                    </div>
                    <p className="font-semibold text-xs md:text-sm">User App</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-24 h-20 md:w-32 md:h-24 bg-slate-200 rounded-lg p-2 flex items-end gap-1.5">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-3 md:w-4 rounded-t-sm ${i < 2 ? 'bg-blue-500' : 'bg-green-400'} ${isMounted ? 'animate-bar-grow' : ''}`} style={{ height: isMounted ? barHeights[i] : '0%' , animationDelay: `${i * 100}ms`}}></div>
                        ))}
                    </div>
                    <p className="font-semibold text-xs md:text-sm">Admin Dashboard</p>
                </div>
            </div>

            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <defs>
                    <marker id="arrowhead-infographic" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto" markerUnits="userSpaceOnUse">
                        <polygon points="0 0, 8 3, 0 6" fill="#a8b2d1" />
                    </marker>
                </defs>
                
                {/* Desktop Arrows */}
                <g className="hidden md:block">
                    <path d="M 28% 45% C 35% 35%, 35% 35%, 42% 43%" stroke="#a8b2d1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-infographic)" className="animate-dash-flow" />
                    <path d="M 42% 57% C 35% 65%, 35% 65%, 28% 55%" stroke="#a8b2d1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-infographic)" className="animate-dash-flow" style={{animationDirection: 'reverse'}} />
                    <path d="M 72% 45% C 65% 35%, 65% 35%, 58% 43%" stroke="#a8b2d1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-infographic)" className="animate-dash-flow" style={{animationDirection: 'reverse'}} />
                    <path d="M 58% 57% C 65% 65%, 65% 65%, 72% 55%" stroke="#a8b2d1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-infographic)" className="animate-dash-flow" />
                    
                    <path d="M 50% 60% C 50% 70%, 30% 75%, 25% 85%" stroke="#a8b2d1" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-infographic)" />
                    <path d="M 50% 60% C 50% 70%, 70% 75%, 75% 85%" stroke="#a8b2d1" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-infographic)" />
                </g>
                
                {/* Mobile Arrows */}
                <g className="md:hidden">
                    <path d="M 50% 25% C 40% 30%, 40% 30%, 48% 40%" stroke="#a8b2d1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-infographic)" className="animate-dash-flow" />
                    <path d="M 52% 40% C 60% 30%, 60% 30%, 50% 25%" stroke="#a8b2d1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-infographic)" className="animate-dash-flow" style={{animationDirection: 'reverse'}}/>
                    <path d="M 50% 75% C 40% 70%, 40% 70%, 48% 60%" stroke="#a8b2d1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-infographic)" className="animate-dash-flow" style={{animationDirection: 'reverse'}}/>
                    <path d="M 52% 60% C 60% 70%, 60% 70%, 50% 75%" stroke="#a8b2d1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-infographic)" className="animate-dash-flow" />

                    <path d="M 50% 55% V 80% L 30% 88%" stroke="#a8b2d1" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-infographic)" />
                    <path d="M 50% 55% V 80% L 70% 88%" stroke="#a8b2d1" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-infographic)" />
                </g>
            </svg>
        </div>
    );
};
