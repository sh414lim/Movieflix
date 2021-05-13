import React from "react"
import Globalstyled from "./Globalstyled"
import Router from "./Router"

  class App extends React.Component{
    render(){
      return(
        <>
        <Router/>
        <Globalstyled/>
        </>
      )
    }
  }

  export default App;