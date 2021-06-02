import axios from "axios"

//모든 작업들은 Url,api_key language 를 가지고 한다
const api=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key:"13dce73d621a57563589d58029a15906",
        language:"en-us"
    }
});


// "/" 로 시작하는것은 절대경로를 의미하므로 api 를 사용할때 는 상대경로 로 호출 해야 한다.


export const Moviesapi={
    nowPlaying:()=>api.get("movie/now_playing"),
    upcoming:()=>api.get("movie/upcoming"),
    popular:()=>api.get("movie/popular"),
    movieDetail:id=>api.get(`movie/${id}`,{
        params:{
            append_to_response:'videos'
        }
    }),

    searchMovie:(term)=>api.get("search/movie",{
            params:{
        query :encodeURIComponent(term)  //어떤 파라미터 값을 이 함수에 넘기든지, 값을 인코딩하고 그 문자열로 검색한다.

            }
        })
   
}

export  const tvApi={
    topRated:()=>api.get("tv/top_rated"),
    popular:()=>api.get("tv/popular"),
    airingToay:()=>api.get("tv/airing_today"),
    showDetail:id=>api.get(`tv/${id}`,{
        params:{
            append_to_response:'videos'
        }
    }),
    
    searchTv:(term)=>api.get("search/tv",{
        params:{
        query :encodeURIComponent(term)  //어떤 파라미터 값을 이 함수에 넘기든지, 값을 인코딩하고 그 문자열로 검색한다.

        }
    })

}


