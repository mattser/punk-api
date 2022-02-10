import React from 'react'
import Card from '../Card/Card'
import './CardList.scss'

const CardList = (props) => {
  
  const makeCard = (input) => {
    return input.map((beer,index) => <Card key={index} data={beer}/>)
  }

  return (
    <section className='card-list'>
      {props.beers && makeCard(props.beers) }
    </section>
  )
}

export default CardList