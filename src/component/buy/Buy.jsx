import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



const premium_items = [
  {
    text: "Includes hundreds of offers across six categories"
  },
  {
    text: "Unlimited offer usage for full subscription period"
  },
  {
    text: "Valid for 365 days from the date of purchase"
  },
  {
    text: "Includes offers in all the cities in Saudia Arabia"
  },
]


const Buy = () => {
  return (
    <div className='flex flex-col justify-center items-center py-20 '>
      <div className='text-center space-y-8 w-[300px] md:w-[500px]  lg:w-[600px]'>
        <button className='comman-button'>
            Do more and spend less
        </button>
        <h1 className='head-one'>
            You'll wonder how you ever
            <span className='bg-gradient-to-r from-[var(--purple-color)] to-[var(--orange-color)] bg-clip-text text-transparent'> 
                &nbsp;lived without it
            </span>
        </h1>
        <div className='px-8 md:px-20 lg:px-32 space-y-8 border-[1px] border-black py-8  rounded-xl'>
          <div>
            <h1 className='text-[2rem] md:text-[2.5rem] lg:text-[3rem]'>
              79 SAR
              <sub className='text-2xl'>/month</sub>
            </h1>
            <p className='comman-paragraph'>
              1 Year premium membership
            </p>
          </div>
          <div className='comman-paragraph text-start py-4 border-t-[1px] border-black'>
            <ul className='space-y-2'>
              {
                premium_items.map((item, index) => (
                  <li className='flex gap-2' key={index}>
                    <CheckCircleOutlineIcon/> 
                    <p>{item.text}</p>
                  </li>
                ))
              }
            </ul>
          </div>
          <button className='bg-[var(--purple-color)] text-black w-full py-2 rounded-md'>
            Get started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Buy