import React from 'react';
import Footer from '../Footer';
import '../Contact.css';
import { Button } from '../Button';
import { ButtonExtern } from '../ButtonExtern';
import { Link } from 'react-router-dom';

import photo_presentation from "../../data/images/nono.jpg"

export default function Contact() {
  return <>
  


<div className="presentation">

<div className="pitch">
<div className='pitch_title'>
  About me
  </div>

  <div className="pitch_text">
    My name is Arnaud Dupuis. I am currently studying Aerospace engineering and I am a space enthusiast. I started my photography journey 3 years ago, with astrophotography at first. During an entire year, I used a 200mm Newtonian telescope and a Canon DSLR to shoot deep space objects such as far galaxies, nebula and the solar system objects nearby our planet like Mars, Jupiter, Saturn and the Moon. Then, I got a GX9 hybrid camera and began to travel through Europe with it. Finland, Estonia, Italy, Marocco, Canada, USA... the year 2022 was for me the best opportunity to explore our world and to develop my skills in photography. A few months ago, I then had the idea to learn ReactJS and to code my very own website, Hivaoa. Eventually, this project is the combination of a passion for photography, space and the interest in coding. I am now very happy to share with you my work, my vision and my passion. Thank you for visiting my website.
  </div>
</div>
  

  <div className='photo_presentation'>
  <img src={photo_presentation}></img>
  </div>
</div>



<div className='prise_contact'>
  <div className='prise_contact_block'>
  <div className='prise_contact_title'>
    Write me
  </div>
 
  <div className='prise_contact_text'>
    If you like my work and would like to collaborate with me, send me an email with all the details of your project : weddings, birthday party, professionnal event, solo & couple photoshoots, I am open to every opportunity.
    If you like editing and you would like to purchase my presets, feel free to contact me and I will be happy to share the info with you.

<div className='prise_contact_text-adress'>arnaud.dps@hotmail.fr</div>
  </div>
  </div>

  <div className='logos_block'>
    <div className='logos_block_case'>
    <a href="mailto:arnauddupuis.photo@gmail.com" target="_blank" title='E-Mail' className='Mail'>
    <ButtonExtern>
    <i class="fa">&#xf0e0;</i>
    MAIL
    </ButtonExtern>
    </a>
    </div>
    

    <div className='logos_block_case'>
      <a href="https://www.instagram.com/hivaooa/">
    <ButtonExtern>
    <i class='fab fa-instagram' />
    <text>      INSTAGRAM</text>
    </ButtonExtern>
    </a>
    
    </div>
  </div>


  {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path = {props.link_button}
          element = {props.link_element}
        >
          {props.text_button}
           </Button> */}




</div>






<Footer />
  </>
}
