import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [cartItem,setCartItem]=useState([])
    const addToCart=(product)=>{
        const newCartItem=[...cartItem,product];
        console.log(newCartItem);
        setCartItem(newCartItem)
    }
     const [products, setProducts] = useState([]);
     useEffect(() => {
       fetch("products.json").then(res=>res.json()).then(data=>setProducts(data))
     }, []);
    return (
      <div className="shop">
        <div className="products-container">
          <Products products={products} addToCart={addToCart} />
        </div>
        <div className="cart-container">
          <h2>Order Summary</h2>
          <p>Selected Items:{cartItem.length}</p>
        </div>
      </div>
    );
};

export default Shop;