import React from 'react';
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import Header from "./components/common/Header";
import SideNav from "./components/common/SideNav";
import styled from "styled-components";
import ToolBar from "./components/common/ToolBar";
import Footer from "./components/common/Footer";
import Board from "./Routes/Board";
import { breakpoints } from "./media";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 8.5fr;
  margin-top:50px;
  height: calc(100vh - 80px);
  ${ breakpoints.md }{
    grid-template-columns: 1fr 9fr;
  }
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;
function App() {
  return (
    <HashRouter>
      <Header />
      <Wrapper>
        <SideNav />
        <ContentWrap>
          <ToolBar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:category/:projectId" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </ContentWrap>
        <Footer />
      </Wrapper>
    </HashRouter>
  );
}

export default App;
