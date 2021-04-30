import React, {useState} from 'react'
import axios from 'axios'
import requests from './requests'
import Card from './Card'
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

let result;

const imgURL = 'https://image.tmdb.org/t/p/original'


export default function Row({ title, url, landscape_posters }) {
    
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')


//FETCHING THE DATA FROM THE API
    React.useEffect( () => {
        const fetchData = async () => {
            result = await axios.get(url)
         
            setMovies(result.data.results)
            
        }
        

        fetchData();
    }, [url])

 

    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    

    const handleClick = (title) => {
        console.log(title)
         if (trailerUrl) {
            setTrailerUrl('')
        }
        else {
            movieTrailer(title)
                .then((url) => {
                    console.log(url)
                     const urlparams = new URLSearchParams(new URL(url).search);
             
                 setTrailerUrl(urlparams.get('v'))
                })
           
                .catch((error) => {
                console.log(error)
            })
        }
    }
    
    return (
        <div >
            <h2 className="title">{title}</h2>
            <div className="cards">
            {movies.map((m) => {
                return <Card handleClick={handleClick}  key={m.id} title={m?.name || m?.title || m?.original_name || m?.original_title}
                    
                    // to check if the poster should be potrait or landscape
                    // we are recieveing a poster boolean value calles landscape_posters
                    imgUrl={imgURL + `${landscape_posters ? m.backdrop_path : m.poster_path}`} />
            })}
            </div>
           {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}
