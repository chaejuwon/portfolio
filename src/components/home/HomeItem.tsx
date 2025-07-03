import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";

const Wrapper = styled.div`
  padding: 100px
`;
const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns:4fr 6fr;
  align-items: center;
`;
const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
`;
const ProfileImgCircle = styled.div`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
const ProfileContent = styled.div`
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
          <ProfileImgCircle>
            {/*<img src={profile} />*/}
          </ProfileImgCircle>
        </ProfileImg>
        <ProfileContent>
          <TypeAnimation
            sequence={['안녕하세요.']}
            speed={50}
            wrapper="p"
            repeat={0}
          />
          <TypeAnimation
            sequence={[1000,'목표를 향해 꾸준히 나아가는']}
            speed={50}
            wrapper="p"
            repeat={0}
          />
          <TypeAnimation
            sequence={[2000,'프론트엔드 개발자 채주원입니다.']}
            speed={50}
            wrapper="p"
            repeat={0}
          />
        </ProfileContent>
      </ProfileWrap>
    </Wrapper>
  )
}
export default HomeItem;