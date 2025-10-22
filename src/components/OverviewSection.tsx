import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FireIcon, WarningTriangleIcon, BoltSlashIcon, CheckIcon } from './icons';
import { SystemArchitectureInfographic } from './SystemArchitectureInfographic';

// --- Redefined for expert audience ---
const overviewData = [
  { item: '사업명', content: '퍼스널 모빌리티(PM) 충전스테이션 및 O2O 통합플랫폼' },
  { item: '컨소시엄', content: '㈜오상테크놀로지 (플랫폼·AI) × ㈜포인테크 (H/W 양산)' },
  { item: '사업기간', content: '2025.12.22 ~ 2027.12.21 (24개월)' },
  { item: '핵심 기술', content: 'H/W(SU:M Station), S/W(OSE-O2O Platform), AI(예측정비 CRM)' },
  { 
    item: '전략 목표', 
    content: '① 국민안전 확보 및 사회적 비용 절감\n② 차세대 PM 충전 인프라 표준 선도\n③ 데이터 기반 스마트시티 연계 생태계 구축' 
  },
];

// --- Redefined for expert audience ---
const roadmapData = [
    {
        phase: "01",
        title: "기반 구축 및 기술 실증",
        period: "2025년",
        goal: "시장 진입점 확보 및 핵심 기술 검증",
        actions: ["인천 실증특례 200개소 구축 및 운영", "HW/SW 안정화 및 데이터 수집 체계 확립", "KC 통합 인증 및 공공조달 자격 확보"],
        kpis: ["실증지역 가동률 99.5% 달성", "초기 사용자 데이터 1TB 이상 확보", "평균 응답속도 300ms 이하 유지"]
    },
    {
        phase: "02",
        title: "사업 고도화 및 수도권 확산",
        period: "2026년",
        goal: "상업적 가치 증명 및 시장 점유율 확대",
        actions: ["플랫폼 SaaS 모델 전환 및 과금 체계 수립", "B2B/B2G 대상 영업망 구축 및 파트너십 체결", "서울시 교통정보시스템(TOPIS) 데이터 연동"],
        kpis: ["유료 전환율 20% 달성", "수도권 내 스테이션 1,000개소 설치", "플랫폼 누적 가입자 10만 명 확보"]
    },
    {
        phase: "03",
        title: "생태계 완성 및 글로벌 진출",
        period: "2027년",
        goal: "독보적 시장 지위 확보 및 글로벌 확장 기반 마련",
        actions: ["AI 예측정비 알고리즘 고도화 (고장 예측 정확도 95% 목표)", "3rd-Party 연동을 위한 개방형 API 공개", "베트남·태국 등 동남아 시장 PoC 착수"],
        kpis: ["AI 기반 유지보수 비용 30% 절감", "API 호출 월 100만 건 돌파", "해외 파트너십(MOU) 2건 이상 체결"]
    },
    {
        phase: "04",
        title: "스마트시티 플랫폼화",
        period: "2028년 이후",
        goal: "스마트시티 모빌리티 핵심 데이터 허브로 진화",
        actions: ["PM 이동 데이터와 대중교통 데이터 통합 분석", "MaaS(Mobility as a Service) 플랫폼 연동", "글로벌 표준 모델 확립 및 기술 라이선스 사업화"],
        kpis: ["데이터 기반 교통 정책 제안 5건", "플랫폼 거래액 1,000억 원 달성", "글로벌 기술 라이선스 계약 체결"]
    }
];

// Fix: Define problemData constant to resolve 'Cannot find name' error.
const problemData = [
  {
    icon: <FireIcon className="w-8 h-8 text-red-400" />,
    stat: '연 110건+',
    title: '충전 중 화재·폭발 사고',
    description: '비인증/불법개조 배터리 및 충전기 사용으로 인한 화재 사고가 매년 급증하여 사회적 안전을 위협하고 있습니다.',
  },
  {
    icon: <WarningTriangleIcon className="w-8 h-8 text-yellow-400" />,
    stat: '사망 4.8배↑',
    title: '안전사고 및 무단방치',
    description: 'PM 관련 교통사고 사망자 수가 4년 새 4.8배 증가했으며, 무단 방치된 기기는 보행자와 도시 미관에 심각한 문제를 야기합니다.',
  },
  {
    icon: <BoltSlashIcon className="w-8 h-8 text-blue-400" />,
    stat: '95% 이상',
    title: '비표준·비인증 충전 인프라',
    description: '대부분의 충전 인프라가 표준화되지 않고 KC인증이 부재하여 과충전, 과열 등 잠재적 위험에 상시 노출되어 있습니다.',
  },
];


// --- Icons for Roadmap ---
const TargetIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
);
const GearsIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const ChartBarIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

