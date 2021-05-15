import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loder from "../../Components/Loder";

  const Container=styled.div`
  padding:10px 10px;
  `;

const MoviePresenter =({ nowPlaying,upcoming,popular,error,loading})=>
loading ? (
<Loder/>
) :(
    <Container>
        {upcoming && upcoming.length > 0 && (
    <Section title= "Upcoming Movie">
     {upcoming.map(movie => <span key={movie.id}> {movie.title}</span>)}
     </Section>
     )}
        {nowPlaying && nowPlaying.length > 0 && (
        <Section title= "Now Playing">
            {nowPlaying.map(movie => <span key={movie.id}> {movie.title}</span>)}
            </Section>
            )}
             {popular && popular.length > 0 && (
        <Section title= "Popular Movie">
            {popular.map(movie => <span key={movie.id}> {movie.title}</span>)}
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
