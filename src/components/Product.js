/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { product } from '../data';
const Product = () => {
  return (
    <>
        <section className='products' id='products'>
            <h1 className='heading'>OUR <span>POPULAR</span> PRODUCTS</h1>
            <div className='box-container'>
                {
                    product.map((item) => (
                        <div className='box' key={item.id}>
                            <div className='icons'>
                                <a href="#" className='fas fa-shopping-cart'></a>
                                <a href="#" className='fas fa-heart'></a>
                                <a href="#" className='fas fa-eye'></a>
                            </div>
                            <div className='image'>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='content'>
                                <h3>{item.name}</h3>
                                <div className='stars'>
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star-half-alt' />
                                </div>
                                <div className='price'>{item.price} <span>{item.mrp}</span></div>
                            </div>
                        </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Product;