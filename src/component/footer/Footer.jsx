import React from 'react'
import Logo from '../../images/logo.png'
import AppStore from '../../images/Mobile-app-store-badge-bg-white.png'
import GooglePlay from '../../images/Mobile-google-play-badge-bg-white.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const link_items = [
    {
        displayName: 'Home'
    },
    {
        displayName: 'About as'
    },
    {
        displayName: 'How it works'
    },
    {
        displayName: 'Faq'
    },
    {
        displayName: 'Contact us'
    },
    {
        displayName: 'Privacy policy'
    },
    {
        displayName: 'Terms & conditions'
    },
]


const socialMedai_items = [
    {
        icon: <InstagramIcon/>
    }, 
    {
        icon: <TwitterIcon/>
    }, 
    {
        icon: <LinkedInIcon/>
    }, 
    {
        icon: <GitHubIcon/>
    }, 
    {
        icon: <FacebookIcon/>
    }, 

]


const Footer = () => {
  return (
    <>
        <div className='grid grid-cols-1 space-y-8 md:grid-cols-2 md:space-y-0'>
            <div className='space-y-4'>
                <img src={Logo} alt='logo' style={{width: "100px"}}/>
                <p className='comman-paragraph'>
                    Premitto is an exclusive subscription based service that offers a variety
                    of deals and discounts on premium experience across six categories including
                    food and beverages, beaufy and wellness, entertainment, retail and services,
                    travel and hotel, and online deals.
                </p>
            </div>
            <div className='flex flex-row md:flex-col items-end gap-4'>
                <img src={AppStore} alt='app store' className='cursor-pointer w-fit'/>
                <img src={GooglePlay} alt='google play' className='cursor-pointer w-fit'/>
            </div>
        </div>
        <div className='footer-links py-6 border-b-[1px] border-black mt-8'>
            <ul className='flex flex-col lg:flex-row gap-4'>
                {
                    link_items.map((item, index) => (
                        <li className='cursor-pointer flex gap-1' key={index}>
                            <span className='lg:hidden text-md'>
                                <ArrowForwardIosIcon fontSize='10px'/>
                            </span>
                            {item.displayName}
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between items-center py-4'>
            <div>
                <p className='text-gray-700 flex items-center'>
                    <span className="text-[2.5rem]">&reg;</span>2023 Premitto LLC. All rights reserved
                </p>
            </div>
            <ul className='flex gap-4'>
                {
                    socialMedai_items.map((item, index) => (
                        <li className='cursor-pointer' key={index}>
                            {item.icon}
                        </li>
                    ))
                }
            </ul>
        </div>
    </>
  )
}

export default Footer