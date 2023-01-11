import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// import CardItem from '../../public/images/';

import photoPortrait from '../data/images/agathe.jpg';
import photoCanada from '../data/images/Terre/Canada/1.jpeg';
import photoUSA from '../data/images/Terre/USA/newyork.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the last pictures!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {photoPortrait}
              text='People who have the power'
              label='Portraits'
              path='/services'
            />
            <CardItem
              src= {photoCanada}
              text='Travel through the mountains of Eastern Canada'
              label='Canada'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src= {photoUSA}
              text='Witness the highlights of the city that never sleeps : New York City'
              label='USA'
              path='/services'
            />
            <CardItem
              src= {photoUSA}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src= {photoUSA}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
