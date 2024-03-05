import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { GlobalStyle } from "./style";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
