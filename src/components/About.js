import React from 'react';
import Img from '../assets/images/img1.png';

const About = () => {
  return (
    <>
    <section className='about' id='about'>
        <h1 className='heading'><span>ABOUT </span> US</h1>
        <div className='row'>
            <div className='image'>
                <img src={Img} alt="" />
            </div>
            <div className='content'>
                <h3>What Makes Our Food Special?</h3>
                <p>
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?
                    Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur Obcaecati Sapiente?
                </p>
                <button className='btn'>Learn More</button>

            </div>
        </div>
    </section>


    </>
  )
}

export default About;