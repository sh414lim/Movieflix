import React from "react";
import PropTypes from "prop-types"
import styled from"styled-components";

const TvPresenter=({ toRated,
    popular,
    airingToday,
    loading,
    error,})=>null;

TvPresenter.propTypes={
    toRated:PropTypes.array,
    popular:PropTypes.array,
    airingToday:PropTypes.array,
    loading:PropTypes.bool,
    error:PropTypes.string

};

export default TvPresenter;