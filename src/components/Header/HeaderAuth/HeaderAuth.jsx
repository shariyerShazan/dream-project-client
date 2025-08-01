import React from 'react'
import { Link } from 'react-router'

function HeaderAuth() {
  return (
    <div>
          <div className='border-r-2 border-gray-200 pr-4'>
                <Link to={"/login"}  className='hover:text-myColor px-1'>Login</Link> | <Link to={"/register"}  className='hover:text-myColor px-1' >Register</Link>
          </div> 
      
    </div>
  )
}

export default HeaderAuth
