import React from 'react'
import './ExpandedCard.scss'
import cross from '../../assets/images/close.png'

const ExpandedCard = ({data, expandCard}) => {  
  return (
    <section className='expanded-card'>
      <div className='expanded-card__content'>
        <img className="expanded-card__content--image" src={data.image_url} />
          <div className='expanded-card__content--content'>
            <h2>{data.name}</h2>
            <h5>({data.abv}%, pH = {data.ph})</h5>
            <p className='tag'><i>"{data.tagline}"</i></p>
            <p>{data.description}</p>
            
            <div>
              <p>Suggested Pairings:</p>
              <ul>{data.food_pairing.map(pairing => <li>{pairing}</li>)}</ul>
            </div>
            <p>First Brew Date: {data.first_brewed}</p>
          </div>
          <img className="expanded-card__content--close" src={cross} onClick={expandCard} />
      </div>
    </section>
  )
}

export default ExpandedCard