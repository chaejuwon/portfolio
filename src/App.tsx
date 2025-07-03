import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import Header from "./components/common/Header";
import SideNav from "./components/common/SideNav";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 8.5fr;
`;
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Wrapper><SideNav /><Home /></Wrapper>} />
        <Route path="/about" element={<Wrapper><SideNav /><About /></Wrapper>} />
        <Route path="/project" element={<Wrapper><SideNav /><Project /></Wrapper>} />
        <Route path="/contact" element={<Wrapper><SideNav /><Contact /></Wrapper>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
