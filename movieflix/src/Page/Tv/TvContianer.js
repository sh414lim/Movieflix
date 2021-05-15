import React from "react";
import { tvApi } from "../../api";
import TvPresenter from"./TvPresenter"

export default class extends React.Component{
    state={
        topRated:null,
        popular:null,
        airingToay:null,
        error:null,
        loading:true
    };

    async componentDidMount(){
            try{
                const {data:{results:topRated}}= await tvApi.topRated();
                const {data:{results:airingToay}} = await tvApi.airingToay();
                const {data:{results:popular}}= await tvApi.popular();
    
                this.setState({
                    topRated,
                    airingToay,
                    popular
                })
    
            } catch{
                this.setState({
                    error:"Can't find Tv Show...!"
                })
            } finally{
                this.setState({
                    loading:false
                })
            }
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