import React from "react";
import DetailPresenter  from "./DetailPresenter";


export default class extends React.Component{
    state={

        //shoow,movie 를 찾을때 id를 가지고 가는데
        //그 작업들이 끝나면 그걸로 검색하고 결과값(result)을 보여준디.
        result:null,


        error:null,
        loading:true
    }

    render(){
        const {result,error,loading} = this.state
        return(
            <DetailPresenter
            result={result}
            error={error}
            loading={loading}
            />

        )
    }
}