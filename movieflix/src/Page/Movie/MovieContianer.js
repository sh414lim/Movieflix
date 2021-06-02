import React from "react";
import { Moviesapi } from "../../api";
import MoviePresenter from "./MoviePresenter";


export default class extends React.Component{
    state={
        nowPlaying:null,
        upcoming:null,
        popular:null,
        error:null,
        loading:true
    };
   async componentDidMount(){
        try{
             const {data:{results:nowPlaying}}= await Moviesapi.nowPlaying();
             const {data :{results:upcoming}}= await Moviesapi.upcoming();
            const {data:{results:popular}}= await Moviesapi.popular();
                this.setState({
                    nowPlaying,
                    upcoming,
                    popular
                })

        } catch{
            this.setState({
                error:"Can't find Movies imformatin."
            })
        }finally{
            this.setState({
                loading:false
            })
        }

    }
    render(){
        const{nowPlaying,upcoming,popular,error,loading}=this.state;
        console.log(this.state)
        return(
            <MoviePresenter 
            nowPlaying={nowPlaying}
            upcoming={upcoming}
            popular={popular}
            error={error}
            loading={loading}
            />
        )
    }
}

        

