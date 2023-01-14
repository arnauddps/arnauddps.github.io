import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Photos from './components/pages/Photos';
import Print from './components/pages/Print';
import Contact from './components/pages/Contact';

import MainGalleryEspace from './components/pages/Espace/mainGalleryEspace';
import Gallery_all from './components/pages/Espace/all/Gallery_all';
import Gallery_galaxy from './components/pages/Espace/Galaxy/Gallery_galaxy';
import Gallery_nebula from './components/pages/Espace/nebula/Gallery_nebula';
import Gallery_ciel from './components/pages/Espace/ciel/Gallery_ciel';
import Gallery_planet from './components/pages/Espace/planet/Gallery_planet';


import MainGalleryTerre from './components/pages/Terre/mainGalleryTerre';
import Gallery_france from './components/pages/Terre/France/Gallery_france';
import Gallery_italie from './components/pages/Terre/Italie/Gallery_italie';
import Gallery_canada from './components/pages/Terre/Canada/Gallery_canada';
import Gallery_USA from './components/pages/Terre/USA/Gallery_USA';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/photos" exact element={<Photos/>}/>
        <Route path="/print" exact element={<Print/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
        
        <Route path ="/mainGalleryTerre" exact element={<MainGalleryTerre/>}/>
        <Route path ="/Gallery_france" exact element={<Gallery_france/>}/>
        <Route path ="/Gallery_italie" exact element={<Gallery_italie/>}/>
        <Route path ="/Gallery_canada" exact element={<Gallery_canada/>}/>
        <Route path ="/Gallery_USA" exact element={<Gallery_USA/>}/>


        
        <Route path ="/mainGalleryEspace" exact element={<MainGalleryEspace/>}/>
        <Route path ="/Gallery_all" exact element={<Gallery_all/>}/>
        <Route path ="/Gallery_galaxy" exact element={<Gallery_galaxy/>}/>
        <Route path ="/Gallery_nebula" exact element={<Gallery_nebula/>}/>
        <Route path ="/Gallery_ciel" exact element={<Gallery_ciel/>}/>
        <Route path ="/Gallery_planet" exact element={<Gallery_planet/>}/>

      </Routes>
    </Router>
    
    </>
  );
}

export default App;
