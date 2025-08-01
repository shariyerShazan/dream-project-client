import React from 'react'
import { Link } from 'react-router'

function TopHeader() {
  return (
    <div>
         <div className='flex justify-between text-sm w-[95%] mx-auto py-1 '>
                <p>
                Get up to 50% off new season styles, limited time only
                </p>
                <div className='flex gap-10'>
                <Link to={"/help-center"} className='hover:text-myColor'>Help Center</Link>
                <Link to={"/order-tracking"} className='hover:text-myColor'>Order Tracking</Link>
                </div>
         </div>
    </div>
  )
}

export default TopHeader
