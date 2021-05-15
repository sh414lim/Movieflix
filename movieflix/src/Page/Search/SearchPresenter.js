import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter =({ movieResults,tvResults,popular,airingToay,error,loading,searchTerm})=>null;


SearchPresenter.propTypes={
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.loading,
    searchTerm:PropTypes.string,
    handleSubmit:PropTypes.func.isRequired
}

export default SearchPresenter;