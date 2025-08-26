import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaHouse, FaUser, FaBriefcase, FaEnvelope, FaAngleDown } from "react-icons/fa6";
import reactIcon from "../../assets/images/react-icon.svg";
import jsIcon from "../../assets/images/js-icon.svg";
import cssIcon from "../../assets/images/css-icon.svg";
import phpIcon from "../../assets/images/php-icon.svg";

const Wrapper = styled.div`
  display: flex;
  border-right: 1px solid ${props => props.theme.component.border};
`;
const LogoWrap = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${props => props.theme.component.border};
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
    background: ${props => props.theme.palette.blue};
  }
`;
const MenuWrap = styled.ul`
  padding:20px;
`;
const MenuItem = styled.li`
  h3 {
    font-size:20px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor:pointer;
  }
  div {
    a {
      display: flex;
      align-items: center;
      margin:10px 0 10px 10px;
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

function Header() {
  const ImgArr = [
    { "id": 1,"link": "/home", "icon": <FaHouse fontSize={25} /> },
    { "id": 2,"link": "/about", "icon": <FaUser fontSize={25} /> },
    { "id": 3,"link": "/project", "icon": <FaBriefcase fontSize={25} /> },
    { "id": 4,"link": "/contact", "icon": <FaEnvelope fontSize={25} /> }
  ];

  const IconArr = [
    { "id": 1, "link": "/home", "img": reactIcon, "title": "home" },
    { "id": 2, "link": "/about", "img": jsIcon, "title": "about" },
    { "id": 3, "link": "/project", "img": cssIcon, "title": "project" },
    { "id": 4, "link": "/contact", "img": phpIcon, "title": "contact" },
  ];
  const path = useLocation();
  const pathName = path.pathname.slice(1);
  return (
    <Wrapper>
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