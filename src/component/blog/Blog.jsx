import React from 'react'
import TestimonialCard from '../testimonial/Testimonial'
import banner from '../../images/banner-LP.png'
import AppStore from '../../images/app-store-white.png'
import GooglePlay from '../../images/google-play-white.png'


const Blog = () => {
  return (
    <div className='flex flex-col py-20 space-y-8'>
        <div>
            <button className='comman-button'>
                Our blog
            </button>
        </div>
        <div className='flex flex-col gap-y-6 md:flex-row md:justify-between'>
            <h1 className='text-[2rem] font-semibold w-[300px]'>
                A 360&deg; tour with the best places for you!
            </h1>

            <p className='comman-paragraph w-[300px]'>
                Discover trends and news about the best restaurants, hotels, and shopping places
            </p>
        </div>
        <div>
            <TestimonialCard/>
        </div>
        <div className='grid grid-cols-1 space-y-8 p-8 md:grid-cols-3 md:space-y-0  md:p-16 rounded-3xl 
                bg-gradient-to-r from-[var(--purple-color)] to-[var(--orange-color)] '>
            <div className='col-span-2 space-y-4 md:space-y-8'>
                <h1 className='text-gray-400 head-one'>
                    Enjoy the experience of shopping more and 
                    <span className='text-white'> 
                        &nbsp;paying less!
                    </span>
                </h1>
                <div className='col-span-1 flex gap-4'>
                    <img src={AppStore} alt='App Store' className='cursor-pointer  w-[90px] sm:w-[149px]'/>
                    <img src={GooglePlay} alt='Google Play' className='cursor-pointer  w-[90px] sm:w-[149px]'/>
                </div>
            </div>
            <div>
                <img src={banner} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Blog