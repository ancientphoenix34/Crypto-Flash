import React from 'react'
import './Navbar.css'
import logo from  '../../assets/bitcoin.png'
import arrow from '../../assets/right-arrow.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left-nav'><img src={logo} alt="" className='logoPic'/>
        </div>
        <ul>
            <li>Home</li>
            <li>Feature</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select>
               <option value="usd">USD</option>
               <option value="eur">EUR</option>
               <option value="inr">INR</option> 
            </select>
            <button>Sign up <img src={arrow} alt="" className='ArrowBtnPic' /></button>
        </div>
    </div>
  )
}

export default Navbar
