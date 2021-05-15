import React from "react";
import DetailPresenter  from "./DetailPresenter";


export default class extends React.Component{
    state={

        //shoow,movie 를 찾을때 id를 가지고 가는데
        //그 작업들이 끝나면 그걸로 검색하고 결과값(result)을 보여준디.
        result:null,


        error:null,
        loading:true
    };

    async componentDidMount(){
        const {
            match:{
                params:{id}
            },
            history:{push},
            location:{pathname}
            }=this.props;

            this.ismovie=pathname.includes("/movie/");
            const parsedId = parseInt(id);
            if(isNaN(parsedId)){
             return    push("/");
            }
            console.log(this.ismovie);
        }

    render(){
        console.log(this.props)
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