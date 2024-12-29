"use client"

import React, {useState, useEffect} from 'react'
import "./topBar.css"

export default function TopBar() {
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
    <div 
    id="topbar"
    className={`d-flex align-items-center fixed-top ${scroll > 100 ? 'topbar-scrolled' : undefined}`}>
        <div className="container d-flex justify-content-lg-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
                <i className='bi bi-phone d-flex align-items-center'>
                    <span>+91 750 650 1271</span>
                </i>
                <i className='bi bi-mail d-flex align-items-center'>
                    <span>abc@ams.co.in</span>
                </i>
            </div>
        </div>
    </div>
    )
}
