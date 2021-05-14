import React from "react";
import TvPresenter from"./TvPresenter"

export default class extends React.Component{
    state={
        topRated:null,
        popular:null,
        airingToay:null,
        error:null,
        loading:true
    }

    render(){
        const {topRated,   popular, airingToay, error, loading}=this.state;
        return(
            <TvPresenter
            topRated={topRated}
            popular={popular}
            airingToay={airingToay}
            error={error}
            loading={loading}
            />
        )
    }
}