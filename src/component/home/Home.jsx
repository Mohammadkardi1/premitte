import React from 'react'
import Header from '../header/Header'
import Blog from '../blog/Blog'
import Discover from '../discover/Discover'
import ForPartners from '../forPartners/ForPartners'
import HowItWorks from '../howItWorks/HowItWorks'


function Home() {
  return (
    <>
      <Header/>
      <Discover/>
      <HowItWorks/>
      <ForPartners/>
      <Blog/>
    </>
  )
}

export default Home