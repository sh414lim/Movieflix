import React, { Component } from "react";
import GlobalStyle from "./GlobalStyles";
import Router from "./Router";


  class App extends Component{
    render(){
      return(
        <>
        <Router/>
        <GlobalStyle/>
        </>
      )
    }
  }

  export default App;