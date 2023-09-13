/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { blog } from '../data';

const Blogs = () => {
  return (
    <>
        <section className='blogs' id='blogs'>
            <h1 className='heading'>OUR <span>BLOG's</span></h1>
            <div className='box-container'>
                 {
                    blog.map((item) => (
                        <div className='box' key={item.id}>
                            <div className='image'>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='content'>
                                <a href="#" className='title'>{item.title}</a>
                                <span>{item.wd}</span>
                                <p>{item.para}</p>
                                <a href="#" className='btn'>Read More</a>
                            </div>
                        </div>
                    ))
                 }
            </div>
        </section>
    </>
  )
}

export default Blogs;