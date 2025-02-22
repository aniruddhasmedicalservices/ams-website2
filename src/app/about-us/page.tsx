import React from 'react'
import './about.css'

export default function About() {
  return (
    <section id='about' className='about'>
      <div className='container' data-aos="fade-up">
        <div className="row">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">About AMS <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="about-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="assets/images/about.png" data-holder-rendered="true" />
          </div>
        </div>
    </div>
    </section>
  )
}
