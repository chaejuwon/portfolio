import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";
import { BiLogoVisualStudio } from "react-icons/bi";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  
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
    font-size: 400px;
    color: #252525;
  }
`;
const ProfileContent = styled.div`
  max-width: 600px;
  margin:30px auto 0;
  display: grid;
  gap:15px;
  grid-template-columns: repeat(2, 1fr);
  p {
    font-size:22px;
    line-height: 140%;
    color: #686868;
    font-weight: bold;
    text-align: center;
  }
  button {
    background: #292929;
    padding:5px 8px;
    color: #929292;
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