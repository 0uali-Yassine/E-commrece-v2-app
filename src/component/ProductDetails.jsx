import React, { useEffect } from 'react';
import { IoIosStar } from "react-icons/io";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { useGlobalcontext } from '../Context';
import { IoCart } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';


function ProductDetails() {
    const {product,addToCart,setNbProduct,setSeeProduct} = useGlobalcontext();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const backTostore = ()=>{
        setSeeProduct(false);
        setNbProduct(1);
    }

  return (
    <div className='w-[80%] m-auto mt-[25px]'>
        <div className='flex mb-[20px] justify-between '>
         <h1 className=''>Home <span className='font-bold'>/ shop</span></h1>
         <NavLink to='/'>
            <h1 className='font-bold underline cursor-pointer hover:text-[#EF5A6F]' onClick={ backTostore}>Back to store</h1>
         </NavLink>
        </div>
        <div className='flex gap-[10px]'>
            <InnerImageZoom  src={product.image} zoomSrc={product.image} alt="" className='w-[320px] h-[420px]  object-coveR rounded-sm' />
            <article className='flex flex-col justify-between w-[300px] mt-[-11px]'>
                <div>
                    <h1 className='text-[#EF5A6F] font-medium text-[30px]'>{product.name}</h1>
                    <h1 className='text-[14px] text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ut? Mollitia voluptate asperiores esse quae sequi vel possimus unde earum aliquid ex obcaecati corporis dolore ipsum, accusantium assumenda dicta laudantium!</h1>
                    <div className='flex gap-[5px]'>
                    {   Array.from({ length: product.start }, (_, index) => (
                            <IoIosStar key={index} size={20} className='text-yellow-500' />
                        ))
                    }
                    </div>
                    <h1 className='text-[#EF5A6F] font-semibold mt-[5px]'>${product.price}</h1>
                </div>

                <div className='flex flex-col gap-[10px] mb-[10px]'>
                    <h1 className='font-bold'>Quantity</h1>
                    <h1 className='text-[12px] text-gray-500 '>quantity must under 8 article</h1>
                    <input type="number" className='outline-[#EF5A6F] w-[200px] px-[5px] border rounded-sm' onChange={(e)=> setNbProduct(e.target.value)} defaultValue={1} min={1} max={8}/>
                    <button className='flex gap-[5px] justify-center items-center bg-[#EF5A6F] hover:bg-[#f71936] w-[200px]  px-[10px] py-[5px] text-[15px] text-white rounded-sm' onClick={()=> addToCart(product)}>Add To Cart<IoCart size={20} className='text-white'/></button>
                </div>
            </article>
        </div>
        <div className='flex flex-col gap-[10px] mt-[10px]'>
            <div className='flex flex-col gap-[3px]'>
                <h1 className='font-medium'>Details</h1>
                <p className='text-gray-500 text-[15px]'>{product.details}</p>
            </div>
            <div className='flex flex-col gap-[3px]'>
                <h1 className='font-medium'>Description</h1>
                <p className='text-gray-500 text-[15px]'>{product.Bigdescription}</p>
            </div>
            <div className='flex flex-col gap-[3px]'>
                <h1 className='font-medium'>Highlights</h1>
                <ul className='text-gray-500 text-[15px]'>
                    {
                        product.Hilightes.map((text,index) =>{
                           return <li key={index}>{text}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails;