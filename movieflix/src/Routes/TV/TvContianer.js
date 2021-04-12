import React from 'react';
import TvPresenter from './TvPresenter'

export default class  extends React.Component{
    state={
        topRated:null,
        popular:null,
        airingtoday:null,
        error:null,
        loading:true
    }

    render(){
const {topRated,popular,airingtoday,error,loading}=this.state;
return(
    <TvPresenter
    topRated={topRated}
    popular={popular}
    airingtoday={airingtoday}
    error={error}
    loading={loading}

    />
)

    }


}


