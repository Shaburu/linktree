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
          <span title="SURPRISE"><ion-icon name="shuffle-outline">Latest Project</ion-icon></span>
          </a>

          </div>
          </div>
           <img src={shaburu} />
           <div className='titty'>shaburu</div>
            
        </div>

    </div>
    
  )
}

export default Header