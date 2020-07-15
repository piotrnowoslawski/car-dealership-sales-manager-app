import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard, TopBar, Home } from "components";
import GlobalStyle from "index.css";
import theme from "utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.NODE_ENV === "development" ? "/" : "/cds"}>
        <GlobalStyle />
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
