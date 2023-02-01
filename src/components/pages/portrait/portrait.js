import React from "react";
import Footer from '../../Footer';
import Gallery from "../gallery";
import "../Gallery.css";
import "../../Navbar.css";
import "../../Contact.css";
import { Button } from '../../Button';
import { ButtonExtern } from '../../ButtonExtern';

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../../data/images/portrait', false, /\.(png|jpe?g|svg)$/));

const Gallery_portrait = () => {
  return (
  <>
    <Gallery
  // left = 'blue'
  // middle = 'white'
  // right = 'blue'
  images_list = {images}></Gallery>
  
  <div className="block">
    <div className="block_info">
      <h>Portraits</h>

      <div className="block_info_text">
        <p>You like my work and would love to have your own pictures ? Get in touch with me by mail or instagram !
        Indoor or outdoor, we will carry out a high-quality shooting and you will keep a unique memory of it.
        For more info and planning a shooting with me - in Paris or Normandy - take a tour at my CONTACT page and email me.</p>
      </div>

    </div>
    <div className="block_logos">
      <div className='block_logos_case'>
        <Button
        path= "/contact">

        {/* <i class="fa">&#xf0e0;</i> */}
        <i class= "fas fa-camera"></i>
        {'   INFO'}
        </Button>
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


   <Footer/>
  </>);
};
 
export default Gallery_portrait;



