import React from 'react';
import Banner from '../Banner';
import Footer from '../Footer';
import '../Banner.css';
//import '../../App.css';
//import '../HeroSection.css';
// import MainGallery from './Terre/main_gallery_terre';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import photoTerre from "../../data/images/Terre/USA/newyork.jpg";
import photoEspace from "../../data/images/Espace/galaxy/m31.jpg";


export default function Photos() {
  return (

  <>  

  <div className='Banner_terre'>
    <Banner
    text_h ='EARTH'
    text_p = 'Back on track'
    text_button = "DISCOVER"
    link_button = "/mainGalleryTerre"
    // src_video = '/videos/video-2.mp4'
    image = {photoTerre}
    />
  </div>


  <div className='Banner_espace'>
    <Banner
    text_h ='SPACE'
    text_p = 'Look up & explore the past'
    text_button = "DISCOVER"
    link_button = "/mainGalleryEspace"
    src_video = '/videos/video-1.mp4'
    image = {photoEspace}
    />
  </div>




<Footer />
  </>
    



  );
}
