import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import images from './bannerbackground.png'

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
