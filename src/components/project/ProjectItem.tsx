import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import {
  projectJson,
  IProjectProps,
  projectDetail,
  IProjectDetailProps,
} from "../../api";
import projectIcon from "../../assets/images/project_title_icon.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useMatch, Link } from "react-router-dom";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { breakpoints } from "../../media";

const Wrapper = styled.div`
  overflow-y: scroll;
  font-family: 'D2Coding', sans-serif;
  height: calc(100vh - 86px);
`;
const ProjectWrapper = styled.div`
  margin: 2% 5%;
  ${ breakpoints.md } {
    margin: 5%;
  }
`;
const ProjectGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  ${ breakpoints.md } {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ProjectTitle = styled.h2`
  font-size:40px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  img {
    margin-right:5px;
    width: 50px;
  }
`;
const ProjectNav = styled.ul`
  display: inline-grid;
  gap: 10px;
  margin-bottom: 30px;
  grid-template-columns: repeat(4, 1fr);
  ${ breakpoints.md } {
    grid-template-columns: repeat(2, 1fr);
  }

`;
const ProjectBtn = styled.li`
  background-color: ${props => props.theme.colors.backgroundPrimary};
  border: 1px solid ${props => props.theme.colors.contentBackgroundColor};
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  padding: 12px 24px;
  transition: all .3s ease-in-out;
  &.active {
    background-color: ${props => props.theme.colors.backgroundThird};
    color: ${props => props.theme.colors.textPrimary};
  }
`;
const ProjectGridItem = styled(motion.li)`
  margin-bottom: 20px;
  padding: 15px;
  background: ${props => props.theme.colors.backgroundPrimary};
  border:1px solid ${props => props.theme.colors.backgroundSecondary};
  position: relative;
  overflow: hidden;
`;
const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 8/4;
`;
const InfoWrap = styled.div`
  padding: 20px;
  p {
    font-size: 15px;
    line-height: 140%;
    margin: 10px 0;
  }
  span {
    color: ${props => props.theme.colors.dark};
    display: inline-block;
    margin-right: 10px;
  }
`;
const InfoTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
  span {
    color: ${props => props.theme.colors.white};
  }
`;
const CategoryLabel = styled.div`
  background-color: ${props => props.theme.colors.accent};
  font-size: 18px;
  left: 15%;
  position: absolute;
  text-align: center;
  top: 15%;
  transform: translate(-50%, -50%) rotate(-40deg);
  width: 100%;
  padding: 7px 0px;
`;
const DetailWrap = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;
const Overlay = styled(motion.div)`
  background: rgba(0,0,0, .8);
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
`;
const DetailContent = styled(motion.div)`
  width:40%;
  height:80vh;
  position: fixed;
  top:100px;
  left:0;
  right:0;
  margin:0 auto;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.dark};
  padding: 50px;
  font-family: 'pretendard', 'D2Coding', sans-serif;
  overflow: scroll;
  ${ breakpoints.md } {
    width:90%;
  }
`;
const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailTitle = styled.h2`
  font-size:30px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: end;
  span {
    font-size: 20px;
    font-weight: 300;
  }
  ${ breakpoints.md } {
    font-size:24px;
  }
`;
const Hr = styled.div`
  width: 100%;
  height: 1px;
  background: ${props => props.theme.colors.backgroundSecondary};
  margin: 25px 0;
`;

const MainImg = styled.img`
  width: 100%;
`;
const InfoContainer = styled.div`
  margin-bottom:40px;
`;
const InfoTitle = styled.h3`
  font-size:24px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const InfoContent = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
`;
const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 15px;
  color: ${props => props.theme.colors.dark};
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;

  thead {
    background-color: #f5f7fa;
    font-weight: bold;
  }

  th, td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid #e5e5e5;
  }

  th {
    white-space: nowrap;
  }

  tbody tr:hover {
    background-color: #f9f9f9;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;

    th, td {
      padding: 0.5rem 0.75rem;
    }
  }
`;
const ContributionWrap = styled.div`
  margin-top:20px;
`;
const ContributionSection = styled.section`
  margin-bottom: 1.5rem;
