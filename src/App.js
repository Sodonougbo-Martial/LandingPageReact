import React from 'react';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Feature from './Components/Feature';
import Long from './Components/LongSexion';
import People from './Components/People';
import Tagline from './Components/Tagline';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Feature />
      <Long />
      <People />
      <Tagline />
      <Footer />
    </div>
  );
}

export default App;