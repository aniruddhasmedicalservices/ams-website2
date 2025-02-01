import React from 'react'
import { ourPartnersImages } from "../data/data";
import './ourPartners.css'

export default function OurPartners() {
  return (
    
    <section className='container'>  
        <div>
            <div>
                <h2 className='mb-3'>Our Partners</h2>
            </div>
            <div className='ourPartners'>
                <div className="row slider">
                    <div className="slide-track">
                        {ourPartnersImages.map((item) => (
                            <div className="slide">
                                <img src={item.imageUrl} height="100" alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
