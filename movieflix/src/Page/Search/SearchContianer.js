import React from "react";
import SearchPresenter from "./SearchPresenter"

export default class extends React.Component{
    state={
        movieResults:null,
        tvResults:null,
        //누군가 검색을 시도 했을때 양쪽 영화 티비 결과를 둘다 보여주기위해 
        searchTerm:"", //string
        error:null,

        //default로 아무것도 로딩하지 않으므로 loading 은 false 이다.
        //사용자가 단어를 가지고 검색하기를 기다린다.
        loading:false
    }

    render(){
        const {error,loading,movieResults,tvResults,searchTerm}=this.state
        return(
            <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
            
            />
        )
    }
}