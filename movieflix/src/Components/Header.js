import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";

const Head=styled.header`
   display:flex;
   height:50px;
   width:100%;
   box-shadow:5px 5px 5px red;
`;

const List=styled.ul`
    display:flex;

  
    `;

const Item=styled.li`
    display:flex;
    justify-content:center;
    align-items:center;
    padding-left:20px;
    font-size:20px;
    font-weight:600;
    color:${props=>(props.current ? "red" : "white")};
    transition: color 0.5s ease-in-out;
    &:hover{
        color:red;
    }
   
`;

const Page=styled(Link)`
`;

export default withRouter(({location:{pathname}})=>(
    <>
    <Head>
        <List>
            <Item current={pathname === "/"}>
                <Page to="/">Movie</Page>
            </Item>
        </List>

        <List>
            <Item current={pathname === "/tv"}>
                <Page to="/tv">TV</Page>
            </Item>
        </List>

        <List>
            <Item current={pathname === "/search"}>
                <Page to="/search">Search</Page>
            </Item>
        </List>
        <h1 className="mark">N</h1>
    </Head>
    </>

))
