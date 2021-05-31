import React from "react";
import styled from "styled-components";
import Loder from "../../Components/Loder";

const  Container =styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;

`;

const Backdrop=styled.div`
position: absolute;
top: 0;
left:0;
width: 100%;
height: 100%;
background-image: url(${props=>props.bgImage});
background-position: center center;
background-size: cover;
filter:blur(3px);
z-index: -1;
`;

const Content=styled.div`
display: flex;
width: 100%;
height: 100%;
position: relative;
z-index:1;
;

`;

const Cover=styled.div`
width: 30%;
background-image: url(${props=>props.bgImage});
background-position: center center;
background-size: cover;
height: 100%;
`;

const Data=styled.div`
  width: 70%;
`;

const Title=styled.span`
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 30px;
  margin-left: 30px;
`;

const ItemContainer=styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 30px;
  font-size: 20px;

`;

const Item=styled.span`
  margin-top: 10px;
  padding: 0px 20px;
  opacity:0.7;
`;

const Diver=styled.span`
 margin-top: 10px;
`;

const Overview=styled.span`
display: flex;
justify-content: center;
align-items: center;
line-height: 30px;
margin-left: 30px;
margin-top: 30px;
font-size: 20px;
opacity:0.7 ;
`;



const DetailPresenter = ({error,loading,result})=>
loading ? (
  <Loder/>
  ) :(
<Container>
  <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}/>
  <Content>
  <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assests/noPosterSmall.PNG")}/> 
  <Data>
    <Title>{result.original_title ? result.original_title : result.original_name} </Title>
    <ItemContainer>
    <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Diver>•</Diver>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Diver>•</Diver>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
    </ItemContainer>
    <Overview>{result.overview}</Overview>
  </Data>
  </Content>
</Container>
  )
;





export default DetailPresenter;