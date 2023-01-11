import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Photos from './components/pages/Photos';
import Print from './components/pages/Print';
import Contact from './components/pages/Contact';

import MainGalleryTerre from './components/pages/Terre/main_gallery_terre';
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
        
        <Route path ="/main_gallery_terre" exact element={<MainGalleryTerre/>}/>

        <Route path ="/Gallery_france" exact element={<Gallery_france/>}/>
        <Route path ="/Gallery_italie" exact element={<Gallery_italie/>}/>
        <Route path ="/Gallery_canada" exact element={<Gallery_canada/>}/>
        <Route path ="/Gallery_USA" exact element={<Gallery_USA/>}/>

      </Routes>
    </Router>
    
    </>
  );
}

export default App;
