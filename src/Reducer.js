
export function Reducer(cartData,action) {
  switch (action.type) {
    case 'add':
        const isExist = cartData.cart.findIndex(itm => itm.id === action.payload.item.id);
        if(isExist == -1){
            return {...cartData,nbCart:parseInt(cartData.nbCart)+1,cart:[...cartData.cart,{...action.payload.item,nb:parseInt(action.payload.nbProduct)}]};
        }else{
            const newCartData = cartData.cart.map((itm,index)=>
                index === isExist ? {...itm,nb: Math.min(itm.nb + parseInt(action.payload.nbProduct),8)} : itm
            )
            return {...cartData,cart:newCartData};
        }
    
    case 'result':
        let total = 0;
        let amount  = 0;

        cartData.cart.map(itm => {
                amount = itm.nb;
                total += itm.price*amount;
                return itm;
        })

        return {...cartData,amount,total};

    case 'delete':
        const newCart=  cartData.cart.filter(itm => itm.id !== action.payload);
        return {...cartData,cart:newCart};    
    default:
        return cartData;
  }
}

export default Reducer