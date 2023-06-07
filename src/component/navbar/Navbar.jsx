import React, { useRef, useState } from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import './styles.css'
import CloseIcon from '@mui/icons-material/Close';


const nav__items = [
  {
      path: "discover",
      display: "Discover Deals"
  },
  {
      path: "howItWorks",
      display: "How it works"
  },
  {
      path: "forPartners",
      display: "For partners"
  },
  {
      path: "blog",
      display: "Blog"
  },
]

function Navbar() {
  const menuRef = useRef(null)
  const menuAdd = () => {
      menuRef.current.classList.add("active-menu")
  }
  const menuRemove = () => {
    menuRef.current.classList.remove("active-menu");
  }



  return (
    <div className='flex space-x-4 pb-2 border-b-[1px] border-black'>
      <Link to='/home'>
        <img src={logo} alt='logo' style={{width: "150px"}}/>     
      </Link>
      <div className={`nav__links hidden  lg:block lg:w-[100%]`}
          ref={menuRef}>
        <div className=' bg-white w-[50%] p-4 space-y-4 lg:bg-transparent lg:p-0
                lg:flex lg:justify-between lg:items-center lg:w-full lg:space-y-0'>
          <div className="block lg:hidden text-end self-end   
                cursor-pointer text-2xl"
              onClick={menuRemove}>
              <CloseIcon/>
          </div>
          <ul className='text-lg flex flex-col space-y-14 lg:flex-row lg:space-y-0 space-x-4 '>
            <li onClick={menuRemove}>
              <Link to='/buy' className='m-0 p-0'>
                Buy
              </Link>
            </li>
            {
              nav__items.map((index, item) => (
                <li key={item} onClick={menuRemove}>
                  <a href={`#${index.path}`}>
                    {index.display}
                  </a>
                </li>
              ))
            }
          </ul>
          <div>
            <button className='text-sm p-2 md:p-4 md:text-lg bg-[var(--purple-color)] text-white  rounded-md'>
              Become a partner
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-end  items-center gap-2 w-full lg:hidden'>
          <div className="menu_toggler cursor-pointer rounded border
              border-black py-1 px-2"
              onClick={menuAdd}>
              <MenuIcon/>
          </div>
      </div>
    </div>
  )
}

export default Navbar