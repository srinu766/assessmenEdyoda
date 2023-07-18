import React from 'react'
import Logo from "../asserts/img/logo.png"
import SearchIcon from "../asserts/img/searchIcon.png"

const NavBar = () => {
  return (
    <div className=''>
    <div className='flex  px-9'>
    <img src={Logo}  className='w-[160px] h-[70px]'/>
    <div className='flex py-5'>
    <h1 className='px-10'>Courses ^</h1>
    <h1 className='px-10 '>Programs ^</h1>
    <img src={SearchIcon} className='w-4 h-4 mt-1 ml-96'/>
    <h1 className='px-12'>Log in</h1>
    <h1 className='px-10 bg-blue-600 text-white py-1 rounded-full font-semibold '>JOIN NOW</h1>
    </div>
      
    </div>
    </div>
  )
}

export default NavBar
