import React, {useState, useEffect} from 'react'
import './Banner.css'
import axios from 'axios'
let result;

export default function Banner({url}) {

    const [movie, setMovie] = useState([])
    const [name, setName] = useState('')
// <---------------------------------------------------------------->
    // trauncating the text, putting.... at the end if the text is too long
function truncate(str, num) {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + '...'
}

    
  useEffect( () => {
      
        const fetchData = async () => {
            result = await axios.get(url)
         
            
            setMovie(result.data.results[Math.floor((Math.random() * 19))])
        
        }
        

        fetchData();
    }, [])




    return (
        <>
            <header className="banner" style={{backgroundSize : 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
                backgroundPosition : 'center center'
            }}>
                <div className="banner-content">
                    <h2>{movie?.name || movie?.title || movie?.original_name || movie?.original_title}</h2>
                    <div className="banner-buttons">
                        <button className="play-btn">Play</button>
                        <button className="mylist-btn">My List</button>
                    </div>
                    
                    <p>{movie.overview && truncate(movie.overview, 150)}</p>
                   
                </div>
                <div className="fade-bottom" />
            </header>
        </>
    )
}
