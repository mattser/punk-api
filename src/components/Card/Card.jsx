import React from 'react'
import './Card.scss'

const Card = ({ data }) => {
  return (
    <div className='card-list__card'>
      <img className="card-list__card--image" src={data.image_url} />
      <div className='card-list__card--content'>
        <h3>{data.name}</h3>
        <h5>({data.abv}%, pH = {data.ph})</h5>
        <p><i>"{data.tagline}"</i></p>
        <p>Est. {data.first_brewed}</p>
      </div>
    </div>
  )
}

export default Card