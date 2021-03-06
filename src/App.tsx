import React from 'react';
import './App.css';
import Features from './components/Features/features';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Info from './components/Info/info';
import Testimonials from './components/Testimonials/testimonials';

function App() {
  return (
    <div className="App">
      <Home />
      <Info />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
