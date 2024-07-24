import React, { useEffect, useState } from 'react';
import brand1 from '../assests/brand/01.png'
import brand2 from '../assests/brand/02.png'
import brand3 from '../assests/brand/03.png'
import brand4 from '../assests/brand/04.png'
import brand5 from '../assests/brand/05.png'
import { CiFilter } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { useGlobalcontext } from '../Context';
import { motion} from "framer-motion";
import { NavLink } from 'react-router-dom';


function Main() {
  const {data,setCategory,category,productDetails,setData} = useGlobalcontext();
  const [filterValue,setFilterValue] = useState('high to low');

  const bigCart = [
        {
          "id": 16,
          "name": "Nice Drees",
          "description": "A comfortable Cap made of 100% cotton.",
          "Bigdescription": "Elevate your casual wardrobe with our Classic White Cotton T-Shirt. This essential piece is crafted from 100% high-quality cotton, ensuring a soft, breathable, and comfortable fit for everyday wear. Designed with a timeless silhouette, it features a crew neckline, short sleeves, and a relaxed fit that flatters all body types.",
          "category": "dress",
          "price": 120.99,
          "image": "https://images.pexels.com/photos/14344657/pexels-photo-14344657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "bestSeller":true,
          "start":4,
          "details":"Elevate your casual wardrobe with our Classic White Cotton T-Shirt. This essential piece is crafted from 100% high-quality cotton, ensuring a soft, breathable, and comfortable fit for everyday wear. Designed with a timeless silhouette,",
          "Hilightes":["A comfortable shoes made of 100% cotton.","A comfortable shoes made of 100% cotton.","A comfortable shoes made of 100% cotton."]
      },
      {
        "id": 18,
        "name": "Nice Drees",
        "description": "A comfortable Cap made of 100% cotton.",
        "Bigdescription": "Elevate your casual wardrobe with our Classic White Cotton T-Shirt. This essential piece is crafted from 100% high-quality cotton, ensuring a soft, breathable, and comfortable fit for everyday wear. Designed with a timeless silhouette, it features a crew neckline, short sleeves, and a relaxed fit that flatters all body types.",
        "category": "dress",
        "price": 440.99,
        "image": "https://images.pexels.com/photos/14344830/pexels-photo-14344830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "bestSeller":true,
        "start":4,
        "details":"Elevate your casual wardrobe with our Classic White Cotton T-Shirt. This essential piece is crafted from 100% high-quality cotton, ensuring a soft, breathable, and comfortable fit for everyday wear. Designed with a timeless silhouette,",
        "Hilightes":["A comfortable shoes made of 100% cotton.","A comfortable shoes made of 100% cotton.","A comfortable shoes made of 100% cotton."]
    },
    {
      "id": 19,
      "name": "Nice Drees",
      "description": "A comfortable Cap made of 100% cotton.",
      "Bigdescription": "Elevate your casual wardrobe with our Classic White Cotton T-Shirt. This essential piece is crafted from 100% high-quality cotton, ensuring a soft, breathable, and comfortable fit for everyday wear. Designed with a timeless silhouette, it features a crew neckline, short sleeves, and a relaxed fit that flatters all body types.",
      "category": "dress",
      "price": 340.99,
      "image": "https://images.pexels.com/photos/14344798/pexels-photo-14344798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "bestSeller":false,
      "start":3,
      "details":"Elevate your casual wardrobe with our Classic White Cotton T-Shirt. This essential piece is crafted from 100% high-quality cotton, ensuring a soft, breathable, and comfortable fit for everyday wear. Designed with a timeless silhouette,",
      "Hilightes":["A comfortable shoes made of 100% cotton.","A comfortable shoes made of 100% cotton.","A comfortable shoes made of 100% cotton."]
    },
    {
      "id": 20,
      "name": "Nice Drees",
      "description": "A comfortable Cap made of 100% cotton.",
      "Bigdescription": "Elevate your casual wardrobe with our Classic White Cotton T-Shirt. This essential piece is crafted from 100% high-quality cotton, ensuring a soft, breathable, and comfortable fit for everyday wear. Designed with a timeless silhouette, it features a crew neckline, short sleeves, and a relaxed fit that flatters all body types.",
      "category": "dress",
      "price": 240.99,
      "image": "https://images.pexels.com/photos/6232724/pexels-photo-6232724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "bestSeller":true,
      "start":4,
      "details":"Elevate your casual wardrobe with our Classic White Cotton T-Shirt. This essential piece is crafted from 100% high-quality cotton, ensuring a soft, breathable, and comfortable fit for everyday wear. Designed with a timeless silhouette,",
      "Hilightes":["A comfortable shoes made of 100% cotton.","A comfortable shoes made of 100% cotton.","A comfortable shoes made of 100% cotton."]
    },
    {
      "id": 21,
      "name": "Nice Drees",
      "description": "A comfortable Cap made of 100% cotton.",
      "Bigdescription": "Elevate your casual wardrobe with our Classic White Cotton T-Shirt. This essential piece is crafted from 100% high-quality cotton, ensuring a soft, breathable, and comfortable fit for everyday wear. Designed with a timeless silhouette, it features a crew neckline, short sleeves, and a relaxed fit that flatters all body types.",
      "category": "dress",
      "price": 240.99,
      "image": "https://images.pexels.com/photos/6207047/pexels-photo-6207047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "bestSeller":false,
      "start":2,
      "details":"Elevate your casual wardrobe with our Classic White Cotton T-Shirt. This essential piece is crafted from 100% high-quality cotton, ensuring a soft, breathable, and comfortable fit for everyday wear. Designed with a timeless silhouette,",
      "Hilightes":["A comfortable shoes made of 100% cotton.","A comfortable shoes made of 100% cotton.","A comfortable shoes made of 100% cotton."]
    },
  ]

  useEffect(()=>{
    let newSort = [...data].sort((a,b)=>{
      if (filterValue === "High to Low") {
        return b.price - a.price;
      }else if(filterValue === 'Low to High'){
        return a.price - b.price;
      }else if(filterValue === 'A-Z'){
        return a.name.localeCompare(b.name);
      }
    });

    setData(newSort);
  },[filterValue,JSON.stringify(data)]);




  return (
    <main className='main w-[80%] m-auto mt-[20px] relative'>
      <h1 className='font_Logo absolute font-medium text-[20px] rotate-[-90deg]  left-[-150px] top-[300px]'>EXPLORE NEW AND <br/> POPULAR STYLES</h1>
      <section  className='brand flex justify-between mt-[30px] mb-[30px]'>
        <img src={brand5} alt="brand_Logo" className='w-[130px]'/>
        <img src={brand1} alt="brand_Logo" className='w-[130px]'/>
        <img src={brand3} alt="brand_Logo" className='w-[130px]'/>
        <img src={brand2} alt="brand_Logo" className='w-[130px]'/>
        <img src={brand4} alt="brand_Logo" className='w-[130px]'/>
      </section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ease: "linear",duration: 2,x: { duration: 1 }}}  className='grid h-[550px] mt-[30px]   grid-cols-4 grid-rows-2 gap-2'>
        <NavLink to='/product-details' className='col-span-2 row-span-2  h-[550px] relative group overflow-hidden' onClick={()=> productDetails(bigCart[0])}>
            <img src="https://images.pexels.com/photos/14344657/pexels-photo-14344657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='hover:scale-[1.1] group-hover:blur-sm transition ease-in-out delay-150 h-full w-full object-cover'/>
            <IoEyeOutline size={30} className='text-red-500 hidden group-hover:block absolute top-[40%] left-[46%]'/>
        </NavLink>
        <NavLink to='/product-details' className='overflow-hidden relative group' onClick={()=> productDetails(bigCart[1])}>
          <img src="https://images.pexels.com/photos/14344830/pexels-photo-14344830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='hover:scale-[1.1] group-hover:blur-sm transition ease-in-out delay-150 w-full h-full object-cover' />
          <IoEyeOutline size={30} className='text-red-500 hidden group-hover:block absolute top-[42%] left-[44%]'/>
        </NavLink>
        <NavLink to='/product-details' className='overflow-hidden relative group' onClick={()=> productDetails(bigCart[2])}>
          <img src="https://images.pexels.com/photos/14344798/pexels-photo-14344798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='hover:scale-[1.1] group-hover:blur-sm transition ease-in-out delay-150 w-full h-full object-cover' />
          <IoEyeOutline size={30} className='text-red-500 hidden group-hover:block absolute  top-[42%] left-[44%]'/>
        </NavLink>
        <NavLink to='/product-details' className='overflow-hidden relative group' onClick={()=> productDetails(bigCart[3])}>
          <img src="https://images.pexels.com/photos/6232724/pexels-photo-6232724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='hover:scale-[1.1] group-hover:blur-sm transition ease-in-out delay-150 w-full h-full object-cover' />
          <IoEyeOutline size={30} className='text-red-500 hidden group-hover:block absolute  top-[42%] left-[44%]'/>
        </NavLink>
        <NavLink to='/product-details' className='overflow-hidden relative group' onClick={()=> productDetails(bigCart[4])}>
          <img src="https://images.pexels.com/photos/6207047/pexels-photo-6207047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='hover:scale-[1.1] group-hover:blur-sm transition ease-in-out delay-150 w-full h-full object-cover' />
          <IoEyeOutline size={30} className='text-red-500 hidden group-hover:block absolute  top-[42%] left-[44%]'/>
        </NavLink>
      </motion.section>

      <section id='products' className='mt-[20px]'>
        <h1 className='text-center text-[20px] font-medium'>Or Subscribe To The Newsletter</h1>
        <div  className='filterSection mt-[20px] flex justify-between'>
          <ul className='deepFilter flex justify-between gap-[15px]'>
            <li  className={`font-medium text-[14px] cursor-pointer ${category == 'All Products' ? 'text-black':'text-gray-500'}`} onClick={()=> setCategory('All Products')}>All Products</li>
            <li className={`font-medium text-[14px]  cursor-pointer ${category == 'T-shirt' ? 'text-black':'text-gray-500'}`} onClick={()=> setCategory('T-shirt')}>T-shirt</li>
            <li className={`font-medium text-[14px]  cursor-pointer ${category == 'Hoodies' ? 'text-black':'text-gray-500'}`} onClick={()=> setCategory('Hoodies')}>Hoodies</li>
            <li className={`font-medium text-[14px] cursor-pointer ${category == 'Cap' ? 'text-black':'text-gray-500'}`} onClick={()=> setCategory('Cap')}>Cap</li>
            <li className={`font-medium text-[14px]  cursor-pointer ${category == 'Bag' ? 'text-black':'text-gray-500'}`} onClick={()=> setCategory('Bag')}>Bag</li>
            <li className={`font-medium text-[14px]  cursor-pointer ${category == 'Shoes' ? 'text-black':'text-gray-500'}`} onClick={()=> setCategory('Shoes')}>Shoes</li>
            <li className={`font-medium text-[14px]  cursor-pointer ${category == 'Dress' ? 'text-black':'text-gray-500'}`} onClick={()=> setCategory('Dress')}>Dress</li>
            <li className={`font-medium  text-[14px] cursor-pointer ${category == 'Glasses' ? 'text-black':'text-gray-500'}`} onClick={()=> setCategory('Glasses')}>Glasses</li>
          </ul>
          <div className='filter flex items-center text-white gap-1 px-[10px] bg-black cursor-pointer'>
            <CiFilter className='text-white' size={19}/>
            <select name='filter' onChange={(e)=>setFilterValue(e.target.value)}  className='bg-black outline-none py-[1px] text-[15px]'>
              <option value="High to Low">High to Low</option>
              <option value="Low to High">Low to High</option>
              <option value="A-Z">A-Z</option>
            </select>
          </div>
        </div>

        <div className='grid justify-items-center mt-[10px] grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[10px]'>
          {
            data.map(dt => {
              const {image,id,name,price,category,bestSeller} = dt;
              return <NavLink to="/product-details" key={id} className='w-[210px] h-[350px] group relative cursor-pointer' onClick={()=> productDetails(dt)}>
                        <div className='w-full h-[280px] overflow-hidden'>
                          <img src={image} key={id} alt={`product-${id}`} className='w-full h-full object-cover transition ease-in-out delay-150 group-hover:blur-sm group-hover:scale-[1.5]'/>
                        </div>
                        <h1 className='text-[15px] font-medium mt-[5px]'>{name}</h1>
                        <div className='flex justify-between'>
                          <h1 className='text-[14px]  text-gray-500'>{category}</h1>
                          <h1 className='text-[13px] font-bold'>${price}</h1>
                        </div>
                        {
                          bestSeller &&  <div className='w-[content-fit] h-[20px] bg-red-400 absolute top-5 group-hover:blur-sm  px-[9px] text-center text-white text-[13px]'>Hot</div>
                        }

                          <IoEyeOutline size={30} className='text-red-500 hidden group-hover:block absolute top-[32%] left-[42%]'/>
                       
                      </NavLink>
            })
          }
        </div>
      </section>
    </main>
  )
}

export default Main;