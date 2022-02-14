import React from 'react'
import { Link } from 'react-router-dom'
import './About.scss'

const About = () => {
  return (
    <section className="about">
      <div className='about__content'>
        <Link to = "/" style={{textDecoration: 'none'}}>
          <span className='about__content--title'>
            <h1 className='pun'>Pun</h1>
            <h1 className='gle'>gle</h1>
          </span>
        </Link>
        <div className='about__content--content'>
          <p><i>Punk API Search Engine</i></p>
          <p>This webapp was built to search through, and provide information on drinks from the Punk API</p>
          <p>by <a href='https://github.com/mattser/punk-api'>mattser</a></p>
        </div>
      </div>
    </section>
  )
}

export default About