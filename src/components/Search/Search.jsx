import React from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div>
         <div className=' relative'>
            <input className='w-[100%] mx-auto p-2 outline-none  border-2 mt-2 rounded-md' type="text" name="" id="" />
           <button className=' absolute right-3 top-[40%] text-myColor'>
           <FaSearch size={20} />
           </button>
         </div>
    </div>
  )
}

export default Search
