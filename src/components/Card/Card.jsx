import React from 'react'
import'./Card.css'
import { Link } from 'react-router-dom'

function Card({card}) {
  return (
    <div className='tamaktar2'>
           <div className='cards2'>
             <div className='card'>
              <Link to={`/meal/${card.idMeal}`}>
             <img src={card.strMealThumb} alt="" />
             <p>{card.strMeal}</p>
              </Link>
             </div>
           </div>
         </div>
  )
}

export default Card
