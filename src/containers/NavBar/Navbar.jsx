import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import Slider from '../../components/Slider/Slider'

const Navbar = (props) => {
  return (
    <section className='navigation'>
      <h1>Pungle</h1>
      <p><i>Punk API Search Engine</i></p>
      <SearchBox handleInput={props.handleInput} />
      <Slider handleInput={props.handleInput} value={props.abv} type="abv" min="0" max="12" heading="Minimum ABV = "/>
      <Slider handleInput={props.handleInput} value={props.year} type="year" min="2007" max="2022" heading="First Brewed = "/>
    </section>
  )
}

export default Navbar