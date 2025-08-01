import React from 'react'
import Search from '../Search/Search'
import { FaRegHeart } from "react-icons/fa6";
import { Badge } from '@mui/material';
import { Link } from 'react-router';
import { BsCart3 } from "react-icons/bs";
import { GoGitCompare } from "react-icons/go";
import HeaderAuth from './HeaderAuth/HeaderAuth';

function Header() {
  return (
    <div className='border-y-2 border-gray-200 '>
          <div className='flex items-center mx-auto w-[95%]'>
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
                    <div className='flex  justify-end gap-6'>
                         <HeaderAuth />
                         <div>
                         <Badge badgeContent={4} color="primary">
                                  <GoGitCompare className='hover:text-myColor cursor-pointer'  size={25} />
                            </Badge>
                         </div>
                         <div>
                             <Badge badgeContent={4} color="primary">
                                  <FaRegHeart className='hover:text-myColor cursor-pointer'  size={25} />
                            </Badge>
                         </div>
                         <div>
                             <Badge badgeContent={4} color="primary">
                                  <BsCart3 className='hover:text-myColor cursor-pointer'  size={25} />
                            </Badge>
                         </div>
                        
                    </div>
                </div>
          </div>
    </div>
  )
}

export default Header
