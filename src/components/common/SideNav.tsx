import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaHouse, FaUser, FaBriefcase, FaEnvelope, FaAngleDown } from "react-icons/fa6";
import { FaClipboard } from "react-icons/fa";
import reactIcon from "../../assets/images/react-icon.svg";
import jsIcon from "../../assets/images/js-icon.svg";
import cssIcon from "../../assets/images/css-icon.svg";
import phpIcon from "../../assets/images/php-icon.svg";
import { FaGear } from "react-icons/fa6";
import { useSetRecoilState } from "recoil";
import { themeState } from "../../atom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { breakpoints } from "../../media";

const Wrapper = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  border-right: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.backgroundPrimary};
`;
const AsideWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${props => props.theme.colors.border};
  height: calc(100vh - 80px);
`;
const LogoWrap = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const LogoItem = styled.li<{ $active:boolean }>`
  padding: 15px 20px;
  position: relative;
  img {
    width: 30px;
  }
  &:before {
    content: "";
    clear: both;
    display: ${props => props.$active ? "block" : "none"};
    position: absolute;
    top:0;
    left:0;
    width: 2px;
    height: 100%;
    background: ${props => props.theme.colors.accent};
  }
  svg {
    color: ${props => props.theme.colors.textPrimary};
  }
`;
const IconWrap = styled.div`
  position: relative;
  p {
    padding: 15px 20px;
    cursor: pointer;
  }
  svg {
    color: ${props => props.theme.colors.textPrimary};
  }
`;
const MenuWrap = styled.ul`
  padding:20px;
  ${ breakpoints.md } {
    display: none;
  }
`;
const MenuItem = styled.li`
  h3 {
    font-size:20px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor:pointer;
    color: ${props => props.theme.colors.textPrimary};
  }
  div {
    a {
      display: flex;
      align-items: center;
      margin:10px 0 10px 10px;
      color: ${props => props.theme.colors.textPrimary};
    }
    img {
      width: 20px;
    }
    span {
      margin-left: 8px;
      align-items: center;
      font-size: 18px;
    }
  }
`;
const ThemeWrap = styled(motion.ul)`
  opacity: 0;
  position: absolute;
  z-index: 100;
  left: 100%;
  bottom: 10px;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.contentBackgroundColor};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 6px;
`;
const ThemeItem = styled.li`
  padding: 10px 20px;
  white-space: nowrap;
  cursor: pointer;
  font-weight: bold;
  transition: all .3s;
  &:hover {
    background: ${props => props.theme.colors.contentTextColor};
  }
`;
const ThemeToggle = styled(motion.p)`

`;
const themeVariants = {
  initial: {
    opacity: 0,
    transition: {
      delay: 0.3,
      during: 0.3
    }
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      during: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.3,
      during: 0.3
    }
  }
}
function Header() {
  const ImgArr = [
    { "id": 1,"link": "/home", "icon": <FaHouse fontSize={25} /> },
    { "id": 2,"link": "/about", "icon": <FaUser fontSize={25} /> },
    { "id": 3,"link": "/project", "icon": <FaBriefcase fontSize={25} /> },
    { "id": 4,"link": "/contact", "icon": <FaEnvelope fontSize={25} /> },
    { "id": 5,"link": "/board", "icon": <FaClipboard fontSize={25} /> }
  ];

  const IconArr = [
    { "id": 1, "link": "/home", "img": reactIcon, "title": "home" },
    { "id": 2, "link": "/about", "img": jsIcon, "title": "about" },
    { "id": 3, "link": "/project", "img": cssIcon, "title": "project" },
    { "id": 4, "link": "/contact", "img": phpIcon, "title": "contact" },
    { "id": 5, "link": "/board", "img": reactIcon, "title": "board" },

  ];
  const path = useLocation();
  const pathName = path.pathname.slice(1);

  const setTheme = useSetRecoilState(themeState);

  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  }
  return (
    <Wrapper>
      <AsideWrap>
        <LogoWrap>
          {ImgArr.map(item => {
            const isActive = path.pathname === item.link;

            return (
              <LogoItem key={item.id} $active={isActive}>
                <Link to={item.link}>{item.icon}</Link>
              </LogoItem>
            )
          })}
        </LogoWrap>
        <IconWrap>
          <ThemeToggle onClick={toggleMenu}>
            <FaGear size={30} />
          </ThemeToggle>
          <AnimatePresence>
            {open && (
              <ThemeWrap variants={themeVariants} initial="initial" animate="animate" exit="exit">
                <ThemeItem onClick={() => setTheme('light')}>🌞 Light Mode</ThemeItem>
                <ThemeItem onClick={() => setTheme('dark')}>🌙 Dark Mode</ThemeItem>
              </ThemeWrap>
            )}
          </AnimatePresence>
        </IconWrap>
      </AsideWrap>

      <MenuWrap>
        <MenuItem>
          <h3><FaAngleDown /> Portfolio</h3>
          <div>
            {IconArr.map(icon => (
              <Link to={icon.link} key={icon.id}><img src={icon.img} /><span> {icon.title}</span></Link>
            ))}
          </div>

        </MenuItem>
      </MenuWrap>
    </Wrapper>
  )
}
export default Header;