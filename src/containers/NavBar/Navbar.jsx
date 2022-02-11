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
      <Slider handleInput={props.handleInput} value={props.year} type="year" min="2007" max="2022" heading="First Brewed = "/>
      <h3>{"Acidic? (pH < 4)"}</h3>
      <input type="checkbox" id="acidic" value={props.acidic} onInput={props.toggleAcidic} />
    </section>
  )
}

export default Navbar