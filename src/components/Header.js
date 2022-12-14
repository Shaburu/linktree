import React from 'react';
import './Header.css';
import shaburu from './shaburu1.png'

const Header = () => {
  return (
    <div>
        
        <div className='navbar'>
          <div className='tittypop'>
          <div>
          Latest Project
          </div>
          <div className='titty'>
          <a href="https://instagram.com/shiftersgarden" target="_blank">
          <ion-icon name="shuffle-outline"><div className="tittypop">Latest Project</div></ion-icon>
          </a>

          </div>
          </div>
          <a href='/'><img className='img' src={shaburu} alt="shaburu's face" /></a> 
           <div className='css-selector'>shaburu</div>
            
        </div>

    </div>
    
  )
}

export default Header