import React from 'react'
import './ExpandedCard.scss'

const ExpandedCard = ({data, expandCard}) => {
  return (
    <section className='expanded-card'>
      <div className='expanded-card__content' onClick={expandCard}>
        <img className="expanded-card__content--image" src={data.image_url} />
          <div className='expanded-card__content--content'>
            <h2>{data.name}</h2>
            <h5>({data.abv}%, pH = {data.ph})</h5>
            <p className='tag'><i>"{data.tagline}"</i></p>
            <p>{data.description}</p>
            <p>First Brew Date: {data.first_brewed}</p>
          </div>
      </div>
    </section>
  )
}

export default ExpandedCard