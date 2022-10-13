import React from 'react'
import './foot.css'
const Footer = () => {
  return (
    <div>
        <div className='footback'>
        <footer style={{ fontWeight: 'bold' }}>WEBSITE CREATED BY SHABURU &#169; 2022-{(new Date().getFullYear())}</footer>
        </div>
    </div>
  )
}

export default Footer