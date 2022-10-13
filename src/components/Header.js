import React from 'react';
import './Header.css';
import shaburu from './shaburu.png'

const Header = () => {
  return (
    <div>
        
        <div className='navbar'>
           <img src={shaburu} />
           <div className='titty'>shaburu</div>
            
        </div>

    </div>
    
  )
}

export default Header