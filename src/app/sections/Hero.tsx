import React from 'react'
import heroImage from "../../../assets/images/hero-medical-services.png";
import './hero.css'

export default function Hero() {
  return (
    <div id='hero' className=''>
    <div 
      className="container text-center text-lg-start"
      data-aos="zoom-in"
      data-aos-delay="100">
      <div className="row d-flex flex-column justify-content-center gap-5">
        <div>
          <h2 className="display-5 fw-bold lh-1">We describe ourselves through this image</h2>
          <img src="assets\images\homepage\hero-medical-services.png" className="d-flex mx-lg-auto img-fluid" alt="Our services" width="700" height="500" loading="lazy" />
        </div>  
      </div>
    </div>
    </div>
  );
}
