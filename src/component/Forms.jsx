import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';

function Forms() {
    const [isSignIn,setIsSignIn] = useState(false);

    const Info = (e)=>{
        e.preventDefault();
        toast.warn('The FireBase Not completed you can just see with LocalStorage')
    }
  return (
    <div className=' m-[40px] '>
        {
            !isSignIn ? <form action=""  className='flex flex-col bg-gray-100 p-[10px] gap-[10px] w-[300px] border m-auto'>
                    <h1 className='text-center font-medium'>Sign Up</h1>
                    <div className='flex flex-col gap-[5px]'>
                        <label htmlFor="username" className='text-[15px] font-medium'>UserName:</label>
                        <input id='username' type="text" className='border outline-none text-[14px] px-[7px] py-[3px]' placeholder='Jhonn...' />
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <label htmlFor="email" className='text-[15px] font-medium'>Email:</label>
                        <input id='email' type="email" className='border outline-none text-[14px] px-[7px] py-[3px]' placeholder='example@gmail.com...' required/>
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <label htmlFor="password" className='text-[15px] font-medium'>Password:</label>
                        <input id='password' type="password" className='border outline-none text-[14px] px-[7px] py-[3px]' placeholder='*******' required/>
                    </div>
                    <div className='flex  gap-[5px]'>
                        <label htmlFor="remember" className='text-[15px] font-medium'>Remember me</label>
                        <input id='remember' type="checkbox"/>
                    </div>
                    <button onClick={e => Info(e)} className='bg-[#5C5470] text-white py-[7px] hover:bg-[#5c5470ce]'>Sign Up</button>
                    <FcGoogle size={30} className='m-auto'/>
                    <h1 className='text-center text-[14px]'>You have Account? <span onClick={()=> setIsSignIn(true)} className='text-blue-500'>Sign in</span></h1>
             </form> : <form action="" className='flex flex-col bg-gray-100 p-[10px] gap-[10px] w-[300px] border m-auto'>
                        <h1 className='text-center font-medium'>Sign In</h1>
                            <div className='flex flex-col gap-[5px]'>
                                <label htmlFor="email" className='text-[15px] font-medium'>Email:</label>
                                <input id='email' type="text" className='border outline-none text-[14px] px-[7px] py-[3px]' placeholder='email...' required/>
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <label htmlFor="password" className='text-[15px] font-medium'>Password:</label>
                                <input id='password' type="password" className='border outline-none text-[14px] px-[7px] py-[3px]' placeholder='*******' required/>
                            </div>
                            <button onClick={e => Info(e)} className='bg-[#5C5470] text-white py-[7px] hover:bg-[#5c5470ce]'>Sign In</button>
                            <h1 className='text-center text-[14px]'>You have Not Account? <span onClick={()=> setIsSignIn(false)} className='text-blue-500'>Sign Up</span></h1>
            
                    </form>
        }
        

        
    </div>
  )
}

export default Forms;