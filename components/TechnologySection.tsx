import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { TechArchitectureDiagram } from './TechArchitectureDiagram';
import { ValueChainInfographic } from './ValueChainInfographic';

// Helper component for pillar sections
const TechPillar: React.FC<{ level: string; title: string; description: string; features: string[] }> = 
({ level, title, description, features }) => (
    <div className="bg-brand-deep-blue/50 border border-brand-slate-dark/30 rounded-lg p-6 md:p-8 hover:border-brand-green/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
            <span className="flex-shrink-0 w-16 h-16 bg-brand-green/10 text-brand-green font-mono font-bold text-2xl rounded-full flex items-center justify-center">
                {level}
            </span>
            <div>
                <h4 className="text-xl lg:text-2xl font-bold text-brand-slate-lightest">{title}</h4>
                <p className="text-brand-slate-light">{description}</p>
            </div>
        </div>
        <ul className="space-y-2 mt-6">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-brand-slate" dangerouslySetInnerHTML={{ __html: feature }}></span>
                </li>
            ))}
        </ul>
    </div>
);

const techPillarsData = [
    {
        level: "01",
        title: "Intelligent Edge Hardware",
        description: "SU:M Station: 신뢰성 높은 데이터 수집과 안전한 충전을 책임지는 지능형 엣지 디바이스",
        features: [
            "<strong>다중 안전장치:</strong> KC 통합인증 기반의 과충전/과열/누전 방지 회로",
            "<strong>실시간 상태 모니터링:</strong> 온도, 전압, 전류 등 10여 종의 센서 데이터 실시간 수집 및 전송",
            "<strong>원격 제어 및 FOTA:</strong> 중앙 관제 시스템을 통한 원격 펌웨어 업데이트(Firmware-Over-The-Air)",
            "<strong>멀티벤더 호환성:</strong> 다양한 PM 기기와의 호환성을 보장하는 표준 충전 프로토콜"
        ]
    },
    {
        level: "02",
        title: "Cloud-Native Microservices Platform",
        description: "OSE-O2O: 대규모 트래픽에도 안정적인 운영과 유연한 확장이 가능한 클라우드 네이티브 플랫폼",
        features: [
            "<strong>MSA 아키텍처:</strong> 기능별 서비스(결제, 회원, 스테이션 관리 등) 분리로 독립적 개발/배포/확장",
            "<strong>컨테이너 기반 자동화:</strong> Docker & Kubernetes를 활용한 무중단 배포 및 자동 스케일링",
            "<strong>고가용성 설계:</strong> Multi-AZ(Availability Zone) 배포를 통한 장애 내구성 확보",
            "<strong>대규모 트랜잭션 처리:</strong> 초당 1,000 TPS 이상을 처리하는 비동기 메시지 큐(MQ) 적용"
        ]
    },
    {
        level: "03",
        title: "Data-Driven AI Engine",
        description: "데이터 기반의 의사결정으로 운영 효율을 극대화하고 새로운 가치를 창출하는 AI 엔진",
        features: [
            "<strong>예측 정비(PdM):</strong> 배터리 로그, 센서 데이터를 분석하여 고장 징후 사전 감지 (정확도 95% 목표)",
            "<strong>수요 예측 및 최적 배치:</strong> 유동인구, 날씨 등 외부 데이터를 결합하여 스테이션 수요 예측 및 최적 위치 추천",
            "<strong>이상 거래 탐지(FDS):</strong> 비정상 결제 및 이용 패턴을 실시간으로 탐지하여 부정 사용 방지",
            "<strong>개인화 추천:</strong> 사용자 충전 패턴을 분석하여 최적 요금제 및 인근 가맹점 혜택 추천"
        ]
    },
    {
        level: "04",
        title: "Open Ecosystem Gateway",
        description: "외부 서비스와의 유기적 연동을 통해 스마트시티 생태계를 확장하는 개방형 API 게이트웨이",
        features: [
            "<strong>표준 RESTful API:</strong> MaaS, 지도, 공공 데이터 플랫폼 등 3rd-Party 연동을 위한 표준 API 제공",
            "<strong>강력한 보안:</strong> OAuth 2.0 기반의 토큰 인증/인가 시스템으로 안전한 데이터 접근 제어",
            "<strong>개발자 포털:</strong> API 문서, SDK, 테스트 환경을 제공하여 외부 개발자의 참여 촉진",
            "<strong>실시간 데이터 스트리밍:</strong> WebSocket을 활용하여 스테이션 현황 등 실시간 데이터 제공"
        ]
    }
];

const differentiators = [
  'HW-SW-AI End-to-End 통합: 모든 기술 스택을 내재화하여 데이터 흐름을 최적화하고, 문제 발생 시 신속한 원인 규명 및 해결이 가능합니다.',
  'AI 기반 운영 자동화: 예측 정비, 수요 예측 등 핵심 운영 업무를 자동화하여 인적 오류를 최소화하고 장기적인 운영 비용(OPEX)을 30% 이상 절감합니다.',
  '독보적인 데이터 자산: PM 충전 데이터, 이동 패턴, 배터리 상태 등 독점적 데이터를 확보하여 경쟁사가 모방할 수 없는 AI 모델 및 서비스 개발이 가능합니다.',
  '개방형 생태계 구조: 표준 API를 통해 외부 서비스와 쉽게 연동하여 MaaS, 스마트시티 플랫폼으로의 확장이 용이하며, 강력한 네트워크 효과를 창출합니다.'
];

export const TechnologySection: React.FC = () => {
  return (
    <SectionWrapper title="코어 기술 아키텍처 및 경쟁 우위" subtitle="Scalable, Intelligent, and Secure">
      <p className="text-xl text-brand-slate-light mb-12 leading-relaxed italic border-l-4 border-brand-green pl-6">
        “본 프로젝트는 하드웨어부터 AI 분석까지 전 영역을 아우르는 End-to-End 통합 플랫폼으로 설계되었습니다. Microservice Architecture(MSA) 기반의 유연한 확장성과 데이터 중심의 지능형 운영을 통해, 우리는 단순한 충전 서비스를 넘어 스마트시티의 핵심 모빌리티 인프라를 구축합니다.”
      </p>

      <ValueChainInfographic />

      <div className="mb-20">
        <TechArchitectureDiagram />
      </div>

      <div className="mb-20">
        <h3 className="text-3xl font-bold text-brand-slate-lightest mb-8 text-center">4-Layer 기술 스택</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techPillarsData.map(pillar => <TechPillar key={pillar.level} {...pillar} />)}
        </div>
      </div>
      
      <div>
        <h3 className="text-3xl font-bold text-brand-slate-lightest mb-8 text-center">핵심 기술 경쟁력 (Competitive Edge)</h3>
        <div className="space-y-4">
          {differentiators.map((point, index) => (
            <div key={index} className="bg-brand-deep-blue/50 border-l-4 border-brand-green rounded-r-lg p-6 shadow-md">
              <p className="text-brand-slate-light text-base md:text-lg leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>

    </SectionWrapper>
  );
};