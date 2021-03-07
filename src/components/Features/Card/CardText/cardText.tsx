import React from 'react';
import './cardText.scss'

const CardText = (props: any) => {

  const text = props.text

  return (
    <div>
      <p data-testid="card-text" className="cardText">
        {text}
      </p>
    </div>
  );
}

export default CardText