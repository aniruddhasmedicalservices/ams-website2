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
      className={`fixed-top d-flex flex-column ${scroll > 100 ? 'header-scrolled' : undefined}`}
    >
      <div className='container-fluid navbar'>
        <div className='container-xl'>
          <Nav />
          <div className='d-flex flex-column'>
            <p><a href="tel:+917506501271">Contact us: +91 7506501271</a></p>
            <div className="d-flex mb-3">
                <a href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fab fa-google"></i>
                </a>
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fab fa-linkedin"></i>
                </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
