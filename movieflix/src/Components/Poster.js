import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Poster=({id,imageUrl,title,rating,year})=>

Poster.protoTypes={
    id:PropTypes.number.isRequired,
    imageUrl:PropTypes.string,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    year:PropTypes.string.isRequired
}``