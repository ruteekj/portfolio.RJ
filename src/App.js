import React from 'react';
import Navbar from './component/navbar';
import Hero from './component/hero';
import Service from './component/service';
import Circle from './component/circle';
import Swiper from './component/swiper';
import Contact from './component/contact';
import Footer from './component/footer';



const App = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <Service/>
    <Circle/>
    <Swiper/>
    <Contact/>
    <Footer/>
    </>
  );
};

export default App;
