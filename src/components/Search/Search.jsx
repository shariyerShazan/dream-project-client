import React from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div>
         <div className=' relative'>
            <input className='w-[100%] mx-auto p-2 outline-none border-gray-500  border-2  rounded-md' type="text" name="" id="" />
           <button className=' absolute right-3 top-1/4 text-myColor cursor-pointer hover:scale-110'>
           <FaSearch size={20} />
           </button>
         </div>
    </div>
  )
}

export default Search
