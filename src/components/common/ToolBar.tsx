import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import reactIcon from "../../assets/images/react-icon.svg";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.backgroundPrimary};
`;
const ToolBarItem = styled.span<IActive>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 7px 15px;
  background-color: ${(props) => props.active ? props.theme.colors.menuColor : props.theme.colors.menuActiveColor};
  gap:5px;
  border-top: 1px solid ${(props) => props.active ? props.theme.colors.accent : 'transparent'};
  border-right: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.textPrimary};
`;
const Img = styled.img`
  width: 20px;
`;

interface IActive {
  active?: boolean;
}

function ToolBar() {
  const path = useLocation();
  const pathName = path.pathname.slice(1);
  return (
    <Wrapper>
      <Link to="/">
        <ToolBarItem active={pathName === "home"}>
          <Img src={reactIcon} />
          Home
          <AiOutlineClose fontSize={14} />
        </ToolBarItem>
      </Link>
      <Link to="/about">
        <ToolBarItem active={pathName === "about"}>
          <Img src={reactIcon} />
          About
          <AiOutlineClose fontSize={14} />
        </ToolBarItem>
      </Link>

      <Link to="/project">
        <ToolBarItem active={pathName === "project"}>
          <Img src={reactIcon} />
          Project
          <AiOutlineClose fontSize={14} />
        </ToolBarItem>
      </Link>

      <Link to="/contact">
        <ToolBarItem active={pathName === "contact"}>
          <Img src={reactIcon} />
          Contact
          <AiOutlineClose fontSize={14} />
        </ToolBarItem>
      </Link>

      <Link to="/board">
        <ToolBarItem active={pathName === "board"}>
          <Img src={reactIcon} />
          Board
          <AiOutlineClose fontSize={14} />
        </ToolBarItem>
      </Link>
    </Wrapper>
  );
}

export default ToolBar;