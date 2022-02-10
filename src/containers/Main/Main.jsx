import React from 'react'
import CardList from '../../components/CardList/CardList'

const Main = (props) => {
  return (
    <section className='main-content'>
      <CardList beers={props.beers}/>
    </section>
  )
}

export default Main