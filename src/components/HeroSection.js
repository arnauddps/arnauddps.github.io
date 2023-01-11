import React from 'react';
// import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video_heroSection from "../data/videos/cotentin.mp4";



function HeroSection() {
  return (
    <>
    <div className='hero-container'>
      <video src= {video_heroSection} autoPlay loop/>
      {/* <img src= {img1} alt=""/> */}
      
      <h1>WELCOME TO HIVAOA</h1>
      <p1>Rediscover our world</p1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path = '/photos'
        >
          PHOTOS
        </Button>
        
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          path = '/videos'
        >
          VIDEOS <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
    </>
  );
}

export default HeroSection;
