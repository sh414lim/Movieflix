import {createGlobalStyle} from "styled-components"
import reset from "styled-reset";

const globalstyled =createGlobalStyle`
    ${reset}

    *{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    body{
    background-color:black;
    box-sizing:border-box;

    }
    
    a{
        text-decoration:none;
        color:inherit;
    }

    h1{
        color:white;
        margin-top:30px;
    }


`;

export default globalstyled;