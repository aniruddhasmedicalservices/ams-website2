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
        <div className="container d-flex justify-content flex-row-reverse justify-content-md-between">
            <div className='container-fluid container-xl d-flex justify-content-around'>
                <div className='logo'>
                    <img src="assets/images/logo.png" height={100} alt="ams logo" />
                </div>
                <div className='logo'>
                    <img src="assets/images/logo2.png" height={100} alt="ams logo" />
                </div>
                <div className='logo'>
                    <img src="assets/images/bapu.png" height={100} alt="ams logo" />
                </div>
            </div>
        </div>
    </div>
    )
}
