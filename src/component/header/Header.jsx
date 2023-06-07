import React from 'react'
import AppStore from '../../images/p1.png'
import GooglePlay from '../../images/p2.png'
import banner from '../../images/banner-LP.png'

function Header() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 py-20 gap-y-12'>
        <div className='col-span-2 space-y-8'>
            <h1 className='head-one'>
                Get the best deals and offers in your favorite  
                <span className='bg-gradient-to-r from-[var(--purple-color)] to-[var(--orange-color)] bg-clip-text text-transparent'> 
                    &nbsp;premium stores!
                </span>
            </h1>
            <p className='comman-paragraph'>
                premitto is your best shopping ally, enjoy a whole year of discounts, 
                new offers, and exclusive access to online promo codes for the top best 
                products and services. Your options are endless.
            </p>
            <div className='col-span-1 flex gap-4'>
                <img src={AppStore} alt='App Store' className='cursor-pointer w-[90px] sm:w-[149px]'/>
                <img src={GooglePlay} alt='Google Play' className='cursor-pointer w-[90px] sm:w-[149px]'/>
            </div>
        </div>
        <div>
            <img src={banner} alt='error'/>
        </div>
    </div>
  )
}

export default Header