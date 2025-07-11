import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding:0 15px;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  p {
    text-align: center;
  }
`;

const HeaderWrap = styled.div`
  width: 100%;
  height:50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.component.border};
  img {
    width: 40px;
  }
  ul {
    display: flex;
    margin-left:20px;
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
          <li><span>File</span></li>
          <li><span>Edit</span></li>
          <li><span>Selection</span></li>
          <li><span>View</span></li>
          <li><span>go</span></li>
          <li><span>Run</span></li>
          <li><span>Terminal</span></li>
          <li><span>Help</span></li>
        </ul>
      </HeaderWrap>
    </Wrapper>
  )
}
export default Header;