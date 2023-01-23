import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// import CardItem from '../../public/images/';

import photoPortrait from '../data/images/agathe.jpg';
import photoCanada from '../data/images/Terre/Canada/1.jpeg';
import photoUSA from '../data/images/Terre/USA/newyork.jpg';
import photoSpace from '../data/images/Espace/Planet/lune.jpg';
import photoChinatown from '../data/images/Terre/USA/chinatown/3.jpg';


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
              path='/Gallery_portrait'
            />
            <CardItem
              src= {photoCanada}
              text='Travel through the mountains of Eastern Canada'
              label='Canada'
              path='/Gallery_Canada'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src= {photoUSA}
              text='Witness the highlights of the city that never sleeps : New York City'
              label='USA'
              path='/Gallery_USA'
            />
            <CardItem
              src= {photoSpace}
              text='Explore some astrophotographies and see what deep space looks like'
              label='Space'
              path='/mainGalleryEspace'
            />
            <CardItem
              src= {photoChinatown}
              text='Get in touch with the Chinese culture in NY'
              label='Chinatown'
              path='/Gallery_USA'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
