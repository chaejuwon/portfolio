import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme";
import { GlobalStyle } from "../src/style/createGlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { themeState } from "./atom";

const client = new QueryClient();

function RootWithTheme() {
  const currentTheme = useRecoilValue(themeState);
  const themeObject = currentTheme === "light" ? light : dark;

  return (
    <ThemeProvider theme={themeObject}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <RootWithTheme />
    </QueryClientProvider>
  </RecoilRoot>
);