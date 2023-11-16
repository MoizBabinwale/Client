import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSidebar = () => {
  const onClickMenu = () => {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
    <div className='left-sidebar'>
      <button id='menu' onClick={onClickMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <nav className='side-nav flex flex-col ' id='myDIV'>
        <NavLink to='/' className='p-3' activeclassname='active'>
          <p>Home</p>
        </NavLink>
        <div className='flex flex-col'>
          <div><p className='font-semibold mb-1'>PUBLIC</p></div>
          <NavLink to='/Questions' className='p-3 relative items-center flex' activeclassname='active'>
            <img src={Globe} alt="Globe" className='absolute left-0 items-center' />
            <p style={{ paddingLeft: "10px" }}> Questions </p>
          </NavLink>
          <NavLink to='/Tags' className='p-3' activeclassname='active' style={{ paddingLeft: "40px" }}>
            <p>Tags</p>
          </NavLink>
          <NavLink to='/Users' className='p-3' activeclassname='active' style={{ paddingLeft: "40px" }}>
            <p>Users</p>
          </NavLink>
          <NavLink to='/DisplayPost' className='p-3' activeclassname='active' style={{ paddingLeft: "40px" }}>
            <p>Posts</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar
