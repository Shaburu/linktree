import React from 'react';
import './Header.css';
import shaburu from './shaburu.png'

const Header = () => {
  return (
    <div>
        
        <div className='navbar'>
          <div className='tittypop'>
          <div>
          Latest Project
          </div>
          <div className='titty'>
          <a href="https://shaburu.github.io/GDSC/index" target="_blank">
          <ion-icon name="shuffle-outline"><div className="tittypop">Latest Project</div></ion-icon>
          </a>

          </div>
          </div>
           <img src={shaburu} />
           <div className='css-selector'>shaburu</div>
            
        </div>

    </div>
    
  )
}

export default Header