import React from 'react';
import './Product.css';

const Product = ({product,addToCart}) => {
    const { img, name, seller, ratings, price } = product;
    return (
        <div className='product'>
            <img  src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>price:${price}</h4>
                <p>Seller:{seller}</p>
                <p>Ratings:{ratings} star</p>
            </div>
                <button onClick={()=>addToCart(product)} className='cart-btn'>Add to cart</button>
        </div>
    );
};

export default Product;