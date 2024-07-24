import React,{useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobalcontext } from '../Context';
import { IoEyeOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

function BestSellers() {
    const {AllData,productDetails} = useGlobalcontext();
    const [bestSelleres,setBestSelleres] = useState([]);

  

    useEffect(()=>{
      setBestSelleres(AllData.filter(dt => dt.bestSeller));
    },[AllData]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
        <section className='mt-[20px] overflow-hidden w-[80%] m-auto'>
            <h1 className='text-center text-[20px] font-medium'>Best Sellers</h1>
            <p className='text-[15px] text-center mt-[10px] mb-[15px] text-gray-500 w-[80%] m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellendus labore molestias, sint beatae odio, minima tenetur doloremque fugit, ratione quis veniam ipsam obcaecati corporis facilis excepturi corrupti laboriosam quaerat.</p>
            <div className="slider-container  h-[350px] cursor-grab">
                <Slider {...settings} className='h-[350px]'>
                    {
                    bestSelleres?.map(dt => {
                            const {image,name,id,start,category,price} = dt;
                            return <NavLink to="/product-details" key={id} className='h-[350px] group relative slick-slide' onClick={()=> productDetails(dt)}>
                                      <div className='w-full h-[280px] overflow-hidden'>
                                          <img src={image} key={id} alt={`product-${id}`} className='w-full h-full object-cover transition ease-in-out delay-150 group-hover:blur-sm group-hover:cursor-pointer'/>
                                      </div>
                                          <h1 className='text-[15px] font-medium mt-[5px]'>{name}</h1>
                                          <div className='flex justify-between'>
                                          <h1 className='text-[14px]  text-gray-500'>{category}</h1>
                                          <h1 className='text-[13px] font-bold'>${price}</h1>
                                          </div>
                                      {
                                        start == 4 && <div className='w-[content-fit] group-hover:blur-sm h-[20px] bg-red-400 absolute top-5   px-[9px] text-center text-white text-[13px]'>Hot</div>
                                      }
                                      <IoEyeOutline size={30} className='text-red-500 hidden group-hover:block absolute top-[32%] left-[42%]'/>
                                    </NavLink>
                    })
                    }
                </Slider>
            </div>
      </section>
  )
}

export default BestSellers;