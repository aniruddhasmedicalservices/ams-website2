'use client'

import React, {useState, useEffect} from 'react'
import "./header.css"
import Nav from './Nav';

export default function Header() {

  const [scroll, setScroll] = useState(0);
  
  useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        }
    },[scroll]);

  return (
    <header 
      id='header'
      className={`fixed-top d-flex align-items-center ${scroll > 100 ? 'header-scrolled' : undefined}`}
    >
      <div className='container-fluid container-xl d-flex align-items-center justify-content-lg-between'>
        <div className='logo me-auto me-lg-0'>
          <h1><a href="/">AMS</a></h1>
          {/* Add logo here */}
        </div>
        <Nav />
      </div>
    </header>
  )
}
