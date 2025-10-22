import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ShieldCheckIcon, UserGroupIcon, BuildingOffice2Icon, DocumentCheckIcon, HandThumbUpIcon, SparklesIcon, LightBulbIcon, MapIcon, FlagIcon, GlobeAltIcon, BriefcaseIcon, CurrencyDollarIcon } from './icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const socialEffects = [
  { icon: <ShieldCheckIcon className="w-10 h-10 text-brand-green" />, title: '시민안전 강화', metric: '화재사고 99% 감소 목표', description: 'KC인증 기반 표준화된 인프라로 화재/폭발 사고를 원천 차단합니다.' },
  { icon: <UserGroupIcon className="w-10 h-10 text-brand-green" />, title: '교통약자 이동권 보장', metric: 'PM 이용 접근성 50% 향상', description: '도시 곳곳에 안전한 충전소를 배치하여 누구나 편리하게 PM을 이용하도록 지원합니다.' },
  { icon: <BuildingOffice2Icon className="w-10 h-10 text-brand-green" />, title: '도시 문제 해소', metric: '무단방치 PM 80% 감소', description: '충전/보관 거점 확보를 통해 무단 방치 문제를 해결하고 쾌적한 도시 환경을 조성합니다.' },
];

const industrialEffects = [
  { icon: <DocumentCheckIcon className="w-10 h-10 text-brand-green" />, title: 'PM 인프라 표준 선도', metric: '국가표준(KS) 연계 추진', description: '안전과 호환성이 검증된 하드웨어/소프트웨어 표준을 제시하고 시장을 선도합니다.' },
  { icon: <HandThumbUpIcon className="w-10 h-10 text-brand-green" />, title: '기술협력 성공모델 창출', metric: '컨소시엄 기반 IP 10건+ 확보', description: 'H/W-S/W 기업 간의 성공적인 협력 모델을 구축하여 동반성장의 기틀을 마련합니다.' },
  { icon: <SparklesIcon className="w-10 h-10 text-brand-green" />, title: 'AI·O2O 융합 생태계 확산', metric: '3rd-Party 연동 20개사+ 목표', description: '개방형 API를 통해 MaaS, 스마트시티 등 다양한 산업과의 연계를 촉진합니다.' },
];

const globalTimeline = [
  { 
    phase: '01', 
    period: '2027', 
    title: '시장 진입 및 PoC', 
    description: '주요 동남아 국가에서 파일럿 프로젝트를 통해 시장 특성을 분석하고 비즈니스 모델을 검증합니다.',
    color: '#22c55e', // green-500
    colorClass: 'border-green-500',
    textColor: 'text-green-400',
    objectives: [
        { icon: <MapIcon className="w-5 h-5" />, text: '시장 조사 (Market Research)' },
        { icon: <FlagIcon className="w-5 h-5" />, text: '파일럿 론칭 (PoC)' },
        { icon: <UserGroupIcon className="w-5 h-5" />, text: '현지 파트너 확보' },
    ],
    kpis: ['2개 이상 목표 국가', '5개 이상 전략적 파트너', '100기 이상 파일럿 스테이션'],
  },
  { 
    phase: '02', 
    period: '2028-2029', 
    title: 'JV 설립 및 상용화', 
    description: '현지 합작 법인을 설립하여 안정적인 사업 기반을 구축하고 본격적인 상용화를 준비합니다.',
    color: '#eab308', // yellow-500
    colorClass: 'border-yellow-500',
    textColor: 'text-yellow-400',
    objectives: [
        { icon: <BriefcaseIcon className="w-5 h-5" />, text: '합작 법인(JV) 설립' },
        { icon: <BuildingOffice2Icon className="w-5 h-5" />, text: '현지 거점 구축' },
        { icon: <CurrencyDollarIcon className="w-5 h-5" />, text: '상용 판매 개시' },
    ],
    kpis: ['1개 이상 JV 설립', '1,500기 이상 스테이션 구축', '파일럿 지역 BEP 달성'],
  },
  { 
    phase: '03', 
    period: '2030+', 
    title: '규모 확장 및 라이선싱', 
    description: '검증된 비즈니스 모델을 전 세계로 확장하고 기술 라이선스를 통해 추가 수익을 창출합니다.',
    color: '#ef4444', // red-500
    colorClass: 'border-red-500',
    textColor: 'text-red-400',
    objectives: [
        { icon: <SparklesIcon className="w-5 h-5" />, text: '본격적인 확장' },
        { icon: <GlobeAltIcon className="w-5 h-5" />, text: 'EU/북미 시장 진출' },
        { icon: <DocumentCheckIcon className="w-5 h-5" />, text: '기술 라이선싱' },
    ],
    kpis: ['10개국 이상 진출', '글로벌 10,000기 이상 스테이션', '5건 이상 라이선스 계약'],
  },
];

