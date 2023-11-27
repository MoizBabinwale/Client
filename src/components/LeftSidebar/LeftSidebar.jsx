import React, { useEffect } from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSidebar = ({ slideIn }) => {
  const onClickMenu = () => {
    const navLinks = document.getElementById('myDIV');
    navLinks.classList.toggle('hidden');
  }

  useEffect(() => {
    document.getElementById("menu").click()
    console.log(slideIn);
  }, [slideIn])


  return (
    <div className=' lg:bg-white lg:border lg:border-t-0 lg:border-l-0 lg:border-b-0 lg:border-gray-400   lg:text-sm w-[164px] ' >
      <button id='menu' className='' onClick={onClickMenu}></button>
      <nav className='side-nav bg-white w-full justify-center lg:justify-end items-center absolute lg:flex lg:flex-col hidden  lg:mt-12 lg:pt-5 lg:pb-5 lg:sticky lg:max-w-full lg:text-end lg:w-[164px]  lg:items-end ' id='myDIV'>
        <NavLink to='/' className='p-3 flex justify-center lg:p-3 lg:w-[100%] lg:justify-end ' activeclassname='active' >
          <p>Home</p>
        </NavLink>
        <div className='flex flex-col justify-center lg:justify-start lg:items-start items-center w-[100%]'>
          <div><p className='font-semibold mb-1 hidden lg:block lg:text-start lg:self-start'>PUBLIC</p></div>
          <NavLink to='/Questions' className='p-3 relative items-center flex lg:justify-end lg:w-[100%] justify-center w-[100%]' activeclassname='active'>
            <img src={Globe} alt="Globe" className=' left-0 items-center ' />
            <p style={{ paddingLeft: "10px" }}> Questions </p>
          </NavLink>
          <NavLink to='/Tags' className='p-3 flex lg:justify-end lg:w-[100%] justify-center w-[100%]' activeclassname='active' >
            <p>Tags</p>
          </NavLink>
          <NavLink to='/Users' className='p-3 flex lg:justify-end lg:w-[100%] justify-center w-[100%]' activeclassname='active' >
            <p>Users</p>
          </NavLink>
          <NavLink to='/DisplayPost' className='p-3 flex lg:justify-end lg:w-[100%] justify-center w-[100%]' activeclassname='active' >
            <p>Posts</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar
