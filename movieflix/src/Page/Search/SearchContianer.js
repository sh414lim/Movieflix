import React from "react";
import { Moviesapi,tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter"

export default class extends React.Component{
    state={
        movieResults:null,
        tvResults:null,
        searchTerm: "", //searchTerm 은 empty고 검색하고 엔터를 누르면 로딩이 true가 되고 그 결과 값을 여기다 넣는다.
        error:null,
        loading:false//사용자의 단어 검색을 기다린다.
    }

    //누군가 폼에서 text를 입력하고 엔터를 누르면 그게 handleSubmit 이 된다.
    //handleSubmit 은 searchTerm이 빈칸(공백) 이 아닌걸 체크하고  그 다음에 search 함수를 실행한다.

    handleSubmit=event=>{
        event.preventDefault();
        const {searchTerm} =this.state;
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    };

    updateTerm=event=>{
        //event 는 target 를 가진다
        const {
            target:{value}
        } = event;
        this.setState({
        searchTerm:value

        })
    }

     searchByTerm=async()=>{
        const {searchTerm} =this.state;
        this.setState({loading:true});
        try{
            const {
                data:{results:movieResults}
            }=await Moviesapi.searchMovie(searchTerm)
            const {
                data:{results:tvResults}
            }=await tvApi.searchTv(searchTerm)
            //누군가 검색 했을때 로딩을 true로 만들고 디폴트 로딩은 false 이기 떄문이다
            this.setState({
                movieResults,
                tvResults
            })

        }catch{
            this.setState({
                error:"what.."
            })
        }finally{
            this.setState({
                loading:false
            })            
        }
    }
  

    render(){
        const {movieResults,tvResults,searchTerm,error,loading}=this.state
        return(
            <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
            handleSubmit={this.handleSubmit}
            updateTerm={this.updateTerm}
            />
            //searchPresenter 에서 폼을 만들고 폼 셋업하고 onSubmit 을 호출한다
            //hundleSubmit을 호출하기 위해서
            //handleSubmot 은 searchByTerm 을 호출하고 searchByTerm이 모든 작업들을 준비해 준다.


        )

    }
}