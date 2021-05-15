import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";

const Container =styled.div`
padding : 10px 10px;
`;


const TVPresenter =({ topRated,popular,airingToay,error,loading})=> 
loading ? null(
    <Container>
        {topRated && topRated.length > 0 && (
            <Section title="Top Rated">
                {topRated.map(show=>show.title)}
            </Section>
        )}
    </Container>
)


TVPresenter.propTypes={
    topRated:PropTypes.array,
    popular:PropTypes.array,
    airingToay:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.loading
}

export default TVPresenter;
