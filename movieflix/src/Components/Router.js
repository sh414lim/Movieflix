import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Home from '../Route/Home';
import Search from '../Route/Search';
import Tv from '../Route/Tv';
import Header from "./Header"


export default ()=>(
    <Router>
        <>
        <Header/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/tv" exact component={Tv}/>
        <Route path="/search"  component={Search}/>
        <Redirect from = "*" to="/"/>
    </Switch>
    </>
    </Router>
);

