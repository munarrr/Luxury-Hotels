import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/img/Logo.svg'
import header from '../../assets/img/header.png'
import '../../assets/scss/base.scss'
import './header.scss'

const Header = () => {
     return (
          <div className="header">
               <div className="header__img">
                    <img className="header__img__bacgraund" src={header}></img>
               </div>
               <div className="header__content flexbet">
                    <div className="header__logo">
                         <img className="header__logo__img" src={logo}></img>
                    </div>
                    <div className="header__nav">
                         <nav className="header__nav">
                              <ul className="header__item flex">
                                   <li className="header__list"><Link className="header__link" to="/" >Home</Link></li>
                                   <li className="header__list"><Link className="header__link" to="/fasilites" >Facllties</Link></li>
                                   <li className="header__list"><Link className="header__link" to="/rooms" >Rooms</Link></li>
                                   <li className="header__list"><Link className="header__link" to="/contact">contact-us</Link></li>
                              </ul>
                         </nav>
                    </div>
               </div>
          </div>
     )
}

export default Header

