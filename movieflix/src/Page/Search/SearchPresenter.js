import React from "react";
import styled from "styled-components";
import Loder from "../../Components/Loder";
import Poster from "../../Components/Poster";
import Section from "../../Components/Section";

const Cotainer =styled.div``

const Form =styled.form`
    margin-top: 20px;
    margin-left: 10px;

`;

const INPUT=styled.input`
width: 400px;
height: 80px;
font-size: 25px;
border-style: none;
outline :none;
background-color: black;
color:white;
border-bottom: 1px solid red();

`;


const SearchPrsenter = ({movieResults,tvResults,searchTerm,error,loading, handleSubmit,updateTerm})=>

            <Cotainer>
                <Form onSubmit={handleSubmit}>   
                    <INPUT type="text" placeholder="Search.." value={searchTerm} onChange={updateTerm}/>
                </Form>
                {loading ? <Loder/> : <>
                {movieResults && movieResults.length > 0  && <Section title="Movie">
                    {movieResults.map(movie=>(<Poster
                        key={movie.id}
                        id={movie.id} 
                        title={movie.original_title} 
                        imageUrl={movie.poster_path} 
                        isMovie={true} 
                        rating={movie.vote_average} 
                        year={movie.release_date && movie.release_date.substring(0,4)}
                        />
                        ))}
                    </Section>}
                    {tvResults && tvResults.length > 0  && <Section title="Tv Show">
                    {tvResults.map(show=>(
                            <Poster
                            key={show.id} 
                            id={show.id} 
                            title={show.original_name} 
                            imageUrl={show.poster_path} 
                            isMovie={true} 
                            rating={show.vote_average} 
                            year={show.first_air_date && show.first_air_date.substring(0,4)}
                            />

                    ))}
                    </Section>}
                </>}
            </Cotainer>

    export default SearchPrsenter;

    //handleSubmit ??? searchTerm ??? searchs ?????? ?????????.
    //value??? ????????? ?????? ????????? ?????? ????????? input??? ?????? ??? ??? ?????? ????????????.
    //movie??? tv shiw ??? value??? ??????????????? ??????.
    //value(???)??? ?????? ?????? javascript ????????? ???????????? state??? searchterm ??? ?????? ?????????.
    //??? ?????? searachTerm??? container ??? ?????? presenter ??? ???????????? ?????????.
    //


