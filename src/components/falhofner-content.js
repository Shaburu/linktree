import React from 'react'
import './falhofner-content.css'
import pangu from '../Assets/pangu.mp4'
import van from '../Assets/vangogh.mp4'


const Falhofnercontent = () => {
  return (
    <div className="F-body">
        <div className="f-content">
        <div className='yard'>
            <a href="/Falhofner" target="_blank">
                <div className='contentb'>

                <video className='contentc'src={pangu} autoPlay loop muted/>

                <div className='content'>
                <h1>Jatinga</h1>
                <p>Adventure Tales from Pangupatinanda</p>
                </div>
            </div>
            </a>
        </div> 
        <div className="f-content-text">
          <span>Jatinga</span>
          <p><b>Desktop Game</b></p>

          <p>A Dark twisted adventure game.</p>
    <p>Pangupatinanda is a boy scout who lives in a town where everyone is dead, his father kicks him out from his house and tells him to go fill out his stamp book, in order to fill his stamp book he must do various missions. </p> 

    
        </div>
        </div> 
        <p>Missions like saving cats and helping old grandma to bury herself. He also has a slingshot which he uses to kill animals and keep their pictures in the stamp book</p>

        <p><h3>Out on Itch.io and Epic Games for Free!</h3></p>
        <div >
        <div className='yard'>

            <a href="https://youtu.be/yaI2WBEZ5eI?t=13" target="_blank">
                <div className='content-b'>

                <video className='contentc'src={van} autoPlay loop muted/>
                <div className='content'>
                  
                <h1>Van Gogh VR 360</h1>
                <h2>Coming soon</h2>
                <p>Step into Van Goghs Paintings</p>
                </div>
            </div>
            </a>
        </div> 
        </div>
        <p><h3>Coming Soon on PlayStore!</h3></p>
        <br />
        <div>
        <div>
            <a href="https://www.instagram.com/falhofner/" target="_blank">    
            <ion-icon name="id-card-outline"></ion-icon></a></div>

        </div>
        <div>
        <footer style={{ fontWeight: 'bold' }}>WEBSITE CREATED BY SHABURU &#169; 2022-{(new Date().getFullYear())}</footer>

        </div>
    </div>
  )
}

export default Falhofnercontent