import React from 'react'
import RestaurantIcon from '../../images/Featured-icon-1.png'
import RetailIcon from '../../images/Featured-icon-2.png'
import BeautyIcon from '../../images/Featured-icon-3.png'
import TravelIcon from '../../images/Featured-icon-4.png'
import EntertainmentIcon from '../../images/Featured-icon-5.png'
import ShoppingIcon from '../../images/Featured-icon-6.png'
import CardImg from '../../images/mockup-1.jpeg'


const discover_items = [
    {
        img: RestaurantIcon,
        title: 'Restaurants & Cafes',
        text: "Get discounts and offers from your favorite resturant & cafes! Let's enjoy the best experience for your palate."
    },
    {
        img: RetailIcon,
        title: 'Retail & Services',
        text: 'Be the first to discover and receive new offers on your favorite brands. Get the most out of your shopping.'
    },
    {
        img: BeautyIcon,
        title: 'Beauty & Wellness',
        text: 'Pamper and take care of yourself with special deals for spas, beauty salons, health, fitness and more.'
    },
    {
        img: TravelIcon,
        title: 'Travel & Hotels',
        text: 'The world is yours! Access deals and offers and get the best hotels and travel packages.'
    },
    {
        img: EntertainmentIcon,
        title: 'Entertainment',
        text: "Get discounts and offers from your favorite resturant & cafes! Let's enjoy the best experience for your palate."
    },
    {
        img: ShoppingIcon,
        title: 'Online Shopping',
        text: 'Optimize the way you recover, train and sleep with daily reporting on mobile and desktop apps. Start training smarter, not harder.'
    },
]


function Discover() {
  return (
    <div className='py-20 space-y-36 ' id='discover'>
        <div className='space-y-8'>
            <button className='comman-button'>
                Discover the best discounts and offers nears you
            </button>
            <h1 className='head-one'>
                Enjoy the art of purchasing and saving
            </h1>
            <p className='comman-paragraph'>
                Our user-friendly mobile app lets you find deals and offers in-store 
                and promo codes to shop online with a sophoisticated geo-location system.
            </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            <div className='col-span-2'>
                <div className='grid grid-cols-1 text-center md:text-start md:grid-cols-2 gap-4'>
                {
                    discover_items.map((item, index) => (
                        <div key={index} className='space-y-4 flex flex-col items-center md:items-start'>
                            <img src={item.img} style={{width: "61px"}}/>
                            <h1 className='text-[1.2rem] font-medium'>
                                {item.title}
                            </h1>
                            <p className='text-[var(--gray-color)] text-lg'>
                                {item.text}
                            </p>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className='col-span-1 flex justify-center'>
                <img src={CardImg} alt='card image'/>
            </div>
        </div>
    </div>
  )
}

export default Discover