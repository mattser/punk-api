import React from 'react'
import './Slider.scss'

const Slider = (props) => {
  return (
    <div className={`${props.type}-slider slider`}>
      <h3 className='slider__heading'>{props.heading} {props.value}</h3>
      <input type="range" min={`${props.min}`} max={`${props.max}`} id={`${props.type}`} value={props.value} onInput={props.handleInput} className="slider__slider"/>
    </div>
  )
}

export default Slider