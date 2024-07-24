import React from 'react';
import { IoCart } from "react-icons/io5";
import headerImage from '../assests/images/19.png';
import { toast } from 'react-toastify';

function Header() {

  const info = ()=>{
    toast.warn('Will Added SOOON!!');
  }
  return (
    <div className='w-[80%] m-auto mt-[20px]'>
      <nav className='nav flex gap-[5px] justify-between'>
        <button onClick={info} className='text-[15px] hover:font-medium hover:text-[#EF5A6F] w-[190px]'>Jewerly & Accessories</button>
        <button className='text-[15px] hover:font-medium hover:text-[#EF5A6F] w-[150px]'><a href='#products'>Clothing & Shoes</a></button>
        <button className='text-[15px] hover:font-medium hover:text-[#EF5A6F] w-[150px]'><a href='#products'>Home & Living</a></button>
        <button onClick={info} className='text-[15px] hover:font-medium hover:text-[#EF5A6F] w-[150px]'>Wedding a Party</button>
        <button onClick={info} className='text-[15px] hover:font-medium hover:text-[#EF5A6F] w-[190px]'>Toys & Entertainment</button>
        <button onClick={info} className='text-[15px] hover:font-medium hover:text-[#EF5A6F] w-[150px]'>Art & Collectibles</button>
        <button onClick={info} className='text-[15px] hover:font-medium hover:text-[#EF5A6F] w-[190px]'>Cradt Supplies & Tools</button>
      </nav>

      <div className='header flex justify-between mt-[40px] w-[90%] pb-[40px]'>
        <section className='headerSectionPara flex flex-col justify-evenly'>
          <h1 className='font_Logo text-[46px] font-medium'>Collections</h1>
          <p className='font-medium leading-8'>You Can Explore And Shop Many Different Collection
            <br />
            From Various Brands Here.
          </p>
          <a href='#products' className='headerSectionBtn'>
            <button className='flex justify-center items-center gap-[5px] hover:bg-[#EF5A6F] w-[120px] py-[8px] px-[5px] border bg-[#5C5470] text-[15px] text-white cursor-pointer'>
              <IoCart size={20} className='text-white'/>
              Shop Now
            </button>
          </a>
        </section>
        <section>
          <div className='headerImg w-[230px] h-[320px] border border-gray-400 rounded-tl-[40%] rounded-br-[40%] mt-[20px]'>
            <img src={headerImage} alt="headerImage" className='rounded-tl-[40%] rounded-br-[40%] translate-x-[-15px] translate-y-[-30px]' />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Header;