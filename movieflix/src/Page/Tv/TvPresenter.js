import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loder from "../../Components/Loder";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 10px;

`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loder />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map(show =>
            <Poster
            key={show.id} 
            id={show.id} 
            title={show.original_name} 
            imageUrl={show.poster_path} 
            isMovie={true} 
            rating={show.vote_average} 
            year={show.first_air_date && show.first_air_date.substring(0,4)}
            />
             )}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map(show =>
             <Poster
             key={show.id} 
             id={show.id} 
             title={show.original_name} 
             imageUrl={show.poster_path} 
             isMovie={true} 
             rating={show.vote_average} 
             year={show.first_air_date && show.first_air_date.substring(0,4)}
             />
             )}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map(show =>
             <Poster
             key={show.id} 
             id={show.id} 
             title={show.original_name} 
             imageUrl={show.poster_path} 
             isMovie={true} 
             rating={show.vote_average} 
             year={show.first_air_date && show.first_air_date.substring(0,4)}
             />
             )}
        </Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};
export default TVPresenter;

