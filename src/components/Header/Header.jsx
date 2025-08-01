import React from 'react'
import { Link } from 'react-router'
import Search from '../Search/Search'


function Header() {
  return (
    <div>
          <div className='flex items-center'>
                <div className='w-[25%]'>
                    
                    <Link className='flex items-center'  to={"/"}>
                    
                    <img className='w-30 h-18 ' src={"https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?resize=400x0"} alt="logo" />
                    <p className='text-myColor font-extrabold text-3xl'>SP<span className='text-black font-bold'>shop</span></p>
                    </Link>
                </div>
                <div className='w-[50%]'>
                    <Search />
                </div>
                <div  className='w-[25%]'>

                </div>
          </div>
    </div>
  )
}

export default Header
