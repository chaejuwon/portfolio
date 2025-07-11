import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import Header from "./components/common/Header";
import SideNav from "./components/common/SideNav";
import styled from "styled-components";
import ToolBar from "./components/common/ToolBar";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 8.5fr;
  margin-top:50px;
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
function App() {
  return (
    <BrowserRouter basename="/">
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
          </Routes>
        </ContentWrap>

      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
