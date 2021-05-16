import React from "react";
import { Moviesapi, tvApi } from "../../api";
import DetailPresenter  from "./DetailPresenter";


export default class extends React.Component{
    constructor(props){
        super(props)
        //props는 {pathname} 이 아니다,pathname 은 존재하지 않는다 super(props) 이건 생성자 클래스 이다
        const {location:{pathname}}=props;
        this.state={

            //shoow,movie 를 찾을때 id를 가지고 가는데
            //그 작업들이 끝나면 그걸로 검색하고 결과값(result)을 보여준디.
            result:null,
            error:null,
            loading:true,
        isMovie:pathname.includes("/movie/")

        };
    
    }
   
    async componentDidMount(){
      const {
          match:{
            params:{id}
    },
    history:{push},
    }
        =this.props;
        const {isMovie} = this.state;
        const parseId = parseInt(id);
        if(isNaN(parseId)){
         return  push("/");
            //return 할 때 함수는 종료한다.
        }
        let result=null
        try{
            if(isMovie){
           ({data:result}= await Moviesapi.movieDetail(parseId));

            }else{
            ({data:result}= await tvApi.showDetail(parseId));
            }
            console.log(result);
        } catch{
            this.setState({
                error:"Can't Find.....!"
            })
        }finally{
            this.setState({
                loading:false,result
            })
        }
    }

  

    render(){
        const {result,error,loading} = this.state
        console.log(result);
        return(
            <DetailPresenter
            result={result}
            error={error}
            loading={loading}
            />

        )
    }
}