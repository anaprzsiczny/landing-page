import React from 'react';
import CardText from './CardText/cardText';
import CardTitle from './CardTitle/cardTitle';

const CardFeatures = () => {
  return (
    <div>
      <CardTitle />
      <CardText />
      <p>Card image</p>
      <button>Learn more</button>
    </div>
  )
}

export default CardFeatures