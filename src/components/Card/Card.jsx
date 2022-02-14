import React,{ useState } from 'react'
import './Card.scss'
import ExpandedCard from '../ExpandedCard/ExpandedCard';

const Card = ({ data }) => {

  const [expanded,setExpanded] = useState(false);

  const expandCard = (event) => {
    setExpanded(!expanded);
  }

  return (
    <>
      <div className='card-list__card' onClick={expandCard}>
        <img className="card-list__card--image" src={data.image_url} alt="" />
        <div className='card-list__card--content'>
          <h3>{data.name}</h3>
          <h5>({data.abv}%, pH = {data.ph})</h5>
          <p><i>"{data.tagline}"</i></p>
          <p>Est. {data.first_brewed}</p>
        </div>
      </div>
      {expanded && <ExpandedCard data={data} expandCard={expandCard} />}
    </>
  )
}

export default Card