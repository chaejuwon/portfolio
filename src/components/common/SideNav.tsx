import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import HomeImg from "../../images/home.png";
import ProjectImg from "../../images/project.png";
import ContactImg from "../../images/contact.png";
import AboutImg from "../../images/about.png";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  border-right: 1px solid ${props => props.theme.black.borderColor};
`;
const LogoWrap = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${props => props.theme.black.borderColor};
`;
const LogoItem = styled.li<{ active:boolean }>`
  padding: 20px;
  position: relative;
  img {
    width: 30px;
  }
  &:before {
    content: "";
    clear: both;
    display: ${props => props.active ? "block" : "none"};
    position: absolute;
    top:0;
    left:0;
    width: 2px;
    height: 100%;
    background: ${props => props.theme.black.blue}
  }
`;
const MenuWrap = styled.ul`
  padding:20px;
`;
const MenuItem = styled.li`
  h3 {
    font-size:18px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 5px
  }
  span {
    margin-left:10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 5px;
  }
`;

function Header() {
  const ImgArr = [
    { "link": "/home", "img": HomeImg },
    { "link": "/about", "img": AboutImg },
    { "link": "/project", "img": ProjectImg },
    { "link": "/contact", "img": ContactImg }
  ];
  const path = useLocation();
  const pathName = path.pathname.slice(1);
  return (
    <Wrapper>
      <LogoWrap>
        {ImgArr.map(item => {
          const isActive = path.pathname === item.link;

          return (
            <LogoItem key={item.img} active={isActive}>
              <Link to={item.link}><img src={item.img} /></Link>
            </LogoItem>
            )
        })}
      </LogoWrap>
      <MenuWrap>
        <MenuItem>
          <h3><FaAngleDown /> Portfolio</h3>
          <span><FaAngleRight /> {pathName}</span>
        </MenuItem>
      </MenuWrap>
    </Wrapper>
  )
}
export default Header;