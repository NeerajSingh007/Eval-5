import React from 'react';
import { useState } from 'react';

export default function Cart({ cart, setCart }) {
    
    const getCartTotal = () => {
        return cart.reduce(
          (sum, { quantity }) => sum + quantity++,
          0
        );
      };
    const [count,setCount] = useState(getCartTotal())
    
      

      const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * count,
      0
    );
  };

    const handlechange = ()=>{
        alert("success");

    }



  return (
    <>
      <h1>Cart</h1>
     
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
          <div> 
                <h3>{count}</h3>
                <button onClick={()=>setCount(count+1)}> + </button>
                <button onClick={()=>setCount(count-1)}> - </button>
                 </div>
            <img src={product.image} alt={product.name} />
           </div>
        ))}
      </div>

      <div>Total Cost: ${getTotalSum()}</div>
      <div>
        <button onClick={handlechange}> BUY </button>
      </div>
    </>
  );
}