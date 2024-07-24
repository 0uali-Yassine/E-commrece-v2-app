import React, { createContext, useEffect, useContext, useState, useReducer } from 'react';
import Reducer from './Reducer';
import { toast } from 'react-toastify';

const myContext = createContext();

const initiale = { 
  cart:[],
  amount:0,
  total:0,
  nbCart:0,
}
const useLocalStorage = ()=>{
  const getStorage = JSON.parse(localStorage.getItem('cart'));
  return getStorage ? getStorage : initiale;
}


const initialeProduct = {};
const useLocalStorageForProduct = ()=>{
  const getStorage = JSON.parse(localStorage.getItem('product'));
  return getStorage ? getStorage : initialeProduct;
}

const seeProduct = false;
const useLocalStorageForSeeProduct = ()=>{
  const getStorage = JSON.parse(localStorage.getItem('seeProduct'));
  return getStorage ? getStorage : seeProduct;
}

function Context({children}) {
  const [AllData,setAllData] = useState([]);
  const [nbProduct,setNbProduct] = useState(1);
  const [category,setCategory] = useState('All Products');
  const [data,setData] = useState(AllData);
  const [seeProduct,setSeeProduct] = useState(useLocalStorageForSeeProduct());
  const [product,setProduct] = useState(useLocalStorageForProduct());
  const [cartMenu,setCartMenu] = useState(false);
  const [cartData,dispatch] = useReducer(Reducer,useLocalStorage());
  const [isOpen,setIsOpen] = useState(false);

  const productDetails = (item)=>{
    setSeeProduct(true);
    setProduct(item);
    localStorage.setItem('product',JSON.stringify(item));
  }
  

  const addToCart = (item) =>{
    toast.success(`the ${item.name} is added!`);
    dispatch({type:'add',payload:{item,nbProduct}});
  }
  
  const deleteItem = (id)=>{
    toast.warn(`the product is removed!`);

    dispatch({type:'delete',payload:id});
  }

  useEffect(()=>{
    dispatch({type:'result'});
    let cartItems = 0;
    cartData.cart.map((_,index)=> cartItems += 1 );
    cartData.nbCart = cartItems;
  },[JSON.stringify(cartData.cart)]);

  

  useEffect(()=>{

    const selectCategory = (category)=>{
      switch (category) {
        case 'All Products':
          return setData(AllData);
        case 'T-shirt':
          return setData(AllData.filter(cat => cat.category === 'T-shirt'));
        case 'Hoodies':
          return setData(AllData.filter(cat => cat.category === 'hoodies'));
        case 'Cap':
          return setData(AllData.filter(cat => cat.category === 'Cap'));
        case 'Bag':
          return setData(AllData.filter(cat => cat.category == 'bag'));
        case 'Shoes':
          return setData(AllData.filter(cat => cat.category == 'shoes'));
        case 'Dress':
          return setData(AllData.filter(cat => cat.category === 'dress'));
        case 'Glasses':
          return setData(AllData.filter(cat => cat.category === 'glasses'));
      }
    }
    return selectCategory(category);
  },[category,AllData])


  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setAllData(data);
      } catch (error) {
        console.log(error.code);
      }
    }

     fetchData();
  },[]);

  useEffect(()=>{
    localStorage.setItem('seeProduct',JSON.stringify(seeProduct));
  },[seeProduct]);

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cartData));
  },[cartData]);

    // for menu when is falls within the specified range
    useEffect(() => {
      function handleResize() {
        const width = window.innerWidth;
        if (width >= 652 && width <= 1200) {
          setIsOpen(false);
        }
      }
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
  

  return (
    <myContext.Provider value={{AllData,setCategory,data,category,seeProduct,setSeeProduct,productDetails,product
      ,addToCart,cartData,setCartMenu,cartMenu,deleteItem,setNbProduct,nbProduct,setData
      ,setIsOpen,isOpen
    }}>
        {children}
    </myContext.Provider>
  )
}

export const useGlobalcontext = ()=>{
    return useContext(myContext);
}
export default Context;