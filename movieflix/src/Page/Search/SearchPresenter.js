import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";



const Container =styled.div`
margin-top:20px;
margin-left:10px;
`;

const Form = styled.form`
`;

const Input = styled.input``;



const SearchPresenter =({ movieResults,tvResults,popular,airingToay,error,loading,searchTerm,handleSubmit})=>
    <Container>
        <Form onSubmit={handleSubmit}>
                {/* value를 가져야 하는 이유는 input을 제어 할 수 있어야 하기 때문이다. */}
            <Input placeholder="Search Movies or TV Shows..." type="text" value={searchTerm}>
            </Input>
        </Form>
    </Container>




SearchPresenter.propTypes={
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool,
    searchTerm:PropTypes.string,
    handleSubmit:PropTypes.func.isRequired
}

export default SearchPresenter;