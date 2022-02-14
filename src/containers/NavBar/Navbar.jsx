import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import Slider from '../../components/Slider/Slider'

const Navbar = (props) => {
  return (
    <section className='navigation'>
      <span className='navigation__logo'><h1 className='pun'>Pun</h1><h1 className='gle'>gle</h1></span>
      <p><i>Punk API Search Engine</i></p>
      <SearchBox handleInput={props.handleInput} />
      <Slider handleInput={props.handleInput} value={props.abv} type="abv" min="0" max="12" heading="Minimum ABV = "/>
      <Slider handleInput={props.handleInput} value={props.year} type="year" min="2008" max="2022" heading="First Brew Date Before = "/>
      <Slider handleInput={props.handleInput} value={props.maxPh} type="maxph" min="4" max="7" heading="Max pH =" />
    </section>
  )
}

export default Navbar