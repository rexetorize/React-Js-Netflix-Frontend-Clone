import React from 'react';
import './App.css';
import Banner from './Banner';
import requests from './requests';
import Row from './Row'
import Navbar from './Navbar'

const URL = 'https://api.themoviedb.org/3'


function App() {

 

  return (

    <div className="App"> 
      <Navbar />  
      <Banner url={URL + requests.fetchTrending}/>

      <Row title={'Trending Now'} landscape_posters={false} url={URL + requests.fetchTrending}/>
      <Row title={'NETFLIX Originals'} landscape_posters={false} url={URL + requests.fetchNetflixOrginals} />
      <Row title={'Top Rated'} landscape_posters={true} url={URL + requests.fetchTopRated} />
      <Row title={'Action Movies'} landscape_posters={true} url={URL + requests.fetchActionMovies} />
      <Row title={'Comdey Movies'} landscape_posters={true} url={URL + requests.fetchComedyMovies} />
      <Row title={'Horror Movies'} landscape_posters={true} url={URL + requests.fetchHorrorMovies} />
      <Row title={'Romance Movies'} landscape_posters={true} url={URL + requests.fetchRomanceMovies} />
      <Row title={'Documentaries'} landscape_posters={true} url={URL + requests.fetchDocumentariesMovies} />
      
    </div>
  );
}

export default App;
