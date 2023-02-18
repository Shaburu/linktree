import React from 'react';
import map1 from './map.svg';
import Header from './components/Header.js';
import './index.css';
const map = () => {
  return (
    <div>
      <div className='maps-hover'>
        <Header/>
        <img src={map1} />
      </div>

    </div>
  )
}

export default map