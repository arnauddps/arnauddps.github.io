import React from 'react';
import Footer from '../Footer';
import '../Contact.css';
import { Button } from '../Button';
import { ButtonExtern } from '../ButtonExtern';
import { Link } from 'react-router-dom';

import photo_presentation from "../../data/images/self.jpg"

export default function Contact() {
  return <>
  


<div className="presentation">

<div className="pitch">
<div className='pitch_title'>
  About me
  </div>

  <div className="pitch_text">
  My name is Arnaud DUPUIS. I recently graduated from my engineering school and I am starting my career in Aerospace engineering field. Besides my education, photography has always been a passion and a way to display how you see things and how you feel when you capture the moment. I first began my journey doing astrophotography with a canon DSLR and a Newtonian telescope. I then got a Lumix GX9 that followed me everywhere I went to In the 2022 year. Italy, Marocco, Finland, Estonia, Greece, Canada and the USA. 
Coding this website is the conclusion of my personal project. It’s the perfect combination of my interest for both photography and programming. I learned basics of reactJS to achieve my goal.
I am now very happy to share my work with you. Thank you for visiting my website!
</div>
</div>
  

  <div className='photo_presentation'>
  <img src={photo_presentation}></img>
  </div>
</div>



<div className='block'>
  <div className='block_info'>
  <h>Write me</h>
  
  <p> If you like my work and would like to collaborate with me, send me an email with all the details of your project : weddings, birthday party, professionnal event, solo & couple photoshoots, I am open to every opportunity. If you like editing and you would like to purchase my presets, feel free to contact me and I will be happy to share the info with you. </p>

  <div className='block_info_adress'>arnaud.dps@hotmail.fr</div>
  </div>
  
  

  <div className='block_logos'>

    <div className='block_logos_case'>
      <a href="mailto:arnauddupuis.photo@gmail.com" target="_blank" title='E-Mail' className='Mail'>
      <ButtonExtern>
      <i class="fa">&#xf0e0;</i>
      MAIL
      </ButtonExtern>
      </a>
    </div>
    

    <div className='block_logos_case'>
        <a href="https://www.instagram.com/arnaud__dupuis/">
        <ButtonExtern>
          <i class='fab fa-instagram' />
          <text>      INSTAGRAM</text>
        </ButtonExtern>
        </a>
    </div>  

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

<Footer />
  </>

}
