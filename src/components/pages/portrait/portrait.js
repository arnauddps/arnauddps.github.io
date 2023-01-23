import React from "react";
import Footer from '../../Footer';
import Gallery from "../gallery";
import "../Gallery.css";
import "../../Navbar.css";

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../../data/images/portrait', false, /\.(png|jpe?g|svg)$/));

const Gallery_portrait = () => {
  return (
  <>
    <Gallery
  left = 'blue'
  middle = 'white'
  right = 'blue'
  images_list = {images}></Gallery>
  
   <Footer/>
  </>);
};
 
export default Gallery_portrait;