`;
const ContributionTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.dark};
`;
const ContributionList = styled.ul`
  padding-left: 20px;
  list-style: disc;
`;
const ContributionItem = styled.li`
  margin-bottom: 6px;
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.dark};
`;
const FeatureLists = styled.ul`
  padding-left: 20px;
  list-style: disc;
`;
const FeatureItem = styled.li`
  margin-bottom: 6px;
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.dark};
`;
const CloseButton = styled.button`
  padding: 10px 0;
  width: 100%;
  border:1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  cursor: pointer;
`;
const HoverWrap = styled(motion.div)`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.contentOpBgColor};
  z-index: 2;
`;
const HoverIconWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  padding: 20px;
  gap: 10px;
`;
// framer-motion
const overlayVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.1,
      duration: 0.3
    }
  }
}
const detailVariants = {
  initial: {
    y: 1000,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.3
    }
  },
  exit: {
    y: 1000,
    opacity: 0,
    transition: {
      delay: 0.1,
      duration: 0.3
    }
  }
}
const hoverVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.3
    },
    exit: {
      opacity: 0
    }
  }
}
function ProjectItem() {
  const navigate = useNavigate();
  const bigMatch = useMatch("/project/:category/:projectId");
  const projectId = Number(bigMatch?.params.projectId ?? null);
  // 프로젝트 리스트
  const { isLoading: listLoading, data:listData } = useQuery<IProjectProps[]>({
    queryKey: ['projects'],
    queryFn: projectJson
  });
  // 프로젝트 디테일
  const { isLoading: detailLoading, data: detailData } = useQuery<IProjectDetailProps>({
    queryKey: ['detail', projectId],
    queryFn: () =>projectDetail(projectId),
    enabled: !!projectId
  });
  // 모달 클릭 시 이벤트
  const onDetail = (category: string,id: number) => {
    navigate(`/project/${category}/${id}`)
  };
  const leaveDetail = () => {
    navigate(`/project`);
  };
  // 모달 상세페이지 json key값 텍스트로 변화
  const labelMap: Record<string, string> = {
    design: "🎨 디자인",
    development: "💻 개발",
    optimization: "⚙ 최적화"
  };
  // 메뉴 클릭 시 해당하는 category값만 보이게 출력
  // 1. 메뉴를 배열로 만들어야 함
  const navCategory = [
    {
      "category" : "ALL"
    },
    {
      "category" : "📂 Company"
    },
    {
      "category" : "📂 SideProject"
    },
    {
      "category" : "📂 ToyProject"
    }
  ]
  // 2. 메뉴 클릭 시 해당 카테고리와 react-query category를 비교해서 맞는것만 노출
  const [category, setCategory] = useState("ALL");
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const onClickNav = (category: string) => {
    setSelectedCategory(category);
    setCategory(category);
  }
  const filteredData = listData?.filter((project) => {
    return category === "ALL" || project.category === category;
  });
  return (
    <Wrapper>
      <ProjectWrapper>
        <ProjectTitle><img src={projectIcon} />My Project</ProjectTitle>
        <ProjectNav>
          {navCategory.map((item, index) => (
            <ProjectBtn key={index} className={item.category === selectedCategory ? "active" : ""} onClick={() => onClickNav(item.category)}>{item.category}</ProjectBtn>
          ))}
        </ProjectNav>
        <ProjectGrid>
          {listLoading ? (
            <div className="flex justify-center items-center w-full py-10">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            filteredData?.map((project) => (
              <ProjectGridItem key={project.id} >
                <Thumbnail src={`${process.env.PUBLIC_URL}${project.img}`} alt={project.title} />
                <InfoWrap>
                  <InfoTitleWrap>
                    <h2>{project.title}</h2>
                    <span>{project.year}</span>
                  </InfoTitleWrap>
                  <p>{project.description}</p>
                  {project.tags.map((item) => (
                    <span key={item.id}>#{item.tag}</span>
                  ))}
                </InfoWrap>
                <CategoryLabel>{project.category}</CategoryLabel>
                <HoverWrap variants={hoverVariants} initial="initial" whileHover="animate" exit="exit">
                  <HoverIconWrap>
                    <Link to={project.git} target="_blank" data-tooltip-id="git-tip" data-tooltip-content="GitHub">
                      <FaGithub fontSize={30} />
                      <Tooltip id="git-tip" place="top" />
                    </Link>
                    <Link to={project.homepage} target="_blank" data-tooltip-id="home-tip" data-tooltip-content="Homepage">
                      <FaHome fontSize={30} />
                      <Tooltip id="home-tip" place="top" />
                    </Link>
                    <Link to="javascript:">
                      <IoIosLink fontSize={30} onClick={() => onDetail(project.category, project.id)} data-tooltip-id="modal-tip" data-tooltip-content="Modal" />
                      <Tooltip id="modal-tip" place="top" />
                    </Link>
                  </HoverIconWrap>
                </HoverWrap>
              </ProjectGridItem>
            ))
          )}
        </ProjectGrid>
        <AnimatePresence>
          {bigMatch ? (
            <>
              {detailLoading ? "loading..." : (
                <DetailWrap>
                  <Overlay onClick={leaveDetail} variants={overlayVariants} initial="initial" animate="animate" exit="exit"></Overlay>
                  <DetailContent variants={detailVariants} initial="initial" animate="animate" exit="exit">
                    <DetailTitle>
                      {detailData?.title}
                      <span>{detailData?.year}</span>
                    </DetailTitle>
                    <Hr />
                    <DetailInfo>
                      <InfoContainer>
                        <MainImg src={`${process.env.PUBLIC_URL}${detailData?.mainImg}`} />
                      </InfoContainer>
                      <InfoContainer>
                        <InfoTitle>프로젝트 개요</InfoTitle>
                        <InfoContent>{detailData?.description}</InfoContent>
                      </InfoContainer>
                      <InfoContainer>
                        <InfoTitle>사용 기술 스택</InfoTitle>
                        <InfoTable>
                          <thead>
                          <tr>
                            <th>Type</th>
                            <th>Stack</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <th>FrontEnd</th>
                            <th>{detailData?.tech_stack.frontend.join(', ')}</th>
                          </tr>
                          {detailData?.tech_stack.backend ? (
                            <tr>
                              <th>BackEnd</th>
                              <th>{detailData?.tech_stack.backend.join(', ')}</th>
                            </tr>) : null
                          }
                          {detailData?.tech_stack.database ? (
                            <tr>
                              <th>Database</th>
                              <th>{detailData?.tech_stack.database.join(', ')}</th>
                            </tr>) : null
                          }
                          {detailData?.tech_stack.environment ? (
                            <tr>
                              <th>Environment</th>
                              <th>{detailData?.tech_stack.environment.join(', ')}</th>
                            </tr>) : null
                          }
                          </tbody>
                        </InfoTable>
                      </InfoContainer>
                      <InfoContainer>
                        <InfoTitle>주요 역할 및 기여도</InfoTitle>
                        <ContributionWrap>
                          {Object.entries(detailData?.contribution || {}).map(([category, items]) => (
                            <ContributionSection key={category}>
                              <ContributionTitle>{labelMap[category]}</ContributionTitle>
                              <ContributionList>
                                {items.map((item, index) => (
                                  <ContributionItem key={index}>{item}</ContributionItem>
                                ))}
                              </ContributionList>
                            </ContributionSection>
                          ))}
                        </ContributionWrap>
                      </InfoContainer>
                      <InfoContainer>
                        <InfoTitle>주요 기능</InfoTitle>
                        <FeatureLists>
                          {detailData?.features.map((item, index) => (
                            <FeatureItem key={index}>
                              {item}
                            </FeatureItem>
                          ))}
                        </FeatureLists>
                      </InfoContainer>
                      <InfoContainer>
                        <MainImg src={`${process.env.PUBLIC_URL}${detailData?.mockupImg}`} />
                      </InfoContainer>
                      <CloseButton onClick={leaveDetail}>닫기</CloseButton>
                    </DetailInfo>
                  </DetailContent>
                </DetailWrap>
              )}
            </>
          ) : null}
        </AnimatePresence>
      </ProjectWrapper>
    </Wrapper>
      )
    }
export default ProjectItem;