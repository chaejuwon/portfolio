import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { breakpoints } from "../../media";

const Wrapper = styled.div`
  position: fixed;
  top:0;
  left:0;
  width:100%;
  p {
    text-align: center;
  }
  background: ${props => props.theme.colors.backgroundPrimary}
`;

const HeaderWrap = styled.div`
  padding:0 15px;
  width: 100%;
  height:50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  img {
    width: 40px;
  }
  ul {
    display: flex;
    margin-left:20px;
    ${ breakpoints.md } {
      display: none;
    }
  }
  li {
    margin:0 15px;
  }
  span {
    font-weight: bold;
    color: ${props => props.theme.colors.textPrimary}
  }
`;
const LeftWrap = styled.div`
  display: flex;
  align-items: center;
`;
const RightWrap = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;
function Header() {
  return(
    <Wrapper>
      <HeaderWrap>
        <LeftWrap>
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
        </LeftWrap>
        <RightWrap>
          <div className="Header_icon_window_wrap__fiIOh">
            <svg width="1em" height="1em" version="1.1" viewBox="0 0 1e3 1e3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="Header_icon_window__iTL2r"><path d="m766 566.5h-532v-133h532" strokeWidth="33.25"></path></svg>
          </div>
          <div>
            <svg width="1em" height="1em" viewBox="2 1.9 10 10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="Header_icon_window__iTL2r">
              <g>
                <path d="M4 6v6h6V6zm1 1h4v4H5z" overflow="visible"></path>
                <path d="M6 4v1h5v5h1V4z" overflow="visible" opacity="1"></path>
              </g>
            </svg>
          </div>
          <div>
            <svg width="1em" height="1em" version="1.1" viewBox="0 0 1e3 1e3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="Header_icon_window__iTL2r">
              <path d="m572.79 500 276.21 276.21v72.791h-72.791l-276.21-276.21-276.21 276.21h-72.791v-72.791l276.21-276.21-276.21-276.21v-72.791h72.791l276.21 276.21 276.21-276.21h72.791v72.791z"
                    strokeWidth="49.857"></path>
            </svg>
          </div>
        </RightWrap>
      </HeaderWrap>
    </Wrapper>
  )
}
export default Header;