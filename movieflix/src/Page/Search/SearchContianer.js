import React from "react";
import { Moviesapi, tvApi } from "../../api";
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
    };

 
    handleSubmit=()=>{
        const {searchTerm}=this.state;
        if(searchTerm !=="" ){
            //searchTerm 이 공백이 아닐때 searchTerm 을 인자로 넣고 searchByTerm 을 호출
            this.searchByTerm();
        }
    }

    searchByTerm=async()=>{
        const {searchTerm}=this.state;
        this.setState({loading:true});
        try{
            const {data:{results:movieResults}}=await Moviesapi.search(searchTerm);
            const {data:{results:tvResults}}= await tvApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            })

        }catch{
                this.setState({
                    error:"Can't Find Item"
                })
        }finally{
            this.setState({
                loading:false
            })
        }
    }



    render(){
        const {error,loading,movieResults,tvResults,searchTerm}=this.state
        console.log(this.state);
        return(
            <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
            handleSubmit={this.handleSubmit}
            
            />
        )
    }
}