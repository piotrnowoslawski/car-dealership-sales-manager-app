import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "components";
import GlobalStyle from "index.css";
import theme from "utils/theme";
import { TopBar } from "components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <TopBar />
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
