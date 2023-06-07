import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const Card = ({img, date, title, text }) => {
  return (
    <div className='space-y-4'>
        <img src={img} alt='error' style={{width: '100%'}}/>
        <p className='text-[var(--purple-color)] text-md md:text-lg font-semibold'>
            {date}
        </p>
        <div className='flex justify-between'>
            <h1 className='text-[1.2rem] font-bold'>
                {title}
            </h1>
            <button>
                <ArrowOutwardIcon/>
            </button>
        </div>
        <p className='comman-paragraph'>
            {text}
        </p>
    </div>
  )
}

export default Card