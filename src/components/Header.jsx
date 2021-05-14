import React from 'react'
import "./Header.css"
import "./BNazanin/AtFontFace.css"
import Logo from "./Logos/Logo.png"
 const Header = () => {
    return (
        <div className="header-container">
            
                <ul className="nav-items">
                <a href=""><img src={Logo} alt="Logo" className="logo"/></a>
                   <li><a href="#" >درباره ما</a></li>
                   <li><a href="#" >کسب و کار</a></li>
                   <li><a href="#" >پشتیبانی</a></li>
                   <li><a href="#" >سوالات متداول</a></li>
                   
                </ul>
                <div className="btn-container"> <button className="btn">فروشگاه من</button></div>
                
                

        </div>
    )
}
export default Header;