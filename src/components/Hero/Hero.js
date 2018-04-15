import React from 'react';
import './Hero.css'
import Granim from 'react-granim'


const Hero = props =>(
<div> 
    <div id='granim-canvas' className = 'hero-image'>
    <Granim id='granim' opacity= {[0.15,0.15]} direction='top-bottom' isPausedwhenNotinView={true}
     image ={{
        blendingMode: 'multiply'
    }}
     states={{
        'default-state': {
            gradients:[
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']              
                ],
                transitionSpeed: 2000
        }
    }}/>
        <div className = 'inner-content'>
            <h1> Adam Specker </h1>
            <h3> Full Stack Web Developer</h3>
            <p id='summary'> Research-oriented programmer with a background in healthcare and education. Embracing new technologies </p>
                <img id='adamPic' src='/assets/images/adam-cropped.png' alt ='Adam Specker'/>
        </div>
    </div>
</div>

)
export default Hero;

