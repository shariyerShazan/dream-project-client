import React from 'react'
import { Link } from 'react-router'
import { Button } from '@mui/material'
import { HiOutlineRocketLaunch } from "react-icons/hi2";

function Navigation() {

    const categories = [
        {name: "Home" , to: "/"},
        {name: "Fashion" , to: "/home"},
        {name: "Electronics" , to: "/home"},
        {name: "Bags" , to: "/home"},
        {name: "Footwear" , to: "/home"},
        {name: "Groceries" , to: "/home"},
        {name: "Beauty" , to: "/home"},
        {name: "Wellness" , to: "/home"},
        {name: "Jewellery" , to: "/home"},
    ]
  return (
    <div className='border-b-2 border-gray-200 '>
      <div className='w-[95%] mx-auto flex justify-between'>
          <div>

          </div>
          <div className='flex gap-6 justify-center text-sm font-semibold my-1'>
          {categories.map((categorie , idx)=>{
            return <div  key={idx}> 
                   <Link className='' to={categorie.to}>
                       <Button className='hover:!text-myColor !capitalize'>{categorie.name}</Button>
                    </Link>
             </div>
          })
          }
          </div>
          <div className='flex items-center text-sm gap-2 '>
          <HiOutlineRocketLaunch size={18}/>
          Free International Delivery
          </div>
          
      </div>
    </div>
  )
}

export default Navigation
