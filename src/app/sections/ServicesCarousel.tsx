import React from 'react'
import './servicesCarousel.css'
import Carousel from '../components/Carousel';

export default function ServicesCarousel() {
  return (
    <section>
        <div className='container' data-aos="fade-up">
            <div className="row">
                <div className='serviceCarousel'>
                    <Carousel />
                </div>
            </div>
        </div>
    </section>
  )
}
