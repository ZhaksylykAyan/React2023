import React from 'react'
import Main from "../components/Main"
import Row from "../components/Row";
import requests from '../Requests'
const Home = () =>{
    return(
        <>
            <Main />
            <Row RowID='1'  title='Up coming' fetchURL={requests.requestUpcoming}/>
            <Row RowID='2'  title='Popular' fetchURL={requests.requestPopular}/>
            <Row RowID='3'  title='Trending' fetchURL={requests.requestTrending}/>
            <Row RowID='4'  title='TopRated' fetchURL={requests.requestTopRated}/>
        </>
    );
}

export default Home