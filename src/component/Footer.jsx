import React, { useEffect } from 'react'
import { IoIosSquareOutline } from 'react-icons/io';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footerImg from '../assests/images/footerOne.png';
import { useGlobalcontext } from '../Context';
import { NavLink } from 'react-router-dom';

function Footer() {
  const {setCategory,setSeeProduct} = useGlobalcontext();
  
  const changeCategory = ()=>{
    setSeeProduct(false);

  }
  
  

  return (
    <div className=''>
      <div className='footer flex justify-between px-[100px] py-[40px]'>
        <ul className='w-[340px] flex flex-col gap-[10px] items-start'>
          <li>
            <div className='footerLogo flex gap-[8px] items-center'>
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
            </div>
          </li>
          <li className='text-gray-500 ml-[10px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae aliquam cumque libero incidunt quos tempora praesentium id voluptates quia. Accusamus?
          </li>
          <li className='footerSocial flex gap-[7px] ml-[10px]'>
            <FaFacebookF />
            <FaXTwitter/>
            <FaLinkedinIn/>
            <FaInstagram/>
          </li>
        </ul>

        <ul>
          <li className='font-bold text-[15px] font_Logo'>CATALOG</li>
          
          <NavLink to='/' onClick={()=>{  setCategory('All Products');changeCategory()}}>
           <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium' ><a href='#products'>All Products</a></li>
          </NavLink>
          <NavLink to='/' onClick={()=>{  setCategory('T-shirt');changeCategory()}}>
            <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'><a href='#products'>T-shirt</a></li>
          </NavLink>
          <NavLink to='/' onClick={()=>{  setCategory('Hoodies');changeCategory()}}>
            <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'><a href='#products'>Hoodies</a></li>
          </NavLink>
          <NavLink to='/' onClick={()=>{  setCategory('Cap');changeCategory()}}>
            <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'><a href='#products'>Cap</a></li>
          </NavLink>
          <NavLink to='/' onClick={()=>{  setCategory('Bag');changeCategory()}}>
            <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'><a href='#products'>Bag</a></li>
          </NavLink>
          <NavLink to='/' onClick={()=>{  setCategory('Shoes');changeCategory()}}>
            <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'><a href='#products'>Shoes</a></li>
          </NavLink>
          <NavLink to='/' onClick={()=>{  setCategory('Dress');changeCategory()}}>
            <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'><a href='#products'>Dress</a></li>
          </NavLink>
          <NavLink to='/' onClick={()=>{  setCategory('Glasses');changeCategory()}}>
            <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'><a href='#products'>Glasses</a></li>
          </NavLink>
        </ul>

        <ul>
          <li className='font-bold text-[15px] font_Logo'>ABOUT US</li>
          <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'>Our Producers</li>
          <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'>Sitemap</li>
          <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'>FAQ</li>
          <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'>About Us</li>
          <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'>Trems & Conditions</li>
        </ul>

        <ul>
          <li className='font-bold text-[15px] font_Logo'>CUSTOMER SERVICES</li>
          <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'>Contact Us</li>
          <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'>Track Your Order</li>
          <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'>Product Care 1 Repair</li>
          <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'>Book An Appointment</li>
          <li className='text-gray-600 text-[14px] hover:text-black hover:font-medium'>Shipping & Returns</li>
        </ul>

      </div>
      <img src={footerImg} alt="" />
    </div>
  )
}

export default Footer;