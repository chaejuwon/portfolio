import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "../src/style/createGlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const client = new QueryClient();
root.render(
  <QueryClientProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);