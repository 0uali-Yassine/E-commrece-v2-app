
import Footer from "./component/Footer";
import ProductDetails from "./component/ProductDetails";
import { useGlobalcontext } from "./Context";
import { IoIosStar } from "react-icons/io";
import TopMain from "./component/TopMain";
import Home from "./component/Home";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Forms from "./component/Forms";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiSquareRemove } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";


function App() {
  const {cartMenu,setCartMenu,cartData,deleteItem,isOpen,setIsOpen,setSeeProduct} = useGlobalcontext();

 

  return (
    <div className="select-none font scroll-smooth relative">

      <BrowserRouter>
        <Home/>
        <Routes>
          <Route path="/" element={<TopMain/>}/>
          <Route path="/account" element={<Forms/>}/>
          <Route path="/product-details" element={<ProductDetails/>}/>
        </Routes>
        <Footer/>
        {
          cartMenu && <div className="bag  bg-gray-400 w-[100vw] h-[100vh] fixed top-0" onClick={()=> setCartMenu(false)}>
                      <div className={`w-[300px] h-[100vh]   bg-white fixed top-0 transform transition-transform duration-300 ${
                          cartMenu ? 'right-0' : 'right-[-200px]'} p-[10px]`}  onClick={(e) => e.stopPropagation()}>
                        <h1 className="text-center text-[16px] font_Logo font-bold underline underline-offset-8">Your Bag</h1>
                        <div className=" w-[300px] h-[100vh] pr-[19px] overflow-y-auto">
                            {
                              cartData.cart.length  <= 0 ? <h1 className="text-center text-[15px] mt-[10px] text-[#EF5A6F]">Your bag is Empty</h1>: cartData.cart.map(itm => {
                                const {image,name,id,start,price,nb} = itm;
                                return <div key={id} className="w-full h-[80px] mt-[5px] mb-[10px] flex gap-[10px] pr-[10px] bg-gray-50">
                                        <img src={image} alt={`product-${name}`} className="w-[100px] object-cover"/>
                                        <div className="flex flex-1 flex-col justify-between">
                                          <div className="flex flex-col gap-[5px]">
                                            <h1 className="text-[#EF5A6F]">{name}</h1>
                                            <div className="flex gap-[2px]">
                                              {
                                                  Array.from({ length: start }, (_, index) => (
                                                    <IoIosStar key={index} size={10} className='text-yellow-500' />
                                                  ))
                                                }
                                            </div>
                                          </div>
                                          <div className="flex justify-between items-center">
                                            <h1 className="text-red-400">${price} <span className="text-gray-400">* {nb}</span></h1>
                                            <button className="text-white text-[14px] bg-red-400 w-[centent-fit] px-[8px] py-[3px] rounded-sm" onClick={()=> deleteItem(id)}>Delete</button>
                                          </div>
                                        </div>
                                      </div>
                              })
                            }
                        </div>
                        <div className="absolute flex justify-around bag z-10 bottom-0 bg-slate-400 w-full font-semibold">
                          <h1 className="font-semibold">TOTAL:</h1>
                          <span className="text-red-400">${cartData.total.toFixed(2)}</span>
                        </div>

                      </div>
                    </div>
        }

        {
          isOpen && <div className="menu fixed top-0 w-full h-[100vh] bg-gray-400" onClick={()=> setIsOpen(false)}>
                <div className="w-[300px] relative flex flex-col bg-red-200 border p-[15px] h-[100vh]" >
                      <CiSquareRemove size={30} onClick={()=> setIsOpen(false)} className="absolute right-2 top-0 cursor-pointer"/>
                      <div className=' flex flex-col  gap-[15px] mt-[20px]'>
                        <NavLink to='/account' onClick={()=> setSeeProduct(true)} className='flex items-center gap-[5px] hover:underline cursor-pointer'>
                          <FaUser/>
                          <h1 className='text-[14px]'>Account</h1>
                        </NavLink>
                        <div className='flex items-center gap-[5px] hover:underline cursor-pointer relative ' onClick={()=> setCartMenu(true)}>
                          <IoCart/>
                          <h1 className='text-[14px]'>Shopping</h1>
                          <div className='absolute top-[-6px] flex justify-center items-center  left-[4px] w-[17px] h-[17px] bg-red-400 rounded-[50%]  text-[12px]  text-white'>{cartData.nbCart}</div>
                        </div>
                    </div>
                </div>
          </div>
        }

        <ToastContainer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
