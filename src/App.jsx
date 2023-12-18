import React from 'react';
import ImageGallery from './ImageGallery/ImagesGallery';
import imagesData from './ImageGallery/imagesData.json';
import './App.css';

const App =()=> {
  return (
    <div className="App">
      <div className='navigation'>
        <h2 className='heading-page'>Gallery</h2>
        <div className='pages-routing'><button className='routing-button'>PAGES &gt; GALLERY</button></div>
      </div>
      <div className='photo-gallery-heading'>Photo Gallery</div>
      <div className='photo-gallery-description'> Loream ipsum is placeholder text commonly used in the graphic, print, and publishing industries</div> 
      <div className='pills-row'>
        <button className='selected photo-pills'>All</button>
        <button className='photo-pills'>Branding</button>
        <button className='photo-pills'>Design</button>
        <button className='photo-pills'>Development</button>
      </div>
      <ImageGallery images={imagesData} />
    </div>
  );
}

export default App;
