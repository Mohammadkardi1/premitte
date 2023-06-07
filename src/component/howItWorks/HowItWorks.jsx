import React from 'react'
import contentImg from '../../images/content.png'


function HowItWorks() {
  return (
    <div className='flex flex-col items-center text-center py-20 space-y-8' id='howItWorks'>
      <button className='comman-button'>
          How it works
      </button>
      <h1 className='head-one'>
        Amazing online offers are waiting for you! 
      </h1>
      <p className='text-xl md:text-3xl font-medium text-gray-500'>
        In 3 simple steps, you can start saving!
      </p>
      <p className='text-md md:text-lg'>
        Log in to Premitto today and discover a unique way to save, with hundreds of in-store
        deals and offers and online promo codes to enjoy the pleasure of shopping.
      </p> 
      <img src={contentImg} alt='content image' style={{width: "700px"}}/>
    </div>
  )
}

export default HowItWorks