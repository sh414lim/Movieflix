import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";

  const Container=styled.div`
  padding:10px 10px;
  `;

const MoviePresenter =({ nowPlaying,upcoming,popular,error,loading})=>
loading ? null :(
    <Container>
        {upcoming && upcoming.length > 0 && (
 <Section title= "Upcoming Movie">
     {upcoming.map(movie => movie.title)}
     </Section>
     )}
        {nowPlaying && nowPlaying.length > 0 && (
        <Section title= "Now Playing">
            {nowPlaying.map(movie => movie.title)}
            </Section>
            )}
             {popular && popular.length > 0 && (
        <Section title= "Popular Movie">
            {popular.map(movie => movie.title)}
            </Section>
            )}
            
    </Container>
)



MoviePresenter.propTypes={
    nowPlaying:PropTypes.array,
    upcoming:PropTypes.array,
    popular:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}

export default MoviePresenter;
