import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import Slider from '../../components/Slider/Slider'
import './Navbar.scss'

const Navbar = (props) => {
  return (
    <section className='navigation'>
      <h1>Poongle</h1>
      <p><i>The Punk API search Engine</i></p>
      <SearchBox handleInput={props.handleInput} />
      <Slider handleInput={props.handleInput} value={props.abv} type="abv" min="0" max="12" heading="Minimum ABV = "/>
      <Slider handleInput={props.handleInput} value={props.year} type="year" min="2007" max="2022" heading="First Brewed = "/>
    </section>
  )
}

export default Navbar