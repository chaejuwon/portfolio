import styled from "styled-components";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding:0 15px;
`;

const HeaderWrap = styled.div`
  width: 100%;
  height:50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.black.borderColor};
  img {
    width: 40px;
  }
  ul {
    display: flex;
    margin-left:30px;
  }
  li {
    margin:0 15px;
  }
`;

function Header() {
  return(
    <Wrapper>
      <HeaderWrap>
        <img src={Logo} />
        <ul>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/project">project</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>
      </HeaderWrap>
    </Wrapper>
  )
}
export default Header;