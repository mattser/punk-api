import React from 'react'
import Card from '../Card/Card'
import './CardList.scss'

const CardList = (props) => {
  
  const makeCard = (input) => {
    return input.map((beer,index) => <Card key={index} data={beer}/>)
  }

  const beersList = props.beers.filter(beer => {
    if (props.acidic) {
      return beer.ph < 4
    } else {
      return beer
    }
  })
  return (
    <section className='card-list'>
      {props.beers && makeCard(beersList) }
    </section>
  )
}

export default CardList