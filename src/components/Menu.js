import React from 'react';
import { menu } from "../data";

const Menu = () => {
  return (
    <>
        <section className='menu' id='menu'>
            <h1 className='heading'>OUR <span>MENU</span></h1>
            <div className='box-container'>
                {
                    menu.map((item) => (
                        <div  className='box' key={item.id}>
                            <img src={item.img} alt="" />
                            <h3>{item.name}</h3>
                            <div className='price'>{item.price} <span>{item.mrp}</span></div>
                            <button className='btn'>ADD TO CART</button>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Menu;