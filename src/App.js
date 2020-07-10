import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "components";
import GlobalStyle from "index.css";
import theme from "utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Dashboard />
      </Router>
    </ThemeProvider>
  );
}

export default App;
