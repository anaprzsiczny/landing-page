import React from 'react';
import './cardTitle.scss'

const CardTitle = (props: any) => {

  const title = props.title

  return (
    <div>
      <p data-testid="card-title" className="cardTitle">
        {title}
      </p>
    </div>
  );
}

export default CardTitle