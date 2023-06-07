import React from "react";
import logoImage1 from '../../images/logo-image.png'
import logoImage2 from '../../images/logo-image-2.png'
import logoImage3 from '../../images/logo-image-3.png'
import logoImage4 from '../../images/logo-image-4.png'
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Card from "./Card";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles.css'



const slider_items = [
    {
        img: logoImage1,
        date: "Olivia Rhye. 20 Jan 2022",
        title: "Blog Title goes here",
        text: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
    }, 
    {
        img: logoImage2,
        date: "Phoenix Baker. 19 Jan 2022",
        title: "Blog Title goes here",
        text: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
    }, 
    {
        img: logoImage3,
        date: "Alec Whitten. 17 Jan 2022",
        title: "Blog Title goes here",
        text: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
    }, 
    {
        img: logoImage4,
        date: "Alec Whitten. 17 Jan 2022",
        title: "Blog Title goes here",
        text: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
    }, 
]

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



const Testimonial = () => {

  return (
    <div className="relative mb-40">
        <Carousel 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        customRightArrow={<NextArrow />}
        customLeftArrow={<PrevArrow />}>
            {
                slider_items.map((item, index) => (
                    <Card key={index} img={item.img} date={item.date} title={item.title} text={item.text}/>
                ))
            }
        </Carousel>
    </div>
  )
}

export default Testimonial