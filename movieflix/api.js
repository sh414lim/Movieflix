import axios from 'axios';

const api=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key:"10923b261ba94d897ac6b81148314a3f",
        language:"en_US"
    }

});

export const moviesApi={
    nowPlaying:()=>api.get("movie/now_playing"),
    upcoming:()=>api.get("movie/upcoming"),
    popular:()=>api.get("movie/popular"),
    search:(term)=>api.get("search/movie",{
        params:{
            query:encodeURIComponent(term)
        }
    }),
    movieDetail:(id)=>api.get(`movie/${id}`,{
        params:{
            appent_to_response:'videos'
        }
    }
    
    )
}

export const tvApi={
topRated:()=>api.get("tv/top_rated"),
popular:()=>api.get("tv/popular"),
airingtoday:()=>api.get("tv/airing_today"),
search:(term)=>api.get("search/tv",{
    params:{
        query:encodeURIComponent(term)
    }
}),
 showDetail:(id)=>api.get(`tv/${id}`,{
    params:{
        appent_to_response:'videos'
    }
 })
}


