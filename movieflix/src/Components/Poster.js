import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container =styled.div`
font-size:12px;
padding:10px;

`;

const ImageContainer=styled.div`
    margin-bottom:5px;
    position: relative;
    &:hover{
            opacity:0.3;

    }
`;

const Image=styled.div`
 background-image: url(${props=>props.bgUrl});
    height:180px;
    background-size:cover;
    border-radius:4px;
    background-position:center center;
transition: opacity 0.6s linear;
    

    
`;

const Rating=styled.span`
color:yellow;
`;

const Title=styled.span`
    display:block;
    margin-bottom:10px;
`;

const Year = styled.span`
font-size:10px;
    opacity:0.5;
`;



const Poster=({id,imageUrl,title,rating,year,isMovie=false})=>(
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
    <ImageContainer >
        <Image bgUrl={imageUrl ?
             `https://image.tmdb.org/t/p/w300${imageUrl}` 
             : require("../assests/noPosterSmall.PNG") }/>
        <Rating>
            <span role="img" aria-label="rating">
                ❤
            </span>{" "}
            {rating}/10
            </Rating>
    </ImageContainer>
    <Title>{title.length > 15 ? `${title.substring(0,15)}...`:title  }</Title>
    <Year>{year}</Year>
</Container>
    </Link>

);






Poster.protoTypes={
    id:PropTypes.number.isRequired,
    imageUrl:PropTypes.string,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    year:PropTypes.string
}

export default Poster;