import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import reactIcon from "../../assets/images/react-icon.svg";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  background-color: #2d2d2d;

`;
const ToolBarItem = styled.span<IActive>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 7px 15px;
  background-color: ${(props) => props.active ? 'black' : '#2d2d2d'};
  gap:5px;
  border-right: 1px solid #1e1e1e;
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