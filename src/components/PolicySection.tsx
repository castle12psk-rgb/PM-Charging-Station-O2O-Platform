import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { AcademicCapIcon, ClipboardDocumentCheckIcon, BuildingLibraryIcon, GlobeAltIcon } from './icons/index';

const valueChainSteps = [
  {
    phase: "01",
    title: "기술개발",
    icon: <AcademicCapIcon className="w-10 h-10 text-brand-green" />,
    description: "혁신 기술 내재화 및 고도화",
    policy: "중소기업 혁신바우처",
    policyDetail: "R&D 및 기술이전 가점 확보로 초기 기술력 증폭",
  },
  {
    phase: "02",
    title: "사업실증",
    icon: <ClipboardDocumentCheckIcon className="w-10 h-10 text-brand-green" />,
    description: "초기 시장 진입 및 기술 검증",
    policy: "협동화자금 융자",
    policyDetail: "시설(10년)·운전(5년) 자금 최대 100억 지원으로 안정적 실증 기반 마련",
  },
  {
    phase: "03",
    title: "공공조달",
    icon: <BuildingLibraryIcon className="w-10 h-10 text-brand-green" />,
    description: "B2G 시장 진입 및 레퍼런스 확보",
    policy: "직접생산확인 제도",
    policyDetail: "공공기관 입찰 자격 획득을 통해 안정적 매출 기반 확보",
  },
  {
    phase: "04",
    title: "글로벌 확산",
    icon: <GlobeAltIcon className="w-10 h-10 text-brand-green" />,
    description: "수출 및 라이선스 사업화",
    policy: "수출 바우처 등",
    policyDetail: "성공적인 내수 시장 레퍼런스를 기반으로 해외 시장 진출 가속화",
  },
];

const overarchingPolicies = [
    '탄소중립·디지털 전환 등 국가 핵심 정책과의 정합성 확보',
    '스마트시티 챌린지 사업 등 지자체 정책 연계 용이',
    '협업기업 승인 후, 협업계획 변경 및 사후관리 체계를 통한 유연한 사업 운영 지원'
];

const ArrowConnector: React.FC = () => (
    <div className="hidden lg:flex items-center justify-center text-brand-slate-dark text-4xl mx-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
    </div>
);

const VerticalArrowConnector: React.FC = () => (
    <div className="flex lg:hidden items-center justify-center text-brand-slate-dark text-4xl my-4">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
    </div>
);


export const PolicySection: React.FC = () => {
  return (
    <SectionWrapper title="정책 연계 성장 로드맵" subtitle="Policy-Driven Value Chain">
      <p className="text-xl text-brand-slate-light mb-12 leading-relaxed italic border-l-4 border-brand-green pl-6">
        “본 프로젝트는 단발성 지원 사업이 아닌, 정부의 중소기업 지원 정책과 유기적으로 결합하여 <span className="text-brand-green font-semibold">기술개발부터 글로벌 확산까지 지속 가능한 성장</span>을 이루도록 설계된 전략적 협업 모델입니다.”
      </p>

      {/* Overarching Policies */}
       <div className="mb-16">
        <h3 className="text-2xl font-bold text-brand-slate-lightest mb-6 text-center">상위 정책 연계성</h3>
         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-brand-deep-blue/50 p-4 border border-brand-slate-dark/30 rounded-lg">
                <h4 className="font-bold text-brand-slate-lightest">탄소중립·디지털 전환</h4>
                <p className="text-sm text-brand-slate mt-1">국가 핵심 정책과의 정합성 확보</p>
            </div>
             <div className="bg-brand-deep-blue/50 p-4 border border-brand-slate-dark/30 rounded-lg">
                <h4 className="font-bold text-brand-slate-lightest">스마트시티 챌린지</h4>
                <p className="text-sm text-brand-slate mt-1">지자체 정책 연계 용이</p>
            </div>
             <div className="bg-brand-deep-blue/50 p-4 border border-brand-slate-dark/30 rounded-lg">
                <h4 className="font-bold text-brand-slate-lightest">지속적 사후관리</h4>
                <p className="text-sm text-brand-slate mt-1">유연한 사업 운영 지원</p>
            </div>
         </div>
      </div>
      
      {/* Value Chain Infographic */}
      <div className="flex flex-col lg:flex-row items-stretch justify-center w-full">
        {valueChainSteps.map((step, index) => (
          <React.Fragment key={step.phase}>
            <div className="flex flex-col flex-1 min-w-0">
                <div className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg p-6 flex-grow flex flex-col items-center text-center hover:border-brand-green/50 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="flex-shrink-0 w-12 h-12 bg-brand-green/10 text-brand-green font-mono font-bold text-2xl rounded-full flex items-center justify-center">
                            {step.phase}
                        </span>
                        <div>
                           {step.icon}
                        </div>
                    </div>
                    <h4 className="text-xl font-bold text-brand-slate-lightest">{step.title}</h4>
                    <p className="text-sm text-brand-slate-light mb-4">{step.description}</p>
                    <div className="w-full mt-auto bg-brand-deep-blue border-t-2 border-brand-green/70 rounded-md p-4">
                        <h5 className="font-semibold text-brand-green">{step.policy}</h5>
                        <p className="text-xs text-brand-slate-lightest mt-1">{step.policyDetail}</p>
                    </div>
                </div>
            </div>
            {index < valueChainSteps.length - 1 && (
              <>
                <ArrowConnector />
                <VerticalArrowConnector />
              </>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-16 bg-brand-deep-blue/50 border-l-4 border-brand-green rounded-r-lg p-8 flex items-center justify-center text-center">
        <p className="text-lg text-white font-semibold italic leading-relaxed">
        “이처럼 본 과제는 <span className="text-brand-green">기술개발 → 실증 → 공공조달 → 수출</span>로 이어지는<br/>완전한 Value Chain을 갖춘 정책 연계형 스마트 인프라 모델입니다.”
        </p>
      </div>
    </SectionWrapper>
  );
};
