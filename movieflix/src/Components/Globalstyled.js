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
        margin-top:10px;
    }

    .mark{
        color:white;
        font-size:30px;
        margin-left:700px;
        font-weight:800;
        &:hover{
            color:red;
            font-size:60px;
            transition:color  0.6s  ease-in-out;
            transition: font-size  0.6s  ease-in-out;
        }

    }


`;

export default globalstyled;