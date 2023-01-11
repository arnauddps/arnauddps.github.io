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
    fefl ezg herzkjhg reg jrlkg jlrkjg lrelgk nrelkgn lkerng kenrgklrn gnrelfefl ezg herzkjhg reg jrlkg jlrkjg lrelgk nrelkgn lkerng kenrgklrn gnrelfefl ezg herzkjhg reg jrlkg jlrkjg lrelgk nrelkgn lkerng kenrgklrn gnrelfefl ezg herzkjhg reg jrlkg jlrkjg lrelgk nrelkgn lkerng kenrgklrn gnrelfefl ezg herzkjhg reg jrlkg jlrkjg lrelgk nrelkgn lkerng kenrgklrn gnrelfefl ezg herzkjhg reg jrlkg jlrkjg lrelgk nrelkgn lkerng kenrgklrn gnrelfefl ezg herzkjhg reg jrlkg jlrkjg lrelgk nrelkgn lkerng kenrgklrn gnrel
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
    <a href="mailto:arnaud.dps@hotmail.fr" target="_blank" title='E-Mail' className='Mail'>
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
