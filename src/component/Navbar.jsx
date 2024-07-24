import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoIosSquareOutline } from "react-icons/io";
import { useGlobalcontext } from '../Context';
import { NavLink } from 'react-router-dom';
import { RiMenu4Line } from 'react-icons/ri';

function Navbar() {
  const {cartData,setCartMenu,setSeeProduct,setIsOpen} = useGlobalcontext();
  const [showSearch,setShowSearch] = useState(false);
  return (
    <nav className='bgNav flex justify-between items-center p-[10px] w-[80%] m-auto font  border-b-[1px]'>
      <div className='flex gap-[5px] items-center relative'>
        <IoSearchOutline size={25} onClick={()=> setShowSearch(prev => !prev)}/>
        <input type="text" className={`absolute caret-[#EF5A6F] left-10 text-[14px] border bg-transparent outline-none ${showSearch ? 'block':'hidden'}`} placeholder='items...' />
      </div>
      
      <NavLink to='/' className='flex gap-[8px] items-center cursor-pointer' onClick={()=>{setSeeProduct(false);}}>
        <div className='flex  items-center justify-center'>
          <IoIosSquareOutline size={15} className='text-black rotate-45 translate-x-4'/>
          <IoIosSquareOutline size={15} className='text-black rotate-45 translate-x-2'/>
          <IoIosSquareOutline size={15} className='text-black rotate-45'/>
        </div>
        <h1 className='font_Logo text-[20px]'>CORAL</h1>
        <div className='flex  items-center justify-center'>
          <IoIosSquareOutline size={15} className='text-black rotate-45 translate-x-4'/>
          <IoIosSquareOutline size={15} className='text-black rotate-45 translate-x-2'/>
          <IoIosSquareOutline size={15} className='text-black rotate-45'/>
        </div>
      </NavLink>

      <div className='account_shopping flex items-center gap-[10px]'>
        <NavLink to='/account' onClick={()=> setSeeProduct(true)} className='flex items-center gap-[5px] cursor-pointer'>
          <FaUser/>
          <h1 className='text-[14px]'>Account</h1>
        </NavLink>
        <div className='flex items-center gap-[5px] cursor-pointer relative ' onClick={()=> setCartMenu(true)}>
          <IoCart/>
          <h1 className='text-[14px]'>Shopping</h1>
          <div className='absolute top-[-6px] flex justify-center items-center  left-[4px] w-[17px] h-[17px] bg-red-400 rounded-[50%]  text-[12px]  text-white'>{cartData.nbCart}</div>
        </div>
      </div>
      <RiMenu4Line size={30} className='hidden menuBar cursor-pointer' onClick={()=> setIsOpen(true)}/>
    </nav>
  )
}

export default Navbar;