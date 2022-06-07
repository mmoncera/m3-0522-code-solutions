import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './Carousel';

const images = [
  { name: 'bulbasaur', url: '../images/001.png' },
  { name: 'charmander', url: '../images/004.png' },
  { name: 'squirtle', url: '../images/007.png' },
  { name: 'pikachu', url: '../images/025.png' },
  { name: 'jigglypuff', url: '../images/039.png' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Carousel list={images}/>);
