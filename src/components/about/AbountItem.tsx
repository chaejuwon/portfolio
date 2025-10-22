import styled from "styled-components";
import profile from "../../assets/images/profile.png";
import react from "../../assets/images/react.png";
import jquery from "../../assets/images/jquery.png";
import html5 from "../../assets/images/html5.png";
import twig from "../../assets/images/twig.png";
import typescript from "../../assets/images/typescript.png";
import javascript from "../../assets/images/javascript.png";

const Wrapper = styled.div`
  overflow-y: auto;
  font-family: 'D2Coding', 'Fira Code', monospace;
  height: calc(100vh - 86px);
  background: transparent;
  padding: 0.3rem 0;
`;
const AboutItemWrapper = styled.div`
  margin: 2% 5%;
`;

function AboutItem() {
  return (
    <Wrapper>
      <AboutItemWrapper>
        <section className="bg-[#0b0b0d] text-gray-200 py-20 flex flex-col items-center">
          <div className="max-w-5xl w-full">
            {/* 🧑‍💻 Profile Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
              <img
                src={profile}
                alt="profile"
                className="w-64 h-64 rounded-3xl object-cover shadow-md"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  안녕하세요! 👋 <br />
                  <span className="text-indigo-400">프론트엔드 개발자,</span>{" "}
                  <span className="text-indigo-300">채주원</span>입니다.
                </h1>
                <p className="text-gray-300 leading-relaxed text-lg">
                  사용자 중심의 인터랙티브 웹 서비스를 설계하고 구현하는 프론트엔드 개발자입니다.
                  새로운 기술을 배우는 것을 좋아하며, 코드와 디자인이 만나 만들어내는 경험에 가치를 둡니다.
                  빠르게 변화하는 기술 트렌드 속에서도 <b>기본에 충실한 개발</b>을 추구합니다.
                  <br />
                  <br />
                  저는 협업을 즐기며, 데이터 기반의 커뮤니케이션을 통해 더 나은 결과물을 만드는 것을 목표로 합니다.
                  단순히 동작하는 화면이 아니라, <b className="text-indigo-300">사용자가 편안하게 느낄 수 있는 인터페이스</b>를 만드는 것이 제 일의 핵심입니다.
                </p>
              </div>
            </div>

            {/* 💡 Keyword Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">
                MY KEYWORDS
              </h2>
              <ul className="grid md:grid-cols-4 gap-6 text-center">
                <li className="bg-[#111113] rounded-2xl p-6 border border-gray-800 hover:border-indigo-400 transition">
                  <div className="text-lg font-semibold mb-2">
                    <span className="text-indigo-300 mr-2">01</span>CREATIVE
                  </div>
                  <p className="text-gray-400 text-sm">
                    새로운 시각에서 문제를 바라보고 창의적인 해결책을 제시하는 것을 즐깁니다.
                  </p>
                </li>
                <li className="bg-[#111113] rounded-2xl p-6 border border-gray-800 hover:border-indigo-400 transition">
                  <div className="text-lg font-semibold mb-2">
                    <span className="text-indigo-300 mr-2">02</span>CURIOUS
                  </div>
                  <p className="text-gray-400 text-sm">
                    낯선 기술에도 호기심을 가지고 끝까지 파고드는 성격입니다.
                  </p>
                </li>
                <li className="bg-[#111113] rounded-2xl p-6 border border-gray-800 hover:border-indigo-400 transition">
                  <div className="text-lg font-semibold mb-2">
                    <span className="text-indigo-300 mr-2">03</span>COLLABORATIVE
                  </div>
                  <p className="text-gray-400 text-sm">
                    열린 마음으로 소통하며, 팀워크를 통해 시너지를 내는 것을 중요하게 생각합니다.
                  </p>
                </li>
                <li className="bg-[#111113] rounded-2xl p-6 border border-gray-800 hover:border-indigo-400 transition">
                  <div className="text-lg font-semibold mb-2">
                    <span className="text-indigo-300 mr-2">04</span>TENACIOUS
                  </div>
                  <p className="text-gray-400 text-sm">
                    한번 시작한 일은 끝까지 해내는 집요함으로 프로젝트를 완성합니다.
                  </p>
                </li>
              </ul>
            </div>

            {/* 💼 Career */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-indigo-400 mb-6">CAREER</h2>
              <ul className="space-y-4">
                <li className="bg-[#111113] p-6 rounded-2xl border border-gray-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">
                      스펙토리
                    </h3>
                    <span className="text-gray-400 text-sm">2021.10 - 2026.01</span>
                  </div>
                  <p className="text-gray-400 mt-2">
                    Twig 기반의 컴포넌트 구조 설계를 통해 유지보수성과 재사용성을 높인 프런트엔드 개발을 수행하였습니다.
                  </p>
                </li>
              </ul>
            </div>

            {/* 🎓 Education */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-indigo-400 mb-6">EDUCATION</h2>
              <ul className="space-y-4">
                <li className="bg-[#111113] p-6 rounded-2xl border border-gray-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">
                      신구대학교 <span className="text-gray-400">- 웹IT</span>
                    </h3>
                    <span className="text-gray-400 text-sm">2016.02 - 2021.02</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* 🧠 Tech Stack */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-indigo-400 mb-6">
                TECH STACK
                <span className="text-gray-500 text-sm ml-2">
              (아이콘에 마우스를 올리면 설명이 나타납니다)
            </span>
              </h2>

              <h3 className="text-xl font-semibold mb-4 text-white">Frontend</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { src: react, name: "React", desc: "컴포넌트 기반 UI 설계 및 상태 관리 가능" },
                  { src: jquery, name: "Jquery", desc: "SSR 환경의 SEO 최적화 구현 경험" },
                  { src: html5, name: "Html5", desc: "정적 타입 시스템으로 안전한 코드 작성" },
                  { src: twig, name: "Twig", desc: "반응형 UI 및 다크모드 구성 경험" },
                  { src: typescript, name: "TypeScript", desc: "정적 타입 시스템으로 안전한 코드 작성" },
                  { src: javascript, name: "Tailwind CSS", desc: "반응형 UI 및 다크모드 구성 경험" },
                ].map((tech, idx) => (
                  <div key={idx} className="group relative bg-[#111113] p-4 rounded-xl border border-gray-800 hover:border-indigo-400 transition">
                    <img src={tech.src} alt={tech.name} className="w-12 h-12 mx-auto mb-2" />
                    <h4 className="text-center text-sm text-white font-medium">{tech.name}</h4>
                    <p className="absolute left-1/2 -translate-x-1/2 bottom-[-70px] opacity-0 group-hover:opacity-100 transition bg-gray-900 text-gray-300 text-xs p-2 rounded-lg w-48 text-center">
                      {tech.desc}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-white">Backend & Tools</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { src: "/portfolio/images/node.png", name: "Node.js", desc: "API 서버 구축 및 간단한 백엔드 로직 구현" },
                  { src: "/portfolio/images/git.png", name: "Git", desc: "협업 환경에서 브랜치 전략 관리 경험" },
                  { src: "/portfolio/images/figma.png", name: "Figma", desc: "UI 프로토타이핑 및 디자인 협업" },
                  { src: "/portfolio/images/aws.png", name: "AWS", desc: "기본적인 EC2 및 S3 사용 경험" },
                ].map((tool, idx) => (
                  <div key={idx} className="group relative bg-[#111113] p-4 rounded-xl border border-gray-800 hover:border-indigo-400 transition">
                    <img src={tool.src} alt={tool.name} className="w-12 h-12 mx-auto mb-2" />
                    <h4 className="text-center text-sm text-white font-medium">{tool.name}</h4>
                    <p className="absolute left-1/2 -translate-x-1/2 bottom-[-70px] opacity-0 group-hover:opacity-100 transition bg-gray-900 text-gray-300 text-xs p-2 rounded-lg w-48 text-center">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AboutItemWrapper>
    </Wrapper>
  );
}

export default AboutItem;