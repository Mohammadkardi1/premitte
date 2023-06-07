import React, { useState } from 'react'

const forPartners_items = [
    {
        title: "Log in",
        text: "Download the mobile app from the App store. Please enter your details, tap register, and get our exclusive one-year special discounts membership."
    },
    {
        title: "Search for deals",
        text: "Search for deals, use our deals and offers browser and filter according to your location, category, and preferences. A list of online offers will appera in a new seconds."
    },
    {
        title: "Save more",
        text: "Save morel Select the deal you need, enter the amount to pay, and get a unique discount voucher. Enjoy a full year of discount and offers."
    },
]



function ForPartners() {
    const [hovered, setHovered] = useState(-1);

    const handleMouseEnter = (index) => {
        setHovered(index);
    };

    const handleMouseLeave = () => {
        setHovered(-1);
    };
  return (
    <div className='grid grid-cols-1 space-y-8 lg:grid-cols-3 lg:space-y-0' id='forPartners'>
        {
            forPartners_items.map((item, index) => (
                <div key={index} className={`cursor-pointer  pt-1
                        ${hovered === index ? "bg-gradient-to-r from-[var(--purple-color)] to-[var(--orange-color)]" : "bg-gray-300" }`}>
                    <div key={index} 
                        className={`bg-white h-full text-center pt-8 px-4 space-y-8`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}>   
                        <h1 className={`text-[1.5rem] lg:text-[2rem] font-semibold 
                                ${hovered === index ? 'text-[var(--purple-color)]' : 'text-black'}`}>
                            {item.title}
                        </h1>
                        <p className={`text-md md:text-lg  ${hovered === index ? 'text-[var(--purple-color)]' : 'text-[var(--gray-color)]'} `}>
                            {item.text}
                        </p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ForPartners