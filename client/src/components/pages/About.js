/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ayman from './ayman.jpg'
import about from './About.css'
import here from './left-arrow-12.gif'



const About = ()=>{
    return(
        <React.Fragment>
        <div class="about" >
            <h1>About This App</h1>
            <strong>This is a full-stack React app for keeping contacts</strong>
        </div>
          
        <div class="card">
        <span class="here"><img src={here} /> </span>

        
		<div class="father">
			<div class="front">
				<img src={ayman} class='ayman' />
               
			</div>
          
           
			<div class="back">
        					<header>Follow me here <i class="far fa-hand-point-down"></i> </header>
      
				<ul class="par1">
					<li ><a href="https://web.facebook.com/ayman.khawaldeh"><i class="fab fa-facebook-square"></i></a></li>				
					<li ><a href="https://github.com/aymankhawaldeh"><i class="fab fa-github-square"></i></a></li>				
					<li ><a href="https://www.linkedin.com/in/ayman-khawaldeh-a66486195/"><i class="fab fa-linkedin"></i></a></li>				
				</ul>
				<p class="par">A Full-Stack Software Developer with a background in civil engineering, a persuading enthusiastic six months software developer code camp alumni from LTUC - ASAC powered by Code Fellows, which included learning and building scalable applications are oriented towards the industry-relevant training as effectively and efficiently as possible.
</p>
			</div>
	
		</div>
        
	
	
	
        </div>
      
        </React.Fragment>
    )
}

export default About;