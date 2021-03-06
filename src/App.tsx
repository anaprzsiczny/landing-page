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
      <div className="container">
        <Home />
        <Info />
        <Features />
        <Testimonials />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
