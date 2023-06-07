import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const PrevArrow = ({onClick}) => {
  return (
    <div className='absolute left-0 -bottom-[80px] ' onClick={onClick}>
        <div className='bg-transparent text-black border-[1px] border-black h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
            <ChevronLeftIcon/>
        </div>
    </div>
  )
}

export default PrevArrow