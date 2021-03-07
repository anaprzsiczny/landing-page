import React from 'react';
import Header from './Header/header';
import Image from './Image/image';
import './home.scss';
import LearnMoreButton from '../Button/learnMore';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <p data-testid="home-title" className="hero-title">Save your data storage here.</p>
      <div className="hero">      
        <div className="hero-text">
          <p data-testid="home-description" className="home-description">Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.</p>
          <LearnMoreButton color="#9C69E2" />
        </div>
        <Image />
      </div>
    </div>
  )
}

export default Home