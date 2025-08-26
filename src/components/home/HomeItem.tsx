import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";
import { BiLogoVisualStudio } from "react-icons/bi";

const Wrapper = styled.div`
  padding: 100px
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
    color: #696969;
  }
`;
const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  p {
    font-size:28px;
    line-height: 140%;
  }
`;

function HomeItem() {
  return (
    <Wrapper>
      <ProfileWrap>
        <ProfileImg>
          <BiLogoVisualStudio />
        </ProfileImg>

      </ProfileWrap>
    </Wrapper>
  )
}
export default HomeItem;