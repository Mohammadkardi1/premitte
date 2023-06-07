import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NextArrow = ({onClick}) => {
  return (
    <div className='absolute left-[80px] -bottom-[80px] ' onClick={onClick}>
        <div className='bg-transparent text-black border-[1px] border-black h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
            <ChevronRightIcon/>
        </div>
    </div>
  )
}

export default NextArrow