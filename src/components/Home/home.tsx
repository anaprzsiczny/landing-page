import React from 'react';
import Header from './Header/header';
import Image from './Image/image';
import './home.scss';


const Home = () => {
  return (
    <div className="home">
      <Header />
      <p className="hero-title">Save your data storage here.</p>
      <div className="hero">      
        <div className="hero-text">
          <p>Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.</p>
          <button>Learn More</button>
        </div>
        <Image />
      </div>
    </div>
  )
}

export default Home