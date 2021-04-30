import React, {useEffect, useState} from 'react'
import './Navbar.css' 
import NetflixLogo from '../src/Assets/netflix_logo.png'
import Avatar from '../src/Assets/avatar.png'

export default function Navbar() {

    const [opacity, setOpacity] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                setOpacity(true)
            }
            else {
                setOpacity(false)
            }
        })

        return () => {
            window.removeEventListener('scroll')
        }

    }, [])


    return (
        <div className={`navbar ${opacity && 'dark'}`}>
            <img className="Netflix-logo" src={NetflixLogo} />
            <img className="Avatar" src={Avatar} />
        </div>
    )
}
