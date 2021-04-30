import React from 'react'
import'./Card.css'

export default function Card({handleClick, imgUrl, title}) {
    return (
        <>
            <img onClick={()=>{handleClick(title)}} className="sep-card" height="150" width="90" alt={title} src={imgUrl}/>
      </>
    )
}
