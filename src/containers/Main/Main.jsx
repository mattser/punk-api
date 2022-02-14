import React from 'react'
import CardList from '../../components/CardList/CardList'
import PageArrow from '../../components/PageArrow/PageArrow'

const Main = (props) => {
  return (
    <section className='main-content'>
      <span className='main-content__page'>
        <PageArrow id="down" handleInput={props.handleInput}/>
        <h2>{props.page}</h2>
        <PageArrow id="up" handleInput={props.handleInput}/>
      </span>
      <CardList beers={props.beers} acidic={props.acidic} maxPh={props.maxPh}/>
      <span className='main-content__page'>
        <PageArrow id="down" handleInput={props.handleInput}/>
        <h2>{props.page}</h2>
        <PageArrow id="up" handleInput={props.handleInput}/>
      </span>
    </section>
  )
}

export default Main