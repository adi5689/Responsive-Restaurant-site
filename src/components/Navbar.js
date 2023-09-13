/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import Logo from '../assets/images/logoF.png';
import 'font-awesome/css/font-awesome.min.css';
import { cart1 } from '../data';


const Navbar = () => {
    const searchRef = useRef();

    const searchHandler = () => {
        // for search bar functionality
        searchRef.current.classList.toggle("active");
        cartRef.current.classList.remove("active");
        navbarRef.current.classList.remove("active");
    };

    const cartRef = useRef();
    const cartHandler = () => {
        cartRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        navbarRef.current.classList.remove("active");
    };

    const navbarRef = useRef();
    const navbarHandler = () => {
        navbarRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        cartRef.current.classList.remove("active");

    };

    
    
  return (
    <>
        <header className="header">
            <a href="#" className="logo">
                <img src={Logo} alt="" />
            </a>
            <nav className='navbar' ref={navbarRef}>
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#products">products</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
                <a href="#blogs">blogs</a>
            </nav>
            <div className='icons'>
                <div className='fas fa-search' onClick={searchHandler}></div>
                <div className='fas fa-shopping-cart' onClick={cartHandler}></div>
                <div className='fas fa-bars' id='menu-btn' onClick={navbarHandler}></div>
            </div>
            <div className="search-form" ref={searchRef}>
                <input type="search" placeholder='Search here....' id='search-box'/>
                <label htmlFor="search-box" className='fas fa-search'></label>
            </div>
            <div className='cart-item-container' ref={cartRef}>
                {cart1.map((item) => (
                    <div className='cart-item' key={item.id}>
                        <span className='fas fa-times'></span>
                        <img src={item.img} alt="" />
                        <div className='content'>
                            <h3>{item.name}</h3>
                            <div className='price'>{item.price}</div>
                        </div>
                    </div>
                ))}
                <button className='btn'><span>Checkout</span></button>
                {/* <a href="#" className='btn'>CheckOut Now</a> */}
            </div>
        </header>
    </>
  )
}

export default Navbar;