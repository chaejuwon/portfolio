import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

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
    font-family: 'Source Sans Pro', sans-serif;
    color: ${props => props.theme.white.darker};
    line-height: 1.2;
    background-color: black;
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
    background: ${props => props.theme.black.lighter};
  }

  /* 스크롤바 핸들 */
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.black.darker}; /* 예시 색상 */
    border-radius: 4px; /* 둥근 모서리 */
  }

  /* 스크롤바 핸들 hover 시 */
  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.white.lighter};
  }
  ;
`;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);