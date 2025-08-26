import styled from "styled-components";
const Wrapper = styled.div`
  overflow-y: scroll;
  font-family: 'D2Coding', sans-serif;
  height: calc(100vh - 86px);
`;
function AboutItem() {
  return (
    <Wrapper>
      {/*<ProfileContent>*/}
      {/*  <TypeAnimation*/}
      {/*    sequence={['안녕하세요.']}*/}
      {/*    speed={50}*/}
      {/*    wrapper="p"*/}
      {/*    repeat={0}*/}
      {/*  />*/}
      {/*  <TypeAnimation*/}
      {/*    sequence={[1000,'목표를 향해 꾸준히 나아가는']}*/}
      {/*    speed={50}*/}
      {/*    wrapper="p"*/}
      {/*    repeat={0}*/}
      {/*  />*/}
      {/*  <TypeAnimation*/}
      {/*    sequence={[2000,'프론트엔드 개발자 채주원입니다.']}*/}
      {/*    speed={50}*/}
      {/*    wrapper="p"*/}
      {/*    repeat={0}*/}
      {/*  />*/}
      {/*</ProfileContent>*/}
    </Wrapper>
  )
}
export default AboutItem;