import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Courses from './Course/Courses'
import Feature from './Feature/Feature'
import Review from './Review/Review'
import Article from './Article/Article'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Courses/>
      <Feature/>
      <Review/>
      <Article/>
    </div>
  )
}

export default Home