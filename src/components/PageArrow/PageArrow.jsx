import React from 'react'
import './PageArrow.scss'
import leftArrow from '../../assets/images/left-arrow.png';
import rightArrow from '../../assets/images/right-arrow.png';

const PageArrow = (props) => {
  let symbol;

  if (props.id === "down") symbol=leftArrow;
  else symbol=rightArrow;
  return (
    <>
      <img src={symbol} className="arrow" id={props.id} onClick={props.handleInput} alt="" />
    </>
  )
}

export default PageArrow