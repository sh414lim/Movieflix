import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loder from "../../Components/Loder";
import Poster from "../../Components/Poster";

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
     {upcoming.map(movie => (
         <Poster
          key={movie.id} 
          id={movie.id} 
          title={movie.original_title} 
          imageUrl={movie.poster_path} 
          isMovie={true} 
          rating={movie.vote_average} 
          year={movie.release_date && movie.release_date.substring(0,4)}/>
))}
     </Section>
     )}
        {nowPlaying && nowPlaying.length > 0 && (
        <Section title= "Now Playing">
            {nowPlaying.map(movie => (
                <Poster
                key={movie.id} 
                id={movie.id} 
                title={movie.original_title} 
                imageUrl={movie.poster_path} 
                isMovie={true} 
                rating={movie.vote_average} 
                year={movie.release_date && movie.release_date.substring(0,4)}
                />
))}
            </Section>
            )}
             {popular && popular.length > 0 && (
        <Section title= "Popular Movie">
            {popular.map(movie => (
                <Poster
                key={movie.id} 
                id={movie.id} 
                title={movie.original_title} 
                imageUrl={movie.poster_path} 
                isMovie={true} 
                rating={movie.vote_average} 
                year={movie.release_date && movie.release_date.substring(0,4)}
                />
))}
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
