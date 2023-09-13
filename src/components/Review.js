import React from 'react';
import { review } from '../data';
import Img2 from '../assets/images/download (1).png';

const Review = () => {
  return (
    <>
        <section className='review' id='review'>
            <h1 className='heading'>Customer's <span>review</span></h1>
            <div className='box-container'>
              {
                review.map((item) => (
                  <div className='box' key={item.id}>
                    <img src={Img2} alt="" className='quote' />
                    <p>{item.para}</p>
                    <img src={item.img} alt=""  className='user'/>
                    <h3>{item.name}</h3>
                    <div className='stars'>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star-half-alt'/>
                    </div>
                  </div>
                  
                ))
              }
            </div>
        </section>
    </>
  )
}

export default Review;