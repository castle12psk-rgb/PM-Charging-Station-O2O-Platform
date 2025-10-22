import React from 'react';

// Icons
// Increased icon sizes for better visibility
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const MobileIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const WebIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const ApiGatewayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-4 4m0-4l4 4" /></svg>;
const MicroserviceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
const DatabaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7a8 8 0 0116 0" /></svg>;
const DataLakeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>;
const AiModelIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6.343A5.657 5.657 0 0117.657 12 5.657 5.657 0 0112 17.657 5.657 5.657 0 016.343 12 5.657 5.657 0 0112 6.343z" /></svg>;
const ChargingStationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 20v-6l-4 4 4 4zm2 0v-6l4 4-4 4zm-1-18v2.1c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V2h10v2.1c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1V2M3 10h18M5 14h14" /></svg>;

const Layer: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
  <div className={`bg-black/20 border border-brand-slate-dark/50 rounded-lg p-4 w-full ${className}`}>
    <h3 className="text-center font-bold text-brand-green mb-4 text-sm tracking-widest uppercase">{title}</h3>
    <div className="flex justify-center items-center gap-4 flex-wrap">
      {children}
    </div>
  </div>
);

// Increased padding, width, and font sizes for better readability
const ComponentBox: React.FC<{ icon: React.ReactNode; title: string; subtitle?: string; className?: string }> = ({ icon, title, subtitle, className }) => (
  <div className={`text-center flex flex-col items-center p-4 rounded-lg bg-brand-deep-blue/50 w-36 ${className}`}>
    <div className="mb-3">{icon}</div>
    <p className="font-bold text-sm text-brand-slate-lightest">{title}</p>
    {subtitle && <p className="text-xs text-brand-slate">{subtitle}</p>}
  </div>
);

const Arrow: React.FC<{ direction: 'up' | 'down' | 'double' }> = ({ direction }) => {
    const commonClasses = "text-brand-slate-dark text-4xl";
    if (direction === 'up') return <div className={commonClasses}>↑</div>;
    if (direction === 'down') return <div className={commonClasses}>↓</div>;
    return <div className={commonClasses}>↕</div>;
};

export const TechArchitectureDiagram: React.FC = () => {
  return (
    <div className="p-6 bg-brand-deep-blue border border-brand-slate-dark/50 rounded-lg font-kr text-white text-center animate-fade-in w-full">
      <h3 className="text-2xl font-bold text-brand-slate-lightest mb-2">통합 기술 아키텍처</h3>
      <p className="text-brand-slate-light max-w-2xl mx-auto mb-8">
        End-to-End 통합 플랫폼으로, 하드웨어부터 AI 분석까지 모든 기술 스택을 유기적으로 연결하여 최고의 시너지를 창출합니다.
      </p>
      
      <div className="space-y-4 flex flex-col items-center">
        {/* Layer 1: Presentation Layer */}
        <Layer title="Presentation Layer">
          <ComponentBox icon={<UserIcon />} title="사용자" />
          <ComponentBox icon={<MobileIcon />} title="User App" subtitle="(Android, iOS)" />
          <ComponentBox icon={<WebIcon />} title="Admin Dashboard" subtitle="(Web)" />
          <ComponentBox icon={<MicroserviceIcon />} title="3rd-Party" subtitle="(MaaS, 공공)" />
        </Layer>
        
        <Arrow direction="double" />

        {/* Layer 2: Application Layer */}
        <Layer title="Application Layer">
            <div className="flex flex-col items-center gap-4">
                <ComponentBox icon={<ApiGatewayIcon />} title="API Gateway" subtitle="인증/인가, 라우팅" className="w-48 !bg-cyan-500/20" />
                <Arrow direction="down" />
                <div className="flex justify-center items-start gap-2 flex-wrap bg-black/20 p-3 rounded-lg">
                    <ComponentBox icon={<MicroserviceIcon />} title="사용자 서비스" />
                    <ComponentBox icon={<MicroserviceIcon />} title="결제 서비스" />
                    <ComponentBox icon={<MicroserviceIcon />} title="스테이션 관리" />
                    <ComponentBox icon={<MicroserviceIcon />} title="파트너 서비스" />
                </div>
            </div>
        </Layer>

        <Arrow direction="double" />

        {/* Layer 3: Data & AI Layer */}
        <Layer title="Data & AI Layer">
            <ComponentBox icon={<DatabaseIcon />} title="Operational DB" subtitle="(PostgreSQL)" />
            <ComponentBox icon={<DataLakeIcon />} title="Data Lake" subtitle="(S3 / BigQuery)" />
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 rounded-lg bg-brand-deep-blue/50 border border-brand-green/30 w-full lg:w-auto">
                <div className="flex-shrink-0">
                    <ComponentBox icon={<AiModelIcon />} title="AI/ML Engine" className="!bg-brand-green/20 w-36" />
                </div>
                <div className="text-left md:border-l-2 border-brand-green/50 md:pl-4">
                    <h4 className="font-bold text-brand-slate-lightest mb-2 text-base text-center md:text-left">Core Models & MLOps</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="text-brand-slate">
                            <strong className="text-brand-slate-light">예측 정비 (PdM):</strong><br/>
                            LSTM 기반 시계열 분석으로 배터리 수명 및 고장 징후 예측.
                        </li>
                        <li className="text-brand-slate">
                            <strong className="text-brand-slate-light">수요 예측:</strong><br/>
                            XGBoost 활용, 시공간적(Spatio-temporal) 스테이션 수요 분석.
                        </li>
                        <li className="text-brand-slate">
                            <strong className="text-brand-slate-light">이상 거래 탐지 (FDS):</strong><br/>
                            Isolation Forest 기반 비정상 이용 패턴 실시간 감지.
                        </li>
                        <li className="text-brand-slate pt-2 mt-2 border-t border-brand-slate-dark/50">
                            <strong className="text-brand-slate-light">MLOps Pipeline:</strong><br/>
                            Kubeflow 기반 모델 학습·배포·모니터링 자동화 파이프라인.
                        </li>
                    </ul>
                </div>
            </div>
        </Layer>

        <Arrow direction="double" />

        {/* Layer 4: Infrastructure / IoT Layer */}
        <Layer title="Infrastructure & IoT Layer">
          <ComponentBox icon={<ChargingStationIcon />} title="SU:M Station" subtitle="IoT Edge Device" className="w-48 !bg-green-500/20" />
        </Layer>
      </div>
    </div>
  );
};