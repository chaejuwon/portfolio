import { Link } from "react-router-dom";
import { FaGithub, FaHome } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { IoIosLink } from "react-icons/io";
import styled from "styled-components";
import { motion } from "framer-motion";
import { breakpoints } from "../../media";
import { useState } from "react";
import { IProjectProps } from "../../api";

interface ProjectCardItemProps {
  project: IProjectProps;
  isMobile: boolean;
  onDetail: (category: string, id: number) => void;
}

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
    color: ${props => props.theme.colors.textSecondary};
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
    ${ breakpoints.md } {
      font-size: 16px;
    }
  }
  small {
    color: ${props => props.theme.colors.white};
    ${ breakpoints.md } {
      font-size: 14px;
    }
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
function ProjectCardItem({ project, isMobile, onDetail }: ProjectCardItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <ProjectGridItem key={project.id} >
      <Thumbnail src={`${process.env.PUBLIC_URL}${project.img}`} alt={project.title} />
      <InfoWrap>
        <InfoTitleWrap>
          <h2>{project.title}</h2>
          <small>{project.year}</small>
        </InfoTitleWrap>
        <p>{project.description}</p>
        {project.tags.map((item) => (
          <span key={item.id}>#{item.tag}</span>
        ))}
      </InfoWrap>
      <CategoryLabel>{project.category}</CategoryLabel>
      <HoverWrap variants={hoverVariants} initial="initial"
                 whileHover={!isMobile ? "animate" : undefined}
                 animate={isMobile && open ? "animate" : "initial"}
                 onClick={() => isMobile && setOpen(prev => !prev)}
                 exit="exit">
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
  )
}
export default ProjectCardItem;