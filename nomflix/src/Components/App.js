import React, { Component } from "react";
import Router from "./Router";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <>
          <Router />
          <GlobalStyle />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