export const OverviewSection: React.FC = () => {
  return (
    <SectionWrapper title="사업 개요" subtitle="Project Overview">
      <p className="text-xl text-brand-slate-light mb-12 leading-relaxed italic border-l-4 border-brand-green pl-6">
        “실내 충전 화재, 무단 방치, 비표준 충전 인프라의 한계를 넘어 국민 안전과 도시 질서를 위한 지능형 충전 플랫폼 구축.”
      </p>
      
      <div className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-8 items-center">
            <div className="md:col-span-5 relative border border-red-500/30 rounded-lg overflow-hidden group shadow-lg">
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 tracking-wider">
                    PROBLEM
                </div>
                <img src="https://www.imaeil.com/photos/2025/04/09/2025040917091148977_l.jpg" alt="Disorganized personal mobility devices" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="text-lg font-bold text-white mb-1">무질서와 잠재적 위험</h4>
                    <p className="text-sm text-brand-slate-lightest">무단 방치된 PM과 비인증 충전기 사용은 도시 미관을 해치고 심각한 안전사고를 유발합니다.</p>
                </div>
            </div>

            <div className="hidden md:flex justify-center text-brand-slate text-4xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-brand-slate-light animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>

            <div className="md:col-span-5 relative border border-brand-green/30 rounded-lg overflow-hidden group shadow-lg">
                <div className="absolute top-3 left-3 bg-brand-green text-brand-deep-blue text-xs font-bold px-3 py-1 rounded-full z-10 tracking-wider">
                    SOLUTION
                </div>
                <img src="https://media.licdn.com/dms/image/v2/C5612AQFCsWmjSDL-Mg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1652820949116?e=1762992000&v=beta&t=iVrmlcVF-SG8OvTTyac9xfe6GV6C7dGlnLhPUzs74Lg" alt="SU:M Station, an organized charging solution" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="text-lg font-bold text-white mb-1">안전과 질서의 인프라, SU:M Station</h4>
                    <p className="text-sm text-brand-slate-lightest">KC인증을 받은 표준화된 충전 스테이션은 도시의 질서를 회복하고 시민의 안전을 보장합니다.</p>
                </div>
            </div>
        </div>
      </div>
      
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg overflow-hidden flex flex-col">
            <img src="https://dimg.donga.com/wps/NEWS/IMAGE/2021/06/01/107216483.2.jpg" alt="Battery fire hazard" className="w-full h-48 object-cover"/>
            <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-red-400 mb-2">잠재된 화재 위험: 보이지 않는 시한폭탄</h4>
                <p className="text-brand-slate leading-relaxed">
                    비인증 충전기와 무분별한 실내 충전은 단순한 부주의를 넘어, 우리 가족과 이웃의 안전을 위협하는 심각한 사회적 문제입니다. 이는 예측 불가능한 재산 및 인명 피해로 이어질 수 있습니다.
                </p>
            </div>
        </div>
        <div className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg overflow-hidden flex flex-col">
            <div className="w-full h-48">
              <SystemArchitectureInfographic />
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-brand-green mb-2">체계적 안전 관리: 데이터 기반 예측 정비</h4>
                <p className="text-brand-slate leading-relaxed">
                    SU:M Station은 KC 인증 하드웨어와 AI 관제 시스템을 결합하여 과충전, 과열을 원천 차단하고 배터리 상태를 실시간으로 모니터링하여 잠재적 위험을 사전에 예방합니다.
                </p>
            </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-brand-slate-lightest mb-6">PM, 편리함 이면의 심각한 도시 문제</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemData.map((problem, index) => (
                <div key={index} className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg p-6 hover:border-brand-green/50 transition-colors duration-300">
                    <div className="flex items-center gap-4 mb-4">
                        {problem.icon}
                        <span className="text-2xl font-bold text-brand-green">{problem.stat}</span>
                    </div>
                    <h4 className="text-lg font-bold text-brand-slate-lightest mb-2">{problem.title}</h4>
                    <p className="text-sm text-brand-slate leading-6">{problem.description}</p>
                </div>
            ))}
        </div>
      </div>
      
      {/* --- REVISED SECTION --- */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-brand-slate-lightest mb-6">프로젝트 핵심 요약 (Executive Summary)</h3>
        <div className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg overflow-hidden">
            <div className="divide-y divide-brand-slate-dark/30">
                {overviewData.map(({ item, content }) => (
                <div key={item} className="flex flex-col md:flex-row p-4">
                    <h4 className="w-full md:w-1/4 font-semibold text-brand-slate-lightest mb-2 md:mb-0">{item}</h4>
                    <p className="w-full md:w-3/4 text-brand-slate whitespace-pre-line">{content}</p>
                </div>
                ))}
            </div>
        </div>
      </div>

      {/* --- REVISED SECTION --- */}
      <div>
        <h3 className="text-2xl font-bold text-brand-slate-lightest mb-8">단계별 로드맵: 기술 실증부터 글로벌 확산까지</h3>
        <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-brand-slate-dark/50 hidden md:block" aria-hidden="true"></div>
            
            <div className="space-y-12">
                {roadmapData.map((step) => (
                    <div key={step.phase} className="relative flex items-start">
                        <div className="flex-shrink-0 w-16 h-16 bg-brand-deep-blue border-2 border-brand-green rounded-full flex items-center justify-center text-brand-green font-mono font-bold text-2xl z-10 shadow-lg">
                            {step.phase}
                        </div>
                        <div className="ml-6 md:ml-10 flex-1 bg-brand-deep-blue/40 border border-brand-slate-dark/30 rounded-lg p-6 group hover:border-brand-green/50 transition-colors">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                                <h4 className="text-xl font-bold text-brand-slate-lightest">{step.title}</h4>
                                <span className="text-sm font-mono text-brand-green bg-brand-green/10 px-3 py-1 rounded-full mt-2 sm:mt-0">{step.period}</span>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="text-brand-green mt-0.5"><TargetIcon /></div>
                                    <div>
                                        <h5 className="font-semibold text-brand-slate-light">핵심 목표</h5>
                                        <p className="text-brand-slate">{step.goal}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-brand-green mt-0.5"><GearsIcon /></div>
                                    <div>
                                        <h5 className="font-semibold text-brand-slate-light">주요 실행과제</h5>
                                        <ul className="list-disc list-inside text-brand-slate">
                                            {step.actions.map((action, i) => <li key={i}>{action}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-brand-green mt-0.5"><ChartBarIcon /></div>
                                    <div>
                                        <h5 className="font-semibold text-brand-slate-light">핵심성과지표 (KPIs)</h5>
                                        <ul className="list-disc list-inside text-brand-slate">
                                             {step.kpis.map((kpi, i) => <li key={i}>{kpi}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
