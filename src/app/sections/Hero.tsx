import React from 'react'
import heroImage from "../../../assets/images/hero-medical-services.png";
import './hero.css'

export default function Hero() {
  return (
    <div id='hero' className='d-flex align-items-center'>
    <div 
      className="container text-center text-lg-start"
      data-aos="zoom-in"
      data-aos-delay="100">
      <div className="row d-flex justify-content-center gap-5">
        <div className="col-lg-4">
          <h1 className="display-5 fw-bold lh-1 mt-5 mb-3">Best medical services near you</h1>
          <p className="">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          {/* <div className="btns">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
          </div> */}
        </div>
        <div className="col-lg-7">
          <img src="assets\images\homepage\hero-medical-services.png" className="d-flex mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
      </div>
    </div>
    </div>
  );
}
