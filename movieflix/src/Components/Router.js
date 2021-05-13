import Reacrt from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Movie from "../Page/Movie";
import Tv from "../Page/Tv";
import Search from "../Page/Search";
import Header from "./Header";

export default ()=>{
    return(
        <>
        <Router>
         <Header/>
        <Route path="/" exact component={Movie}/>
        <Route path="/tv" component={Tv}/>
        <Route path="/search" component={Search}/>
        </Router>
        </>
    )
    }