const growthData = [
  { name: 'Phase 1\n(PoC)', Stations: 100, color: '#22c55e' },
  { name: 'Phase 2\n(JV)', Stations: 1500, color: '#eab308' },
  { name: 'Phase 3\n(Scale-up)', Stations: 10000, color: '#ef4444' },
];

const EffectCard: React.FC<{ icon: React.ReactNode; title: string; metric: string; description: string }> = ({ icon, title, metric, description }) => (
    <div className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg p-6 flex flex-col items-center text-center h-full hover:border-brand-green/50 hover:-translate-y-1 transition-all duration-300">
        <div className="mb-4">{icon}</div>
        <h4 className="font-bold text-lg text-brand-slate-lightest">{title}</h4>
        <p className="font-mono text-brand-green my-2">{metric}</p>
        <p className="text-sm text-brand-slate flex-grow">{description}</p>
    </div>
);

const PhaseCard: React.FC<{ step: typeof globalTimeline[0] }> = ({ step }) => (
    <div className={`bg-brand-deep-blue/70 border-l-4 ${step.colorClass} rounded-r-lg p-4 mb-4 shadow-lg`}>
        <p className={`font-mono font-bold ${step.textColor}`}>{step.phase}. {step.title} ({step.period})</p>
        <p className="text-brand-slate text-sm mt-1 mb-3">{step.description}</p>
        
        <div className="border-t border-brand-slate-dark/30 pt-3">
            <h5 className="font-semibold text-brand-slate-lightest text-sm mb-2">핵심 목표 (Key Objectives)</h5>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-brand-slate">
                {step.objectives.map((obj, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <span className={step.textColor}>{obj.icon}</span>
                        <span>{obj.text}</span>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="border-t border-brand-slate-dark/30 pt-3 mt-3">
            <h5 className="font-semibold text-brand-slate-lightest text-sm mb-2">핵심 성과 지표 (Target KPIs)</h5>
            <ul className="list-disc list-inside text-sm text-brand-slate space-y-1">
                {step.kpis.map((kpi, i) => <li key={i}>{kpi}</li>)}
            </ul>
        </div>
    </div>
);


export const VisionSection: React.FC = () => {
  return (
    <SectionWrapper title="기대효과 및 미래 비전" subtitle="Expected Outcomes & Vision">
      <p className="text-xl text-brand-slate-light mb-16 leading-relaxed italic border-l-4 border-brand-green pl-6">
        “본 프로젝트는 사회적 문제를 해결하고 산업적 혁신을 선도하며, 궁극적으로는 대한민국을 대표하는 스마트시티 모빌리티 인프라 모델로 성장하는 것을 목표로 합니다.”
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-brand-slate-lightest mb-6 text-center">사회적 효과 (Social Impact)</h3>
          <div className="grid grid-cols-1 gap-6">
            {socialEffects.map((effect, index) => <EffectCard key={index} {...effect} />)}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-brand-slate-lightest mb-6 text-center">산업적 효과 (Industrial Impact)</h3>
          <div className="grid grid-cols-1 gap-6">
            {industrialEffects.map((effect, index) => <EffectCard key={index} {...effect} />)}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-3xl font-bold text-brand-slate-lightest mb-8 text-center">미래 비전: 스마트시티 허브로의 진화</h3>
        <div className="relative flex justify-center items-center p-8 min-h-[400px]">
          <div className="absolute w-96 h-96 border-2 border-dashed border-brand-slate-dark rounded-full animate-spin-slow"></div>
          <div className="absolute w-72 h-72 bg-brand-deep-blue/50 border border-brand-slate-dark/50 rounded-full"></div>
          
          <div className="absolute w-64 h-64 flex items-center justify-center text-center animate-pulse-glow z-20">
              <div className="w-56 h-56 bg-brand-green/10 border-2 border-brand-green rounded-full flex flex-col items-center justify-center p-4">
                  <LightBulbIcon className="w-10 h-10 text-brand-green mb-2"/>
                  <h4 className="font-extrabold text-2xl text-brand-green">Smart City Hub</h4>
                  <p className="text-xs text-brand-slate-lightest">데이터 기반 도시 인프라</p>
              </div>
          </div>
          
          <div className="absolute text-center z-10 transform translate-x-48">
              <div className="bg-brand-deep-blue/80 backdrop-blur-sm border border-brand-slate-dark/50 p-3 rounded-lg w-40">
                  <h5 className="font-bold text-brand-slate-lightest">Phase 03</h5>
                  <p className="text-sm text-brand-slate">MaaS, 공공데이터, O2O 연동</p>
              </div>
          </div>
           <div className="absolute text-center z-10 transform -translate-x-48">
              <div className="bg-brand-deep-blue/80 backdrop-blur-sm border border-brand-slate-dark/50 p-3 rounded-lg w-40">
                  <h5 className="font-bold text-brand-slate-lightest">Phase 01</h5>
                  <p className="text-sm text-brand-slate">PM 충전 인프라</p>
              </div>
          </div>
          <div className="absolute text-center z-10 transform -translate-y-36">
              <div className="bg-brand-deep-blue/80 backdrop-blur-sm border border-brand-slate-dark/50 p-3 rounded-lg w-48">
                  <h5 className="font-bold text-brand-slate-lightest">Phase 02</h5>
                  <p className="text-sm text-brand-slate">모빌리티 데이터 플랫폼</p>
              </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-brand-slate-lightest mb-2 text-center">글로벌 확산 로드맵 (Global Expansion Roadmap)</h3>
        <p className="text-brand-slate-light text-center max-w-3xl mx-auto mb-8">단계적, 데이터 기반 접근 방식을 통해 주요 글로벌 시장에 진출하고 규모를 확장하여 글로벌 입지를 구축합니다.</p>

        <div className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg p-4 md:p-8">
            <div className="w-full">
               {globalTimeline.map(step => (
                  <PhaseCard key={step.phase} step={step} />
               ))}
            </div>
        </div>

        <div className="mt-12">
            <h4 className="text-2xl font-bold text-brand-slate-lightest mb-4 text-center">예상 성장: 스테이션 구축 수량</h4>
            <div className="h-72 bg-brand-deep-blue/50 p-4 rounded-lg border border-brand-slate-dark/30">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={growthData} margin={{ top: 5, right: 20, left: -10, bottom: 20 }} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#495670" horizontal={false} />
                        <XAxis type="number" stroke="#a8b2d1" domain={[0, 11000]} tickFormatter={(value) => new Intl.NumberFormat('ko-KR').format(value)} />
                        <YAxis type="category" dataKey="name" stroke="#a8b2d1" width={100} tick={{ style: { whiteSpace: 'pre-wrap', fill: '#a8b2d1' }, fontSize: 12 }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(10, 25, 47, 0.9)',
                                borderColor: '#495670',
                            }}
                            cursor={{ fill: 'rgba(100, 255, 218, 0.1)' }}
                            formatter={(value: number) => [`${new Intl.NumberFormat('ko-KR').format(value)} 기`, '구축 수량']}
                        />
                        <Bar dataKey="Stations" barSize={35} radius={[0, 8, 8, 0]}>
                            {growthData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>

    </SectionWrapper>
  );
};