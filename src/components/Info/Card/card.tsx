import React from 'react';
import CardImage from './CardImage/cardImage';
import './card.scss'

const Card = () => {
  return (
    <div className="card-info">
      <CardImage />
      <div className="card-text">
        <p>We are a high-level data storage bank</p>
        <p className="paragraph">The place to store various data that you can access at any time through the internet and where you can carry it. This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.</p>
      </div>
    </div>
  )
}

export default Card