import React, { useState } from 'react';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      
      name: 'IPHONE',
      cost: 19.99,
      image:
        'https://m.media-amazon.com/images/I/61IJBsHm97L._SX522_.jpg',
    },
 
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };



  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" >
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button style={{fontSize:'30px'}} onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

