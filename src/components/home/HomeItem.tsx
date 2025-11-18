import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";
import { BiLogoVisualStudio } from "react-icons/bi";
import { Link } from "react-router-dom";
import { breakpoints } from "../../media";

const Wrapper = styled.div`
  margin: 2% 5%;
  ${ breakpoints.md } {
    margin: 5%;
  }
`;
const ProfileWrap = styled.div`
  display: grid;
  //grid-template-columns:4fr 6fr;
  align-items: center;
`;
const ProfileImg = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin-top:100px;
    font-size: 400px;
    color: ${props => props.theme.colors.contentTextColor};

    ${ breakpoints.md } {
      font-size: 250px;
    }
  }
`;
const ProfileContent = styled.div`
  max-width: 600px;
  margin:30px auto 0;
  display: grid;
  gap:15px;
  grid-template-columns: repeat(2, 1fr);
  ${ breakpoints.md } {
    grid-template-columns: repeat(1, 1fr);
  }
  p {
    font-size:22px;
    line-height: 140%;
    color: ${props => props.theme.colors.contentTextColor};
    font-weight: bold;
    text-align: center;
    ${ breakpoints.md } {
      font-size:18px;
    }
  }
  button {
    background: ${props => props.theme.colors.contentBackgroundColor};
    padding:5px 8px;
    color: ${props => props.theme.colors.white};
    border: 0;
    cursor: pointer;
    font-size:16px;
    border-radius: 5px;
  }
  a {
    span {
      padding:0 5px;
    }
  }
`;

function HomeItem() {
  return (
    <Wrapper>
      <ProfileWrap>
        <ProfileImg>
          <BiLogoVisualStudio />
        </ProfileImg>
        <ProfileContent>
          <p>자기소개 페이지</p>
          <Link to="/about">
            <button>About</button>
            <span>+</span>
            <button>바로가기</button>
          </Link>
          <p>프로젝트 페이지</p>
          <Link to="/project">
            <button>Project</button>
            <span>+</span>
            <button>바로가기</button>
          </Link>
          <p>연락처 페이지</p>
          <Link to="/contact">
            <button>Contact</button>
            <span>+</span>
            <button>바로가기</button>
          </Link>
          <p>방명록 페이지</p>
          <Link to="/board">
            <button>Board</button>
            <span>+</span>
            <button>바로가기</button>
          </Link>
        </ProfileContent>
      </ProfileWrap>
    </Wrapper>
  )
}
export default HomeItem;