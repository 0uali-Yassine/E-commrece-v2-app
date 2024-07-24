import React, { useEffect } from 'react';
import Main from "./Main";
import BestSellers from "./BestSellers";
import instaImages5 from '../assests/images/05.png'
import instaImages6 from '../assests/images/06.png'
import instaImages7 from '../assests/images/07.png'
import instaImages8 from '../assests/images/08.png'
import instaImages9 from '../assests/images/09.png'
import { toast } from 'react-toastify';

function TopMain() {
  const info = ()=>{
    toast.warn('Will Added SOOON!!');
  }
  return (
    <div>
      <Main/>
      <section className='zaraSection bg-section w-full mt-[40px] mb-[40px] h-[370px] flex justify-end items-center p-[200px]'>
        <div className=''>
          <h1 className='font_Logo text-[40px] text-white'>ZARA</h1>
          <p className='text-white text-[13px] mt-[10px] mb-[10px] '>Lustrous Yet Understated. The New Evening <br /> Wear Collection Excucively Offered At The  <br />
            Reopened Giorgio Armani Boutique In Los <br /> Angeles.
          </p>
          <button onClick={info} className='bg-white text-center w-[content-fit] px-[9px] py-[4px] hover:bg-[#EF5A6F]'>See Collection</button>
        </div>
      </section>
      <BestSellers/>
      <section className="sectoinInsta w-full h-[334px] bg-gray-100 p-[40px] mt-[40px]">
        <h1 className="text-center text-[20px] font-medium">Follow Products And Discounts On Instagram</h1>
        <div className="instaImg flex gap-[10px]  justify-center w-[60%] m-auto mt-[10px] mb-[20px]">
          <img src={instaImages5} alt='instagramImage' className="w-[100px] h-[100px] object-cover"/>
          <img src={instaImages6} alt='instagramImage' className="w-[100px] h-[100px] object-cover"/>
          <img src={instaImages7} alt='instagramImage' className="w-[100px] h-[100px] object-cover"/>
          <img src={instaImages8} alt='instagramImage' className="w-[100px] h-[100px] object-cover"/>
          <img src={instaImages9} alt='instagramImage' className="w-[100px] h-[100px] object-cover"/>
        </div>
        <div className="sectionInstaForm flex flex-col gap-[10px] w-[30%]  m-auto">
          <h1 className="text-center text-[20px] font-medium">Or Subscribe To The Newsletter</h1>
          <form className="flex justify-between">
            <input type="email" placeholder="Email Address..." className="w-[300px] caret-[#EF5A6F] border-b-2 p-[5px] bg-transparent  outline-none border-black" required/>
            <button className="border-b-2 border-black text-[14px] px-[5px]">SUBMIT</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default TopMain;