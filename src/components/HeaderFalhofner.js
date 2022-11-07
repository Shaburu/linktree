import React from 'react'
import './HeaderFalhofner.css';
import logo from './Flogo.jpg'

const HeaderFalhofner = () => {
  return (
    <div>
        <div className="falhofnerbg">
            <div className="falhofnerLogo">
            <a href="/Falhofner"><img src={logo}/></a>

            </div>
            <div className="TopLinks">
                <div>
                <h1><a href="/Falhofner">FALHOFNER</a></h1>
                </div>
            Falhofner Was started in 11th Grade by Shaburu
            <p>
                Working on Vincent Van Gogh 360 VR Game now!
            </p>
            <p>
            "Growing up is a trap, Don't grow up, capture your childhood like innocence in these games and keep reliving them through out your life"
            </p>
            {
            //<div className="navbar-links">
            //    <ul>
            //        <li><a href="#">CONTACT </a></li> 
            //        <li><a href="#">PRESS KIT </a></li>
            //        <li><a href="#">SOCIALS </a></li>
            //    </ul>
            //</div>
            }
            <br/>
            <div className="navlinks">
                <div> <a href="/">Contact</a> </div>
                <div> <a href="/">Press Kit</a> </div>
                <div> <a href="/">Socials</a> </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderFalhofner