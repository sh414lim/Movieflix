import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const DetailPresenter =({ result,error,loading})=>null;


DetailPresenter.propTypes={
    result:PropTypes.object.isRequired,
    error:PropTypes.string,
    loading:PropTypes.bool.loading
}

export default DetailPresenter;