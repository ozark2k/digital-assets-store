import React from 'react';
import Hero from './components/Hero.jsx';
import Benefits from './components/Benefits.jsx';
import Products from './components/Products.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
