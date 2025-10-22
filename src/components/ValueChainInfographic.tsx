import React from 'react';

// --- SVG Icons (Colors adjusted for light background) ---
const FuelPumpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 7h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1h-2v-5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9.5 10l-1.5 3h4l-1.5 3" /></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const GearsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const MonitoringIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13l3-3 3 3 3-3" /></svg>;
const ReservationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 16l2 2 4-4" /></svg>;
const CrmIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>;
const O2oIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const ScooterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="18" r="2.5" /><circle cx="17" cy="18" r="2.5" /><path d="M7 18H5.5A2.5 2.5 0 0 1 3 15.5V12h3l2 4" /><path d="M17 18h-5l-2-4h3.5A2.5 2.5 0 0 1 16 11.5V9" /><path d="M16 9H13V7h3z" /><path d="M13 7l-2-3" /></svg>;
const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const CloudIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.99A5.5 5.5 0 0012 5a5.5 5.5 0 00-5.2 3.9" /></svg>;
const ControlIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14a2 2 0 100-4 2 2 0 000 4z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9V3m0 18v-6" /></svg>;
const EconomicsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>;

const ArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>;

// --- Component Building Blocks ---
const InfoCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`bg-slate-50 border border-slate-200 rounded-lg shadow-md text-center p-4 flex-1 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
        {children}
    </div>
);
const OutputCard: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center bg-white border border-slate-200 rounded-lg p-2 w-full shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
        <div className="flex-shrink-0">{icon}</div>
        <p className="ml-2 font-semibold text-slate-800 text-left text-sm">{text}</p>
    </div>
);

const ValueChainContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-center md:justify-around gap-4 shadow-lg">
    {children}
  </div>
);

export const ValueChainInfographic: React.FC = () => {
    return (
        <div className="my-12 grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Infographic 1 Wrapper */}
            <div className="flex flex-col gap-4">
                <ValueChainContainer>
                    <div className="flex flex-col gap-4 w-full md:w-32">
                        <InfoCard>
                            <FuelPumpIcon />
                            <p className="mt-2 font-bold text-base text-slate-900">Hardware</p>
                        </InfoCard>
                        <InfoCard>
                            <MapPinIcon />
                            <p className="mt-2 font-bold text-base text-slate-900">Infrastructure</p>
                        </InfoCard>
                    </div>
                    
                    <div className="flex-shrink-0 transform md:rotate-0 rotate-90"><ArrowIcon /></div>

                    <div className="flex flex-col items-center gap-4 w-full md:w-40">
                         <InfoCard className="border-2 border-dashed border-cyan-500 animate-pulse-glow">
                            <GearsIcon />
                            <p className="mt-2 font-bold text-base text-slate-900">HW+SW Solution</p>
                         </InfoCard>
                    </div>

                    <div className="flex-shrink-0 transform md:rotate-0 rotate-90"><ArrowIcon /></div>
                    
                    <div className="flex flex-col gap-3 w-full md:w-44">
                        <OutputCard icon={<MonitoringIcon />} text="Monitoring" />
                        <OutputCard icon={<ReservationIcon />} text="Reservation & Payment" />
                        <OutputCard icon={<CrmIcon />} text="AI CRM" />
                        <OutputCard icon={<O2oIcon />} text="O2O Business" />
                    </div>
                </ValueChainContainer>
                <h4 className="text-center font-semibold text-brand-slate tracking-wide">
                    [그림 1] HW/SW 통합 비즈니스 모델
                </h4>
            </div>

            {/* Infographic 2 Wrapper */}
            <div className="flex flex-col gap-4">
                <ValueChainContainer>
                    <div className="w-full md:w-36">
                        <InfoCard>
                            <ScooterIcon />
                            <p className="mt-2 font-bold text-base text-slate-900">Hardware</p>
                        </InfoCard>
                    </div>

                    <div className="flex-shrink-0 transform md:rotate-0 rotate-90"><ArrowIcon /></div>

                    <div className="w-full md:w-44">
                        <InfoCard className="border-2 border-dashed border-cyan-500 animate-pulse-glow">
                            <div className="flex justify-center mb-2"><CartIcon /></div>
                            <p className="font-bold text-base text-slate-900">O2O & API</p>
                            <div className="flex justify-center gap-2 mt-2">
                               <CloudIcon />
                               <CloudIcon />
                            </div>
                            <p className="text-sm text-slate-600 mt-2">HW+SW Integrated Solution</p>
                        </InfoCard>
                    </div>

                    <div className="flex-shrink-0 transform md:rotate-0 rotate-90"><ArrowIcon /></div>
                    
                    <div className="flex flex-col gap-4 w-full md:w-36">
                        <InfoCard>
                            <ControlIcon />
                            <p className="mt-2 font-bold text-base text-slate-900">Real-time Control</p>
                        </InfoCard>
                        <InfoCard>
                            <EconomicsIcon />
                            <p className="mt-2 font-bold text-base text-slate-900">O2O Economics</p>
                        </InfoCard>
                    </div>
                </ValueChainContainer>
                <h4 className="text-center font-semibold text-brand-slate tracking-wide">
                    [그림 2] 데이터 기반 O2O 경제 생태계
                </h4>
            </div>
        </div>
    );
};
