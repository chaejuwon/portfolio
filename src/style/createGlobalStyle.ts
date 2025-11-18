import { createGlobalStyle, ThemeProvider } from "styled-components";
import { dark } from "../theme";
import D2CodingTTF from '../assets/fonts/D2Coding/D2Coding.woff';
import D2CodingTTF2 from '../assets/fonts/D2Coding/D2Coding.woff2';
import D2CodingBold from '../assets/fonts/D2Coding/D2CodingBold.woff';
import D2CodingBold2 from '../assets/fonts/D2Coding/D2CodingBold.woff2';
import SourceSansPro300 from '../assets/fonts/SourceSansPro/SourceSansPro300.woff2';
import SourceSansPro400 from '../assets/fonts/SourceSansPro/SourceSansPro400.woff2';
import SourceSansPro700 from '../assets/fonts/SourceSansPro/SourceSansPro700.woff2';
import PretendardRegular from '../assets/fonts/Pretendard/Pretendard-Regular.woff';
import PretendardMedium from '../assets/fonts/Pretendard/Pretendard-Medium.woff';
import PretendardBold from '../assets/fonts/Pretendard/Pretendard-Bold.woff';
import PretendardExtraBold from '../assets/fonts/Pretendard/Pretendard-ExtraBold.woff';
import { breakpoints } from "../media";

export const GlobalStyle = createGlobalStyle`
//@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
@font-face {
  font-family: 'D2Coding';
  src: url(${D2CodingTTF}) format('woff');
  src: url(${D2CodingTTF2}) format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'D2Coding';
  src: url(${D2CodingBold}) format('woff');
  src: url(${D2CodingBold2}) format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
    font-family: 'sourceSansPro';
    src: url(${SourceSansPro300}) format('woff2');
    font-weight: 300;
}
@font-face {
  font-family: 'sourceSansPro';
  src: url(${SourceSansPro400}) format('woff2');
  font-weight: 400;
}
@font-face {
  font-family: 'sourceSansPro';
  src: url(${SourceSansPro700}) format('woff2');
  font-weight: 700;
}

@font-face {
  font-family: 'pretendard';
  src: url(${PretendardRegular}) format('woff2');
  font-weight: 300;
}
@font-face {
  font-family: 'pretendard';
  src: url(${PretendardMedium}) format('woff2');
  font-weight: 400;
}
@font-face {
  font-family: 'pretendard';
  src: url(${PretendardBold}) format('woff2');
  font-weight: 600;
}
@font-face {
  font-family: 'pretendard';
  src: url(${PretendardExtraBold}) format('woff2');
  font-weight: 700;
}



html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
    display: block;
}

/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}

menu, ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

* {
    box-sizing: border-box;
}

body {
    font-weight: 300;
    font-family: 'sourceSansPro', sans-serif;
    color: ${props => props.theme.colors.textPrimary};
    line-height: 1.2;
    background-color: ${props => props.theme.colors.backgroundPrimary};
    overflow: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

/* 스크롤바 전체 영역 */
&::-webkit-scrollbar {
  width: 8px; /* 스크롤바 너비 */
}

/* 스크롤바 트랙 (배경) */
&::-webkit-scrollbar-track {
  background: ${props => props.theme.colors.backgroundThird};
}

/* 스크롤바 핸들 */
&::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.backgroundPrimary}; /* 예시 색상 */
  border-radius: 4px; /* 둥근 모서리 */
}

/* 스크롤바 핸들 hover 시 */
&::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme.colors.backgroundSecondary};
}

${ breakpoints.md } {
  
}


`;