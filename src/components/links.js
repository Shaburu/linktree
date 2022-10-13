import React from 'react';
import './links.css';
import vlogtrailer from '../Assets/trailer.gif'
import mushroom from '../Assets/mushroom.gif'
import cloth from '../Assets/cloth.gif'
import micro from '../Assets/micro.gif'
import exp from '../Assets/exp.gif'
import tat from '../Assets/tat.gif'
import pangu from '../Assets/pangu.gif'
import con from '../Assets/connor.gif'


const Links = () => {
  return (
    <div className='linkbody'>
        <div className='grid-container'>
        
            <div className='yard'>
                <div className='contentb' style={{
                backgroundImage: `url(${cloth})`,
                backgroundSize: `cover`
                }}>
    
                <div className='overlay'></div>

                <div className='content'>
                <h1>CLOTHING /  MERCH</h1>
                <p>(coming soon)</p>
                </div>
            </div>
            </div>

            <div className='yard'>
              <div className='contentb' style={{
                backgroundImage: `url(${con})`,
                backgroundSize: `cover`
                }}>
                <div className='overlay'></div>
                <div className='content'>
                <h1>TECH STARTUP</h1>
                (website coming soon)
                </div>
            </div>
            </div>
             

            <div className='yard'>
            <a href="https://www.youtube.com/channel/UCl9xayO7chFY1OfsPVn7Org/videos?sub_confirmation=1" target="_blank">

                <div className='contentb' style={{
                backgroundImage: `url(${vlogtrailer})`,
                backgroundSize: `cover`
                }}>

                <div className='content'>
                <h1>VLOGS</h1>
                <p>shaburuX on youtube</p>
                </div>  
                </div>  
                </a>        
            </div>
            
            <div className='yard'>
                <div className='contentb' style={{
                backgroundImage: `url(${exp})`,
                backgroundSize: `cover`
                }}>

                <div className='content'>
                    <h1>THE EXPERIENCE</h1>
                   <p>ONCE IN A LIFETIME,</p><p> CONTACT SHABURU!</p>
                </div>  
                </div>          
            </div>  

            <div className='yard'>
            
            <a href="https://www.instagram.com/shaburustattooshop/" target="_blank">

                <div className='contentb' style={{
                backgroundImage: `url(${tat})`,
                backgroundSize: `cover`
                }}>
    
                <div className='overlay'></div>

                <div className='content'>
                <h1>TATTOOS</h1> 
                <p>by shaburu</p>
                </div>
            </div>
            </a>
            </div>

            <div className='yard'>
            <a href="https://shaburu.github.io/Falhofner/" target="_blank">
                <div className='contentb' style={{
                backgroundImage: `url(${pangu})`,
                backgroundSize: `cover`
                }}>
                <div className='content'>
                <h1>FALHOFNER</h1>
                <p>GAMING STUDIO</p>
                </div>
            </div>
            </a>
            </div>       
           
            

            <div className='yard'>
                <a href="https://forms.gle/9uScUgNbZwXuvtg39" target="_blank">
                <div className='contentb' style={{
                backgroundImage: `url(${micro})`,
                backgroundSize:`cover`
                }}>
                
            <div className='overlay'></div>

            <div className='content'>
               <h1>BACKYARD</h1> 
                <div>Order Now!</div>
                </div>  
                </div>
                </a>
            </div>

            <div className='yard'>
            <a href="https://forms.gle/J8tK5MW5EbmqZ6Es9" target="_blank">

                <div className='contentb' style={{
                backgroundImage: `url(${mushroom})`,
                backgroundSize:`cover`
                }}>
                

                <div className='overlay'></div>
                <div className='content'>
                <h1>MUSHROOM</h1>
                <p>Order Now!</p>
                </div>
                </div>
                </a>  
            </div>



        </div>
        <div className='grid-bottom'>
            <div className='foot'><a href="https://www.instagram.com/shaburux/" target="_blank">
            <ion-icon name="logo-instagram"></ion-icon></a></div>
            <div className='foot'>
            <a href="https://discord.gg/tMqBjPv489" target="_blank">
            <ion-icon name="logo-discord"></ion-icon></a></div>
            <div className='foot'>
            <a href="https://twitter.com/ShaburuX" target="_blank">
            <ion-icon name="logo-twitter"></ion-icon></a></div>
            <div className='foot'>
            <a href="https://www.instagram.com/shaburux/" target="_blank">    
            <ion-icon name="id-card-outline"></ion-icon></a></div>

        </div>
        
    </div>
  )
}

export default Links