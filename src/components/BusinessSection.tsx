import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from 'recharts';
import { BriefcaseIcon, BuildingStorefrontIcon, CloudArrowUpIcon, CpuChipIcon, CircleStackIcon, CreditCardIcon, CurrencyDollarIcon, UserGroupIcon, WrenchScrewdriverIcon } from './icons';

const strategyData = [
  { stage: '1단계: Beachhead', period: '2025~2026', goal: '인천 경제자유구역(IFEZ) 실증특례 200개소 구축을 통한 기술 검증 및 초기 레퍼런스 확보. KC 통합 인증 및 공공조달 자격 획득.' },
  { stage: '2단계: Expansion', period: '2026~2027', goal: '수도권(서울/경기) 지자체 및 B2B 대상 확산. 플랫폼 SaaS형 고도화 및 유료 모델 전환. 데이터 API 상품화.' },
  { stage: '3단계: Scale-up', period: '2027 이후', goal: '전국 단위 확산 및 채널 파트너십 구축. 베트남·태국 등 동남아 시장 PoC 착수 및 글로벌 라이선스 사업 모델 구체화.' },
];

const economicData = [
    { 
        name: '5년 누적 매출', 
        value: '1,425억 원', 
        subtext: '목표 달성 시',
        icon: <CurrencyDollarIcon className="w-10 h-10 text-brand-green" />,
        details: 'SaaS 구독료(60%), H/W 판매(30%), 데이터 및 기타(10%)로 구성된 안정적 포트폴리오'
    },
    { 
        name: '유지보수 비용절감', 
        value: '30% 이상', 
        subtext: 'AI 예측정비 도입효과',
        icon: <WrenchScrewdriverIcon className="w-10 h-10 text-brand-green" />,
        details: '고장 예측을 통한 선제적 대응으로 불필요한 출동 및 긴급 수리 비용을 절감하여 OPEX 최적화'
    },
    { 
        name: '직간접 고용창출', 
        value: '113명 + α', 
        subtext: 'R&D, 제조, 운영',
        icon: <BriefcaseIcon className="w-10 h-10 text-brand-green" />,
        details: '핵심 R&D 인력(20명), H/W 제조/설치(45명), 운영 및 사업개발(48명) 등 양질의 일자리 창출'
    },
];

const chartData = [
  { name: '2025', revenue: 50, saas: 20, hardware: 25, etc: 5, employment: 20 },
  { name: '2026', revenue: 150, saas: 80, hardware: 60, etc: 10, employment: 45 },
  { name: '2027', revenue: 400, saas: 240, hardware: 130, etc: 30, employment: 70 },
  { name: '2028', revenue: 800, saas: 500, hardware: 250, etc: 50, employment: 90 },
  { name: '2029', revenue: 1425, saas: 855, hardware: 425, etc: 145, employment: 113 },
];

const RevenueStreamCard: React.FC<{icon: React.ReactNode, title: string, items: string[], type: string}> = ({icon, title, items, type}) => (
    <div className="bg-brand-deep-blue/70 border border-brand-slate-dark/40 rounded-lg p-4 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-3">
            {icon}
            <div>
                <h4 className="font-bold text-brand-slate-lightest">{title}</h4>
                <p className="text-xs font-semibold text-brand-green">{type}</p>
            </div>
        </div>
        <ul className="text-sm text-brand-slate list-disc list-inside space-y-1 flex-grow">
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    </div>
);

