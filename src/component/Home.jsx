import React from 'react'
import { useGlobalcontext } from '../Context';
import Navbar from './Navbar';
import Header from './Header';

function Home() {
    const {seeProduct} = useGlobalcontext();
  return (
    <div className={`bgheader ${!seeProduct && "bg-gray-100"} relative`}>
        <Navbar/>
        {
          !seeProduct && <Header/>
        }
    </div>
  )
}

export default Home;