export const BusinessSection: React.FC = () => {
  return (
    <SectionWrapper title="사업화 전략 및 경제효과" subtitle="Business Strategy & Impact">
        {/* --- NEW SECTION: Business Model & Revenue Streams --- */}
        <h3 className="text-3xl font-bold text-brand-slate-lightest mb-4">수익 모델: 다각화된 B2B/B2G 중심 수익 구조</h3>
        <p className="text-lg text-brand-slate-light mb-10 italic border-l-4 border-brand-green pl-6">
            초기 안정성을 위해 B2G/B2B향 하드웨어 판매 및 SaaS 구독료를 핵심 수익원으로 확보하고, B2C 및 데이터/O2O 사업을 통해 부가 가치를 창출하는 다각화된 모델을 추구합니다.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RevenueStreamCard 
                icon={<BriefcaseIcon className="w-8 h-8 text-brand-green" />}
                title="B2B / B2G"
                type="핵심 수익 (Core Revenue)"
                items={['SU:M Station 하드웨어 판매', 'OSE-O2O 플랫폼 SaaS 구독료', 'AI 예측정비 솔루션 라이선스', '데이터 API 판매']}
            />
            <RevenueStreamCard 
                icon={<UserGroupIcon className="w-8 h-8 text-brand-green" />}
                title="B2C"
                type="부가 수익 (Value-added Revenue)"
                items={['개인 사용자 충전 요금', '프리미엄 구독 모델 (월정액)', '배터리 상태진단 리포트 판매']}
            />
            <RevenueStreamCard 
                icon={<BuildingStorefrontIcon className="w-8 h-8 text-brand-green" />}
                title="O2O Ecosystem"
                type="미래 성장 동력 (Future Growth Engine)"
                items={['지역 상점 연계 광고/쿠폰', 'PM 수리/관리 중개 수수료', 'MaaS 플랫폼 연동 수수료']}
            />
        </div>

        {/* --- NEW SECTION: Target Market & Go-to-Market Strategy --- */}
        <h3 className="text-3xl font-bold text-brand-slate-lightest mt-20 mb-8">시장 진입 전략 (Go-to-Market)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg p-6">
                <h4 className="text-xl font-bold text-brand-slate-lightest">1. Primary Target</h4>
                <p className="font-semibold text-brand-green my-2">B2G (정부/지자체)</p>
                <p className="text-sm text-brand-slate">스마트시티, 교통 관련 부서, 공공기관 (LH, SH 등)</p>
                <p className="text-xs text-brand-slate-dark mt-2 bg-brand-slate/10 p-2 rounded">Why? 대규모 도입, 정책 연계성, 안정적 예산</p>
            </div>
            <div className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg p-6">
                <h4 className="text-xl font-bold text-brand-slate-lightest">2. Secondary Target</h4>
                <p className="font-semibold text-brand-green my-2">B2B (기업)</p>
                <p className="text-sm text-brand-slate">PM 공유서비스 기업, 대학교, 대규모 업무지구, 쇼핑몰</p>
                <p className="text-xs text-brand-slate-dark mt-2 bg-brand-slate/10 p-2 rounded">Why? 높은 이용률, 명확한 수요, 마케팅 파트너</p>
            </div>
            <div className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg p-6">
                <h4 className="text-xl font-bold text-brand-slate-lightest">3. Tertiary Target</h4>
                <p className="font-semibold text-brand-green my-2">B2C (개인)</p>
                <p className="text-sm text-brand-slate">고성능 PM 기기 소유자, PM 이용 빈도가 높은 통근자</p>
                <p className="text-xs text-brand-slate-dark mt-2 bg-brand-slate/10 p-2 rounded">Why? 브랜드 인지도 확보, 데이터 수집, O2O 연계</p>
            </div>
        </div>

        {/* --- NEW SECTION: Competitive Landscape --- */}
        <h3 className="text-3xl font-bold text-brand-slate-lightest mt-20 mb-8">경쟁 우위 분석: The Only End-to-End Player</h3>
        <div className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg p-6">
            <div className="relative grid grid-cols-2 grid-rows-2 gap-1 w-full h-96">
                <div className="absolute top-1/2 left-0 w-full h-px bg-brand-slate-dark/50"></div>
                <div className="absolute left-1/2 top-0 h-full w-px bg-brand-slate-dark/50"></div>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-brand-slate-light font-semibold">데이터/AI 역량</span>
                <span className="absolute top-1/2 -left-12 -translate-y-1/2 text-brand-slate-light font-semibold -rotate-90">HW-SW 통합 수준</span>

                {/* Quadrants */}
                <div className="p-4 flex items-center justify-center text-center"><div className="bg-black/20 p-3 rounded-lg"><h4 className="font-bold text-brand-slate-lightest">단순 충전기 제조사</h4><p className="text-xs text-brand-slate">H/W만 제공, 데이터 수집 불가</p></div></div>
                <div className="p-4 flex items-center justify-center text-center"><div className="bg-black/20 p-3 rounded-lg"><h4 className="font-bold text-brand-slate-lightest">PM 공유 플랫폼</h4><p className="text-xs text-brand-slate">자사 기기 전용, 제한적 데이터 활용</p></div></div>
                <div className="p-4 flex items-center justify-center text-center"><div className="bg-black/20 p-3 rounded-lg"><h4 className="font-bold text-brand-slate-lightest">관제 솔루션 기업</h4><p className="text-xs text-brand-slate">S/W만 제공, H/W 제어 한계</p></div></div>
                <div className="p-4 flex items-center justify-center text-center">
                    <div className="relative bg-brand-green/10 border-2 border-dashed border-brand-green rounded-lg p-3 animate-pulse-glow">
                        <h4 className="font-bold text-brand-green">본 컨소시엄</h4>
                        <p className="text-xs text-brand-slate-lightest">HW-SW-AI End-to-End 통합 솔루션</p>
                    </div>
                </div>
            </div>
        </div>

        <h3 className="text-3xl font-bold text-brand-slate-lightest mt-20 mb-8">단계별 추진 전략</h3>
        <div className="space-y-4">
            {strategyData.map(item => (
            <div key={item.stage} className="bg-brand-deep-blue/50 border-l-4 border-brand-green rounded-r-lg p-4 flex flex-col md:flex-row gap-4 items-start shadow-lg">
                <div className="bg-brand-green text-brand-deep-blue font-bold px-3 py-1 rounded-md text-sm flex-shrink-0">{item.stage}</div>
                <div className="flex-1">
                <p className="font-semibold text-brand-slate-lightest mb-1">{item.period}</p>
                <p className="text-brand-slate">{item.goal}</p>
                </div>
            </div>
            ))}
        </div>

        <h3 className="text-3xl font-bold text-brand-slate-lightest mt-20 mb-8">핵심 경제효과 분석</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
            {economicData.map(item => (
                <div key={item.name} className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg p-6 hover:border-brand-green/50 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <p className="text-brand-slate-light text-lg">{item.name}</p>
                    <p className="text-4xl font-bold text-brand-green my-2">{item.value}</p>
                    <p className="text-sm text-brand-slate font-semibold">{item.subtext}</p>
                    <p className="text-xs text-brand-slate-dark mt-3 bg-brand-slate/10 p-2 rounded h-16 flex items-center justify-center">{item.details}</p>
                </div>
            ))}
        </div>

        <h3 className="text-3xl font-bold text-brand-slate-lightest mt-20 mb-8">5개년 성장 전망 (매출/고용)</h3>
        <div className="h-96 bg-brand-deep-blue/50 p-4 rounded-lg border border-brand-slate-dark/30">
            <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#495670" />
                <XAxis dataKey="name" stroke="#a8b2d1" />
                <YAxis yAxisId="left" orientation="left" stroke="#64ffda" label={{ value: '누적매출(억원)', angle: -90, position: 'insideLeft', fill: '#64ffda', dy: 40 }} />
                <YAxis yAxisId="right" orientation="right" stroke="#a8b2d1" label={{ value: '총고용(명)', angle: -90, position: 'insideRight', fill: '#a8b2d1', dy: -20 }} />
                <Tooltip
                    contentStyle={{
                        backgroundColor: 'rgba(10, 25, 47, 0.9)',
                        borderColor: '#495670',
                        borderWidth: 1,
                        borderRadius: '0.5rem'
                    }}
                    cursor={{ fill: 'rgba(100, 255, 218, 0.1)' }}
                />
                <Legend wrapperStyle={{ color: '#ccd6f6' }} />
                <Bar yAxisId="left" dataKey="saas" stackId="a" fill="#64ffda" name="SaaS" />
                <Bar yAxisId="left" dataKey="hardware" stackId="a" fill="#38b2ac" name="H/W" />
                <Bar yAxisId="left" dataKey="etc" stackId="a" fill="#2d7a7a" name="기타" />
                <Line yAxisId="right" type="monotone" dataKey="employment" stroke="#f56565" strokeWidth={2} name="총고용(명)" />
            </ComposedChart>
            </ResponsiveContainer>
        </div>
        <p className="text-center text-sm text-brand-slate mt-4 italic">
            *초기 H/W 판매 중심에서 점차 안정적인 SaaS 구독료 중심으로 매출 구조가 전환되며, 사업 성장에 따른 고용이 지속적으로 창출될 것으로 전망.
        </p>
    </SectionWrapper>
  );
};
